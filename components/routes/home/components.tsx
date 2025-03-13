import Cursor1 from "@/registry/default/motion/cursor/cursor-demo";
import DialogBasic from "@/registry/default/motion/dialog/dialog-demo";
import { MorphingDialogBasicTwo } from "@/registry/default/motion/morphing-dialog/morphing-dialog-demo";
import TextMorphButton from "@/registry/default/motion/text-morph/text-morph-demo";
import Link from "next/link";

import React from "react";

const Components = () => {
    const componentList = [
        {
            component: <Cursor1 />,
            name: "Animated Cursor",
            link: "/motion/cursor",
        },
        {
            component: <DialogBasic />,
            name: "Motion Dialog",
            link: "/motion/dialog",
        },
        {
            component: <TextMorphButton />,
            name: "Text Morph",
            link: "/motion/text-morph",
        },
    ];

    return (
        <section className="border-b border-dashed bg-background dark:border-neutral-800">
            <div className="mx-4 max-w-7xl border-l border-r border-dashed px-4 py-20 dark:border-neutral-800 sm:px-6 md:mx-auto lg:px-0">
                <div className="mb-16 space-y-4 px-0 text-center md:px-8">
                    <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
                        Interactive Components Gallery
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Explore our collection of motion-enhanced UI elements.
                        Click to interact, copy-paste to use in your projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:px-10 lg:grid-cols-3">
                    {componentList.map((item, index) => (
                        <div
                            key={index}
                            className="rounded- group relative overflow-hidden border border-dashed bg-card p-6 transition-all dark:border-neutral-800"
                        >
                            <div className="flex h-60 items-center justify-center">
                                {item.component}
                            </div>
                            <div className="mt-4 border-t border-dashed pt-4 dark:border-neutral-800">
                                <h3 className="font-medium">{item.name}</h3>
                                <Link
                                    href={item.link}
                                    className="mt-2 inline-flex items-center text-sm text-primary/80 hover:text-primary"
                                >
                                    View Demo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Full-width showcase item */}
                    <div className="col-span-full mt-6">
                        <div className="rounded- border border-dashed bg-card p-8 dark:border-neutral-800">
                            <div className="mb-6">
                                <h3 className="text-xl font-medium">
                                    Morphing Dialog
                                </h3>
                                <Link
                                    href="/motion/dialog"
                                    className="group flex items-center text-sm text-primary/80 hover:text-primary"
                                >
                                    View Advanced Demo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <MorphingDialogBasicTwo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Components;
