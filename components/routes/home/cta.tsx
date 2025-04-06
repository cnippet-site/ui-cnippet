import { Button } from "@/components/ui/button";
import React from "react";

const Cta = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="relative w-full">
                    <div className="absolute -right-2.5 -bottom-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="grid h-full w-full border border-t-0 py-16 md:grid-cols-12 dark:border-neutral-900">
                        <div className="col-span-7 bg-white px-4 text-left md:px-10 dark:bg-black">
                            <h2 className="text-xl leading-tight font-semibold tracking-tight">
                                Ready to deploy? Start building with a free
                                account. Speak to an expert for your Pro or
                                Enterprise needs.
                            </h2>
                            <div className="mt-5 flex gap-4">
                                <Button className="rounded-full">
                                    Start Building
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Hire an Expert
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-5 mt-4 bg-white px-4 md:mt-0 md:px-10 dark:bg-black">
                            <div className="flex flex-col items-start justify-start gap-5">
                                <p className="text-gray-500">
                                    Explore Vercel Enterprise with an
                                    interactive product tour, trial, or a
                                    personalized demo.
                                </p>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Explore Enterprise
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
