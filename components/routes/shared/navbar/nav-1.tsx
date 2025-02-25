"use client";
import { Button } from "@/components/ui/button";
import { RiMoonFill, RiSunLine } from "@remixicon/react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";

const Nav1 = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="bg-white px-10 py-4 shadow-sm">
            <div className="hidden items-center justify-between md:flex">
                <Link href="/" className="text-2xl font-bold text-[#2F2B6B]">
                    Cnippet
                </Link>

                <div className="flex items-center gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPagesOpen(true)}
                        onMouseLeave={() => setIsPagesOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-gray-700 transition hover:text-gray-900">
                            Components <ChevronDown className="size-4" />
                        </button>

                        {isPagesOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute left-0 top-full mt-5 w-48 rounded-xl border bg-white py-2 shadow-xl"
                            >
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                            </motion.div>
                        )}
                    </div>

                    <Link
                        href="#"
                        className="text-gray-700 transition hover:text-gray-900"
                    >
                        Sections
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-700 transition hover:text-gray-900"
                    >
                        Templates
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-700 transition hover:text-gray-900"
                    >
                        Showcase
                    </Link>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-[#2F2B6B] px-6 py-2 text-white w-full"
                    >
                        Remix Template
                    </motion.button>

                    <div className="w-full">
                        <div className="flex w-full items-center justify-center">
                            <Button
                                variant="ghost"
                                onClick={() => toggleTheme()}
                                className="hover:bg-dusk-500 hover:dark:bg-dawn-700 flex items-center justify-center gap-2 rounded-lg p-2 text-black dark:text-white"
                            >
                                {theme === "dark" ? (
                                    <RiSunLine className="size-5" />
                                ) : (
                                    <RiMoonFill className="size-5" />
                                )}
                                <span>Toogle theme</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav1;
