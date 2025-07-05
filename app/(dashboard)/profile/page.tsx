"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateGeneralInfoSchema } from "@/lib/validations/profile";
import { updateGeneralInformation } from "@/lib/actions/profile.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function GeneralInformationPage() {
    const { data: session, status, update } = useSession();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof updateGeneralInfoSchema>>({
        resolver: zodResolver(updateGeneralInfoSchema),
        defaultValues: {
            name: "",
            username: "",
        },
    });

    // Populate form with session data on load
    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            form.reset({
                name: session.user.name || "",
                username: session.user.username || "",
            });
        }
    }, [session, status, form]);

    async function onSubmit(values: z.infer<typeof updateGeneralInfoSchema>) {
        setIsPending(true);
        const result = await updateGeneralInformation(values);
        setIsPending(false);

        if (result && "error" in result) {
            if ("general" in result.error) {
                toast.error(result.error.general);
            } else {
                if (result.error.name && result.error.name[0]) {
                    form.setError("name", { type: "manual", message: result.error.name[0] });
                }
                if (result.error.username && result.error.username[0]) {
                    form.setError("username", { type: "manual", message: result.error.username[0] });
                }
                toast.error("Please correct the errors in the form.");
            }
        } else {
            toast.success(result?.message || "Profile updated!");
            // Update the client-side session if the data changed
            if (result?.user) {
                await update({ user: { name: result.user.name, username: result.user.username } });
            }
        }
    }

    if (status === "loading") {
        return <div className="flex justify-center items-center h-full">Loading profile...</div>;
    }

    if (!session?.user) {
        return <div className="flex justify-center items-center h-full text-red-500">Please sign in to view your profile.</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">General Information</h1>
            <p className="text-gray-600 mb-6">Manage your basic account details.</p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input value={session.user.email || ""} disabled className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed" />
                        </FormControl>
                        <FormMessage />
                        <p className="text-sm text-gray-500 mt-1">Email cannot be changed here.</p>
                    </FormItem>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save Changes"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
