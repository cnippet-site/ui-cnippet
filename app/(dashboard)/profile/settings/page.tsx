"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { updateUserSettings } from "@/lib/actions/profile.actions";

export default function SettingsPage() {
    const { data: session, status, update } = useSession();
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [inAppNotifications, setInAppNotifications] = useState(false);
    const [language, setLanguage] = useState("en");
    const [timezone, setTimezone] = useState("UTC");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setTheme(
                (session.user.preferredTheme as "light" | "dark" | "system") ||
                "system",
            );
            setEmailNotifications(session.user.emailNotifications ?? true);
            setInAppNotifications(session.user.inAppNotifications ?? false);
            setLanguage(session.user.preferredLanguage || "en");
            setTimezone(session.user.preferredTimezone || "UTC");
        }
    }, [session, status]);

    const handleSaveSettings = async () => {
        setIsSaving(true);
        const settingsData = {
            theme,
            emailNotifications,
            inAppNotifications,
            language,
            timezone,
        };

        const result = await updateUserSettings(settingsData);
        setIsSaving(false);

        if (result && "error" in result) {
            if ("general" in result.error) {
                toast.error(result.error.general);
            } else {
                toast.error(
                    "Failed to save settings. Please check your inputs.",
                );
            }
        } else {
            toast.success(result?.message || "Settings saved successfully!");
            if (result?.user) {
                await update({
                    user: {
                        preferredTheme: result.user.preferredTheme,
                        emailNotifications: result.user.emailNotifications,
                        inAppNotifications: result.user.inAppNotifications,
                        preferredLanguage: result.user.preferredLanguage,
                        preferredTimezone: result.user.preferredTimezone,
                    },
                });
            }
        }
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Settings</h1>
            <p className="mb-6 text-gray-600">
                Configure your application preferences.
            </p>

            <Card className="shadow-none">
                <CardHeader>
                    <CardTitle>Application Preferences</CardTitle>
                    <CardDescription>
                        Customize how the application looks and behaves for you.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Theme Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Select
                            value={theme}
                            onValueChange={(
                                value: "light" | "dark" | "system",
                            ) => setTheme(value)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500">
                            Choose your preferred application theme.
                        </p>
                    </div>

                    {/* Notification Preferences */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Notifications</h3>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">
                                Email Notifications
                            </Label>
                            <Switch
                                id="email-notifications"
                                checked={emailNotifications}
                                onCheckedChange={setEmailNotifications}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="in-app-notifications">
                                In-App Notifications
                            </Label>
                            <Switch
                                id="in-app-notifications"
                                checked={inAppNotifications}
                                onCheckedChange={setInAppNotifications}
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            Control how you receive alerts and updates.
                        </p>
                    </div>

                    {/* Language Settings */}
                    <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500">
                            Choose your preferred language for the application.
                        </p>
                    </div>

                    {/* Timezone Settings */}
                    <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select value={timezone} onValueChange={setTimezone}>
                            <SelectTrigger className="w-[250px]">
                                <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="UTC">
                                    UTC (Coordinated Universal Time)
                                </SelectItem>
                                <SelectItem value="EST">
                                    EST (Eastern Standard Time)
                                </SelectItem>
                                <SelectItem value="PST">
                                    PST (Pacific Standard Time)
                                </SelectItem>
                                <SelectItem value="IST">
                                    IST (Indian Standard Time)
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500">
                            Set your local timezone for time displays.
                        </p>
                    </div>

                    <Button onClick={handleSaveSettings} disabled={isSaving}>
                        {isSaving ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save Settings"
                        )}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
