"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RiErrorWarningFill } from "@remixicon/react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sendResetEmail } from "@/lib/actions/auth.actions";

const schema = z.object({
    email: z.string().email(),
});

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    // const router = useRouter();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { email: "" },
    });

    async function onSubmit(values: z.infer<typeof schema>) {
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await sendResetEmail(values.email);
            if (response.error) throw new Error(response.error);
            setSuccess(true);
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
                    <CardTitle className="text-2xl">Forgot Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Sending..." : "Send Reset Link"}
                            </Button>
                        </form>
                    </Form>
                    {error && (
                        <div className="mt-4 flex items-center gap-1 text-sm text-red-500">
                            <RiErrorWarningFill className="size-4" />
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mt-4 text-sm text-green-500">
                            Reset link has been sent to your email
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