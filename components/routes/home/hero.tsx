import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/motion/text-scramble";

const Hero = () => {
    return (
        <section className="relative w-full dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-10 md:pt-24">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="relative grid h-[6rem] w-full grid-cols-8 grid-rows-2 divide-x divide-y border-t first:border-l md:h-[11.58rem] md:grid-cols-12 dark:divide-neutral-900 dark:border-neutral-900">
                        {/* {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className="col-span-1"></div>
                            ))} */}
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

                    <div className="absolute inset-0 grid h-[6rem] w-full grid-cols-8 md:h-[11.58rem] md:grid-cols-12">
                        <div className="col-span-1 h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-900" />

                        <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-900" />
                        <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-900" />
                        <div className="col-span-2 flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-white dark:border-neutral-900 dark:bg-black">
                            <Image
                                src="/images/logo-dark.png"
                                alt=""
                                className="size-12 rounded-full md:size-24"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-900" />
                        <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-900" />

                        <div className="col-span-1 h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-900" />

                        {/* {Array.from({ length: 7 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${i === 0 || i === 6 ? "col-span-1" : "col-span-2"}`}
                                >
                                    {i === 0 && (
                                        <div
                                            className={`h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-900`}
                                        />
                                    )}
                                    {i > 0 && i < 6 && (
                                        <div
                                            className={`h-full w-full rounded-full border border-gray-200 dark:border-neutral-900 ${i === 3 && "bg-white dark:bg-black"}`}
                                        />
                                    )}
                                    {i === 6 && (
                                        <div
                                            className={`h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-900`}
                                        />
                                    )}
                                </div>
                            ))} */}
                    </div>

                    <div className="relative w-full">
                        <div className="grid w-full grid-cols-8 grid-rows-3 md:grid-cols-12 dark:border-neutral-900">
                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y border-l md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-900 dark:border-neutral-900">
                                <div className=""></div>
                                <div></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                            </div>
                            <div className="col-span-6 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white px-4 py-5 text-center md:col-span-8 md:py-10 dark:border-neutral-900 dark:bg-black">
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
                                        Tired of the same boilerplate | design
                                    </TextScramble>
                                    {/* <TextLoop className="">
                                            <span>Fixing AI-Generated UI</span>
                                            <span>Same Boilerplate</span>
                                            <span>Same Components</span>
                                            <span>Same Design</span>
                                        </TextLoop> */}
                                </div>
                                <h1 className="mt-4 text-2xl leading-tight dark:text-neutral-50 font-semibold tracking-tight md:mt-0 md:text-5xl">
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
                                <div className="mt-4 space-y-2 md:space-y-0 md:space-x-3">
                                    <Button className="rounded-full">
                                        Explore Components
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full"
                                    >
                                        View Docs
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-900">
                                <div></div>
                                <div></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                                <div className="hidden md:block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
