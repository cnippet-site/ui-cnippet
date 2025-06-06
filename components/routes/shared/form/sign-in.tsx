"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Loader2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Image from "next/image";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function SignInForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: FormData) {
        setIsLoading(true);
        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            if (result?.error) {
                toast.error(result.error);
                return;
            }

            toast.success("Successfully signed in!");
            router.push("/");
        } catch (error) {
            toast.error(
                `An unexpected error occurred. Please try again. ${error}`,
            );
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
                        Welcome back
                    </h1>

                    <p className="mt-1 text-sm leading-normal text-gray-600 md:text-lg dark:text-white">
                        Sign in to your account
                    </p>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
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

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-medium text-black dark:text-white">
                                        Password
                                    </FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your password"
                                                className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="text-right">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background text-muted-foreground px-2">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <Button
                                variant="outline"
                                type="button"
                                className="flex items-center justify-center gap-2"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746166549/github-icon.png"
                                    alt="GitHub"
                                    className="size-5"
                                    width={16}
                                    height={16}
                                />
                                <span>Sign in with GitHub</span>
                            </Button>
                            <Button
                                variant="outline"
                                type="button"
                                className="flex items-center justify-center gap-2"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746166549/google-icon.png"
                                    alt="Google"
                                    className="size-5"
                                    width={16}
                                    height={16}
                                />
                                <span>Sign in with Google</span>
                            </Button>
                        </div>
                    </form>
                </Form>

                <div className="mt-6 text-center text-sm tracking-tight">
                    <span className="text-gray-600">
                        Don&apos;t have an account?{" "}
                    </span>
                    <Link
                        href="/sign-up"
                        className="font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
