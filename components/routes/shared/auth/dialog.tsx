// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// import {
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog-cn";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//     RiGithubFill,
//     RiEyeLine,
//     RiEyeOffLine,
//     RiErrorWarningFill,
// } from "@remixicon/react";
// import {
//     sendResetEmail,
//     signUpWithCredentials,
// } from "@/lib/actions/auth.actions";

// const AuthDialog = () => {
//     const [loading2, setLoading2] = useState(false);
//     const [loading3, setLoading3] = useState(false);
//     const [loading4, setLoading4] = useState(false);

//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);

//     const [activeTab, setActiveTab] = useState("signin");
//     const [showPassword, setShowPassword] = useState(false);
//     const [showSignUpPassword, setShowSignUpPassword] = useState(false);
//     const [showForgotPassword, setShowForgotPassword] = useState(false);

//     const router = useRouter();
//     const pathname = usePathname();

//     const loginWithGoogle = async () => {
//         const result = await signIn("google", {
//             callbackUrl: "/about-you",
//             redirect: false,
//         });

//         if (result?.error) {
//             setError(result.error);
//         } else if (result?.url) {
//             router.push(result.url);
//         }
//     };

//     const loginWithGit = async () => {
//         const result = await signIn("github", {
//             callbackUrl: "/complete-signup",
//             redirect: false,
//         });

//         if (result?.error) {
//             setError(result.error);
//         } else if (result?.url) {
//             router.push(result.url);
//         }
//     };

//     const userSignInValidation = z.object({
//         email: z.string().email(),
//         password: z.string().min(6),
//     });

//     const userSignUpValidation = z.object({
//         name: z.string().min(2),
//         email: z.string().email(),
//         password: z.string().min(6),
//     });

//     const signInForm = useForm<z.infer<typeof userSignInValidation>>({
//         resolver: zodResolver(userSignInValidation),
//         defaultValues: {
//             email: "",
//             password: "",
//         },
//     });

//     const signUpForm = useForm<z.infer<typeof userSignUpValidation>>({
//         resolver: zodResolver(userSignUpValidation),
//         defaultValues: {
//             name: "",
//             email: "",
//             password: "",
//         },
//     });

//     const forgotPasswordValidation = z.object({
//         email: z.string().email(),
//     });

//     const forgotPasswordForm = useForm<
//         z.infer<typeof forgotPasswordValidation>
//     >({
//         resolver: zodResolver(forgotPasswordValidation),
//         defaultValues: {
//             email: "",
//         },
//     });

//     async function onSignIn(values: z.infer<typeof userSignInValidation>) {
//         setLoading2(true);
//         const result = await signIn("credentials", {
//             email: values.email,
//             password: values.password,
//             redirect: false,
//             callbackUrl: pathname,
//         });

//         setLoading2(false);

//         if (result?.error) {
//             setError(result.error);
//         } else {
//             router.push(result?.url || "/");
//         }
//     }

//     async function onSignUp(values: z.infer<typeof userSignUpValidation>) {
//         setLoading3(true);
//         try {
//             const result = await signUpWithCredentials({
//                 name: values.name,
//                 email: values.email,
//                 password: values.password,
//             });

//             if (result.error) {
//                 setError(result.error);
//             } else {
//                 const signInResult = await signIn("credentials", {
//                     email: values.email,
//                     password: values.password,
//                     redirect: false,
//                     callbackUrl: pathname,
//                 });

//                 if (signInResult?.error) {
//                     setError(signInResult.error);
//                 } else {
//                     router.push(signInResult?.url || "/");
//                 }
//             }
//         } catch (error) {
//             console.log(error);
//             setError("An error occurred during sign up");
//         } finally {
//             setLoading3(false);
//         }
//     }

//     async function onForgotPassword(
//         values: z.infer<typeof forgotPasswordValidation>,
//     ) {
//         setLoading4(true);
//         setError("");
//         setSuccess(false);

//         try {
//             const result = await sendResetEmail(values.email);
//             if (result.error) {
//                 setError(result.error);
//             } else {
//                 setSuccess(true);
//             }
//         } catch (error) {
//             setError(
//                 error instanceof Error ? error.message : "Something went wrong",
//             );
//         } finally {
//             setLoading4(false);
//         }
//     }

