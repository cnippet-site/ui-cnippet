import React from "react";
import Link from "next/link";

import { TextScramble } from "@/components/motion/text-scramble";
import { GridsVertical, GridWithCircles } from "@/components/grid-layout";

const Hero = () => {
    return (
        <section className="relative w-full dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>

                    <GridWithCircles />

                    <div className="relative w-full">
                        <div className="grid w-full grid-cols-8 divide-x border-r border-l md:grid-cols-12 dark:border-neutral-900">
                            <GridsVertical columns={4} />
                            <div className="relative col-span-8 flex w-full flex-col items-center justify-start bg-white px-4 py-5 text-center md:col-span-10 md:py-10 dark:border-neutral-900 dark:bg-black">
                                <div className="flex items-start justify-start">
                                    <TextScramble
                                        characterSet=". "
                                        className="w-full font-mono text-sm uppercase md:text-base"
                                    >
                                        Modern React Components | Production Ready
                                    </TextScramble>
                                </div>
                                <h1 className="mb-4 text-left text-3xl font-semibold md:text-5xl">
                                    Build{" "}
                                    <span className="text-purple-500">
                                        Scalable
                                    </span>{" "}
                                    Apps with{" "}
                                    <span className="text-blue-500">
                                        Cnippet UI
                                    </span>
                                </h1>
                                <p className="mb-4 max-w-2xl text-sm leading-normal md:mt-2 md:text-lg">
                                    <span className="text-gray-500">
                                        Transform your development workflow with
                                    </span>{" "}
                                    <span className="font-medium">
                                        production-ready React components
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        optimized for modern web applications, e-commerce platforms, and data-driven dashboards.
                                    </span>
                                </p>
                                <ul className="mb-4 flex flex-wrap items-center justify-center gap-5 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <span className="inline-block size-2 rotate-45 bg-purple-400" />
                                        <span>
                                            Production-grade components with TypeScript support
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="inline-block size-2 rotate-45 bg-orange-400" />
                                        <span>
                                            Optimized for modern web applications
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="inline-block size-2 rotate-45 bg-blue-600" />
                                        <span>
                                            Zero-config setup with instant deployment
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <GridsVertical columns={4} />
                        </div>
                    </div>
                    <div className="grid h-[5rem] w-full grid-cols-12 border-t border-r border-b border-l dark:border-neutral-900">
                        <div className="col-span-1 border-r dark:border-neutral-900" />
                        <div className="col-span-1 border-r dark:border-neutral-900" />
                        <div className="col-span-1 border-r dark:border-neutral-900" />
                        <div className="col-span-3 border-r dark:border-neutral-900">
                            <Link
                                href="/"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore More
                                </h3>
                            </Link>
                        </div>
                        <div className="col-span-3 border-r dark:border-neutral-900">
                            <Link
                                href="/"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[110%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore More
                                </h3>
                            </Link>
                        </div>
                        <div className="col-span-1 border-r dark:border-neutral-900" />
                        <div className="col-span-1 border-r dark:border-neutral-900" />
                        <div className="col-span-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
