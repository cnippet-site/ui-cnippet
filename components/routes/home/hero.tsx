"use client";

import { TextLoop } from "@/components/motion/text-loop";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <>
            <section className="relative h-screen">
                <div className="z-0 h-full flex-auto items-center justify-center">
                    <div className="mx-auto flex flex-col md:flex-row h-full max-w-[80%] gap-12 px-6 py-20 pt-40 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="mb-8 text-4xl sm:text-5xl md:text-7xl font-medium tracking-wide">
                                Start your Framer project with Kloomix template
                            </h1>
                            <p className="mb-12 max-w-xl md:text-lg">
                                Kloomix is a Framer template that includes the
                                various website components needed to create a
                                landing page. The idea is for you to be able to
                                speed up the process of creating a website using
                                the Framer platform.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-fit rounded-full bg-[#ffde73] px-8 py-3 font-medium text-black"
                            >
                                Explore the Features
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
                                className="text-center font-mono text-sm"
                            >
                                <div className="">
                                    <div className="md:text-[200px] font-bold leading-none">
                                        15
                                    </div>
                                    <div className="text-2xl">Page Sample</div>
                                </div>
                                <div>
                                    <div className="text-[200px] font-bold leading-none">
                                        199+
                                    </div>
                                    <div className="text-2xl">Remixed</div>
                                </div>
                                <div>
                                    <div className="text-[200px] font-bold leading-none">
                                        99+
                                    </div>
                                    <div className="text-2xl">Blocks</div>
                                </div>
                                <div>
                                    <div className="text-[200px] font-bold leading-none">
                                        10+
                                    </div>
                                    <div className="text-2xl">Category</div>
                                </div>
                            </TextLoop>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute top-0 -z-10 h-[calc(100vh)] w-full flex-auto overflow-hidden rounded-b-2xl bg-[#10101080]"></div>
                <div className="absolute top-0 -z-20 h-[calc(100vh)] w-full flex-auto overflow-hidden rounded-b-2xl">
                    <video
                        src="https://res.cloudinary.com/dphulm0s9/video/upload/v1740294178/TrWocMCSsxh60zz32yvbu6yYdGs.mp4"
                        muted
                        autoPlay
                        loop
                        className="block h-full w-full cursor-auto object-cover"
                    />
                </div>
            </section>
        </>
    );
}
