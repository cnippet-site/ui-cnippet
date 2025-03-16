"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Github, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            let data;
            try {
                const textResponse = await response.text();
                data = textResponse ? JSON.parse(textResponse) : {};
            } catch (parseError) {
                console.error("Failed to parse response:", parseError);
                throw new Error("Invalid server response");
            }

            if (!response.ok) {
                if (data.error === "Email already subscribed") {
                    setStatus("success");
                    setMessage("You're already subscribed to our newsletter!");
                    setEmail("");
                    return;
                }
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setMessage("Successfully subscribed to newsletter!");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error ? error.message : "Failed to subscribe",
            );
            console.error("Newsletter subscription error:", error);
        }
    };

    return (
        <footer className="bg-black px-4 py-12 text-white md:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Logo and Social Links */}
                    <div className="col-span-2 flex flex-col lg:col-span-1">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/logo-dark.png"
                                    alt=""
                                    className="size-9"
                                    width={1080}
                                    height={1080}
                                />
                                <span className="inline-block">Cnippet UI</span>
                            </Link>
                        </div>
                    </div>

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
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <div>
                            <h3 className="mb-4 font-medium">
                                Subscribe to our newsletter
                            </h3>
                            <p className="mb-4 text-sm text-gray-400">
                                Stay updated on new releases and features,
                                guides, and case studies.
                            </p>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-2 rounded-lg border-none bg-[#1a1a1a] p-1 text-white sm:flex-row md:max-w-[90%]"
                            >
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@domain.com"
                                    className="h-8 border-none bg-black text-white"
                                />
                                <Button size="sm" className="h-8 text-sm">
                                    {status === "loading" ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        "Subscribe"
                                    )}
                                </Button>
                            </form>
                            <p
                                className={`mt-1 text-xs ${status === "success" ? "text-green-500" : "text-red-500"}`}
                            >
                                {message}
                            </p>
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
                        {mounted && (
                            <div className="flex gap-2 rounded-full border border-neutral-800 p-1">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`rounded-full p-1.5 ${theme === "light" ? "bg-[#1a1a1a]" : ""}`}
                                    aria-label="Light mode"
                                >
                                    <Sun className="size-4" />
                                </button>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`rounded-full p-1.5 ${theme === "dark" ? "bg-[#1a1a1a]" : ""}`}
                                    aria-label="Dark mode"
                                >
                                    <Moon className="size-4" />
                                </button>
                            </div>
                        )}
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