//     return (
//         <DialogContent className="py-10 sm:max-w-md">
//             <div className="mb-2 flex flex-col items-center gap-2">
//                 <div
//                     className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
//                     aria-hidden="true"
//                 >
//                     {" "}
//                     <Image
//                         src="/images/logo-light.png"
//                         alt=""
//                         width={3840}
//                         height={2160}
//                         className="w-[2.75rem] rounded-full dark:bg-white"
//                     />
//                 </div>
//                 <DialogHeader>
//                     <DialogTitle className="text-2xl sm:text-center">
//                         {showForgotPassword
//                             ? "Reset your password"
//                             : activeTab === "signin"
//                               ? "Welcome back"
//                               : "Create an account"}
//                     </DialogTitle>
//                     <DialogDescription className="sm:text-center">
//                         {showForgotPassword
//                             ? "Enter the email address associated with your account below."
//                             : activeTab === "signin"
//                               ? "Sign in to your account"
//                               : "Enter your information to get started"}
//                     </DialogDescription>
//                 </DialogHeader>
//             </div>

//             {showForgotPassword ? (
//                 <CardContent className="space-y-4 p-2">
//                     <Form {...forgotPasswordForm}>
//                         <form
//                             onSubmit={forgotPasswordForm.handleSubmit(
//                                 onForgotPassword,
//                             )}
//                             className="space-y-4"
//                         >
//                             <FormField
//                                 control={forgotPasswordForm.control}
//                                 name="email"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Email</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 placeholder="you@example.com"
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <Button
//                                 type="submit"
//                                 className="w-full cursor-pointer"
//                             >
//                                 {loading4 && (
//                                     <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-white" />
//                                 )}
//                                 Reset Password
//                             </Button>
//                         </form>
//                     </Form>
//                     <div className="text-center text-sm">
//                         <Button
//                             variant="link"
//                             className="h-auto p-0 font-semibold cursor-pointer"
//                             onClick={() => setShowForgotPassword(false)}
//                         >
//                             Back to Sign In
//                         </Button>
//                     </div>
//                     {error && (
//                         <div className="mt-4 flex items-center gap-1 text-sm text-red-500">
//                             <RiErrorWarningFill className="size-4" />
//                             {error}
//                         </div>
//                     )}
//                     {success && (
//                         <div className="mt-4 text-sm text-green-500">
//                             Reset link has been sent to your email
//                         </div>
//                     )}
//                 </CardContent>
//             ) : (
//                 <Tabs
//                     defaultValue="signin"
//                     onValueChange={setActiveTab}
//                     className="w-full"
//                 >
//                     <TabsList className="grid w-full grid-cols-2">
//                         <TabsTrigger value="signin" className="cursor-pointer">
//                             Sign In
//                         </TabsTrigger>
//                         <TabsTrigger value="signup" className="cursor-pointer">
//                             Sign Up
//                         </TabsTrigger>
//                     </TabsList>

//                     <TabsContent value="signin" className="space-y-4">
//                         <CardContent className="space-y-4 p-2">
//                             <div className="space-y-3">
//                                 <Button
//                                     variant="outline"
//                                     className="w-full cursor-pointer"
//                                     onClick={loginWithGoogle}
//                                 >
//                                     <svg
//                                         className="mr-2 h-4 w-4"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                             fill="#4285F4"
//                                         />
//                                         <path
//                                             d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                             fill="#34A853"
//                                         />
//                                         <path
//                                             d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                             fill="#FBBC05"
//                                         />
//                                         <path
//                                             d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                             fill="#EA4335"
//                                         />
//                                     </svg>
//                                     Continue with Google
//                                 </Button>
//                                 <Button
//                                     variant="outline"
//                                     className="w-full cursor-pointer"
//                                     onClick={loginWithGit}
//                                 >
//                                     <RiGithubFill className="mr-2 h-5 w-5" />
//                                     Continue with GitHub
//                                 </Button>
//                             </div>
//                             <div className="relative">
//                                 <div className="absolute inset-0 flex items-center">
//                                     <span className="w-full border-t" />
//                                 </div>
//                                 <div className="relative flex justify-center text-xs uppercase">
//                                     <span className="bg-background text-muted-foreground px-2">
//                                         or
//                                     </span>
//                                 </div>
//                             </div>
//                             <Form {...signInForm}>
//                                 <form
//                                     onSubmit={signInForm.handleSubmit(onSignIn)}
//                                     className="space-y-4"
//                                 >
//                                     <FormField
//                                         control={signInForm.control}
//                                         name="email"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Email</FormLabel>
//                                                 <FormControl>
//                                                     <Input
//                                                         placeholder="you@example.com"
//                                                         {...field}
//                                                     />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={signInForm.control}
//                                         name="password"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <div className="flex items-center justify-between">
//                                                     <FormLabel>
//                                                         Password
//                                                     </FormLabel>
//                                                     <Button
//                                                         variant="link"
//                                                         className="h-auto cursor-pointer p-0 text-xs font-normal"
//                                                         onClick={() =>
//                                                             setShowForgotPassword(
//                                                                 true,
//                                                             )
//                                                         }
//                                                     >
//                                                         Forgot Password?
//                                                     </Button>
//                                                 </div>
//                                                 <FormControl>
//                                                     <div className="relative">
//                                                         <Input
//                                                             type={
//                                                                 showPassword
//                                                                     ? "text"
//                                                                     : "password"
//                                                             }
//                                                             {...field}
//                                                         />
//                                                         <button
//                                                             type="button"
//                                                             className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
//                                                             onClick={() =>
//                                                                 setShowPassword(
//                                                                     !showPassword,
//                                                                 )
//                                                             }
//                                                         >
//                                                             {showPassword ? (
//                                                                 <RiEyeOffLine className="h-4 w-4" />
//                                                             ) : (
//                                                                 <RiEyeLine className="h-4 w-4" />
//                                                             )}
//                                                         </button>
//                                                     </div>
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <Button
//                                         type="submit"
//                                         className="w-full cursor-pointer"
//                                     >
//                                         {loading2 && (
//                                             <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-white" />
//                                         )}
//                                         Sign In
//                                     </Button>
//                                 </form>
//                             </Form>
//                             <div className="text-center text-sm">
//                                 {"Don't have an account? "}
//                                 <Button
//                                     variant="link"
//                                     className="h-auto p-0 font-semibold"
//                                     onClick={() => setActiveTab("signup")}
//                                 >
//                                     Sign Up Now
//                                 </Button>
//                             </div>
//                         </CardContent>
//                     </TabsContent>

