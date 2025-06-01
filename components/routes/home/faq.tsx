import React from "react";

import { AtSignIcon, CommandIcon, EclipseIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/motion/accordion";

const items = [
    {
        id: "1",
        title: "What makes Cnippet different from other UI libraries?",
        icon: AtSignIcon,
        content:
            "Cnippet delivers precision-tuned React components specifically designed for SaaS, e-commerce, and data-heavy dashboards. Unlike generic UI blocks, our components are production-ready and optimized for real-world applications. 🚀",
    },
    {
        id: "2",
        title: "How quickly can I integrate Cnippet into my project?",
        icon: CommandIcon,
        content:
            "Extremely fast! Our components are copy-paste ready with built-in Tailwind styling. No complex setup or configuration needed - just copy, paste, and launch in seconds. Perfect for rapid prototyping and production builds. ⚡",
    },
    {
        id: "3",
        icon: EclipseIcon,
        title: "Is Cnippet suitable for enterprise applications?",
        content:
            "Absolutely! From startup MVPs to enterprise dashboards, Cnippet's components scale beautifully. We've helped companies like DashLabs and HealthFirst build robust applications while cutting development time by up to 40%. 💼",
    },
    {
        id: "4",
        icon: EclipseIcon,
        title: "How accessible are the components?",
        content:
            "Accessibility is built into every component. We've helped teams achieve WCAG compliance effortlessly with proper ARIA labels, keyboard navigation, and screen reader support. Tested with JAWS/NVDA for maximum compatibility. ♿️",
    },
    {
        id: "5",
        icon: EclipseIcon,
        title: "Do you support both TypeScript and JavaScript?",
        content:
            "Yes! Cnippet is designed for both TypeScript and JavaScript developers. Enjoy the same high-quality components regardless of your preference, with full type safety and documentation for TypeScript users. 🛠️",
    },
    {
        id: "6",
        icon: EclipseIcon,
        title: "What kind of support do you offer?",
        content:
            "We provide comprehensive support through our Discord community for real-time assistance. For critical issues, we offer 24-hour response times. Plus, our extensive documentation and examples make implementation smooth. 💬",
    },
];

const Faq = () => {
    return (
        <section className="dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                <div className="relative w-full">
                    <div className="absolute -bottom-2.5 -left-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="grid h-full w-full divide-x-0 divide-y border border-t-0 md:grid-cols-12 md:divide-x md:divide-y-0 dark:divide-neutral-900 dark:border-neutral-900">
                        <div className="col-span-4 w-full bg-white px-4 py-8 text-left md:px-10 md:py-16 dark:bg-black">
                            <div className="sticky top-20">
                                <h2 className="text-4xl leading-tight font-semibold tracking-tight">
                                    Frequently asked questions.
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="grid size-[8rem] w-full max-w-full grid-cols-2 divide-x border-b dark:divide-neutral-900 dark:border-neutral-900">
                                <div />
                                <div />
                            </div>
                            <div>
                                <Accordion
                                    iconVariant="plus-minus"
                                    className="flex w-full max-w-full flex-col divide-y divide-zinc-200 dark:divide-neutral-900"
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {items.map((item, i) => (
                                        <AccordionItem
                                            key={i}
                                            value={item.id}
                                            className="px-4 py-4 md:px-8"
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
                            <div className="grid size-[8rem] w-full max-w-full grid-cols-2 divide-x border-t dark:divide-neutral-900 dark:border-neutral-900">
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
