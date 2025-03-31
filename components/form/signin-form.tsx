"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const userSignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

interface SignInFormProps {
    callbackUrl: string;
}

const SignInForm = ({ callbackUrl }: SignInFormProps) => {
    const form = useForm<z.infer<typeof userSignInValidation>>({
        resolver: zodResolver(userSignInValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    const err = searchParams.get("error");

    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        // console.log(values)
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            callbackUrl,
        });

        // const res = await signInWithCredentials(values);

        console.log("RES", res);
        setError(err || "");
        console.log(error);

        if (res?.error) {
            // Handle specific error messages if needed
            setError("Invalid email or password");
        } else {
            router.push(callbackUrl);
        }
    }
    console.log(error);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                <Button className="mt-6 w-full" type="submit">
                    Sign In
                </Button>
            </form>
            <div className="my-4 flex items-center justify-center">
                <div className="w-full border-b border-gray-400"></div>
                <span className="px-2 text-gray-400">or</span>
                <div className="w-full border-b border-gray-400"></div>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
                Don&apos;t have an account?&nbsp;
                <Link className="text-blue-600 hover:underline" href="/signup">
                    Sign Up
                </Link>
            </p>
            <div className="text-xl text-red-500">{err}</div>

            {/* <button
                    onClick={loginWithGoogle}
                    className="group flex w-full items-center justify-center rounded-md border border-neutral-100 px-10 py-1.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                >
                    Log in with Google
                </button>
                <button
                    onClick={loginWithGit}
                    className="group flex w-full items-center justify-center rounded-md border border-neutral-100 px-10 py-1.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
                >
                    Log in Git hubj
                </button> */}
        </Form>
    );
};

export default SignInForm;
