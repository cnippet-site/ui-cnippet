"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useSession } from "next-auth/react";
import { getUserProfile } from "@/lib/actions/profile.actions";
import { toast } from "sonner";
import Image from "next/image";

interface UserProfile {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    emailVerified?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export default function UserDashboard() {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState("overview");
    const [activeSection, setActiveSection] = useState("general");
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!session?.user?.id) return;

            try {
                const result = await getUserProfile(session.user.id);
                if (result.success && result.user) {
                    // Ensure required fields are not null
                    if (!result.user.name || !result.user.email) {
                        toast.error("User profile is incomplete");
                        return;
                    }
                    setUserProfile(result.user);
                } else {
                    toast.error(result.error || "Failed to fetch profile");
                }
            } catch (error) {
                toast.error(
                    `An error occurred while fetching profile: ${error}`,
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [session?.user?.id]);

    if (isLoading) {
        return (
            <div className="bg-background text-foreground min-h-screen">
                <div className="container mx-auto py-8">
                    <div className="flex items-center justify-center">
                        <div className="border-border border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!userProfile) {
        return (
            <div className="bg-background text-foreground min-h-screen">
                <div className="container mx-auto py-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">
                            Profile not found
                        </h1>
                        <p className="text-muted-foreground">
                            Please try again later
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background text-foreground min-h-screen dark:bg-black">
            {/* Top Navigation */}
            <header className="border-border border-b">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-muted flex size-10 items-center justify-center rounded-full">
                            <Image
                                src="/images/logo-light.png"
                                alt=""
                                className="size-9"
                                width={1080}
                                height={1080}
                            />
                        </div>
                        <span className="text-muted-foreground mx-2">/</span>
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 px-2"
                        >
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                            <span>{userProfile.name}</span>
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-border text-muted-foreground hover:bg-muted hover:text-foreground h-8 bg-transparent text-sm"
                        >
                            Feedback
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground h-8 text-sm"
                        >
                            Changelog
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground h-8 text-sm"
                        >
                            Help
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground h-8 text-sm"
                        >
                            Docs
                        </Button>
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                src={userProfile.image || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500">
                                {userProfile.name?.charAt(0) || "U"}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            {/* Secondary Navigation */}
            <div className="border-border bg-background border-b">
                <div className="container mx-auto px-4">
                    <nav className="flex space-x-4">
                        <Button
                            variant="ghost"
                            className={`h-12 rounded-none border-b-2 px-4 ${
                                activeTab === "overview"
                                    ? "border-primary text-foreground"
                                    : "text-muted-foreground hover:text-foreground border-transparent"
                            }`}
                            onClick={() => setActiveTab("overview")}
                        >
                            Overview
                        </Button>
                        <Button
                            variant="ghost"
                            className={`h-12 rounded-none border-b-2 px-4 ${
                                activeTab === "activity"
                                    ? "border-primary text-foreground"
                                    : "text-muted-foreground hover:text-foreground border-transparent"
                            }`}
                            onClick={() => setActiveTab("activity")}
                        >
                            Activity
                        </Button>
                        <Button
                            variant="ghost"
                            className={`h-12 rounded-none border-b-2 px-4 ${
                                activeTab === "personal"
                                    ? "border-primary text-foreground"
                                    : "text-muted-foreground hover:text-foreground border-transparent"
                            }`}
                            onClick={() => setActiveTab("personal")}
                        >
                            Settings
                        </Button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-8">
                <h1 className="mb-8 text-3xl font-bold">Account Settings</h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <div className="relative mb-4 w-full">
                                <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
                                <Input
                                    placeholder="Search..."
                                    className="border-border bg-muted text-foreground placeholder:text-muted-foreground w-full pl-9"
                                />
                            </div>
                        </div>

                        <nav className="space-y-1">
                            <Button
                                variant="ghost"
                                className={`w-full justify-start px-3 py-2 text-left ${
                                    activeSection === "general"
                                        ? "bg-muted text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                                onClick={() => setActiveSection("general")}
                            >
                                General
                            </Button>
                            <Button
                                variant="ghost"
                                className={`w-full justify-start px-3 py-2 text-left ${
                                    activeSection === "authentication"
                                        ? "bg-muted text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                                onClick={() =>
                                    setActiveSection("authentication")
                                }
                            >
                                Authentication
                            </Button>
                            <Button
                                variant="ghost"
                                className={`w-full justify-start px-3 py-2 text-left ${
                                    activeSection === "billing"
                                        ? "bg-muted text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                                onClick={() => setActiveSection("billing")}
                            >
                                Billing
                            </Button>
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        {activeSection === "general" && (
                            <div className="space-y-6">
                                {/* Avatar Section */}
                                <Card className="bg-muted/40 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Avatar</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            This is your avatar.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-start gap-4">
                                            <div className="relative">
                                                <Avatar className="border-border from-primary to-primary-foreground h-24 w-24 border-2 bg-gradient-to-br">
                                                    <AvatarImage
                                                        src={
                                                            userProfile.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={
                                                            userProfile.name ||
                                                            "User"
                                                        }
                                                    />
                                                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-semibold">
                                                        {userProfile.name?.charAt(
                                                            0,
                                                        ) || "U"}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Display Name Section */}
                                <Card className="bg-muted/40 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Display Name</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Your display name.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <Input
                                                id="displayName"
                                                value={userProfile.name || ""}
                                                readOnly
                                                className="border-border bg-muted text-foreground focus-visible:ring-border"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Email Section */}
                                <Card className="bg-muted/40 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Email Address</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Your email address.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            <Input
                                                id="email"
                                                type="email"
                                                value={userProfile.email || ""}
                                                readOnly
                                                className="border-border bg-muted text-foreground focus-visible:ring-border"
                                            />
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    className={`${
                                                        userProfile.emailVerified
                                                            ? "bg-emerald-500/20 text-emerald-500"
                                                            : "bg-red-500/20 text-red-500"
                                                    } border-none px-2 py-px`}
                                                >
                                                    {userProfile.emailVerified
                                                        ? "Verified"
                                                        : "Unverified"}
                                                    {/* <CheckCircle className="size-4" /> */}
                                                </Badge>
                                                {userProfile.emailVerified && (
                                                    <span className="text-muted-foreground text-xs">
                                                        Last verified on{" "}
                                                        {new Date(
                                                            userProfile.emailVerified,
                                                        ).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeSection === "authentication" && (
                            <div className="space-y-6">
                                <Card className="border-border bg-muted/50">
                                    <CardHeader>
                                        <CardTitle>
                                            Two-Factor Authentication
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Add an extra layer of security to
                                            your account.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <div className="text-foreground font-medium">
                                                    Authenticator App
                                                </div>
                                                <div className="text-muted-foreground text-sm">
                                                    Use an authenticator app to
                                                    generate one-time codes
                                                </div>
                                            </div>
                                            <Switch />
                                        </div>
                                        <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <div className="text-foreground font-medium">
                                                    Text Message
                                                </div>
                                                <div className="text-muted-foreground text-sm">
                                                    Receive a code via SMS to
                                                    verify your identity
                                                </div>
                                            </div>
                                            <Switch />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeSection === "billing" && (
                            <div className="space-y-6">
                                <Card className="border-border bg-muted/40 shadow-none">
                                    <CardHeader>
                                        <CardTitle>Billing Plan</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            Your current subscription plan.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="border-border bg-muted rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-primary text-lg font-medium">
                                                        Free Plan
                                                    </h3>
                                                    <p className="text-muted-foreground text-sm">
                                                        Your subscription is
                                                        active
                                                    </p>
                                                </div>
                                                <Badge className="bg-emerald-400 text-white">
                                                    Active
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
