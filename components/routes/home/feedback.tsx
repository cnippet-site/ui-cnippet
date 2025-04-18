import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Feedback = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="relative w-full">
                    <div className="grid h-full w-full grid-cols-12 divide-x divide-y border border-t-0 dark:divide-neutral-900 dark:border-neutral-900">
                        <div className="col-span-12 border-r-0 bg-white px-10 py-8 text-center md:py-16 dark:bg-black">
                            <p className="text-3xl font-medium">
                                “CNIPPET's components cut our UI development
                                time by 40% - the best React library we've
                                used.”
                            </p>
                            <div className="mt-5 flex items-center justify-center gap-2">
                                <p>Sarah Lin, Frontend Lead at DashLabs</p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-900">
                                    <RiArrowRightLine />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 border-b bg-white px-10 py-8 text-left md:col-span-6 md:border-b-0 md:py-16 dark:bg-black">
                            <p className="text-2xl font-medium">
                                “The accessibility-focused components helped us
                                achieve WCAG compliance effortlessly.”
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p>
                                    Michael Chen, Senior Developer at
                                    HealthFirst
                                </p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-900">
                                    <RiArrowRightLine />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 border-b-0 bg-white px-10 py-8 text-left md:col-span-6 md:py-16 dark:bg-black">
                            <p className="text-xl font-medium">
                                “From startup MVPs to enterprise dashboards -
                                CNIPPET's customizable components scale
                                beautifully with our needs.”
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p>Emma Johnson, CTO at FlowForge</p>
                                <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-900">
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
