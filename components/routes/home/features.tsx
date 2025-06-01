import React from "react";
import Link from "next/link";

const Features = () => {
    return (
        <section className="relative w-full dark:bg-black">
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
                                    Why Choose Cnippet?
                                </h2>
                                <p className="mt-2 text-gray-500">
                                    Providing the developer experience and
                                    infrastructure to build, scale, and secure a
                                    faster, more personalized web.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-8 bg-white px-4 py-8 md:px-10 md:py-16 dark:bg-black">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Build Smarter, Not Harder
                                </h3>
                                <p className="text-gray-500">
                                    Access fully designed components and
                                    templates to build your next project faster.
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
                                    Designed for TypeScript & JavaScript
                                </h3>
                                <p className="text-gray-500">
                                    Enjoy the same high-quality components
                                    whether you prefer TypeScript or JavaScript.
                                    Tailored for every developer&apos;s choice.
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
                                    Build Once, Use Everywhere
                                </h3>
                                <p className="text-gray-500">
                                    Build once and use everywhere with our
                                    powerful build system.
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
            </div>
        </section>
    );
};

export default Features;
