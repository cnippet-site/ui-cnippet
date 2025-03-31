"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignUpWithCredentialsParams } from "@/lib/actions/auth.actions";

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
import { useToast } from "@/hooks/use-toast";
// import { useToast } from "@/lib/use-toast";

interface SignUpFormProps {
    callbackUrl: string;
    signUpWithCredentials: (
        values: SignUpWithCredentialsParams,
    ) => Promise<{ success?: boolean }>;
}

const userSignUpValidation = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    // confirmPassword: z.string().min(6).optional(),
});

const SignUpForm = ({ signUpWithCredentials }: SignUpFormProps) => {
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof userSignUpValidation>>({
        resolver: zodResolver(userSignUpValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            // confirmPassword: "",
        },
    });

    async function onSubmit(values: z.infer<typeof userSignUpValidation>) {
        // console.log(values)
        const res = await signUpWithCredentials(values);

        if (res?.success) {
            toast({
                description: "Sign up successfully.",
            });
            router.push("/signin");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto w-full max-w-lg"
            >
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your username"
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
                    {/* <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm your password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="confirm your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    {/* <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                    <select
                                        {...field}
                                        className="input"
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                </div>
                <Button className="mt-6 w-full" type="submit">
                    Sign Up
                </Button>
            </form>
            <div className="my-4 flex items-center justify-center">
                <div className="w-full border-b border-gray-400"></div>
                <span className="px-2 text-gray-400">or</span>
                <div className="w-full border-b border-gray-400"></div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?&nbsp;
                <Link className="text-blue-600 hover:underline" href="/signin">
                    Sign In
                </Link>
            </p>
        </Form>
    );
};

export default SignUpForm;