//                     <TabsContent value="signup" className="space-y-4">
//                         <CardContent className="space-y-4 p-2">
//                             <div className="space-y-3">
//                                 <Button
//                                     variant="outline"
//                                     className="w-full cursor-pointer"
//                                     onClick={loginWithGoogle}
//                                 >
//                                     <svg
//                                         className="mr-2 h-4 w-4"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                             fill="#4285F4"
//                                         />
//                                         <path
//                                             d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                             fill="#34A853"
//                                         />
//                                         <path
//                                             d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                             fill="#FBBC05"
//                                         />
//                                         <path
//                                             d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                             fill="#EA4335"
//                                         />
//                                     </svg>
//                                     Sign up with Google
//                                 </Button>
//                                 <Button
//                                     variant="outline"
//                                     className="w-full cursor-pointer"
//                                     onClick={loginWithGit}
//                                 >
//                                     <RiGithubFill className="mr-2 h-5 w-5" />
//                                     Sign up with GitHub
//                                 </Button>
//                             </div>
//                             <div className="relative">
//                                 <div className="absolute inset-0 flex items-center">
//                                     <span className="w-full border-t" />
//                                 </div>
//                                 <div className="relative flex justify-center text-xs uppercase">
//                                     <span className="bg-background text-muted-foreground px-2">
//                                         or
//                                     </span>
//                                 </div>
//                             </div>
//                             <Form {...signUpForm}>
//                                 <form
//                                     onSubmit={signUpForm.handleSubmit(onSignUp)}
//                                     className="space-y-4"
//                                 >
//                                     <FormField
//                                         control={signUpForm.control}
//                                         name="name"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Name</FormLabel>
//                                                 <FormControl>
//                                                     <Input
//                                                         placeholder="John Doe"
//                                                         {...field}
//                                                     />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={signUpForm.control}
//                                         name="email"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Email</FormLabel>
//                                                 <FormControl>
//                                                     <Input
//                                                         placeholder="you@example.com"
//                                                         {...field}
//                                                     />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={signUpForm.control}
//                                         name="password"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Password</FormLabel>
//                                                 <FormControl>
//                                                     <div className="relative">
//                                                         <Input
//                                                             type={
//                                                                 showSignUpPassword
//                                                                     ? "text"
//                                                                     : "password"
//                                                             }
//                                                             placeholder="Create a password"
//                                                             {...field}
//                                                         />
//                                                         <button
//                                                             type="button"
//                                                             className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
//                                                             onClick={() =>
//                                                                 setShowSignUpPassword(
//                                                                     !showSignUpPassword,
//                                                                 )
//                                                             }
//                                                         >
//                                                             {showSignUpPassword ? (
//                                                                 <RiEyeOffLine className="h-4 w-4" />
//                                                             ) : (
//                                                                 <RiEyeLine className="h-4 w-4" />
//                                                             )}
//                                                         </button>
//                                                     </div>
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <Button
//                                         type="submit"
//                                         className="w-full cursor-pointer"
//                                     >
//                                         {loading3 && (
//                                             <LoadingIcon className="mr-3 -ml-1 h-5 w-5 animate-spin text-white" />
//                                         )}
//                                         Create Account
//                                     </Button>
//                                 </form>
//                             </Form>
//                             <div className="text-center text-sm">
//                                 {"Already have an account? "}
//                                 <Button
//                                     variant="link"
//                                     className="h-auto p-0 font-semibold"
//                                     onClick={() => setActiveTab("signin")}
//                                 >
//                                     Sign In
//                                 </Button>
//                             </div>
//                         </CardContent>
//                     </TabsContent>
//                 </Tabs>
//             )}

