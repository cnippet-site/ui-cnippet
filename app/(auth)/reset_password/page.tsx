// "use client";

// import { Suspense, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { RiErrorWarningFill, RiEyeLine, RiEyeOffLine } from "@remixicon/react";

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { resetPassword } from "@/lib/actions/auth.actions";

// const schema = z
//     .object({
//         password: z.string().min(6, "Password must be at least 6 characters"),
//         confirmPassword: z.string(),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//         message: "Passwords don't match",
//         path: ["confirmPassword"],
//     });

// export default function ResetPasswordPage() {
//     <Suspense>
//         <ResetPassword />
//     </Suspense>;
// }

// function ResetPassword() {
//     const form = useForm<z.infer<typeof schema>>({
//         resolver: zodResolver(schema),
//         defaultValues: { password: "", confirmPassword: "" },
//     });

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const token = searchParams.get("token");

//     if (!token) {
//         router.push("/forgot-password");
//         return null;
//     }

//     async function onSubmit(values: z.infer<typeof schema>) {
//         setLoading(true);
//         setError("");

//         try {
//             const result = await resetPassword({
//                 token: token!,
//                 newPassword: values.password,
//             });
//             if (result.error) throw new Error(result.error);
//             router.push("/");
//         } catch (error) {
//             setError(
//                 error instanceof Error ? error.message : "Something went wrong",
//             );
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div className="container flex h-screen w-screen flex-col items-center justify-center">
//             <Card className="w-full max-w-md">
//                 <CardHeader>
//                     <CardTitle className="text-2xl">Reset Password</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <Form {...form}>
//                         <form
//                             onSubmit={form.handleSubmit(onSubmit)}
//                             className="space-y-4"
//                         >
//                             <FormField
//                                 control={form.control}
//                                 name="password"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>New Password</FormLabel>
//                                         <FormControl>
//                                             <div className="relative">
//                                                 <Input
//                                                     type={
//                                                         showPassword
//                                                             ? "text"
//                                                             : "password"
//                                                     }
//                                                     {...field}
//                                                 />
//                                                 <button
//                                                     type="button"
//                                                     className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
//                                                     onClick={() =>
//                                                         setShowPassword(
//                                                             !showPassword,
//                                                         )
//                                                     }
//                                                 >
//                                                     {showPassword ? (
//                                                         <RiEyeOffLine className="h-4 w-4" />
//                                                     ) : (
//                                                         <RiEyeLine className="h-4 w-4" />
//                                                     )}
//                                                 </button>
//                                             </div>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name="confirmPassword"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>
//                                             Confirm New Password
//                                         </FormLabel>
//                                         <FormControl>
//                                             <div className="relative">
//                                                 <Input
//                                                     type={
//                                                         showConfirmPassword
//                                                             ? "text"
//                                                             : "password"
//                                                     }
//                                                     {...field}
//                                                 />
//                                                 <button
//                                                     type="button"
//                                                     className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
//                                                     onClick={() =>
//                                                         setShowConfirmPassword(
//                                                             !showConfirmPassword,
//                                                         )
//                                                     }
//                                                 >
//                                                     {showConfirmPassword ? (
//                                                         <RiEyeOffLine className="h-4 w-4" />
//                                                     ) : (
//                                                         <RiEyeLine className="h-4 w-4" />
//                                                     )}
//                                                 </button>
//                                             </div>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <Button
//                                 type="submit"
//                                 className="w-full"
//                                 disabled={loading}
//                             >
//                                 {loading ? "Resetting..." : "Reset Password"}
//                             </Button>
//                         </form>
//                     </Form>
//                     {error && (
//                         <div className="mt-4 flex items-center gap-1 text-sm text-red-500">
//                             <RiErrorWarningFill className="size-4" />
//                             {error}
//                         </div>
//                     )}
//                     <div className="mt-4 text-center text-sm">
//                         <Link
//                             href="/signin"
//                             className="text-primary hover:underline"
//                         >
//                             Back to Sign In
//                         </Link>
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }

"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { resetPassword } from "@/lib/actions/auth.actions";
import { toast } from "sonner";

const schema = z
    .object({
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export default function ResetPasswordPage() {
    return (
        <Suspense>
            <ResetPassword />
        </Suspense>
    );
}

function ResetPassword() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    if (!token) {
        router.push("/forgot-password");
        return null;
    }

    async function onSubmit(values: z.infer<typeof schema>) {
        setLoading(true);

        try {
            const result = await resetPassword({
                token: token!,
                newPassword: values.password,
            });
            if (result.error) throw new Error(result.error);
            toast.success("Password reset successfully!");
            router.push("/sign-in");
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Something went wrong",
            );
        } finally {
            setLoading(false);
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
                        Reset Password
                    </h1>

                    <p className="mt-1 text-sm leading-normal text-gray-600 md:text-lg dark:text-gray-200">
                        Enter your new password below
                    </p>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-medium text-black dark:text-white">
                                        New Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your new password"
                                                className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
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
                                    <FormLabel className="font-medium text-black dark:text-white">
                                        Confirm New Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Confirm your new password"
                                                className="rounded-lg border-gray-300 pr-10 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword,
                                                    )
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Resetting...
                                </>
                            ) : (
                                "Reset Password"
                            )}
                        </Button>
                    </form>
                </Form>

                <div className="mt-6 text-center text-sm tracking-tight">
                    <span className="text-gray-600">
                        Remember your password?{" "}
                    </span>
                    <Link
                        href="/signin"
                        className="font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
