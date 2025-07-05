"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";

import prisma from "@/lib/prisma";
import { getUserSession } from "./auth.actions";
import {
    updateGeneralInfoSchema,
    changePasswordSchema,
    updateUserSettingsSchema,
} from "@/lib/validations/profile";

// Define a type for field-specific errors
type FieldErrors<T extends z.ZodTypeAny> = {
    [K in keyof z.infer<T>]?: string[];
};

// Define a discriminated union for action responses to clearly distinguish success from error
type ActionResponse<T extends z.ZodTypeAny> =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | { success: true; message: string; user?: any }
    | { error: FieldErrors<T> | { general: string } };

/**
 * Updates the general information for the currently authenticated user.
 * @param values - Data for name and username.
 */
export async function updateGeneralInformation(
    values: z.infer<typeof updateGeneralInfoSchema>,
): Promise<ActionResponse<typeof updateGeneralInfoSchema>> {
    const session = await getUserSession();
    if (!session || !session.user || !session.user.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    const validatedFields = updateGeneralInfoSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors as FieldErrors<
                typeof updateGeneralInfoSchema
            >,
        };
    }

    const { name, username } = validatedFields.data;
    const userId = session.user.id;

    try {
        // If username is provided, check for uniqueness (excluding current user)
        if (username) {
            const existingUserWithUsername = await prisma.user.findUnique({
                where: { username },
            });
            if (
                existingUserWithUsername &&
                existingUserWithUsername.id !== userId
            ) {
                return { error: { username: ["Username already taken."] } };
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                username, // Will update only if provided in values
            },
            select: {
                id: true,
                name: true,
                email: true,
                username: true,
                image: true,
                termsAccepted: true,
                emailVerified: true,
            },
        });

        // The session might need to be refreshed on the client if username/name is part of the JWT/Session object
        // This can be done client-side using `useSession().update()`

        return {
            success: true,
            message: "Profile updated successfully!",
            user: updatedUser,
        };
    } catch (error) {
        console.error("Error updating general information:", error);
        return {
            error: { general: "Failed to update profile. Please try again." },
        };
    }
}

/**
 * Allows the currently authenticated user to change their password.
 * Requires verification of the current password.
 * @param values - Data for current password, new password, and confirmation.
 */
export async function changeUserPassword(
    values: z.infer<typeof changePasswordSchema>,
): Promise<ActionResponse<typeof changePasswordSchema>> {
    const session = await getUserSession();
    if (!session || !session.user || !session.user.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    const validatedFields = changePasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors as FieldErrors<
                typeof changePasswordSchema
            >,
        };
    }

    const { currentPassword, newPassword } = validatedFields.data;
    const userId = session.user.id;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user || !user.password) {
            return { error: { general: "User not found or no password set." } };
        }

        // Verify current password
        const passwordsMatch = await bcrypt.compare(
            currentPassword,
            user.password,
        );
        if (!passwordsMatch) {
            return {
                error: { currentPassword: ["Incorrect current password."] },
            };
        }

        // Hash new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedNewPassword },
        });

        return { success: true, message: "Password updated successfully!" };
    } catch (error) {
        console.error("Error changing password:", error);
        return {
            error: { general: "Failed to change password. Please try again." },
        };
    }
}

// You can add more profile-related actions here, e.g., for subscriptions, billing, etc.
// Example for future:
/*
export async function updateSubscription(userId: string, subscriptionId: string): Promise<ActionResponse<z.ZodObject<any>>> {
    // ... logic to update subscription status or plan
    return { success: true, message: "Subscription updated." };
}

export async function addPaymentMethod(userId: string, cardDetails: any): Promise<ActionResponse<z.ZodObject<any>>> {
    // ... logic to securely add payment method (integrate with payment gateway)
    return { success: true, message: "Payment method added." };
}
*/

/**
 * Updates various user settings like theme, notifications, language, and timezone.
 * @param values - Data for user settings.
 */
export async function updateUserSettings(
    values: z.infer<typeof updateUserSettingsSchema>,
): Promise<ActionResponse<typeof updateUserSettingsSchema>> {
    const session = await getUserSession();
    if (!session || !session.user || !session.user.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    const validatedFields = updateUserSettingsSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors as FieldErrors<
                typeof updateUserSettingsSchema
            >,
        };
    }

    const userId = session.user.id;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                preferredTheme: values.theme,
                emailNotifications: values.emailNotifications,
                inAppNotifications: values.inAppNotifications,
                preferredLanguage: values.language,
                preferredTimezone: values.timezone,
            },
            select: {
                // Select updated fields to return for session refresh
                id: true,
                preferredTheme: true,
                emailNotifications: true,
                inAppNotifications: true,
                preferredLanguage: true,
                preferredTimezone: true,
            },
        });

        return {
            success: true,
            message: "Settings updated successfully!",
            user: updatedUser,
        };
    } catch (error) {
        console.error("Error updating user settings:", error);
        return {
            error: { general: "Failed to update settings. Please try again." },
        };
    }
}
