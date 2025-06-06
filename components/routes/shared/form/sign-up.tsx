"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import {
    checkEmail,
    checkUsername,
    signUpWithCredentials,
} from "@/lib/actions/auth.actions";
import { sendOTP, verifyOTP } from "@/lib/actions/otp.actions";
import { useState, useEffect } from "react";
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
import { SignUpSchema } from "@/lib/validations/auth";
import { OTPInput, SlotProps } from "input-otp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { signIn } from "next-auth/react";
type FormData = z.infer<typeof SignUpSchema>;
import { RiGithubFill, RiGoogleFill } from "@remixicon/react";

export function SignUpForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [formData, setFormData] = useState<Partial<FormData>>({});
    const [isChecking, setIsChecking] = useState(false);
    const form = useForm<FormData>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: "",
            name: "",
            email: "",
            password: "",
            otp: "",
        },
    });

    // Add useEffect to watch for OTP changes
    useEffect(() => {
        const otpValue = form.getValues("otp");
        if (otpValue && otpValue.length === 6 && currentStep === 3) {
            form.handleSubmit(onSubmit)();
        }
    }, [form.getValues("otp"), currentStep]);

    const handleNext = async () => {
        let isValid = false;

        if (currentStep === 1) {
            if (isChecking) return;
            setIsChecking(true);
            isValid = await form.trigger(["username", "name", "email"]);
            if (isValid) {
                try {
                    const values = form.getValues();
                    // Check if username exists
                    const usernameExists = await checkUsername(values.username);
                    if (usernameExists.exists) {
                        form.setError("username", {
                            message: "Username already taken",
                        });
                        setIsChecking(false);
                        return;
                    }

                    // Check if email exists
                    const emailExists = await checkEmail(values.email);

                    if (emailExists.exists) {
                        form.setError("email", {
                            message: "Email already registered",
                        });
                        setIsChecking(false);
                        return;
                    }

                    setFormData((prev) => ({
                        ...prev,
                        ...values,
                    }));
                    setError(null);
                    isValid = true;
                } catch (error) {
                    toast.error(
                        "Error checking username/email availability: " + error,
                    );
                    setIsChecking(false);
                    return;
                }
            }
            setIsChecking(false);
        } else if (currentStep === 2) {
            isValid = await form.trigger(["password"]);
            if (isValid) {
                try {
                    setFormData((prev) => ({
                        ...prev,
                        password: form.getValues("password"),
                    }));

                    const email = form.getValues("email");
                    toast.loading("Sending OTP...");
                    const result = await sendOTP(email);

                    if (result?.error) {
                        toast.dismiss();
                        toast.error(result.error);
                        return;
                    }

                    toast.dismiss();
                    toast.success("OTP sent successfully! Check your email.");
                    setError(null);
                    isValid = true;
                } catch (error) {
                    toast.dismiss();
                    toast.error("Failed to send OTP: " + error);
                    return;
                }
            }
        }

        if (isValid) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => setCurrentStep((prev) => prev - 1);

    async function onSubmit(values: FormData) {
        setIsLoading(true);
        setError(null);

        try {
            // Verify OTP first
            toast.loading("Verifying OTP...");
            const otpResult = await verifyOTP(values.email, values.otp);

            if (otpResult?.error) {
                toast.dismiss();
                toast.error(otpResult.error);
                setIsLoading(false);
                return;
            }

            // Create account
            toast.loading("Creating account...");
            const result = await signUpWithCredentials({
                username: values.username,
                name: values.name,
                email: values.email,
                password: values.password,
            });

            if (result?.error) {
                toast.dismiss();
                toast.error(result.error);
                setIsLoading(false);
                return;
            }

            toast.dismiss();
            toast.success("Account created! Please sign in.");
            router.push("/sign-in");
        } catch (error) {
            toast.dismiss();
            toast.error("An unexpected error occurred: " + error);
            setIsLoading(false);
        }
    }

    const loginWithGoogle = async () => {
        const result = await signIn("google", {
            callbackUrl: "/about_you",
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else if (result?.url) {
            router.push(result.url);
        }
    };

    const loginWithGit = async () => {
        const result = await signIn("github", {
            callbackUrl: "/about_you",
            redirect: false,
        });

        if (result?.error) {
            setError(result.error);
        } else if (result?.url) {
            router.push(result.url);
        }
    };

    return (
        <>
            <section className="relative min-h-screen w-full dark:bg-black">
                <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                    <div className=" " />
                    <div className="border-r-0" />
                    <div className="border-b-0" />
                    <div className=" " />
                </div>

                <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
                    <div className="relative w-full">
                        <div className="grid w-full grid-cols-1 divide-y border-r border-l md:grid-cols-12 dark:border-neutral-900">
                            <div className="col-span-1 hidden md:block" />

                            <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
                                <div className="w-full max-w-md">
                                    <div className="mb-12 text-center">
                                        <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
                                            Create your account
                                        </h1>
                                        <p className="text-gray-500">
                                            Join us today and start your journey
                                        </p>
                                    </div>

                                    <Form {...form}>
                                        <form
                                            onSubmit={form.handleSubmit(
                                                onSubmit,
                                            )}
                                            className="space-y-4 text-left"
                                        >
                                            <div
                                                className={`space-y-5 transition-all duration-300 ${currentStep === 1 ? "transform-none opacity-100" : "absolute -translate-x-full opacity-0"}`}
                                            >
                                                <FormField
                                                    control={form.control}
                                                    name="username"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="font-medium text-black dark:text-white">
                                                                Username
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Choose a username"
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
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="font-medium text-black dark:text-white">
                                                                Full Name
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Enter your full name"
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
                                                    type="button"
                                                    onClick={handleNext}
                                                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none border border-neutral-800 bg-white shadow-none dark:bg-black"
                                                    disabled={isChecking}
                                                >
                                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                                    <span className="relative z-10 flex items-center justify-center text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                                        {isChecking ? (
                                                            <>
                                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                Checking...
                                                            </>
                                                        ) : (
                                                            "Continue"
                                                        )}
                                                    </span>
                                                </Button>

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
                                                        <RiGithubFill className="relative z-10 size-6 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                                        <span className="relative z-10 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                                            GitHub
                                                        </span>
                                                    </Button>

                                                    <Button
                                                        onClick={
                                                            loginWithGoogle
                                                        }
                                                        className="group relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-none border border-neutral-900 bg-white shadow-none dark:bg-black"
                                                    >
                                                        <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                                        <RiGoogleFill className="relative z-10 size-5 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                                        <span className="relative z-10 text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                                            Google
                                                        </span>
                                                    </Button>
                                                </div>

                                                <p className="mt-12 text-gray-500">
                                                    Already have an account?{" "}
                                                    <Link
                                                        href="/sign-in"
                                                        className="underline hover:text-purple-500"
                                                    >
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>

                                            <div
                                                className={`space-y-4 transition-all duration-300 ${currentStep === 2 ? "transform-none opacity-100" : "absolute translate-x-full opacity-0"}`}
                                            >
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
                                                                        placeholder="Create a strong password"
                                                                        className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
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
                                                                        <EyeOff
                                                                            size={
                                                                                18
                                                                            }
                                                                        />
                                                                    ) : (
                                                                        <Eye
                                                                            size={
                                                                                18
                                                                            }
                                                                        />
                                                                    )}
                                                                </button>
                                                            </div>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex flex-col gap-2 pt-2">
                                                    <Button
                                                        type="button"
                                                        className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                                                        onClick={handleNext}
                                                    >
                                                        Continue
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className="w-full cursor-pointer rounded-lg border-gray-300 transition-all hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-700"
                                                        onClick={handleBack}
                                                    >
                                                        Back
                                                    </Button>
                                                </div>
                                            </div>

                                            <div
                                                className={`space-y-4 transition-all duration-300 ${currentStep === 3 ? "transform-none opacity-100" : "absolute translate-x-full opacity-0"}`}
                                            >
                                                <div className="mt-10 mb-4 text-center">
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        We&apos;ve sent a
                                                        6-digit code to{" "}
                                                        {form.getValues(
                                                            "email",
                                                        )}
                                                    </p>
                                                </div>

                                                <FormField
                                                    control={form.control}
                                                    name="otp"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="flex items-center justify-center font-medium text-black dark:text-white">
                                                                Verification
                                                                Code
                                                            </FormLabel>
                                                            <FormControl>
                                                                <OTPInput
                                                                    containerClassName="flex items-center justify-center gap-3 has-disabled:opacity-50"
                                                                    maxLength={
                                                                        6
                                                                    }
                                                                    value={
                                                                        field.value
                                                                    }
                                                                    onChange={
                                                                        field.onChange
                                                                    }
                                                                    render={({
                                                                        slots,
                                                                    }) => (
                                                                        <div className="flex gap-2">
                                                                            {slots.map(
                                                                                (
                                                                                    slot,
                                                                                    idx,
                                                                                ) => (
                                                                                    <Slot
                                                                                        key={
                                                                                            idx
                                                                                        }
                                                                                        {...slot}
                                                                                    />
                                                                                ),
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex flex-col gap-2 pt-2">
                                                    <Button
                                                        type="submit"
                                                        className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? (
                                                            <>
                                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                                Verifying...
                                                            </>
                                                        ) : (
                                                            "Complete Sign up"
                                                        )}
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className="w-full cursor-pointer rounded-lg border-gray-300 transition-all hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-700"
                                                        onClick={handleBack}
                                                    >
                                                        Back
                                                    </Button>
                                                </div>
                                            </div>

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
                                </div>
                            </div>

                            <div className="col-span-1 hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

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
                            Create your account
                        </h1>

                        <p className="mt-1 text-sm leading-normal text-gray-600 md:text-lg dark:text-gray-200">
                            Join us today and start your journey
                        </p>
                    </div>

                    {/* Progress indicator */}
                    {/* <div className="mb-8">
                    <div className="relative mb-4 flex justify-between">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className="relative z-10 flex flex-col items-center"
                            >
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full border-3 transition-all duration-300 ${
                                        currentStep === step
                                            ? "border-white bg-blue-500 text-white"
                                            : currentStep > step
                                              ? "border-white bg-blue-500 text-white"
                                              : "border-white bg-gray-100 text-black"
                                    }`}
                                >
                                    {currentStep > step ? "✓" : step}
                                </div>
                                <span className="mt-1 text-xs text-gray-500">
                                    {step === 1
                                        ? "Info"
                                        : step === 2
                                          ? "Password"
                                          : "Verify"}
                                </span>
                            </div>
                        ))}
                        <div className="absolute top-4 left-0 h-[1.5px] w-full bg-gray-200"></div>
                        <div
                            className="absolute top-4 left-0 h-[1.5px] bg-blue-500 transition-all duration-500"
                            style={{ width: `${(currentStep - 1) * 50}%` }}
                        ></div>
                    </div>
                </div> */}

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <div
                                className={`space-y-4 transition-all duration-300 ${currentStep === 1 ? "transform-none opacity-100" : "absolute -translate-x-full opacity-0"}`}
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-black dark:text-white">
                                                Username
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Choose a username"
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
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium text-black dark:text-white">
                                                Full Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your full name"
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
                                    type="button"
                                    onClick={handleNext}
                                    className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                                    disabled={isChecking}
                                >
                                    {isChecking ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Checking...
                                        </>
                                    ) : (
                                        "Continue"
                                    )}
                                </Button>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-gray-300 dark:border-neutral-700" />
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
                                        onClick={loginWithGit}
                                    >
                                        <Image
                                            src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746166549/github-icon.png"
                                            alt="Google"
                                            className="size-5 rounded-full dark:bg-white"
                                            width={16}
                                            height={16}
                                        />
                                        <span>Sign up with GitHub</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="flex items-center justify-center gap-2"
                                        onClick={loginWithGoogle}
                                    >
                                        <Image
                                            src="https://res.cloudinary.com/dphulm0s9/image/upload/v1746166549/google-icon.png"
                                            alt="Google"
                                            className="size-5"
                                            width={16}
                                            height={16}
                                        />
                                        <span>Sign up with Google</span>
                                    </Button>
                                </div>
                            </div>

                            <div
                                className={`space-y-4 transition-all duration-300 ${currentStep === 2 ? "transform-none opacity-100" : "absolute translate-x-full opacity-0"}`}
                            >
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
                                                        placeholder="Create a strong password"
                                                        className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
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
                                <div className="flex flex-col gap-2 pt-2">
                                    <Button
                                        type="button"
                                        className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                                        onClick={handleNext}
                                    >
                                        Continue
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full cursor-pointer rounded-lg border-gray-300 transition-all hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-700"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </div>

                            <div
                                className={`space-y-4 transition-all duration-300 ${currentStep === 3 ? "transform-none opacity-100" : "absolute translate-x-full opacity-0"}`}
                            >
                                <div className="mt-10 mb-4 text-center">
                                    <p className="mt-1 text-sm text-gray-500">
                                        We&apos;ve sent a 6-digit code to{" "}
                                        {form.getValues("email")}
                                    </p>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="otp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center justify-center font-medium text-black dark:text-white">
                                                Verification Code
                                            </FormLabel>
                                            <FormControl>
                                                <OTPInput
                                                    containerClassName="flex items-center justify-center gap-3 has-disabled:opacity-50"
                                                    maxLength={6}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    render={({ slots }) => (
                                                        <div className="flex gap-2">
                                                            {slots.map(
                                                                (slot, idx) => (
                                                                    <Slot
                                                                        key={
                                                                            idx
                                                                        }
                                                                        {...slot}
                                                                    />
                                                                ),
                                                            )}
                                                        </div>
                                                    )}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex flex-col gap-2 pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Verifying...
                                            </>
                                        ) : (
                                            "Complete Sign up"
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full cursor-pointer rounded-lg border-gray-300 transition-all hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-700"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </div>

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

                    <div className="mx-auto my-8 w-full max-w-lg">
                        <div className="relative mb-2 flex justify-between text-xs text-gray-700 dark:text-gray-400">
                            <div>Your details</div>
                            <div>Choose a password</div>
                            <div>Verify email</div>
                        </div>
                        <Progress
                            value={
                                currentStep === 1
                                    ? 33
                                    : currentStep === 2
                                      ? 66
                                      : 100
                            }
                            className="h-1 bg-gray-200"
                        />
                    </div>

                    <div className="relative z-10 mt-6 w-full text-center text-sm tracking-tight">
                        <span className="text-gray-600">
                            Already have an account?{" "}
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
        </>
    );
}

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                "border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow] first:ms-0 first:rounded-s-md last:rounded-e-md",
                { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive },
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
        </div>
    );
}
// "use client";

