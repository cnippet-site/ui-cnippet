import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Cta = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                <div className="relative w-full">
                    <div className="absolute -right-2.5 -bottom-2.5 z-40 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="grid h-full w-full border border-t-0 py-16 md:grid-cols-12 dark:border-neutral-900">
                        <div className="col-span-7 bg-white px-4 text-left md:px-10 dark:bg-black">
                            <h2 className="text-xl leading-tight font-semibold tracking-tight">
                                Ship stunning interfaces faster. Get started
                                with our open-source components. Need
                                enterprise-grade solutions? Talk to our experts.
                            </h2>
                            <div className="mt-5 flex gap-4">
                                <Button className="rounded-full">
                                    <Link href="/motion/infinite-slider">
                                        Start Building
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    <Link href="/components">
                                        Browse Components
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-5 mt-4 bg-white px-4 md:mt-0 md:px-10 dark:bg-black">
                            <div className="flex flex-col items-start justify-start gap-5">
                                <p className="text-gray-500">
                                    Looking for complete sections or templates?
                                    Explore our Blocks ecosystem for ready-made
                                    page layouts and integrations.
                                </p>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Explore Blocks
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
