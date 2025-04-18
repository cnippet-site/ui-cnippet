import React from "react";
import { components, motions } from "@/config/docs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Cta from "@/components/routes/home/cta";

const page = () => {
    return (
        <>
            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="relative grid h-full w-full grid-cols-12 border-b py-0">
                        <div className="col-span-12 bg-white text-center dark:bg-black">
                            <div className="relative border border-t-0">
                                <h2 className="mb-2 pt-16 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                                    Components
                                </h2>
                                <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                                    Components are the building blocks of your
                                    application. They are used to create
                                    reusable UI elements.
                                </p>
                                <div className="absolute -right-2.5 -bottom-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                                    <div className=" " />
                                    <div className="border-r-0" />
                                    <div className="border-b-0" />
                                    <div className=" " />
                                </div>
                            </div>

                            <div className="border-r border-l">
                                <ul
                                    role="list"
                                    className="grid grid-cols-4"
                                >
                                    {components.map((nav, index) => {
                                        return (
                                            <li
                                                key={`${nav.name}-${index}`}
                                                className={`px-6 py-4 border-b ${
                                                    index === 3 ||
                                                    index === 7 ||
                                                    index === 11
                                                        ? "border-r-0"
                                                        : "border-r"
                                                } ${index === components.length - 2 ? "border-b-0" : ""} ${
                                                    index ===
                                                    components.length - 1
                                                        ? "border-r border-b-0"
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
