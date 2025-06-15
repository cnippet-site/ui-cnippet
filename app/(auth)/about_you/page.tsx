"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { checkUsernameAvailability, completeSocialSignup } from "@/lib/actions/auth.actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RiErrorWarningFill } from "@remixicon/react";

const usernameSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    termsAccepted: z.boolean()
        .refine((val) => val === true, "You must accept the terms and conditions"),
});

export default function CompleteSignupPage() {
    const router = useRouter();
    // const searchParams = useSearchParams();
    const { data: session, status } = useSession();
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof usernameSchema>>({
        resolver: zodResolver(usernameSchema),
        defaultValues: {
            username: "",
            termsAccepted: false,
        },
    });

    useEffect(() => {
        // If user is not authenticated or already has a username, redirect to home
        if (status === "unauthenticated") {
            router.push("/");
        } else if (status === "authenticated" && session?.user?.username) {
            router.push("/");
        }
    }, [status, session, router]);

    const checkUsername = async (username: string) => {
        if (username.length < 3) return;
        
        setIsChecking(true);
        setError("");
        
        try {
            const result = await checkUsernameAvailability(username);
            if (!result.available) {
                form.setError("username", { message: result.error || "Username is not available" });
            }
        } catch (error) {
            setError("Failed to check username availability"+ error);
        } finally {
            setIsChecking(false);
        }
    };

    const onSubmit = async (values: z.infer<typeof usernameSchema>) => {
        if (!session?.user?.id) {
            setError("Session expired. Please sign in again.");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            const result = await completeSocialSignup({
                userId: session.user.id,
                username: values.username,
                termsAccepted: values.termsAccepted,
            });

            if (result.error) {
                setError(result.error);
            } else {
                router.push("/");
            }
        } catch (error) {
            setError("Failed to complete signup"+ error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="container flex min-h-screen items-center justify-center py-12">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Complete Your Profile</CardTitle>
                    <CardDescription>
                        Choose a username and accept our terms to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Choose a username"
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    checkUsername(e.target.value);
                                                }}
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
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                I accept the{" "}
                                                <a
                                                    href="/terms"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </FormLabel>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {error && (
                                <div className="flex items-center gap-1 text-sm text-red-500">
                                    <RiErrorWarningFill className="size-4" />
                                    {error}
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting || isChecking}
                            >
                                {isSubmitting ? (
                                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                ) : null}
                                Complete Signup
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
} 