"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
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
import { signIn, useSession } from "next-auth/react";
import { RiGithubFill, RiGoogleFill } from "@remixicon/react";

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
    const [isLoading, setIsLoading] = useState<
        "signin" | "google" | "github" | null
    >(null);
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { data: session, status } = useSession();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (status === "authenticated") {
            if (session?.needsCompletion) {
                router.push("/about_you");
            } else {
                router.push("/");
            }
        }
    }, [status, session, router]);

    async function onSubmit(values: FormData) {
        setIsLoading("signin");
        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            console.log(result);

            if (result?.error) {
                toast.error("Invalid Credentials");
                return;
            }

            toast.success("Successfully signed in!");
            router.push("/");
        } catch (error) {
            toast.error(
                `An unexpected error occurred. Please try again. ${error}`,
            );
        } finally {
            setIsLoading(null);
        }
    }

    const loginWithGoogle = async () => {
        setIsLoading("google");
        await signIn("google", { redirect: false });
        setIsLoading(null);
    };

    const loginWithGit = async () => {
        setIsLoading("github");
        await signIn("github", { redirect: false });
        setIsLoading(null);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
                <div className="relative w-full">
                    <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
                        <div className="w-full max-w-md">
                            <div className="mb-12 text-center">
                                <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                                    Welcome back
                                </h1>
                                <p className="text-gray-500">
                                    Sign in to your account
                                </p>
                            </div>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4 text-left"
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
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
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
                                                            className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <button
                                                        type="button"
                                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword,
                                                            )
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
                                            href="/forgot_password"
                                            className="text-sm text-purple-600 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800"
                                        disabled={isLoading === "signin"}
                                    >
                                        {isLoading === "signin" ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Signing in...
                                            </>
                                        ) : (
                                            "Sign in"
                                        )}
                                    </Button>

                                    {error && (
                                        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-500">
                                            <div className="flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-2 h-5 w-5 text-red-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {error}
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </Form>

                            <div className="my-8 flex items-center">
                                <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                                <span className="px-4 text-sm text-gray-500">
                                    OR CONTINUE WITH
                                </span>
                                <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    onClick={loginWithGit}
                                    className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-none border border-neutral-900 bg-white shadow-none dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    {isLoading === "github" ? (
                                        <Loader2 className="relative z-10 size-6 animate-spin text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                    ) : (
                                        <RiGithubFill className="relative z-10 size-6 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                    )}
                                    <span className="relative z-10 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        GitHub
                                    </span>
                                </Button>
                                <Button
                                    onClick={loginWithGoogle}
                                    className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-none border border-neutral-900 bg-white shadow-none dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    {isLoading === "google" ? (
                                        <Loader2 className="relative z-10 size-6 animate-spin text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                    ) : (
                                        <RiGoogleFill className="relative z-10 size-5 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                    )}
                                    <span className="relative z-10 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        Google
                                    </span>
                                </Button>
                            </div>

                            <p className="mt-12 text-gray-500">
                                Don&apos;t have an account?{" "}
                                <Link
                                    href="/sign_up"
                                    className="underline hover:text-purple-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
