"use client";
import React, { useState } from "react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendResetEmail } from "@/lib/actions/auth.actions";
import { FileWarning, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

const forgotPasswordValidation = z.object({
    email: z.string().email(),
});

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const forgotPasswordForm = useForm<
        z.infer<typeof forgotPasswordValidation>
    >({
        resolver: zodResolver(forgotPasswordValidation),
        defaultValues: {
            email: "",
        },
    });

    async function onForgotPassword(
        values: z.infer<typeof forgotPasswordValidation>,
    ) {
        setIsLoading(true);
        setError("");
        setSuccess(false);

        try {
            const result = await sendResetEmail(values.email);
            if (result.error) {
                setError(result.error as string);
                toast.error(result.error as string);
            } else {
                setSuccess(true);
                // toast.success("Reset link has been sent to your email");
            }
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Something went wrong";
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white font-sans dark:bg-black">
            <div
                className="absolute top-0 z-0 h-1/2 w-1/2 bg-[url(https://res.cloudinary.com/dpna1cna0/image/upload/v1736584048/ooorganize_k4so5t.svg)]"
                style={{
                    backgroundSize: "300px",
                }}
            />
            <div className="absolute top-0 h-1/2 w-1/2 bg-gradient-to-t from-white to-white/60 dark:from-black dark:to-black/90" />
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl p-8">
                <div className="mb-6 text-center">
                    <Link
                        className="mx-auto flex w-fit items-center justify-center gap-0 rounded-full bg-black"
                        href="/"
                    >
                        <Image
                            src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746006954/logo-dark.png"
                            alt=""
                            className="size-13"
                            width={1320}
                            height={1320}
                        />
                    </Link>

                    <h1 className="mt-5 text-2xl leading-tight font-semibold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Reset your password
                    </h1>

                    <p className="mt-1 text-sm leading-normal text-gray-600 md:text-lg dark:text-gray-200">
                        Enter your email to receive a reset link
                    </p>
                </div>

                <Form {...forgotPasswordForm}>
                    <form
                        onSubmit={forgotPasswordForm.handleSubmit(
                            onForgotPassword,
                        )}
                        className="space-y-4"
                    >
                        <FormField
                            control={forgotPasswordForm.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-medium text-black dark:text-white">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className="rounded-lg border-gray-300 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Reset Link"
                            )}
                        </Button>

                        {error && (
                            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-500">
                                <div className="flex">
                                    <FileWarning className="mr-2 h-5 w-5 text-red-400" />
                                    {error}
                                </div>
                            </div>
                        )}

                        {success && (
                            <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-500">
                                Reset link has been sent to your email
                            </div>
                        )}
                    </form>
                </Form>

                <div className="mt-6 text-center text-sm tracking-tight">
                    <span className="text-gray-600">
                        Remember your password?{" "}
                    </span>
                    <Link
                        href="/sign-in"
                        className="font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