// import type React from "react";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Mail, User, Lock, Github, AlertCircle } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Progress } from "@/components/ui/progress";

// type Step = "details" | "password" | "verification";

// export function SignUpForm() {
//     const router = useRouter();
//     const [step, setStep] = useState<Step>("details");
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     // Form data
//     const [name, setName] = useState("");
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [otp, setOtp] = useState(["", "", "", ""]);

//     const handleDetailsSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         setStep("password");
//     };

//     const handlePasswordSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }
//         if (password.length < 8) {
//             setError("Password must be at least 8 characters");
//             return;
//         }
//         setError("");
//         setStep("verification");
//     };

//     const handleOtpChange = (index: number, value: string) => {
//         if (value.length > 1) {
//             value = value.slice(0, 1);
//         }

//         const newOtp = [...otp];
//         newOtp[index] = value;
//         setOtp(newOtp);

//         // Auto-focus next input
//         if (value && index < 3) {
//             const nextInput = document.getElementById(`otp-${index + 1}`);
//             if (nextInput) {
//                 nextInput.focus();
//             }
//         }
//     };

//     const handleVerificationSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         try {
//             // Simulate API call
//             await new Promise((resolve) => setTimeout(resolve, 1000));
//             router.push("/profile");
//         } catch (err) {
//             setError("Failed to verify OTP. Please try again.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const getStepProgress = () => {
//         switch (step) {
//             case "details":
//                 return 33;
//             case "password":
//                 return 66;
//             case "verification":
//                 return 100;
//             default:
//                 return 0;
//         }
//     };

