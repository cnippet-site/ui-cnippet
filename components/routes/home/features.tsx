import React from "react";
import Link from "next/link";

const Features = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="grid grid-cols-6 divide-x-0 divide-y md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-6 pt-10 px-4 md:col-span-2">
                            <h2 className="text-2xl leading-tight font-medium tracking-tight md:text-4xl">
                                Production React Components Library
                            </h2>
                            <p className="mt-2 text-gray-500">
                                Discover our collection of tested React
                                components, featuring advanced animations, data
                                visualization, and interactive UI elements.
                            </p>
                        </div>
                        <div className="col-span-6 px-4 md:col-span-4 py-10">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Accelerate Development with Ready-to-Use
                                    Components
                                </h3>
                                <p className="text-gray-500">
                                    Reduce development time by 60% with our
                                    comprehensive library of pre-built,
                                    customizable components. Each component is
                                    optimized for performance and follows
                                    industry best practices.
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <span className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        Start Building
                                    </span>
                                </Link>
                            </div>
                            <div className="mt-20 flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    TypeScript-First Development Experience
                                </h3>
                                <p className="text-gray-500">
                                    Enjoy full type safety and enhanced
                                    developer experience with our
                                    TypeScript-first approach. Comprehensive
                                    type definitions and documentation ensure
                                    reliable development.
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <span className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        Start Building
                                    </span>
                                </Link>
                            </div>
                            <div className="mt-24 flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Scale Your Applications with Confidence
                                </h3>
                                <p className="text-gray-500">
                                    Build scalable applications with components
                                    that handle complex data flows, state
                                    management, and real-time updates. Perfect
                                    for modern web applications and high-traffic
                                    websites.
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-12 w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <span className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        Start Building
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                    <div className="relative w-full">
                        <div className="absolute -bottom-2.5 -left-2.5 z-40 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="grid h-full w-full divide-x-0 divide-y border border-t-0 md:grid-cols-12 md:divide-x md:divide-y-0 dark:divide-neutral-900 dark:border-neutral-900">
                            <div className="col-span-4 w-full bg-white px-4 py-8 text-left md:px-10 md:py-16 dark:bg-black">
                                <div className="sticky top-20">
                                    <h2 className="text-2xl leading-tight font-semibold tracking-tight">
                                        Production-Ready Features
                                    </h2>
                                    <p className="mt-2 text-gray-500">
                                        Accelerate your development with
                                        battle-tested components designed for
                                        scalability, performance, and modern web
                                        applications.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-8 bg-white px-4 py-8 md:px-10 md:py-16 dark:bg-black"></div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Features;
