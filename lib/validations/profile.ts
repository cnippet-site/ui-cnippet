import { z } from "zod";

export const profileFormSchema = z
    .object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        imageUrl: z.string().optional(),
        currentPassword: z.string().optional(),
        newPassword: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .optional(),
        confirmPassword: z.string().optional(),
    })
    .refine(
        (data) => {
            // If any password field is filled, all must be filled
            if (
                data.currentPassword ||
                data.newPassword ||
                data.confirmPassword
            ) {
                return (
                    data.currentPassword &&
                    data.newPassword &&
                    data.confirmPassword
                );
            }
            return true;
        },
        {
            message: "All password fields are required when changing password",
            path: ["currentPassword"],
        },
    )
    .refine(
        (data) => {
            // If new password is provided, it must match confirm password
            if (data.newPassword && data.confirmPassword) {
                return data.newPassword === data.confirmPassword;
            }
            return true;
        },
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        },
    );
