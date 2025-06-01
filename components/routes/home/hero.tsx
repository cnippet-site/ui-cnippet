import React from "react";
import Link from "next/link";

import { TextScramble } from "@/components/motion/text-scramble";
import { GridsVertical, GridWithCircles } from "@/components/grid-layout";

const Hero = () => {
    return (
        <>
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
                            <div className="grid w-full grid-cols-8 md:grid-cols-12 dark:border-neutral-900">
                                <GridsVertical columns={4} />
                                <div className="relative col-span-8 flex w-full flex-col items-center justify-start border-r border-b border-l bg-white px-4 py-5 text-center md:col-span-10 md:py-10 dark:border-neutral-900 dark:bg-black">
                                    <div className="flex items-start justify-start">
                                        <TextScramble
                                            characterSet=". "
                                            className="w-full font-mono text-sm uppercase md:text-base"
                                        >
                                            Tired of the same boilerplate |
                                            design
                                        </TextScramble>
                                    </div>
                                    <h1 className="mb-4 text-left text-3xl font-semibold md:text-5xl">
                                        Build{" "}
                                        <span className="text-purple-500">
                                            faster
                                        </span>{" "}
                                        with{" "}
                                        <span className="text-blue-500">
                                            Cnippet UI
                                        </span>
                                    </h1>
                                    <p className="mb-4 max-w-2xl text-sm leading-normal md:mt-2 md:text-lg">
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
                                    <ul className="mb-4 flex flex-col items-start justify-start gap-5 space-y-3 md:flex-col">
                                        <li className="flex items-center gap-2">
                                            <span className="inline-block size-2 rotate-45 bg-purple-400" />
                                            <span>
                                                Production-ready code, always up
                                                to date
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="inline-block size-2 rotate-45 bg-orange-400" />
                                            <span>
                                                Designed for SaaS, dashboards,
                                                and more
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="inline-block size-2 rotate-45 bg-white" />
                                            <span>
                                                Copy, paste, and launch in
                                                seconds
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <GridsVertical columns={4} />
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-12 divide-x border-b dark:divide-neutral-900 dark:border-neutral-900">
                            <div className="col-span-1 h-[5rem] w-full border-l" />
                            <div className="col-span-1 h-[5rem] w-full" />
                            <div className="col-span-1 h-[5rem] w-full" />
                            <div className="col-span-3 flex h-[5rem] flex-col items-center justify-center">
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
                            <div className="col-span-3 flex h-[5rem] flex-col items-center justify-center">
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
                            <div className="col-span-1 h-[5rem] w-full" />
                            <div className="col-span-1 h-[5rem] w-full" />
                            <div className="col-span-1 h-[5rem] w-full border-r dark:border-neutral-900" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="relative w-full py-20 dark:bg-black">
                <div className="mx-auto max-w-7xl px-4 md:px-16">
                    <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="relative flex flex-col items-center justify-center">
                            <div className="w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-purple-700 to-blue-600 p-6 shadow-lg">
                                <pre className="overflow-x-auto rounded-lg bg-black/80 p-4 font-mono text-xs text-white md:text-base">
                                    {`<Button variant="primary">Copy Snippet</Button>
<Card>
  <h2>Beautiful UI, Instantly</h2>
  <p>Just copy, paste, and go.</p>
</Card>`}
                                </pre>
                            </div>
                            <span className="mt-4 text-sm text-neutral-400">
                                Copy &amp; use production-ready code in seconds
                            </span>
                        </div>
                        <div>
                            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                                Build{" "}
                                <span className="text-orange-400">faster</span>{" "}
                                with{" "}
                                <span className="text-purple-400">Cnippet</span>
                            </h2>
                            <p className="mb-6 text-lg text-neutral-300">
                                Skip the setup. Our curated components are ready
                                to drop into your project—no configuration, no
                                hassle.
                            </p>
                            <ul className="mb-8 space-y-3">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rounded-full bg-purple-400" />
                                    <span>
                                        Production-ready code, always up to date
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rounded-full bg-orange-400" />
                                    <span>
                                        Designed for SaaS, dashboards, and more
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block size-2 rounded-full bg-white" />
                                    <span>
                                        Copy, paste, and launch in seconds
                                    </span>
                                </li>
                            </ul>
                            <Button className="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Hero;