//     return (
//         <div className="space-y-6">
//             <div className="space-y-2 text-center">
//                 <div className="flex justify-center">
//                     <div className="rounded-full bg-purple-100 p-2">
//                         <User className="h-6 w-6 text-purple-600" />
//                     </div>
//                 </div>
//                 <h1 className="text-2xl font-bold">Create an account</h1>
//                 <p className="text-muted-foreground text-sm">
//                     {step === "details" && "Start your 30-day free trial"}
//                     {step === "password" && "Choose a password"}
//                     {step === "verification" && "Check your email"}
//                 </p>
//             </div>

//             {error && (
//                 <Alert variant="destructive">
//                     <AlertCircle className="h-4 w-4" />
//                     <AlertDescription>{error}</AlertDescription>
//                 </Alert>
//             )}

//             {step === "details" && (
//                 <form onSubmit={handleDetailsSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                         <Label htmlFor="name">Full Name</Label>
//                         <div className="relative">
//                             <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
//                             <Input
//                                 id="name"
//                                 placeholder="John Doe"
//                                 className="pl-10"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="username">Username</Label>
//                         <div className="relative">
//                             <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
//                             <Input
//                                 id="username"
//                                 placeholder="johndoe"
//                                 className="pl-10"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="email">Email</Label>
//                         <div className="relative">
//                             <Mail className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 placeholder="name@example.com"
//                                 className="pl-10"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <Button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700"
//                     >
//                         Continue
//                     </Button>

