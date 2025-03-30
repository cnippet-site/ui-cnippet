import React from "react";
import { InfiniteSlider } from "@/components/motion/infinite-slider";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiArrowRightCircleLine, RiArrowRightLine } from "@remixicon/react";
import { AtSignIcon, CommandIcon, EclipseIcon, ZapIcon } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/motion/accordion";
import { TextLoop } from "@/components/motion/text-loop";
import { TextScramble } from "@/components/motion/text-scramble";
import { MorphingDialogBasicTwo } from "@/registry/default/motion/morphing-dialog/morphing-dialog-demo";
import Link from "next/link";
import Cursor1 from "@/registry/default/motion/cursor/cursor-demo";
import CarouselDemo from "@/registry/default/motion/carousel/carousel-demo";
import { Grid, Block } from "@/components/motion/grid";
import {
    RiFacebookBoxFill,
    RiGithubFill,
    RiMapPin2Fill,
    RiTiktokFill,
    RiTwitterFill,
} from "@remixicon/react";

const items = [
    {
        id: "1",
        title: "Do I need React experience to use CNIPPET?",
        icon: AtSignIcon,
        content:
            "Basic React/Next.js knowledge is recommended for customization, but our copy-paste components make implementation effortless! 🚀 Start simple and scale as you learn.",
    },
    {
        id: "2",
        title: "How customizable are the components?",
        icon: CommandIcon,
        content:
            "Fully tweakable! Every component is built with Tailwind CSS - override styles, modify animations with Framer Motion, or restructure as needed. Your design system, your rules. 🎨",
    },
    {
        id: "3",
        icon: EclipseIcon,
        title: "Can I use this in commercial projects?",
        content:
            "Absolutely! CNIPPET is MIT-licensed - build client sites, SaaS products, or internal tools. No attribution required, though we appreciate shoutouts! 💼",
    },
    {
        id: "4",
        icon: EclipseIcon,
        title: "How accessible are the components?",
        content:
            "We bake in accessibility: ARIA labels, keyboard nav, and WCAG contrast ratios out of the box. Tested with screen readers like JAWS/NVDA. ♿️",
    },
    {
        id: "5",
        icon: EclipseIcon,
        title: "What if I need help?",
        content:
            "We've got your back! Join our Discord community for real-time support. For critical bugs, expect patches within 24 hours. 💬",
    },
    {
        id: "6",
        icon: EclipseIcon,
        title: "Can I use this in commercial projects?",
        content:
            "Absolutely! CNIPPET is MIT-licensed - build client sites, SaaS products, or internal tools. No attribution required, though we appreciate shoutouts! 💼",
    },
];

const images = [
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h1.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h3.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h7.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h8.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h9.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h10.jpg",
];

