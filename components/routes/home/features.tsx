import { Cursor } from "@/components/motion/cursor";
import {
    RiLayout4Fill,
    RiPaletteFill,
    RiQuillPenAiFill,
} from "@remixicon/react";
import { PlusIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
    const features = [
        {
            icon: RiLayout4Fill,
            title: "Multi Layout Web Design",
            description:
                "Improve user experience with Multi-Layout Web Design! Create flexible, responsive websites that work smoothly across multiple devices.",
        },
        {
            icon: RiQuillPenAiFill,
            title: "Framer Component",
            description:
                "Save time and design faster! Browse Framer Component Collections, which are packed with responsive and dynamic components.",
        },
        {
            icon: RiPaletteFill,
            title: "Framer CMS",
            description:
                "Framer CMS allows you to manage content effortlessly! A solid, no-code solution for dynamic, scalable websites.",
        },
    ];

    return (
        <section className="border-b border-dashed bg-background dark:border-neutral-800">
            <div className="mx-auto max-w-7xl border-l border-r border-dashed px-4 pt-0 dark:border-neutral-800 sm:px-6 lg:px-0">
                <div className="px-6 md:p-12 lg:px-0">
                    <div className="mb-6 text-center md:mb-8 lg:mb-10">
                        <h2 className="text-3xl font-medium text-black dark:text-white sm:text-4xl md:text-6xl">
                            Main Features in the Cnippet Template
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 dark:text-neutral-400 md:mt-6">
                            Explore the key characteristics of the Cnippet
                            template, designed to provide a clean,
                            user-friendly, and fully configurable experience for
                            modern websites.
                        </p>
                    </div>

                    <div className="border-b border-t border-dashed py-10 dark:border-neutral-800">
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
                                className="left-12 top-8"
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
                                    className="group flex flex-col justify-between gap-1 rounded-xl bg-black p-6 transition-all md:p-8"
                                >
                                    <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE27D] transition-transform group-hover:scale-105">
                                        <feature.icon className="size-7 text-black" />
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
