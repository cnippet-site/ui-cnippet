import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

const Hero = () => {
    return (
        <>
            <section className="relative mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                <div className="relative">
                    <div className="grid h-12 grid-cols-4 divide-x border border-t-0 border-b md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>

                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                    </div>
                </div>

                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="grid grid-cols-6 md:divide-x dark:divide-neutral-800">
                        <div className="col-span-6 px-4 py-10 md:col-span-5">
                            <h1 className="mb-4 text-left text-3xl font-medium md:text-6xl">
                                Build{" "}
                                <span className="text-purple-600">
                                    Scalable
                                </span>{" "}
                                Apps with{" "}
                                <span className="text-blue-600">
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
                                    optimized for modern web applications,
                                    e-commerce platforms, and data-driven
                                    dashboards.
                                </span>
                            </p>
                            <ul className="mb-4 flex flex-col items-start justify-start space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rotate-45 bg-purple-400" />
                                    <span>
                                        Production-grade components with
                                        TypeScript support
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
                                        Zero-config setup with instant
                                        deployment
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <div className="grid grid-cols-2">
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-3 py-10">
                            <p className="mb-4 max-w-2xl px-4 text-sm leading-normal md:mt-2 md:text-lg">
                                <span className="text-gray-500">
                                    Whether you&apos;re building a simple
                                    landing page or a complex web application,
                                </span>{" "}
                                <span className="font-medium">
                                    our comprehensive ecosystem provides the
                                    tools and resources
                                </span>{" "}
                                <span className="text-gray-500">
                                    you need to succeed in today&apos;s digital
                                    landscape.
                                </span>
                            </p>
                        </div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                    </div>

                    <div className="grid h-12 grid-cols-4 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-2 h-full w-full md:col-span-1">
                            <Link
                                href="https://ui.cnippet.site"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                    Explore
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
