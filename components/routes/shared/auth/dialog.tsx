"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signIn} from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog-cn";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import GoogleLogo from "@/public/images/svg/google-logo.svg";
import Github from "@/public/images/svg/github.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RiErrorWarningFill } from "@remixicon/react";

const AuthDialog = () => {
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const loginWithGoogle = async () => {
        setLoading(true);
        await signIn("google", {
            callbackUrl: "/",
            redirect: true,
        });
    };
    const loginWithGit = async () => {
        setLoading1(true);
        await signIn("github");
        await signIn("github", {
            callbackUrl: "/",
            redirect: true,
        });
    };
    const userSignInValidation = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof userSignInValidation>>({
        resolver: zodResolver(userSignInValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        setLoading2(true);
        const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false, // Prevent automatic redirect
            callbackUrl: pathname,
        });

        setLoading2(false);

        if (result?.error) {
            setError(result.error);
        } else {
            router.push(result?.url || "/");
        }
    }

    return (
        <DialogContent className="mx-auto sm:max-w-md py-10">
            <div className="mb-2 flex flex-col items-center gap-2">
                <div
                    className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                >
                    {" "}
                    <Image
                        src="/images/logo-light.png"
                        alt=""
                        width={3840}
                        height={2160}
                        className="w-[2.75rem] rounded-full dark:bg-white"
                    />
                </div>
                <DialogHeader>
                    <DialogTitle className="text-2xl sm:text-center">
                        Log in to your account
                    </DialogTitle>
                    <DialogDescription className="sm:text-center">
                        Welcome back! Please enter your details.
                    </DialogDescription>
                </DialogHeader>
            </div>

            <div className="space-y-6">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="mail@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            className="mt-6 flex w-full items-center"
                            type="submit"
                        >
                            {loading2 && (
                                <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-white" />
                            )}
                            Sign In
                        </Button>
                    </form>
                </Form>

                {error && (
                    <div className="flex items-center gap-1 text-sm text-blue-700">
                        <RiErrorWarningFill className="size-4" />
                        {error}
                    </div>
                )}

                <button
                    onClick={loginWithGoogle}
                    className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-gray-300 py-2 transition-colors hover:bg-gray-50"
                >
                    {loading && (
                        <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-black" />
                    )}
                    <Image
                        src={GoogleLogo}
                        alt="google-logo"
                        width={22}
                        height={22}
                        className="mx-3"
                    />
                    <span className="text-gray-700">Log in with Google</span>
                </button>
                <button
                    onClick={loginWithGit}
                    className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-gray-300 py-2 transition-colors hover:bg-gray-50"
                >
                    {loading1 && (
                        <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-black" />
                    )}
                    <Image
                        src={Github}
                        alt="google-logo"
                        width={22}
                        height={22}
                        className="mx-3"
                    />
                    <span className="text-gray-700">Log in with Github</span>
                </button>

                <p className="text-center text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-purple-600 hover:text-purple-800"
                    >
                        Sign up
                    </Link>
                </p>
            </div>

            {/* <p className="text-muted-foreground text-center text-xs">
                By logging in you agree to our{" "}
                <Link className="underline hover:no-underline" href="/privacy">
                    Privacy Policy
                </Link>
                .
            </p> */}
        </DialogContent>
    );
};

export default AuthDialog;

function LoadingIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}
