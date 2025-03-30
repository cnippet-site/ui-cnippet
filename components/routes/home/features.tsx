// import { Cursor } from "@/components/motion/cursor";
// import { RiCodepenLine } from "@remixicon/react";
// import { Captions, ChartSpline, PlusIcon } from "lucide-react";
// import { motion } from "motion/react";

// export default function Features() {
//     const features = [
//         {
//             icon: ChartSpline,
//             title: "Smooth Motion Animations",
//             description:
//                 "Enhance user experience with fluid, performant animations powered by Motion. Easily integrate with just a copy & paste into your React/Next.js projects.",
//         },
//         {
//             icon: RiCodepenLine,
//             title: "Modular Components",
//             description:
//                 "Beautiful, accessible components built on shadcn. Copy & paste ready React blocks with built-in Tailwind styling for rapid development.",
//         },
//         {
//             icon: Captions,
//             title: "Accessibility First",
//             description:
//                 "WCAG-compliant components out of the box. Create inclusive web experiences with proper ARIA labels and keyboard navigation baked in.",
//         },
//     ];

//     return (
//         <section className="border-b border-dashed bg-background dark:border-neutral-800 md:pt-0">
//             <div className="mx-4 max-w-full border-l border-r border-dashed px-4 pt-10 dark:border-neutral-800 sm:px-6 md:mx-auto md:max-w-7xl lg:px-0">
//                 <div className="px-0 md:p-12 lg:px-0">
//                     <div className="mb-6 text-center md:mb-8 lg:mb-10">
//                         <h2 className="text-3xl font-medium text-black dark:text-white sm:text-4xl md:text-6xl">
//                             Main Features of Cnippet UI
//                         </h2>
//                         <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 dark:text-neutral-400 md:mt-6">
//                             Explore the key characteristics of the Cnippet
//                             UI, designed to provide a clean, user-friendly, and
//                             fully configurable experience for modern websites.
//                         </p>
//                     </div>

//                     <div className="border-t border-dashed py-10 dark:border-neutral-800 md:border-b">
//                         <div className="grid gap-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
//                             <Cursor
//                                 attachToParent
//                                 variants={{
//                                     initial: { scale: 0.3, opacity: 0 },
//                                     animate: { scale: 1, opacity: 1 },
//                                     exit: { scale: 0.3, opacity: 0 },
//                                 }}
//                                 transition={{
//                                     ease: "easeInOut",
//                                     duration: 0.15,
//                                 }}
//                                 className="left-12 top-8"
//                             >
//                                 <motion.div
//                                     initial={{ opacity: 0, scale: 0.6 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     exit={{ opacity: 0, scale: 0.6 }}
//                                     className="inline-flex w-full items-center justify-center"
//                                 >
//                                     <div className="flex items-center justify-center rounded-[24px] bg-gray-500/40 px-3 py-1 backdrop-blur-md dark:bg-gray-300/40">
//                                         <motion.div
//                                             initial={{ opacity: 0, scale: 0.6 }}
//                                             animate={{ opacity: 1, scale: 1 }}
//                                             exit={{ opacity: 0, scale: 0.6 }}
//                                             className="inline-flex w-full items-center justify-center"
//                                         >
//                                             <div className="inline-flex items-center text-sm text-white dark:text-black">
//                                                 More{" "}
//                                                 <PlusIcon className="ml-1 h-4 w-4" />
//                                             </div>
//                                         </motion.div>
//                                     </div>
//                                 </motion.div>
//                             </Cursor>
//                             {features.map((feature, index) => (
//                                 <div
//                                     key={index}
//                                     className="group flex flex-col justify-between gap-1 rounded-xl bg-black p-6 transition-all md:p-8"
//                                 >
//                                     <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE27D] transition-transform group-hover:scale-105">
//                                         <feature.icon className="size-7 text-black" />
//                                     </div>
//                                     <h3 className="text-xl font-medium text-white md:text-2xl">
//                                         {feature.title}
//                                     </h3>
//                                     <p className="mt-auto text-sm text-gray-400 md:text-base">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { Button } from "@/components/ui/button";
import React from "react";

const Features = () => {
    return (
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
                                    Vercel&apos;s Frontend Cloud.
                                </h2>
                                <p className="mt-2 text-gray-500">
                                    Providing the developer experience and
                                    infrastructure to build, scale, and secure a
                                    faster, more personalized web.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-8 bg-white px-4 py-8 md:px-10 md:py-16 dark:bg-black">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Cache, controlled.
                                </h3>
                                <p className="text-gray-500">
                                    Define per-component response revalidation
                                    that persists across deploys with Vercel&apos;s
                                    Data Cache.
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
                                    Define per-component response revalidation
                                    that persists across deploys with Vercel&apos;s
                                    Data Cache.
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
                                    Define per-component response revalidation
                                    that persists across deploys with Vercel&apos;s
                                    Data Cache.
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
    );
};

export default Features;
