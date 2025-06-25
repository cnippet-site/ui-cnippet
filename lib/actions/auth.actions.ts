"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { nextauthOptions } from "../nextauth-options";
import { getServerSession } from "next-auth/next";
import { Account, Profile } from "next-auth";
import { Resend } from "resend";
import { generateResetToken } from "@/lib/utils/tokens";
import { ResetPasswordEmail } from "@/components/routes/resend/reset-password";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

type User = {
    id: string;
    name: string | null;
    email: string | null;
    password?: string;
    username?: string | null;
    termsAccepted?: boolean;
    createdAt: Date;
    updatedAt: Date;
};

type AuthResult = {
    success?: boolean;
    data?: Partial<User>;
    error?: string;
};

export async function getUserSession() {
    return await getServerSession(nextauthOptions);
}

export async function signUpWithCredentials({
    username,
    name,
    email,
    password,
    termsAccepted,
}: {
    username: string;
    name: string;
    email: string;
    password: string;
    termsAccepted: boolean;
}): Promise<AuthResult> {
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return { error: "User already exists" };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                name,
                email,
                password: hashedPassword,
                emailVerified:  new Date(),
                termsAccepted,
                provider: "credentials",
            },
        });

        return { success: true, data: { id: user.id } };
    } catch (error) {
        console.error("Signup error:", error);
        return { error: "Registration failed" };
    }
}

export async function signInWithCredentials({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<AuthResult> {
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return { error: "Invalid credentials" };
        if (!user.password)
            return { error: "Account created with social provider" };

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return { error: "Invalid credentials" };

        return {
            success: true,
            data: { id: user.id, name: user.name, email: user.email },
        };
    } catch (error) {
        console.error("Signin error:", error);
        return { error: "Login failed" };
    }
}

export async function signInWithOauth({
    account,
    profile,
}: {
    account: Account;
    profile: Profile & { picture?: string };
}) {
    try {
        const user = await prisma.user.findUnique({
            where: { email: profile.email },
        });
        
        if (user) {
            return { 
                success: true, 
                data: { 
                    id: user.id, 
                    name: user.name, 
                    email: user.email,
                    username: user.username 
                } 
            };
        }

        const newUser = await prisma.user.create({
            data: {
                name: profile.name || "",
                email: profile.email || "",
                image: profile.picture,
                provider: account.provider,
            },
        });
        
        return {
            success: true,
            data: { 
                id: newUser.id, 
                name: newUser.name, 
                email: newUser.email 
            },
        };
    } catch (error) {
        return { success: false, error: `OAuth signin failed ${error}` };
    }
}

export async function getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");
    return { ...user, _id: user.id };
}

export async function resetPassword({
    token,
    newPassword,
}: {
    token: string;
    newPassword: string;
}): Promise<AuthResult> {
    try {
        const resetToken = await prisma.resetToken.findFirst({
            where: { token, expires: { gt: new Date() } },
            include: { user: true },
        });

        if (!resetToken) return { error: "Invalid or expired token" };

        const isSamePassword = await bcrypt.compare(
            newPassword,
            resetToken.user.password || "",
        );
        if (isSamePassword) {
            return {
                error: "New password cannot be the same as current password",
            };
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.$transaction([
            prisma.user.update({
                where: { id: resetToken.userId },
                data: { password: hashedPassword },
            }),
            prisma.resetToken.delete({ where: { id: resetToken.id } }),
        ]);

        return {
            success: true,
            data: { id: resetToken.user.id, email: resetToken.user.email },
        };
    } catch (error) {
        console.error("Password reset error:", error);
        return { error: "Password reset failed" };
    }
}

export async function sendResetEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return { error: "No user found" };

        const resetToken = await generateResetToken(user.id);
        const resetLink = `${process.env.NEXT_PUBLIC_URL}/reset_password?token=${resetToken}`;

        try {
            const emailHtml = await render(
                ResetPasswordEmail({
                    userEmail: user.email!,
                    resetLink,
                }),
            );

            await resend.emails.send({
                from: "Cnippet <auth@ui.cnippet.site>",
                to: email,
                subject: "Password Reset Request",
                html: emailHtml,
            });
            return { success: true, data: { email: user.email } };
        } catch (error) {
            console.error("Email sending error:", error);
            return { error: "Failed to send email" };
        }
    } catch (error) {
        console.error("Reset email error:", error);
        return { error: "Reset email failed" };
    }
}

export async function checkUsernameAvailability(
    username: string,
): Promise<{ available: boolean; error?: string }> {
    try {
        if (!username || username.length < 3) {
            return {
                available: false,
                error: "Username must be at least 3 characters long",
            };
        }

        // Check if username matches allowed pattern (alphanumeric and underscores only)
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return {
                available: false,
                error: "Username can only contain letters, numbers, and underscores",
            };
        }

        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        return { available: !existingUser };
    } catch (error) {
        console.error("Username check error:", error);
        return {
            available: false,
            error: "Failed to check username availability",
        };
    }
}

export async function completeSocialSignup({
    userId,
    username,
    termsAccepted,
}: {
    userId: string;
    username: string;
    termsAccepted: boolean;
}): Promise<AuthResult> {
    try {
        if (!termsAccepted) {
            return { error: "You must accept the terms and conditions" };
        }

        const usernameCheck = await checkUsernameAvailability(username);
        if (!usernameCheck.available) {
            return {
                error: usernameCheck.error || "Username is not available",
            };
        }

        const user = await prisma.user.update({
            where: { id: userId },
            data: {
                username,
                termsAccepted,
            },
        });

        return {
            success: true,
            data: { id: user.id, username: user.username },
        };
    } catch (error) {
        console.error("Complete social signup error:", error);
        return { error: "Failed to complete signup" };
    }
}

export async function checkUsername(username: string) {
    try {
        const existingUser = await prisma.user.findFirst({
            where: { username },
        });
        return {
            exists: !!existingUser,
        };
    } catch (error) {
        console.error("Error checking username:", error);
        return {
            exists: false,
            error: "Error checking username",
        };
    }
}

export async function checkEmail(email: string) {
    try {
        const existingUser = await prisma.user.findFirst({ where: { email } });
        return {
            exists: !!existingUser,
        };
    } catch (error) {
        console.error("Error checking email:", error);
        return {
            exists: false,
            error: "Error checking email",
        };
    }
}
