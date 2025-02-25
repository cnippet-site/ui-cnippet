"use client";

import { InfiniteSlider } from "@/components/motion/infinite-slider";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Banner = () => (
    <div className="text-center text-sm text-black">
        <div className="mx-auto max-w-6xl rounded-t-2xl bg-[#a7ded0] py-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <InfiniteSlider gap={20}>
                    <p className="mt-1">
                        We are doing massive update for Kloomix, so enjoy
                    </p>
                    <p className="mt-1">
                        We are doing massive update for Kloomix, so enjoy
                    </p>
                    <p className="mt-1">
                        We are doing massive update for Kloomix, so enjoy
                    </p>
                </InfiniteSlider>
                </div>
        </div>
    </div>
);

export default function Navbar() {
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    return (
        <>
            <header className="absolute top-5 z-50 w-full">
                <Banner />
                <nav className="w-full font-sans">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl bg-white px-6 py-5 shadow-lg">
                            <div className="md:flex hidden items-center justify-between">
                                <Link
                                    href="/"
                                    className="text-2xl font-bold text-[#2F2B6B]"
                                >
                                    Kloomix
                                </Link>

                                <div className="flex items-center gap-8">
                                    

                                    <div
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
                                        className="rounded-full bg-[#2F2B6B] px-6 py-2 text-white"
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
