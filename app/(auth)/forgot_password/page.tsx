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
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const forgotPasswordValidation = z.object({
    email: z.string().email(),
});

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        setSuccess(false);

        try {
            const result = await sendResetEmail(values.email);
            if (result.error) {
                toast.error(result.error as string);
            } else {
                setSuccess(true);
                toast.success("Reset link has been sent to your email");
            }
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Something went wrong";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="relative h-screen w-full overflow-hidden dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
                <div className="relative w-full">
                    <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
                        <div className="w-full max-w-md">
                            <div className="mb-12 text-center">
                                <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                                    Reset your password
                                </h1>
                                <p className="text-gray-500">
                                    Enter your email to receive a reset link
                                </p>
                            </div>

                            <Form {...forgotPasswordForm}>
                                <form
                                    onSubmit={forgotPasswordForm.handleSubmit(
                                        onForgotPassword,
                                    )}
                                    className="space-y-4 text-left"
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
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800"
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

                                    {success && (
                                        <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-500">
                                            Reset link has been sent to your email
                                        </div>
                                    )}
                                </form>
                            </Form>

                            <div className="mt-6 text-center text-sm tracking-tight">
                                <span className="text-gray-500">
                                    Remember your password?{" "}
                                </span>
                                <Link
                                    href="/sign_in"
                                    className="underline hover:text-purple-500"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
