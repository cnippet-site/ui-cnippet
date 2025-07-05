"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProfileLayoutProps {
    children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    const pathname = usePathname();

    const profileNavItems = [
        { name: "General Information", href: "/profile" },
        { name: "Settings", href: "/profile/settings" },
        { name: "Security", href: "/profile/security" },
    ];

    return (
        <div className="flex min-h-[calc(100vh-64px)] w-full flex-col items-center py-8">
            <Card className="flex w-full max-w-4xl flex-col shadow-lg md:flex-row">
                <div className="w-full border-r border-b border-gray-200 p-4 md:w-1/4 md:border-b-0 dark:border-gray-800">
                    <h2 className="mb-4 text-xl font-semibold">Profile</h2>
                    <nav className="flex flex-col space-y-1">
                        {profileNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                                    pathname === item.href
                                        ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                        : "text-gray-700 dark:text-gray-300",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex-1 p-6">{children}</div>
            </Card>
        </div>
    );
}
