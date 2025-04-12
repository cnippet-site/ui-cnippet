"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/motion/in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { updatePassword, updateProfile } from "@/lib/actions/profile.actions";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { profileFormSchema } from "@/lib/validation/profile";
import { FileUpload } from "@/components/file-upload";
import { ImageIcon, Pencil } from "lucide-react";
import Image from "next/image";

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfilePage() {
    const { data: session, update: updateSession } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [isEditingImage, setIsEditingImage] = useState(false);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            name: session?.user?.name || "",
            email: session?.user?.email || "",
            imageUrl: session?.user?.image || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const toggleEditImage = () => setIsEditingImage((current) => !current);

    const handleSaveChanges = async (values: ProfileFormValues) => {
        if (!session?.user?.id) return;

        setIsLoading(true);
        try {
            let hasChanges = false;
            let success = true;
            let errorMessage = "";

            // Update profile if name, email, or image changed
            if (
                values.name !== session.user.name ||
                values.email !== session.user.email ||
                values.imageUrl !== session.user.image
            ) {
                const profileResult = await updateProfile({
                    userId: session.user.id,
                    name:
                        values.name !== session.user.name
                            ? values.name
                            : undefined,
                    email:
                        values.email !== session.user.email
                            ? values.email
                            : undefined,
                    imageUrl:
                        values.imageUrl !== session.user.image
                            ? values.imageUrl
                            : undefined,
                });

                if (!profileResult.success) {
                    success = false;
                    errorMessage =
                        profileResult.error || "Failed to update profile";
                }
                hasChanges = true;
            }

            // Update password if password fields are filled
            if (values.currentPassword && values.newPassword && success) {
                const passwordResult = await updatePassword({
                    userId: session.user.id,
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword,
                });

                if (!passwordResult.success) {
                    success = false;
                    errorMessage =
                        passwordResult.error || "Failed to update password";
                }
                hasChanges = true;
            }

            if (!hasChanges) {
                toast.error("No changes to save");
                return;
            }

            if (success) {
                toast.success("Profile updated successfully");
                // Clear password fields
                form.reset({
                    ...values,
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });

                // Update the session to reflect the changes
                // Pass the updated values to updateSession to ensure they're included in the session
                await updateSession({
                    ...session,
                    user: {
                        ...session.user,
                        name: values.name,
                        email: values.email,
                        image: values.imageUrl,
                    },
                });

                // Force a page refresh to ensure the session is updated
                window.location.reload();
            } else {
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error(`An error occurred while updating profile - ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    console.log(session?.user?.image);

    return (
        <div className="container mx-auto py-10">
            <InView>
                <div className="mb-8 flex flex-col items-center">
                    <div className="relative mb-4">
                        <Image
                            src={session?.user?.image || "/images/6.png"}
                            alt="Profile"
                            width={96}
                            height={96}
                            className="rounded-full"
                        />
                        {/* <Avatar className="h-24 w-24"> */}
                        {/* <AvatarImage src={session?.user?.image || ""} /> */}
                        {/* <AvatarFallback>
                                {session?.user?.name?.charAt(0) || "U"}
                            </AvatarFallback> */}
                        {/* </Avatar> */}
                        <Button
                            onClick={toggleEditImage}
                            variant="outline"
                            size="icon"
                            className="absolute right-0 -bottom-2 rounded-full"
                        >
                            <Pencil className="h-3 w-3" />
                        </Button>
                    </div>
                    <h1 className="text-3xl font-bold">
                        {session?.user?.name}
                    </h1>
                </div>
            </InView>

            {isEditingImage && (
                <div className="mx-auto mb-8 w-full max-w-3xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Picture</CardTitle>
                            <CardDescription>
                                Upload a new profile picture
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {!session?.user?.image ? (
                                    <div className="flex h-60 items-center justify-center rounded-md bg-slate-200">
                                        <ImageIcon className="h-10 w-10 text-slate-500" />
                                    </div>
                                ) : (
                                    <div className="relative mt-2 aspect-square w-full max-w-[200px]">
                                        <Avatar className="h-full w-full">
                                            <AvatarImage
                                                alt="Profile"
                                                src={session.user.image}
                                            />
                                            <AvatarFallback>
                                                {session.user.name?.charAt(0) ||
                                                    "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                )}
                                <div>
                                    <FileUpload
                                        onChange={(value) => {
                                            if (value && session) {
                                                form.setValue(
                                                    "imageUrl",
                                                    value.url,
                                                );
                                                // Update the session immediately with the new image URL
                                                updateSession({
                                                    ...session,
                                                    user: {
                                                        ...session.user,
                                                        image: value.url,
                                                    },
                                                });
                                                handleSaveChanges({
                                                    ...form.getValues(),
                                                    imageUrl: value.url,
                                                });
                                                setIsEditingImage(false);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            <Tabs defaultValue="personal" className="mx-auto w-full max-w-3xl">
                <TabsList className="mb-8 grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="subscription">Subscription</TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>
                                Update your personal details and profile
                                information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(
                                        handleSaveChanges,
                                    )}
                                    className="space-y-6"
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Display Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder={
                                                            session?.user
                                                                ?.name || ""
                                                        }
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
                                                <FormLabel>
                                                    Email Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        type="email"
                                                        placeholder={
                                                            session?.user
                                                                ?.email || ""
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="space-y-4 border-t pt-4">
                                        <h3 className="font-medium">
                                            Update Password
                                        </h3>

                                        <FormField
                                            control={form.control}
                                            name="currentPassword"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Current Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="password"
                                                            placeholder="Enter your current password"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="newPassword"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        New Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="password"
                                                            placeholder="Enter new password"
                                                        />
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
                                                    <FormLabel>
                                                        Confirm New Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="password"
                                                            placeholder="Confirm new password"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full"
                                    >
                                        {isLoading
                                            ? "Saving..."
                                            : "Save Changes"}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>
                                Manage your account security settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">
                                            Two-Factor Authentication
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            Add an extra layer of security to
                                            your account
                                        </p>
                                    </div>
                                    <Button variant="outline">Enable</Button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">
                                            Login History
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            View your recent login activity
                                        </p>
                                    </div>
                                    <Button variant="outline">
                                        View History
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="subscription">
                    <Card>
                        <CardHeader>
                            <CardTitle>Subscription</CardTitle>
                            <CardDescription>
                                Manage your subscription and billing
                                information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">
                                            Current Plan
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            Free Plan
                                        </p>
                                    </div>
                                    <Button variant="outline">Upgrade</Button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">
                                            Billing History
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            View your past invoices and payments
                                        </p>
                                    </div>
                                    <Button variant="outline">
                                        View History
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