//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center">
//                             <span className="w-full border-t" />
//                         </div>
//                         <div className="relative flex justify-center text-xs uppercase">
//                             <span className="bg-background text-muted-foreground px-2">
//                                 Or continue with
//                             </span>
//                         </div>
//                     </div>

//                     <div className="flex flex-col space-y-2">
//                         <Button
//                             variant="outline"
//                             type="button"
//                             className="flex items-center justify-center gap-2"
//                         >
//                             <Github className="h-4 w-4" />
//                             <span>GitHub</span>
//                         </Button>
//                         <Button
//                             variant="outline"
//                             type="button"
//                             className="flex items-center justify-center gap-2"
//                         >
//                             <svg className="h-4 w-4" viewBox="0 0 24 24">
//                                 <path
//                                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                     fill="#4285F4"
//                                 />
//                                 <path
//                                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                     fill="#34A853"
//                                 />
//                                 <path
//                                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                     fill="#FBBC05"
//                                 />
//                                 <path
//                                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                     fill="#EA4335"
//                                 />
//                                 <path d="M1 1h22v22H1z" fill="none" />
//                             </svg>
//                             <span>Google</span>
//                         </Button>
//                     </div>
//                 </form>
//             )}

//             {step === "password" && (
//                 <form onSubmit={handlePasswordSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                         <Label htmlFor="password">Password</Label>
//                         <div className="relative">
//                             <Lock className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 className="pl-10"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <p className="text-muted-foreground text-xs">
//                             Must be at least 8 characters
//                         </p>
//                     </div>
//                     <div className="space-y-2">
//                         <Label htmlFor="confirm-password">
//                             Confirm Password
//                         </Label>
//                         <div className="relative">
//                             <Lock className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
//                             <Input
//                                 id="confirm-password"
//                                 type="password"
//                                 className="pl-10"
//                                 value={confirmPassword}
//                                 onChange={(e) =>
//                                     setConfirmPassword(e.target.value)
//                                 }
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <Button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700"
//                     >
//                         Continue
//                     </Button>
//                     <Button
//                         type="button"
//                         variant="ghost"
//                         className="w-full"
//                         onClick={() => setStep("details")}
//                     >
//                         Back
//                     </Button>
//                 </form>
//             )}

