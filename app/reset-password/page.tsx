"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RiErrorWarningFill, RiEyeLine, RiEyeOffLine } from "@remixicon/react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resetPassword } from "@/lib/actions/auth.actions";

const schema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export default function ResetPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    if (!token) {
        router.push("/forgot-password");
        return null;
    }

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    async function onSubmit(values: z.infer<typeof schema>) {
        setLoading(true);
        setError("");

        try {
            const result = await resetPassword({ token: token!, newPassword: values.password });
            if (result.error) throw new Error(result.error);
            router.push("/");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <RiEyeOffLine className="h-4 w-4" /> : <RiEyeLine className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    {showConfirmPassword ? <RiEyeOffLine className="h-4 w-4" /> : <RiEyeLine className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Resetting..." : "Reset Password"}
                            </Button>
                        </form>
                    </Form>
                    {error && (
                        <div className="mt-4 flex items-center gap-1 text-sm text-red-500">
                            <RiErrorWarningFill className="size-4" />
                            {error}
                        </div>
                    )}
                    <div className="mt-4 text-center text-sm">
                        <Link href="/signin" className="text-primary hover:underline">
                            Back to Sign In
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 