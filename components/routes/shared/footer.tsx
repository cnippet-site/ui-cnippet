import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="overflow-hidden bg-[#09071b] text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-3xl font-medium text-white sm:text-4xl lg:mb-16"
                >
                    UI kit to make beautiful, animated interfaces, faster.
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                            Pages
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Blog",
                                "About",
                                "Services",
                                "Our Team",
                                "FAQ",
                            ].map((platform) => (
                                <li key={platform}>
                                    <Link
                                        href="#"
                                        className="transition hover:text-[#FFE27D]"
                                    >
                                        {platform}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                            Components
                        </h3>
                        <ul className="space-y-2">
                            {[
                                " Header Style",
                                "Hero Sections",
                                "Features Sections",
                                "Grid Content",
                                "Maintenance Style",
                            ].map((platform) => (
                                <li key={platform}>
                                    <Link
                                        href="#"
                                        className="transition hover:text-[#FFE27D]"
                                    >
                                        {platform}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">
                            Social
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Facebook",
                                "Twitter",
                                "Instagram",
                                "LinkedIn",
                            ].map((platform) => (
                                <li key={platform}>
                                    <Link
                                        href="#"
                                        className="transition hover:text-[#FFE27D]"
                                    >
                                        {platform}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4 lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white">
                            Newsletter
                        </h3>
                        <form className="flex flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-xl border border-gray-700 bg-transparent px-4 py-1 text-white placeholder-gray-500 focus:border-[#FFE27D] focus:outline-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="rounded-xl bg-[#ffde73] px-6 py-3 font-medium text-[#2F2B6B] transition-colors hover:bg-[#ffde73]"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8 lg:mt-16">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                        <p className="text-sm">
                            Cnippet UI © 2025. All Rights Reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-xs">
                            {[
                                "Privacy Policy",
                                "Terms of Service",
                                "Cancellation Terms",
                            ].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="transition hover:text-[#FFE27D] hover:underline"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
