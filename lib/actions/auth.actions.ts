"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { nextauthOptions } from "../nextauth-options";
import { getServerSession } from "next-auth/next";
import { Account, Profile } from "next-auth";

export interface User {
    id: string;
    name: string | null;
    email: string | null;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SignUpWithCredentialsParams {
    name: string;
    email: string;
    password: string;
}

export interface SignInWithCredentialsParams {
    email: string;
    password: string;
}

export interface AuthResult {
    success?: boolean;
    data?: Partial<User>;
    error?: string;
}

export async function getUserSession() {
    const session = await getServerSession(nextauthOptions);
    return { session };
}

export async function signUpWithCredentials({
    name,
    email,
    password,
}: SignUpWithCredentialsParams): Promise<AuthResult> {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "User already exists with this email" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                provider: "credentials",
            },
        });

        return {
            success: true,
            data: {
                id: user.id,
                // name: user.name,
                // email: user.email,
            },
        };
    } catch (error) {
        console.error("Signup error:", error);
        return { error: "An error occurred during registration" };
    }
}

export async function signInWithCredentials({
    email,
    password,
}: SignInWithCredentialsParams): Promise<AuthResult> {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return { error: "Invalid email or password" };
        }

        if (!user.password) {
            return { error: "This account was created with a social provider" };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return { error: "Invalid email or password" };
        }

        return {
            success: true,
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    } catch (error) {
        console.error("Signin error:", error);
        return { error: "An error occurred during login" };
    }
}

interface ExtendedProfile extends Profile {
    picture?: string;
}

interface SignInWithOauthParams {
    account: Account;
    profile: ExtendedProfile;
}

export async function signInWithOauth({
    account,
    profile,
}: SignInWithOauthParams): Promise<{
    success: boolean;
    data?: { name: string | null; email: string | null };
    error?: string;
}> {
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
        return {
            success: false,
            error: error as string,
        };
    }
}

interface GetUserByEmailParams {
    email: string;
}

export async function getUserByEmail({ email }: GetUserByEmailParams) {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error("User does not exist!");
    }

    // console.log({user})
    return {
        ...user,
        _id: user.id,
    };
}
