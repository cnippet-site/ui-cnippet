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

const Faq = () => {
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
