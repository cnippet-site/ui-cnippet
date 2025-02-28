import { Cursor } from "@/components/motion/cursor";
import { LayoutGrid, Blocks, Database, PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SVGProps, useRef, useState } from "react";

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={31}
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
                <path
                    fill={"#22c55e"}
                    fillRule="evenodd"
                    stroke={"#fff"}
                    strokeLinecap="square"
                    strokeWidth={2}
                    d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={"#22c55e"} d="M0 0h26v31H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default function Features() {
    const features = [
        {
            icon: LayoutGrid,
            title: "Multi Layout Web Design",
            description:
                "Improve user experience with Multi-Layout Web Design! Create flexible, responsive websites that work smoothly across multiple devices.",
        },
        {
            icon: Blocks,
            title: "Framer Component",
            description:
                "Save time and design faster! Browse Framer Component Collections, which are packed with responsive and dynamic components.",
        },
        {
            icon: Database,
            title: "Framer CMS",
            description:
                "Framer CMS allows you to manage content effortlessly! A solid, no-code solution for dynamic, scalable websites.",
        },
    ];

    return (
        <section className="border-b border-dashed">
           
            <div className="mx-auto max-w-7xl border-l border-r border-dashed px-4 pt-0 sm:px-6 lg:px-0">
                <div className="bg-white px-6 md:p-12 lg:px-0">
                    <div className="mb-6 text-center md:mb-8 lg:mb-10">
                        <h2 className="text-3xl font-medium text-black sm:text-4xl md:text-6xl">
                            Main Features in the Kloomix Template
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 md:mt-6">
                            Explore the key characteristics of the Kloomix
                            template, designed to provide a clean,
                            user-friendly, and fully configurable experience for
                            modern websites.
                        </p>
                    </div>

                    <div className="border-b border-t border-dashed py-10">
                        <div className="grid gap-6 px-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            <Cursor
                                attachToParent
                                variants={{
                                    initial: { scale: 0.3, opacity: 0 },
                                    animate: { scale: 1, opacity: 1 },
                                    exit: { scale: 0.3, opacity: 0 },
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.15,
                                }}
                                className="left-12 top-4"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className="inline-flex w-full items-center justify-center"
                                >
                                    <div className="flex items-center justify-center rounded-[24px] bg-gray-500/40 px-3 py-1 backdrop-blur-md dark:bg-gray-300/40">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.6 }}
                                            className="inline-flex w-full items-center justify-center"
                                        >
                                            <div className="inline-flex items-center text-sm text-white dark:text-black">
                                                More{" "}
                                                <PlusIcon className="ml-1 h-4 w-4" />
                                            </div>
                                        </motion.div>   
                                    </div>
                                </motion.div>
                            </Cursor>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col justify-between gap-1 rounded-xl bg-[#09071b] p-6 transition-all md:p-8"
                                >
                                    <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE27D] transition-transform group-hover:scale-105">
                                        <feature.icon className="h-6 w-6 text-[#2F2B6B]" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white md:text-2xl">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-auto text-base text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
