import React from "react";
import Link from "next/link";
import Cursor1 from "@/registry/default/motion/cursor/cursor-demo";
import { Grid, Block } from "@/components/motion/grid";
import {
    RiFacebookBoxFill,
    RiGithubFill,
    RiTiktokFill,
    RiTwitterFill,
} from "@remixicon/react";
import MorphingDialogBasicTwo from "@/registry/default/motion/morphing-dialog/morphing-dialog-demo";
import { InfiniteSlider } from "@/components/motion/infinite-slider";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import Chart1 from "@/registry/default/chart/bar-chart/bar-chart-demo";
import Chart2 from "@/registry/default/chart/line-chart/line-chart-demo";
import Chart3 from "@/registry/default/chart/pie-chart/pie-chart-demo";

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
                        <h2 className="mt-16 mb-2 text-2xl leading-tight font-medium tracking-tight text-neutral-100 md:text-5xl">
                            Interactive Components Gallery.
                        </h2>
                        <p className="mb-8 px-5 text-sm text-gray-500 md:mb-16 md:text-base">
                            Explore our collection of motion-enhanced UI
                            elements that are ready to use in your projects.
                        </p>
                        <div className="grid grid-cols-1 divide-y border-t md:grid-cols-12 dark:divide-neutral-900 dark:border-neutral-900">
                            <Link
                                href="/motion/infinite-slider"
                                className="overflow-hidden border-r px-5 py-10 md:col-span-8"
                            >
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
                            <div className="flex items-center justify-center px-5 py-5 md:col-span-4 md:py-0">
                                <MorphingDialogBasicTwo />
                            </div>
                            <Link
                                href="/motion/cursor"
                                className="p-0 md:col-span-4 md:p-5"
                            >
                                <Cursor1 />
                            </Link>
                            <Link
                                href="/motion/grid"
                                className="flex flex-col items-center justify-center md:col-span-8"
                            >
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
                                href="/chart/bar-chart"
                                className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"
                            >
                                {/* <TextShimmer
                                    className="font-mono text-3xl"
                                    duration={1}
                                >
                                    Generating code...
                                </TextShimmer> */}
                                <Chart1 />
                            </Link>
                            <Link
                                href="/chart/line-chart"
                                className="flex items-center justify-center border-r px-5 py-5 md:col-span-4 md:py-10"
                            >
                                {/* <TextShimmerWave
                                    className="font-mono text-2xl"
                                    duration={1}
                                >
                                    Create a component...
                                </TextShimmerWave> */}
                                <Chart2 />
                            </Link>
                            <Link
                                href="/chart/pie-chart"
                                className="border-b px-5 py-5 md:col-span-4 md:py-10 dark:border-neutral-900"
                            >
                                {/* <TextRoll className="text-4xl text-black md:text-6xl dark:text-white">
                                    CNIPPET UI
                                </TextRoll> */}
                                <Chart3 />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link
                                href="/"
                                className="group relative w-full overflow-hidden bg-white p-5 dark:bg-black"
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
