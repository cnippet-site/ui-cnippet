import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/motion/text-scramble";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-4 md:pt-24">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="relative grid h-[6rem] w-full grid-cols-8 grid-rows-2 divide-x divide-y border-t first:border-l md:h-[11.66666rem] md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />

                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                            <div className="col-span-1 hidden md:block" />
                        </div>

                        {/* <div className="absolute inset-0 grid h-[6rem] w-full grid-cols-8 md:h-[11.66666rem] md:grid-cols-12">
                            <div className="col-span-1 h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-800" />

                            <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-800" />
                            <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-800" />
                            <div className="col-span-2 flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-white dark:border-neutral-800 dark:bg-black">
                                <Image
                                    src="/images/logo-dark.png"
                                    alt=""
                                    className="size-12 rounded-full md:size-24"
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                            <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-800" />
                            <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-800" />

                            <div className="col-span-1 h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-800" />
                        </div> */}

                        <div className="relative w-full">
                            <div className="grid w-full grid-cols-8 grid-rows-3 md:grid-cols-12 dark:border-neutral-900">
                                <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y border-l md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-800 dark:border-neutral-800">
                                    <div className="h-[5.83333rem]"></div>
                                    <div className="h-[5.83333rem]"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] border-r border-b md:block dark:border-neutral-800"></div>
                                </div>
                                <div className="relative col-span-6 row-span-3 flex flex-col items-center justify-start border-r border-b bg-white px-4 py-5 text-center md:col-span-8 md:py-10 dark:border-neutral-800 dark:bg-black">
                                    <div className="flex items-start justify-start">
                                        {/* Tired of{" "} */}
                                        {/* <TextScramble
                                            className="font-mono text-sm"
                                            duration={1.2}
                                            characterSet=". "
                                        >
                                            Tired of the same boilerplate
                                        </TextScramble> */}
                                        <TextScramble
                                            characterSet=". "
                                            className="w-full font-mono text-sm uppercase md:text-base"
                                        >
                                            Tired of the same boilerplate |
                                            design
                                        </TextScramble>
                                        {/* <TextLoop className="">
                                            <span>Fixing AI-Generated UI</span>
                                            <span>Same Boilerplate</span>
                                            <span>Same Components</span>
                                            <span>Same Design</span>
                                        </TextLoop> */}
                                    </div>
                                    <h1 className="mt-4 text-2xl leading-tight font-semibold tracking-tight md:mt-0 md:text-5xl dark:text-neutral-50">
                                        We skip the boilerplate to deliver
                                        developer-first components.
                                    </h1>
                                    <p className="mt-4 text-sm leading-normal md:mt-2 md:text-lg">
                                        <span className="text-gray-500">
                                            While AI tools churn out generic UI
                                            blocks,
                                        </span>{" "}
                                        <span className="font-medium">
                                            cnippet delivers curated React
                                            components precision-tuned
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            for SaaS, e-commerce, and data-heavy
                                            dashboards.
                                        </span>
                                    </p>
                                    <div className="absolute bottom-0 flex w-full items-center justify-between divide-x dark:divide-neutral-800">
                                        <div className="h-[5.83333rem] w-full border-t">
                                            Explore Components
                                        </div>
                                        <div className="flex h-[5.83333rem] w-full border-t dark:border-neutral-800">
                                            <Link
                                                href="/"
                                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-orange-300/90"
                                            >
                                                <div className="absolute inset-0 w-full -translate-y-[100%] bg-orange-500/90 transition-transform duration-300 group-hover:translate-y-[0%]" />
                                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-black dark:group-hover:text-black">
                                                    Explore More
                                                </h3>
                                            </Link>
                                        </div>
                                        <div className="flex h-[5.83333rem] w-full border-t dark:border-neutral-800">
                                            <Link
                                                href="/"
                                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-orange-300/90"
                                            >
                                                <div className="absolute inset-0 w-full -translate-y-[100%] bg-orange-500/90 transition-transform duration-300 group-hover:translate-y-[0%]" />
                                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-black dark:group-hover:text-black">
                                                    Explore More
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="mt-4 space-y-2 md:space-y-0 md:space-x-3">
                                    <Button className="rounded-full">
                                        Explore Components
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full"
                                    >
                                        View Docs
                                    </Button>
                                </div> */}
                                </div>
                                <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y border-l-0 md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-800 dark:border-neutral-800">
                                    <div className="h-[5.83333rem]"></div>
                                    <div className="h-[5.83333rem]"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] md:block"></div>
                                    <div className="hidden h-[5.83333rem] border-r border-b md:block dark:border-neutral-800"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-7xl px-4 pt-16 md:px-16 md:pt-24">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />  
                            <div className=" " />
                        </div>
                        <div className="relative grid h-[6rem] w-full grid-cols-8 grid-rows-1 divide-x divide-y border-t first:border-l md:h-[5.5rem] md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-1 border-l" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1" />
                            <div className="col-span-1 border-r border-b dark:border-neutral-800" />
                        </div>

                        <div className="grid w-full grid-cols-8 grid-rows-3 divide-x md:grid-cols-12 dark:border-neutral-800">
                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-y border-t-0 border-l md:col-span-1 md:grid-cols-1 md:grid-rows-5 dark:divide-neutral-800 dark:border-neutral-800">
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem] border-b dark:border-neutral-800"></div>
                            </div>

                            <div className="col-span-6 row-span-3 border-r border-b bg-white text-center md:col-span-10 dark:border-neutral-800 dark:bg-black">
                                <div className="grid h-full grid-cols-2 divide-x dark:divide-neutral-800">
                                    <div className="flex flex-col items-start justify-start text-left">
                                        <h1 className="mt-4 px-4 font-serif text-2xl leading-tight font-normal tracking-tight md:text-5xl dark:text-neutral-50">
                                            Share code snippets instantly.
                                        </h1>

                                        <p className="mt-4 px-4 text-sm leading-normal md:mt-2 md:text-lg">
                                            <span className="text-gray-500">
                                                Say goodbye to complexity and
                                                time-consuming design processes.
                                            </span>{" "}
                                            <span className="font-medium">
                                                With our 111+ pre-designed
                                                blocks and templates,
                                            </span>{" "}
                                            <span className="text-gray-500">
                                                you can effortlessly create
                                                stunning, professional-grade
                                                layouts that save time and
                                                elevate the quality of your
                                                projects.
                                            </span>
                                        </p>
                                        <div className="mt-auto grid h-[5.5rem] w-full grid-cols-2">
                                            <Button className="h-full rounded-none">
                                                Explore Cnippets
                                            </Button>
                                            {/* <Button
                                                variant="outline"
                                                className="rounded-none h-full "
                                            >
                                                Get Started
                                            </Button> */}
                                            <Link
                                                href="/"
                                                className="group relative flex w-full items-center justify-center overflow-hidden bg-orange-300/90"
                                            >
                                                <div className="absolute inset-0 w-full -translate-y-[100%] bg-orange-500/90 transition-transform duration-300 group-hover:translate-y-[0%]" />
                                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-black dark:group-hover:text-black">
                                                    Explore More
                                                </h3>
                                            </Link>
                                            {/* <AnimatedLink
                                                href="/"
                                                direction="up"
                                                duration="medium"
                                                className=""
                                            >
                                                Explore More
                                            </AnimatedLink> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-y border-t-0 border-r md:col-span-1 md:grid-cols-1 md:grid-rows-5 dark:divide-neutral-800 dark:border-neutral-800">
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem]"></div>
                                <div className="h-[5.5rem] border-b dark:border-neutral-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
