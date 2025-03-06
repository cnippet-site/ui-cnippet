"use client";

import { InfiniteSlider } from "@/components/motion/infinite-slider";
import { motion } from "motion/react";
import Link from "next/link";
// import { useState } from "react";

const Banner = () => (
    <div className="border-t border-dashed text-center text-sm text-black dark:border-neutral-800">
        <div className="relative mx-auto max-w-7xl bg-[#a7ded0]">
            <div className="absolute left-0 z-50 h-full w-20 bg-gradient-to-r from-[#a7ded0]" />
            <div className="absolute right-0 z-50 h-full w-20 bg-gradient-to-l from-[#a7ded0]" />

            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-5 lg:px-0">
                <InfiniteSlider gap={20}>
                    <p className="mt-1">
                        We are doing massive update for Cnippet, so enjoy
                    </p>
                    <p className="mt-1">
                        We are doing massive update for Cnippet, so enjoy
                    </p>
                    <p className="mt-1">
                        We are doing massive update for Cnippet, so enjoy
                    </p>
                </InfiniteSlider>
            </div>
        </div>
    </div>
);

export default function Navbar() {
    // const [isPagesOpen, setIsPagesOpen] = useState(false);

    return (
        <>
            <header className="absolute top-5 z-50 w-full">
                <Banner />
                <nav className="w-full border-b border-t border-dashed font-sans dark:border-neutral-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
                        <div className="py-3">
                            <div className="hidden items-center justify-between md:flex">
                                <Link
                                    href="/"
                                    className="text-2xl font-medium text-black dark:text-white"
                                >
                                    Cnippet
                                </Link>

                                <div className="flex items-center gap-8">
                                    {/* changes pending */}
                                    {/* <div
                                        className="relative"
                                        onMouseEnter={() =>
                                            setIsPagesOpen(true)
                                        }
                                        onMouseLeave={() =>
                                            setIsPagesOpen(false)
                                        }
                                    >
                                        <button className="flex items-center gap-1 text-gray-700 transition hover:text-gray-900">
                                            Components{" "}
                                            <ChevronDown className="size-4"/>
                                        </button>

                                        {isPagesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute left-0 top-full w-48 rounded-xl border bg-white py-2 shadow-xl"
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
                                    </div> */}

                                    <Link
                                        href="/component/accordion"
                                        className="cursor-none text-gray-700 transition hover:text-gray-900 dark:text-white"
                                    >
                                        Components
                                    </Link>
                                    <Link
                                        href="/motion/accordion"
                                        className="cursor-none text-gray-700 transition hover:text-gray-900 dark:text-white"
                                    >
                                        Motions
                                    </Link>
                                    <Link
                                        href="#"
                                        className="cursor-none text-gray-700 transition hover:text-gray-900 dark:text-white"
                                    >
                                        Sections
                                    </Link>
                                    <Link
                                        href="#"
                                        className="cursor-none text-gray-700 transition hover:text-gray-900 dark:text-white"
                                    >
                                        Templates
                                    </Link>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-lg bg-[#2F2B6B] px-3 py-2 text-white"
                                    >
                                        Remix Template
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
