import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Feedback = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="relative w-full">
                    <div className="grid h-full w-full grid-cols-12 divide-x divide-y border border-t-0 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-12 border-r-0 bg-white px-10 py-8 text-center dark:bg-black md:py-16">
                            <p className="text-3xl font-medium">
                                “We moved our Next.js app to Vercel in less than
                                an hour.”
                            </p>
                            <div className="mt-5 flex items-center justify-center gap-2">
                                <p>Neel Rao, Principal Software Engineer</p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-800">
                                    <RiArrowRightLine />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 border-b md:border-b-0 bg-white px-10 py-8 text-left dark:bg-black md:col-span-6 md:py-16">
                            <p className="text-2xl font-medium">
                                “On-demand ISR speeds up the iteration process
                                across the board for all of our sites.”
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p>Neel Rao, Principal Software Engineer</p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-800">
                                    <RiArrowRightLine />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 border-b-0 bg-white px-10 py-8 text-left dark:bg-black md:col-span-6 md:py-16">
                            <p className="text-lg font-medium">
                                “It&apos;s just a pity we didn&apos;t go sooner. Next.js
                                and Vercel make our developers happier, make us
                                go to market quicker, and let us move with
                                utmost confidence.”
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p>Neel Rao, Principal Software Engineer</p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-800">
                                    <RiArrowRightLine />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
