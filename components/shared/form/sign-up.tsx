"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    checkEmail,
    checkUsername,
    signUpWithCredentials,
} from "@/lib/actions/auth.actions";
import { sendOTP, verifyOTP } from "@/lib/actions/otp.actions";
import { useState, useEffect, useCallback, useRef } from "react";
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
import { Loader2, Eye, EyeOff, RotateCw } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { SignUpSchema } from "@/lib/validations/auth";
import { OTPInput } from "input-otp";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { RiGithubFill, RiGoogleFill } from "@remixicon/react";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<
        "signup" | "google" | "github" | null
    >(null);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isChecking, setIsChecking] = useState(false);
    const [otpResendTimer, setOtpResendTimer] = useState(0);
    const [otpAttempts, setOtpAttempts] = useState(0);
    const [isResendingOtp, setIsResendingOtp] = useState(false);
    const toastIdRef = useRef<string | number | null>(null);
    const resendTimerRef = useRef<NodeJS.Timeout | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: "",
            name: "",
            email: "",
            password: "",
            otp: "",
            termsAccepted: false,
        },
    });

    // Clear timer on unmount
    useEffect(() => {
        return () => {
            if (resendTimerRef.current) clearInterval(resendTimerRef.current);
        };
    }, []);

    const handleBack = () => setCurrentStep((prev) => prev - 1);

    const handleNext = async () => {
        setIsChecking(true);
        let isValid = false;

        try {
            if (currentStep === 1) {
                isValid = await form.trigger([
                    "username",
                    "name",
                    "email",
                    "termsAccepted",
                ]);
                if (isValid) {
                    const values = form.getValues();

                    const usernameCheck = await checkUsername(values.username);
                    if (usernameCheck.exists) {
                        form.setError("username", {
                            message: "Username already taken",
                        });
                        isValid = false;
                    }

                    const emailCheck = await checkEmail(values.email);
                    if (emailCheck.exists) {
                        form.setError("email", {
                            message: "Email already registered",
                        });
                        isValid = false;
                    }
                }
            } else if (currentStep === 2) {
                isValid = await form.trigger(["password"]);
                if (isValid) {
                    // Start OTP resend timer
                    setOtpResendTimer(60);
                    if (resendTimerRef.current)
                        clearInterval(resendTimerRef.current);
                    resendTimerRef.current = setInterval(() => {
                        setOtpResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
                    }, 1000);

                    toastIdRef.current = toast.loading("Sending OTP...");
                    const result = await sendOTP(form.getValues("email"));

                    if (result?.error) {
                        toast.dismiss(toastIdRef.current);
                        toast.error(result.error);
                        return;
                    }

                    toast.dismiss(toastIdRef.current);
                    toast.success("OTP sent successfully! Check your email.");
                    isValid = true;
                }
            }
        } catch (error) {
            if (toastIdRef.current) toast.dismiss(toastIdRef.current);
            toast.error(
                `Error: ${error instanceof Error ? error.message : error}`,
            );
        } finally {
            setIsChecking(false);
            if (isValid) setCurrentStep((prev) => prev + 1);
        }
    };

    const handleResendOtp = async () => {
        if (otpResendTimer > 0) return;

        setIsResendingOtp(true);
        setOtpResendTimer(60);

        try {
            toastIdRef.current = toast.loading("Resending OTP...");
            const result = await sendOTP(form.getValues("email"));

            if (result?.error) {
                toast.dismiss(toastIdRef.current);
                toast.error(result.error);
                return;
            }

            toast.dismiss(toastIdRef.current);
            toast.success("New OTP sent successfully!");
        } catch (error) {
            if (toastIdRef.current) toast.dismiss(toastIdRef.current);
            toast.error(
                `Error: ${error instanceof Error ? error.message : error}`,
            );
        } finally {
            setIsResendingOtp(false);
        }
    };

    const onSubmit = useCallback(
        async (values: FormData) => {
            setIsLoading("signup");
            setError(null);

            try {
                toastIdRef.current = toast.loading("Verifying OTP...");
                const otpResult = await verifyOTP(values.email, values.otp);

                if (otpResult?.error) {
                    toast.dismiss(toastIdRef.current);
                    toast.error(otpResult.error);

                    // Track attempts
                    setOtpAttempts((prev) => prev + 1);

                    // Reset OTP field after 3 attempts
                    if (otpAttempts >= 2) {
                        form.setValue("otp", "");
                    }

                    return;
                }

                toast.dismiss(toastIdRef.current);
                toastIdRef.current = toast.loading("Creating account...");
                const result = await signUpWithCredentials(values);

                if (result?.error) {
                    toast.dismiss(toastIdRef.current);
                    toast.error(result.error);
                    return;
                }

                // await deleteOTP(values.email);

                toast.dismiss(toastIdRef.current);
                toast.success("Account created! Please sign in.");
                router.push("/sign_in");
            } catch (error) {
                if (toastIdRef.current) toast.dismiss(toastIdRef.current);
                toast.error(
                    `Unexpected error: ${error instanceof Error ? error.message : error}`,
                );
            } finally {
                setIsLoading(null);
            }
        },
        [router, otpAttempts, form],
    );

    const loginWithGoogle = async () => {
        setIsLoading("google");
        const result = await signIn("google", {
            callbackUrl: "/about_you",
            redirect: false,
        });
        handleAuthResult(result);
        setIsLoading(null);
    };

    const loginWithGit = async () => {
        setIsLoading("github");
        const result = await signIn("github", {
            callbackUrl: "/about_you",
            redirect: false,
        });
        handleAuthResult(result);
        setIsLoading(null);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAuthResult = (result: any) => {
        if (result?.error) {
            setError(result.error);
        } else if (result?.url) {
            router.push(result.url);
        }
    };

    const renderStep1 = () => (
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
            <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                required
                                className="rounded-none border-neutral-300 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-500">
                                I accept the{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                            </FormLabel>
                            <FormMessage />
                        </div>
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
        </div>
    );

    const renderStep2 = () => (
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
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                    {...field}
                                />
                            </FormControl>
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
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
                    onClick={handleNext}
                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800"
                    disabled={isChecking}
                >
                    <span className="relative z-10 flex items-center justify-center text-lg duration-300">
                        {isChecking ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending OTP...
                            </>
                        ) : (
                            "Continue"
                        )}
                    </span>
                </Button>
                <Button
                    type="button"
                    onClick={handleBack}
                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none border border-neutral-800 bg-white shadow-none dark:bg-black"
                    disabled={isChecking}
                >
                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                    <span className="relative z-10 flex items-center justify-center text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                        Back
                    </span>
                </Button>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div
            className={`space-y-4 transition-all duration-300 ${currentStep === 3 ? "transform-none opacity-100" : "absolute translate-x-full opacity-0"}`}
        >
            <div className="mt-10 mb-4 text-center">
                <p className="mt-1 text-sm text-gray-500">
                    We&apos;ve sent a 6-digit code to {form.getValues("email")}
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
                                containerClassName="flex items-center justify-center rounded-none gap-3 has-disabled:opacity-50"
                                maxLength={6}
                                value={field.value}
                                onChange={field.onChange}
                                render={({ slots }) => (
                                    <div className="flex gap-2">
                                        {slots.map((slot, idx) => (
                                            <div
                                                key={idx}
                                                className={cn(
                                                    "border-input bg-background text-foreground relative -ms-px flex size-9 items-center justify-center border font-medium shadow-xs transition-[color,box-shadow] first:ms-0 first:rounded-s-md last:rounded-e-md",
                                                    {
                                                        "border-ring ring-ring/50 z-10 ring-[3px]":
                                                            slot.isActive,
                                                    },
                                                )}
                                            >
                                                {slot.char !== null && (
                                                    <div>{slot.char}</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="mt-4 text-center">
                <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={otpResendTimer > 0 || isResendingOtp}
                    className="text-sm text-blue-600 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isResendingOtp ? (
                        <>
                            <RotateCw className="mr-1 inline h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : otpResendTimer > 0 ? (
                        `Resend OTP in ${otpResendTimer}s`
                    ) : (
                        "Resend OTP"
                    )}
                </button>
            </div>

            <div className="flex flex-col gap-2 pt-2">
                <Button
                    type="submit"
                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-lg text-white shadow-none hover:bg-blue-800"
                    disabled={isLoading === "signup"}
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
                    onClick={handleBack}
                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none border border-neutral-800 bg-white shadow-none dark:bg-black"
                    disabled={isLoading === "signup"}
                >
                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                    <span className="relative z-10 flex items-center justify-center text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                        Back
                    </span>
                </Button>
            </div>
        </div>
    );

    return (
        <section className="relative h-screen w-full overflow-hidden dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
                <div className="relative w-full">
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
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4 text-left"
                                >
                                    {renderStep1()}
                                    {renderStep2()}
                                    {renderStep3()}
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

                            {currentStep === 1 && (
                                <>
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
                                    <p className="relative z-[100] mt-6 text-gray-500">
                                        Already have an account?{" "}
                                        <Link
                                            href="/sign_in"
                                            className="underline hover:text-purple-500"
                                        >
                                            Sign in
                                        </Link>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