const Hero = () => {
    return (
        <>
            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-10 md:pt-24">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="relative grid h-[5.5rem] w-full grid-cols-8 grid-rows-2 divide-x divide-y border-t first:border-l md:h-44 md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
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

                        <div className="absolute inset-0 grid h-[5.5rem] w-full grid-cols-8 md:h-44 md:grid-cols-12">
                            <div className="col-span-1 h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-800" />

                            <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-800" />
                            <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-800" />
                            <div className="col-span-2 flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-white dark:border-neutral-800 dark:bg-black">
                                <Image
                                    src="/images/logo-dark.png"
                                    alt=""
                                    className="size-12 rounded-full md:size-24"
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                            <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-800" />
                            <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-800" />

                            <div className="col-span-1 h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-800" />

                            {/* {Array.from({ length: 7 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${i === 0 || i === 6 ? "col-span-1" : "col-span-2"}`}
                                >
                                    {i === 0 && (
                                        <div
                                            className={`h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-800`}
                                        />
                                    )}
                                    {i > 0 && i < 6 && (
                                        <div
                                            className={`h-full w-full rounded-full border border-gray-200 dark:border-neutral-800 ${i === 3 && "bg-white dark:bg-black"}`}
                                        />
                                    )}
                                    {i === 6 && (
                                        <div
                                            className={`h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-800`}
                                        />
                                    )}
                                </div>
                            ))} */}
                        </div>

                        <div className="relative w-full">
                            <div className="grid w-full grid-cols-8 grid-rows-3 md:grid-cols-12 dark:border-neutral-800">
                                <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y border-l md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-800 dark:border-neutral-800">
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
                                <div className="col-span-6 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white px-4 py-5 text-center md:col-span-8 dark:border-neutral-800 dark:bg-black">
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
                                            className="w-full font-mono text-sm uppercase"
                                        >
                                            Tired of the same boilerplate |
                                            design
                                        </TextScramble>
                                        {/* <TextLoop className="">
                                            <span>Fixing AI-Generated UI</span>
                                            <span>Same Boilerplate</span>
                                            <span>Same Components</span>
                                            <span>Same Design</span>
                                        </TextLoop> */}
                                    </div>
                                    <h1 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
                                        We skip the boilerplate to deliver
                                        developer-first components.
                                    </h1>
                                    <p className="mt-2 text-sm leading-normal md:text-lg">
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
                                    <div className="mt-4 space-x-3">
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
                                <div className="col-span-1 row-span-3 grid grid-cols-1 grid-rows-2 divide-x divide-y md:col-span-2 md:grid-cols-2 md:grid-rows-4 dark:divide-neutral-800">
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

            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="grid h-full w-full grid-cols-12 border border-t-0 py-16 dark:border-neutral-800">
                        <div className="col-span-12 bg-white text-center dark:bg-black">
                            <h2 className="mb-5 text-2xl leading-tight font-semibold tracking-tight md:text-5xl">
                                Interactive Components Gallery.
                            </h2>
                            <div className="grid grid-cols-12 divide-x divide-y border-t">
                                <div className="col-span-8 p-5">
                                    <InfiniteSlider gap={24}>
                                        {images.map((image, i) => (
                                            <Image
                                                key={i}
                                                src={image}
                                                alt="Apple Music logo"
                                                width={1920}
                                                height={1080}
                                                className="aspect-square w-24 object-cover md:w-36"
                                            />
                                        ))}
                                    </InfiniteSlider>
                                </div>
                                <div className="col-span-4 flex items-center justify-center px-5">
                                    <MorphingDialogBasicTwo />
                                </div>
                                <div className="col-span-4 p-5">
                                    <Cursor1 />
                                </div>
                                <div className="col-span-8 flex flex-col items-center justify-center">
                                    <Grid>
                                        <Block className="col-span-12 row-span-2 md:col-span-6">
                                            <img
                                                src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                                                alt="avatar"
                                                className="mb-4 size-14 rounded-full"
                                            />
                                            <h1 className="mb-12 text-3xl leading-tight font-medium">
                                                Hi, I'm Deepak.{" "}
                                                <span className="text-zinc-400">
                                                    Founder and CEO of Cnippet
                                                    UI
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
                                                className="col-span-6 bg-emerald-600 md:col-span-3"
                                                whileHover={{
                                                    rotate:
                                                        idx % 2
                                                            ? "-2.5deg"
                                                            : "2.5deg",
                                                    scale: 1.1,
                                                }}
                                            >
                                                <a
                                                    href="#"
                                                    className="grid h-full place-content-center text-3xl text-white"
                                                >
                                                    <Icon />
                                                </a>
                                            </Block>
                                        ))}
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="relative w-full">
                        <div className="absolute -right-2.5 -bottom-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="grid h-full w-full border border-t-0 py-16 md:grid-cols-12 dark:border-neutral-800">
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

            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="relative w-full">
                        <div className="absolute -bottom-2.5 -left-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="grid h-full w-full divide-x-0 divide-y border border-t-0 md:grid-cols-12 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-4 w-full bg-white px-4 py-8 text-left md:px-10 md:py-16 dark:bg-black">
                                <div className="sticky top-20">
                                    <h2 className="text-2xl leading-tight font-semibold tracking-tight">
                                        Vercel's Frontend Cloud.
                                    </h2>
                                    <p className="mt-2 text-gray-500">
                                        Providing the developer experience and
                                        infrastructure to build, scale, and
                                        secure a faster, more personalized web.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-8 bg-white px-4 py-8 md:px-10 md:py-16 dark:bg-black">
                                <div className="flex flex-col items-start justify-start gap-2">
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        Cache, controlled.
                                    </h3>
                                    <p className="text-gray-500">
                                        Define per-component response
                                        revalidation that persists across
                                        deploys with Vercel's Data Cache.
                                    </p>
                                    <Button className="rounded-full">
                                        Start Building
                                    </Button>
                                </div>
                                <div className="mt-20 flex flex-col items-start justify-start gap-2">
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        Cache, controlled.
                                    </h3>
                                    <p className="text-gray-500">
                                        Define per-component response
                                        revalidation that persists across
                                        deploys with Vercel's Data Cache.
                                    </p>
                                    <Button className="rounded-full">
                                        Start Building
                                    </Button>
                                </div>
                                <div className="mt-24 flex flex-col items-start justify-start gap-2">
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        Cache, controlled.
                                    </h3>
                                    <p className="text-gray-500">
                                        Define per-component response
                                        revalidation that persists across
                                        deploys with Vercel's Data Cache.
                                    </p>
                                    <Button className="rounded-full">
                                        Start Building
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="relative w-full">
                        <div className="grid h-full w-full grid-cols-12 divide-x divide-y border border-t-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-12 border-r-0 bg-white px-10 py-16 text-center dark:bg-black">
                                <p className="text-3xl font-medium">
                                    “We moved our Next.js app to Vercel in less
                                    than an hour.”
                                </p>
                                <div className="mt-5 flex items-center justify-center gap-2">
                                    <p>Neel Rao, Principal Software Engineer</p>
                                    <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-800">
                                        <RiArrowRightLine />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 border-b-0 bg-white px-10 py-16 text-left dark:bg-black">
                                <p className="text-2xl font-medium">
                                    “On-demand ISR speeds up the iteration
                                    process across the board for all of our
                                    sites.”
                                </p>
                                <div className="mt-5 flex items-center justify-start gap-2">
                                    <p>Neel Rao, Principal Software Engineer</p>
                                    <div className="w-fit rounded-full border p-1.5 text-neutral-400 dark:border-neutral-800">
                                        <RiArrowRightLine />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 bg-white px-10 py-16 text-left dark:bg-black">
                                <p className="text-lg font-medium">
                                    “It's just a pity we didn't go sooner.
                                    Next.js and Vercel make our developers
                                    happier, make us go to market quicker, and
                                    let us move with utmost confidence.”
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

            {/* FAQ section */}
            <section className="dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-10">
                    <div className="relative w-full">
                        <div className="absolute -bottom-2.5 -left-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="grid h-full w-full divide-x-0 divide-y border border-t-0 md:grid-cols-12 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-4 w-full bg-white px-4 py-8 text-left md:px-10 md:py-16 dark:bg-black">
                                <div className="sticky top-20">
                                    <h2 className="text-4xl leading-tight font-semibold tracking-tight">
                                        Frequently asked questions.
                                    </h2>
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div className="grid size-[8rem] w-full grid-cols-2 divide-x border-b dark:divide-neutral-800 dark:border-neutral-800">
                                    <div />
                                    <div />
                                </div>
                                <div>
                                    <Accordion
                                        iconVariant="plus-minus"
                                        className="flex w-full max-w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {items.map((item, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={item.id}
                                                className="px-8 py-4"
                                            >
                                                <AccordionTrigger className="w-full cursor-pointer text-left text-zinc-950 dark:text-zinc-50">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <div>{item.title}</div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="mt-1 font-normal text-neutral-600 dark:text-neutral-400">
                                                        {item.content}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className="grid size-[8rem] w-full grid-cols-2 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                                    <div />
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
