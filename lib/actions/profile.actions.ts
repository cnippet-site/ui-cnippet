"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

/*eslint-disable @typescript-eslint/no-explicit-any*/

interface UpdateProfileParams {
    userId: string;
    name?: string;
    email?: string;
    imageUrl?: string;
}

interface UpdatePasswordParams {
    userId: string;
    currentPassword: string;
    newPassword: string;
}

export async function updatePassword({
    userId,
    currentPassword,
    newPassword,
}: UpdatePasswordParams) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { password: true },
        });

        if (!user?.password) {
            throw new Error("Cannot update password for OAuth accounts");
        }

        // Verify current password
        const isValid = await bcrypt.compare(currentPassword, user.password);
        if (!isValid) {
            throw new Error("Current password is incorrect");
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updateProfile({
    userId,
    name,
    email,
    imageUrl,
}: UpdateProfileParams) {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!existingUser) {
            throw new Error("User not found");
        }

        // If email is being updated, check if it's already taken
        if (email && email !== existingUser.email) {
            const emailExists = await prisma.user.findUnique({
                where: { email },
            });

            if (emailExists) {
                throw new Error("Email already taken");
            }
        }

        // Update user profile
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                ...(name && { name }),
                ...(email && { email }),
                ...(imageUrl && { image: imageUrl }),
            },
        });

        revalidatePath("/profile");
        return { success: true, user: updatedUser };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

/*eslint-enable @typescript-eslint/no-explicit-any*/