//             {error && (
//                 <div className="flex items-center gap-1 text-sm text-blue-700">
//                     <RiErrorWarningFill className="size-4" />
//                     {error}
//                 </div>
//             )}
//         </DialogContent>
//     );
// };

// export default AuthDialog;

// function LoadingIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//         >
//             <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//             ></circle>
//             <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             ></path>
//         </svg>
//     );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTheme } from "next-themes";
import { RiErrorWarningFill } from "@remixicon/react";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog-cn";
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

import GoogleLogo from "@/public/images/svg/google-logo.svg";
import Github from "@/public/images/svg/github.svg";
import { toast } from "sonner";

const userSignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const AuthDialog = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();
    const form = useForm<z.infer<typeof userSignInValidation>>({
        resolver: zodResolver(userSignInValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

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

    async function onSubmit(values: z.infer<typeof userSignInValidation>) {
        setLoading2(true);

        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
                callbackUrl: pathname,
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
            setLoading2(false);
        }
    }

    return (
        <DialogContent className="py-10 font-sans sm:max-w-md">
            <div className="mb-2 flex flex-col items-center gap-2">
                <div
                    className="border-border flex size-11 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                >
                    {theme === "dark" ? (
                        <Image
                            src="/images/logo-light.png"
                            alt=""
                            width={3840}
                            height={2160}
                            className="w-[2.75rem] rounded-full bg-black dark:bg-white"
                        />
                    ) : (
                        <Image
                            src="/images/logo-dark.png"
                            alt=""
                            width={3840}
                            height={2160}
                            className="w-[2.75rem] rounded-full bg-black dark:bg-white"
                        />
                    )}
                </div>
                <DialogHeader>
                    <DialogTitle className="text-2xl leading-tight font-semibold tracking-tight text-gray-900 sm:text-center md:text-3xl dark:text-white">
                        Log in to your account
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-normal text-gray-600 sm:text-center md:text-base dark:text-gray-300">
                        Welcome back! Please enter your details.
                    </DialogDescription>
                </DialogHeader>
            </div>

            <div className="space-y-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full"
                    >
                        <div className="space-y-4">
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
                            {/* <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-black dark:text-white">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="rounded-lg border-gray-300 transition-all focus:border-blue-500 focus:ring focus:ring-blue-200 dark:border-neutral-700"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
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
                        </div>
                        <div className="mt-2 text-right">
                            <Link
                                href="/forgot_password"
                                className="text-sm text-indigo-600 hover:underline dark:text-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            className="mt-3 flex w-full cursor-pointer items-center rounded-lg bg-indigo-600 py-2.5 text-white transition-all hover:bg-indigo-700"
                            disabled={loading2}
                        >
                            {loading2 ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </Form>

                {error && (
                    <div className="mt-4 rounded-lg bg-red-50 p-2 text-sm text-red-500">
                        <div className="flex items-center justify-center">
                            <RiErrorWarningFill className="mr-2 h-5 w-5 text-red-500" />
                            {error}
                        </div>
                    </div>
                )}

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
                        onClick={loginWithGoogle}
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Image
                                src={GoogleLogo}
                                alt="Google"
                                className="size-5"
                                width={16}
                                height={16}
                            />
                        )}
                        <span>Sign in with Google</span>
                    </Button>
                    <Button
                        variant="outline"
                        type="button"
                        className="flex items-center justify-center gap-2"
                        onClick={loginWithGit}
                        disabled={loading1}
                    >
                        {loading1 ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Image
                                src={Github}
                                alt="GitHub"
                                className="size-5"
                                width={16}
                                height={16}
                            />
                        )}
                        <span>Sign in with GitHub</span>
                    </Button>
                </div>

                <div className="mt-6 text-center text-sm tracking-tight">
                    <span className="text-gray-600">
                        Don&apos;t have an account?{" "}
                    </span>
                    <Link
                        href="/sign_up"
                        className="font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </DialogContent>
    );
};

export default AuthDialog;
