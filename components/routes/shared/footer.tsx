"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <footer className="bg-black px-4 py-12 text-white md:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo and Social Links */}
                    <div className="flex flex-col lg:col-span-1">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/logo-dark.png"
                                    alt=""
                                    className="size-9"
                                    width={1080}
                                    height={1080}
                                />
                                <span className="hidden lg:inline-block">
                                    Cnippet UI
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">Motion</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/motion/installation">
                                Installation
                            </FooterLink>
                            <FooterLink href="/motion/cursor">
                                Cursor
                            </FooterLink>
                            <FooterLink href="/motion/dialog">
                                Dialog
                            </FooterLink>
                            <FooterLink href="/motion/text-effect">
                                Text Effect
                            </FooterLink>
                            <FooterLink href="/motion/text-loop">
                                Text Loop
                            </FooterLink>
                            <FooterLink href="/motion/text-roll">
                                Text Roll
                            </FooterLink>
                            <FooterLink href="/motion/text-shimmer">
                                Text Shimmer
                            </FooterLink>
                            <FooterLink href="/motion/text-wave">
                                Text Wave
                            </FooterLink>
                        </ul>
                    </div>

                    {/* More Column */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">Chart</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/chart/area-chart">
                                Area Chart
                            </FooterLink>
                            <FooterLink href="/chart/line-chart">
                                Line Chart
                            </FooterLink>
                            <FooterLink href="/chart/bar-chart">
                                Bar Chart
                            </FooterLink>
                            <FooterLink href="/chart/pie-chart">
                                Pie Chart
                            </FooterLink>
                            <FooterLink href="/chart/radial-chart">
                                Radial Chart
                            </FooterLink>
                        </ul>
                    </div>

                    {/* About Vercel Column */}
                    <div className="lg:col-span-1">
                        <h3 className="mb-4 font-medium">More...</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/motion/accordion">
                                Motion Components
                            </FooterLink>
                            <FooterLink href="/chart/area-chart">
                                Chart Components
                            </FooterLink>
                            <FooterLink href="#">Sections</FooterLink>
                            <FooterLink href="#">Pages</FooterLink>
                            <FooterLink href="#">Templates</FooterLink>
                        </ul>
                    </div>

                    {/* Legal and Newsletter Column */}
                    <div className="lg:col-span-2">
                        <div>
                            <h3 className="mb-4 font-medium">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mb-4 text-sm text-gray-400">
                                Stay updated on new releases and features,
                                guides, and case studies.
                            </p>
                            <div className="flex max-w-[90%] flex-col gap-2 rounded-lg border-none bg-[#1a1a1a] p-1 text-white sm:flex-row">
                                <Input
                                    type="email"
                                    placeholder="you@domain.com"
                                    className="h-7 border-none bg-black"
                                />
                                <Button size="sm" className="h-7 text-sm">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Theme Toggle */}
                <div className="mt-12 flex justify-between">
                    <div className="">
                        <p className="mb-4 text-sm text-gray-400">
                            © 2025 Cnippet, Inc.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/cnippet-site/ui-cnippet"
                                className="text-gray-400 hover:text-white"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <XIcon />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white"
                            >
                                <MIcon />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="flex gap-2 rounded-full border border-neutral-700 p-1.5">
                            <button
                                onClick={() => toggleTheme()}
                                className={`rounded-full p-1 ${theme === "light" ? "bg-[#1a1a1a]" : ""}`}
                                aria-label="Light mode"
                            >
                                <Sun className="size-4" />
                            </button>
                            <button
                                onClick={() => toggleTheme()}
                                className={`rounded-full p-1 ${theme === "dark" ? "bg-[#1a1a1a]" : ""}`}
                                aria-label="Light mode"
                            >
                                <Moon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-gray-400 hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}

function XIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                fill="currentColor"
            />
        </svg>
    );
}

function MIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.7 5.3c-1.3-1.4-3-2.1-5.1-2.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.1 0 3.8-.7 5.1-2.1 1.3-1.3 2-3.1 2-5.1 0-1.8-.7-3.6-2-4.7zm-5.1 9.8c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0 2.3-1.9 4.2-4.2 4.2z"
                fill="currentColor"
            />
        </svg>
    );
}
