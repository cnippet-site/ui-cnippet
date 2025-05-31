import React from "react";
import type { Metadata } from "next";

import { motions } from "@/config/docs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Cta from "@/components/routes/home/cta";
import { BASE_URL } from "@/config/docs";

const page = () => {
    return (
        <>
            <section className="dark:bg-black">
                <div className="dark: mx-auto w-full max-w-6xl px-4 md:px-8">
                    <div className="relative grid h-full w-full grid-cols-12 border-b py-0 dark:border-neutral-900">
                        <div className="col-span-12 bg-white text-center dark:bg-black">
                            <div className="relative border border-t-0 dark:border-neutral-900">
                                <h2 className="mb-2 pt-16 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                                    Motion Components
                                </h2>
                                <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                                    Motion components are the building blocks of
                                    your application. They are used to create
                                    reusable UI elements.
                                </p>
                                <div className="absolute -right-2.5 -bottom-2.5 z-40 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                                    <div className=" " />
                                    <div className="border-r-0" />
                                    <div className="border-b-0" />
                                    <div className=" " />
                                </div>
                            </div>

                            <div className="border-r border-l dark:border-neutral-900">
                                <ul
                                    role="list"
                                    className="grid grid-cols-4 divide-y"
                                >
                                    {motions.map((nav, index) => {
                                        return (
                                            <li
                                                key={`${nav.name}-${index}`}
                                                className={`px-6 py-4 dark:border-neutral-900 ${
                                                    index === 3 ||
                                                    index === 7 ||
                                                    index === 11
                                                        ? "border-r-0"
                                                        : "border-r"
                                                } ${
                                                    index === motions.length - 1
                                                        ? "border-r"
                                                        : ""
                                                }`}
                                            >
                                                <div className="relative z-10 bg-white pb-4 text-left text-base/6 font-medium text-zinc-950 dark:bg-black dark:text-white">
                                                    {nav.name}
                                                </div>
                                                <ul
                                                    role="list"
                                                    className="space-y-3.5 border-zinc-200 dark:border-zinc-800"
                                                >
                                                    {nav.items.map(
                                                        (item, j) => {
                                                            return (
                                                                <li
                                                                    key={`${item.name}-${j}`}
                                                                >
                                                                    <Link
                                                                        className={cn(
                                                                            "relative inline-flex w-full items-center pl-1 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                                                                            // isActive &&
                                                                            //     "w-full rounded-l-lg bg-gray-100 py-1.5 pl-3 text-zinc-950 dark:bg-neutral-900 dark:text-neutral-200",
                                                                            item.href ===
                                                                                "#" &&
                                                                                "cursor-default text-gray-400 hover:text-gray-400",
                                                                        )}
                                                                        href={
                                                                            item.href
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                        {item.href ===
                                                                            "#" && (
                                                                            <span className="mr-4 ml-auto rounded-lg bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap text-emerald-800">
                                                                                Coming
                                                                                soon
                                                                            </span>
                                                                        )}
                                                                        {item?.isNew && (
                                                                            <span className="ml-2 rounded-lg bg-blue-100 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap text-blue-800">
                                                                                New
                                                                            </span>
                                                                        )}
                                                                        {item?.isUpdated && (
                                                                            <span className="ml-2 rounded-lg bg-amber-100 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap text-amber-800">
                                                                                Updated
                                                                            </span>
                                                                        )}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        },
                                                    )}
                                                </ul>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    );
};

export default page;

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: "Motions",
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",

    openGraph: {
        type: "article",
        title: "Motions",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        url: `${BASE_URL}/motions`,
        images: [
            {
                url: `${BASE_URL}/images/site.png`,
                width: 1200,
                height: 630,
                alt: "Cnippet UI Component Library",
            },
        ],
        siteName: "Cnippet UI",
    },

    twitter: {
        card: "summary_large_image",
        title: "Motions",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [`${BASE_URL}/images/site.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },
};
