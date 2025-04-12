"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { nextauthOptions } from "../nextauth-options";
import { getServerSession } from "next-auth/next";
import { Account, Profile } from "next-auth";
import { Resend } from "resend";
import { generateResetToken } from "@/lib/utils/tokens";

const resend = new Resend(process.env.RESEND_API_KEY);

type User = {
    id: string;
    name: string | null;
    email: string | null;
    password?: string;
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
    name,
    email,
    password,
}: {
    name: string;
    email: string;
    password: string;
}): Promise<AuthResult> {
    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return { error: "User already exists" };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
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

export async function oauthSignIn({
    account,
    profile,
}: {
    account: Account;
    profile: Profile & { picture?: string };
}) {
    const user = await prisma.user.findUnique({
        where: { email: profile.email },
    });
    if (user)
        return { success: true, data: { name: user.name, email: user.email } };

    try {
        const newUser = await prisma.user.create({
            data: {
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                provider: account.provider,
            },
        });
        return {
            success: true,
            data: { name: newUser.name, email: newUser.email },
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
        const resetLink = `${process.env.NEXT_PUBLIC_URL}/reset-password?token=${resetToken}`;

        try {
            await resend.emails.send({
                from: "Cnippet <contact@ui.cnippet.site>",
                to: email,
                subject: "Password Reset Request",
                html: `
                    <p>Hello,</p>
                    <p>You requested a password reset for your account.</p>
                    <p>This link expires in 1 hour.</p>
                    <p>Click here to reset: <a href="${resetLink}">Reset Password</a></p>
                `,
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
