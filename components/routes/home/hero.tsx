"use client";

import { TextLoop } from "@/components/motion/text-loop";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <section className="relative h-screen border-b border-dashed bg-background dark:border-neutral-800">
                <div className="z-0 h-full flex-auto items-center justify-center">
                    <div className="mx-4 flex h-full max-w-7xl flex-col gap-12 border-l border-r border-dashed px-4 py-20 pt-32 text-black dark:border-neutral-800 dark:text-white md:mx-auto md:flex-row md:px-6 md:pt-40">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="mb-4 text-3xl font-medium tracking-wide sm:text-5xl md:mb-8 md:text-6xl">
                                Beautiful UI components built with Motion,
                                Tailwind CSS and React.
                            </h1>
                            <p className="mb-6 max-w-xl text-sm text-neutral-700 dark:text-neutral-400 md:text-base">
                                Cnippet UI is a chill set of React & Next.js
                                components, built on top of motion and shadcn,
                                all about keeping the web accessible. Easy to
                                customize and just copy & paste into your React
                                projects. Plus, it includes Tailwind CSS for
                                sleek styling right out of the box.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-fit rounded-lg bg-[#ffde73] px-6 py-2 font-medium text-black"
                            >
                                <Link href="/component/button">
                                    Explore components
                                </Link>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex w-full items-center justify-center"
                        >
                            <TextLoop
                                interval={3}
                                transition={{
                                    type: "spring",
                                    stiffness: 900,
                                    damping: 80,
                                    mass: 10,
                                }}
                                className="font-mono text-center text-sm"
                            >
                                <div className="">
                                    <div className="text-5xl font-bold leading-none md:text-[200px]">
                                        15
                                    </div>
                                    <div className="text-2xl">Page Sample</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold leading-none md:text-[200px]">
                                        199+
                                    </div>
                                    <div className="text-2xl">Remixed</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold leading-none md:text-[200px]">
                                        99+
                                    </div>
                                    <div className="text-2xl">Blocks</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold leading-none md:text-[200px]">
                                        10+
                                    </div>
                                    <div className="text-2xl">Category</div>
                                </div>
                            </TextLoop>
                        </motion.div>
                    </div>
                </div>

                {/* <div className="absolute top-0 -z-10 h-[calc(100vh)] w-full flex-auto overflow-hidden rounded-b-2xl bg-[#10101080]"></div>
                <div className="absolute top-0 -z-20 h-[calc(100vh)] w-full flex-auto overflow-hidden rounded-b-2xl">
                    <video
                        src="https://res.cloudinary.com/dphulm0s9/video/upload/v1740294178/TrWocMCSsxh60zz32yvbu6yYdGs.mp4"
                        muted
                        autoPlay
                        loop
                        className="block h-full w-full cursor-auto object-cover"
                    />
                </div> */}
            </section>
        </>
    );
}
