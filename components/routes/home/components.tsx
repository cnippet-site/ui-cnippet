import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CldImage } from "next-cloudinary";
import {
    RiFacebookBoxFill,
    RiGithubFill,
    RiTiktokFill,
    RiTwitterFill,
} from "@remixicon/react";

import MorphingDialogBasicTwo from "@/registry/default/motions/morphing-dialog/morphing-dialog-demo";
import Chart1 from "@/registry/default/charts/bar-chart/bar-chart-demo";
import Chart2 from "@/registry/default/charts/line-chart/line-chart-demo";
import Chart3 from "@/registry/default/charts/pie-chart/pie-chart-demo";
import Cursor1 from "@/registry/default/motions/cursor/cursor-demo";
import { InfiniteSlider } from "@/components/motion/infinite-slider";
import { Grid, Block } from "@/components/motion/grid";
import AppleStyleDock from "@/registry/default/motions/dock/dock-demo";
import TiltCard1 from "@/registry/default/motions/tilt/tilt-demo";

const images = [
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h1.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h3.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h7.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h8.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h9.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h10.jpg",
];

const Components = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                <div className="grid h-full w-full grid-cols-12 border border-t-0 py-0 dark:border-neutral-900">
                    <div className="col-span-12 bg-white text-center dark:bg-black">
                        <h2 className="mt-16 mb-2 text-2xl leading-tight font-medium tracking-tight md:text-5xl dark:text-neutral-100">
                            Production React Components Library
                        </h2>
                        <p className="mx-auto mb-8 max-w-xl px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                            Discover our collection of tested React components,
                            featuring advanced animations, data visualization,
                            and interactive UI elements.
                        </p>
                        <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-900 dark:border-neutral-900">
                            <Link
                                href="/motions/infinite-slider"
                                className="overflow-hidden border-r px-5 pb-10 md:col-span-8"
                            >
                                <h3 className="font-ins py-4 text-left leading-none font-semibold tracking-tight">
                                    Infinite Slider
                                </h3>
                                <InfiniteSlider gap={24}>
                                    {images.map((image, i) => (
                                        <CldImage
                                            key={i}
                                            src={image}
                                            alt="Apple Music logo"
                                            width={1920}
                                            height={1080}
                                            sizes="100vw"
                                            className="aspect-square w-24 object-cover md:w-36"
                                        />
                                    ))}
                                </InfiniteSlider>
                            </Link>
                            <div className="grid grid-rows-2 px-5 pb-5 md:col-span-4 md:py-0">
                                <h3 className="font-ins pt-4 text-left leading-none font-semibold tracking-tight">
                                    Morphing Dialog
                                </h3>
                                <div className="">
                                    <MorphingDialogBasicTwo />
                                </div>
                            </div>
                            <Link
                                href="/motions/cursor"
                                className="border-r p-0 md:col-span-4 md:px-5"
                            >
                                <h3 className="font-ins pt-4 text-left leading-none font-semibold tracking-tight">
                                    Custom Cursor
                                </h3>
                                <Cursor1 />
                            </Link>
                            <Link
                                href="/motions/grid"
                                className="flex flex-col md:col-span-8"
                            >
                                <h3 className="font-ins px-5 pt-4 text-left leading-none font-semibold tracking-tight">
                                    Interactive Grid
                                </h3>
                                <Grid>
                                    <Block className="col-span-12 row-span-2 md:col-span-6 dark:border-neutral-900 dark:bg-neutral-950">
                                        <Image
                                            src="/images/avatar.svg"
                                            alt="avatar"
                                            width={1920}
                                            height={1080}
                                            className="mb-4 size-14 rounded-full"
                                        />
                                        <h1 className="mb-6 text-2xl leading-tight font-medium md:mb-12 md:text-3xl">
                                            Hi there.{" "}
                                            <span className="text-zinc-400">
                                                Welcome to Cnippet UI
                                            </span>
                                        </h1>
                                    </Block>

                                    {[
                                        RiFacebookBoxFill,
                                        RiTiktokFill,
                                        RiTwitterFill,
                                        RiGithubFill,
                                    ].map((Icon, idx) => (
                                        <Block
                                            key={idx}
                                            className="col-span-6 bg-black md:col-span-3 dark:border-neutral-800"
                                            whileHover={{
                                                rotate:
                                                    idx % 2
                                                        ? "-2.5deg"
                                                        : "2.5deg",
                                                scale: 1.1,
                                            }}
                                        >
                                            <div className="grid h-full place-content-center text-3xl text-white">
                                                <Icon className="size-10" />
                                            </div>
                                        </Block>
                                    ))}
                                </Grid>
                            </Link>

                            <Link
                                href="/motions/dock"
                                className="relative flex flex-col items-center justify-start border-r px-5 pb-10 md:col-span-8"
                            >
                                <h3 className="font-ins py-4 text-left leading-none font-semibold tracking-tight">
                                    Dock
                                </h3>
                                <AppleStyleDock />
                            </Link>

                            <Link
                                href="/motions/tilt"
                                className="relative flex flex-col items-center justify-center px-5 pb-10 md:col-span-4"
                            >
                                <h3 className="font-ins py-4 text-left leading-none font-semibold tracking-tight">
                                    Tilt Card
                                </h3>
                                <TiltCard1 />
                            </Link>

                            <Link
                                href="/charts/bar-chart"
                                className="border-r px-5 py-5 md:col-span-4 md:pb-10"
                            >
                                {/* <h3 className="py-2 text-left font-mono text-xl leading-tight font-medium text-neutral-500 group-hover:text-black dark:group-hover:text-white">
                                    Bar Chart
                                </h3> */}
                                <Chart1 />
                            </Link>
                            <Link
                                href="/charts/line-chart"
                                className="border-r px-5 py-5 md:col-span-4 md:pb-10"
                            >
                                {/* <h3 className="py-2 text-left font-mono text-xl leading-tight font-medium text-neutral-500 group-hover:text-black dark:group-hover:text-white">
                                    Line Chart
                                </h3> */}
                                <Chart2 />
                            </Link>
                            <Link
                                href="/charts/pie-chart"
                                className="border-b px-5 py-5 md:col-span-4 md:pb-10 dark:border-neutral-900"
                            >
                                {/* <h3 className="py-2 text-left font-mono text-xl leading-tight font-medium text-neutral-500 group-hover:text-black dark:group-hover:text-white">
                                    Pie Chart
                                </h3> */}
                                <Chart3 />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link
                                href="/"
                                className="relative w-full overflow-hidden bg-white p-5 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <h3 className="relative z-10 text-2xl text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    Explore More
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Components;
