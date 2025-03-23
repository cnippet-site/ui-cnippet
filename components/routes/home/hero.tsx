"use client";

import { TextLoop } from "@/components/motion/text-loop";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <section className="bg-background relative h-screen border-b border-dashed dark:border-neutral-800">
                <div className="z-0 h-full flex-auto items-center justify-center">
                    <div className="mx-4 flex h-full max-w-7xl flex-col gap-12 border-r border-l border-dashed px-4 py-20 pt-32 text-black md:mx-auto md:flex-row md:px-6 md:pt-40 dark:border-neutral-800 dark:text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="mb-6 max-w-xl text-sm font-medium text-neutral-600 uppercase md:text-xl dark:text-neutral-400">
                                Tired of{" "}
                                <TextLoop className="">
                                    <span>Fixing AI-Generated UI</span>
                                    <span>Same Boilerplate</span>
                                    <span>Same Components</span>
                                    <span>Same Design</span>
                                </TextLoop>
                            </div>
                            <h1 className="mb-4 text-3xl font-medium tracking-wide sm:text-5xl md:mb-8 md:text-6xl">
                                We skip the boilerplate to deliver
                                developer-first components.
                            </h1>
                            <p className="mb-6 max-w-xl text-sm text-neutral-700 md:text-base dark:text-neutral-400">
                                While AI tools churn out generic UI blocks,
                                Cnippet delivers curated React components
                                precision-tuned for SaaS, e-commerce, and
                                data-heavy dashboards. Built on Framer Motion
                                and shadcn foundations, our production-grade
                                elements come with:
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
                                className="text-center text-sm"
                            >
                                <div className="">
                                    <div className="text-5xl leading-none font-bold md:text-[200px]">
                                        15
                                    </div>
                                    <div className="text-2xl">Page Sample</div>
                                </div>
                                <div>
                                    <div className="text-5xl leading-none font-bold md:text-[200px]">
                                        199+
                                    </div>
                                    <div className="text-2xl">Remixed</div>
                                </div>
                                <div>
                                    <div className="text-5xl leading-none font-bold md:text-[200px]">
                                        99+
                                    </div>
                                    <div className="text-2xl">Blocks</div>
                                </div>
                                <div>
                                    <div className="text-5xl leading-none font-bold md:text-[200px]">
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