//             {step === "verification" && (
//                 <form onSubmit={handleVerificationSubmit} className="space-y-4">
//                     <div className="space-y-2 text-center">
//                         <div className="flex justify-center">
//                             <div className="rounded-full bg-purple-100 p-2">
//                                 <Mail className="h-6 w-6 text-purple-600" />
//                             </div>
//                         </div>
//                         <h2 className="text-xl font-semibold">
//                             Check your email
//                         </h2>
//                         <p className="text-muted-foreground text-sm">
//                             We sent a verification link to
//                             <br />
//                             <span className="font-medium">{email}</span>
//                         </p>
//                     </div>

//                     <div className="flex justify-center gap-2">
//                         {otp.map((digit, index) => (
//                             <Input
//                                 key={index}
//                                 id={`otp-${index}`}
//                                 type="text"
//                                 inputMode="numeric"
//                                 pattern="[0-9]*"
//                                 maxLength={1}
//                                 className="h-12 w-12 text-center text-lg"
//                                 value={digit}
//                                 onChange={(e) =>
//                                     handleOtpChange(index, e.target.value)
//                                 }
//                                 required
//                             />
//                         ))}
//                     </div>

//                     <Button
//                         type="submit"
//                         className="w-full bg-purple-600 hover:bg-purple-700"
//                         disabled={isLoading || otp.some((digit) => !digit)}
//                     >
//                         {isLoading ? "Verifying..." : "Verify email"}
//                     </Button>

//                     <div className="text-center text-sm">
//                         Didn&apos;t receive the email?{" "}
//                         <button
//                             type="button"
//                             className="text-purple-600 hover:underline"
//                         >
//                             Click to resend
//                         </button>
//                     </div>

//                     <Button
//                         type="button"
//                         variant="ghost"
//                         className="w-full"
//                         onClick={() => setStep("password")}
//                     >
//                         Back
//                     </Button>
//                 </form>
//             )}

//             <div className="space-y-2">
//                 <div className="text-muted-foreground flex justify-between text-xs">
//                     <div>Your details</div>
//                     <div>Choose a password</div>
//                     <div>Verify email</div>
//                 </div>
//                 <Progress
//                     value={getStepProgress()}
//                     className="h-1 bg-gray-200"
//                     indicatorClassName="bg-purple-600"
//                 />
//             </div>

//             <div className="text-center text-sm">
//                 Already have an account?{" "}
//                 <Link
//                     href="/sign-in"
//                     className="text-purple-600 hover:underline"
//                 >
//                     Sign in
//                 </Link>
//             </div>
//         </div>
//     );
// }
