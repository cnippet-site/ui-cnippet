import { motion } from "motion/react";
import Link from "next/link";

export default function Faq() {
    const faq = [
        {
            question: "Do I need React experience to use CNIPPET?",
            answer: "Basic React/Next.js knowledge is recommended for customization, but our copy-paste components make implementation effortless! 🚀 Start simple and scale as you learn.",
        },
        {
            question: "How customizable are the components?",
            answer: "Fully tweakable! Every component is built with Tailwind CSS - override styles, modify animations with Framer Motion, or restructure as needed. Your design system, your rules. 🎨",
        },
        {
            question: "Can I use this in commercial projects?",
            answer: "Absolutely! CNIPPET is MIT-licensed - build client sites, SaaS products, or internal tools. No attribution required, though we appreciate shoutouts! 💼",
        },
        {
            question: "How accessible are the components?",
            answer: "We bake in accessibility: ARIA labels, keyboard nav, and WCAG contrast ratios out of the box. Tested with screen readers like JAWS/NVDA. ♿️",
        },
        {
            question: "What if I need help?",
            answer: "We've got your back! Join our Discord community for real-time support. For critical bugs, expect patches within 24 hours. 💬",
        },
        {
            question: "Can I contribute to CNIPPET?",
            answer: "We ❤️ OSS contributions! Report issues, suggest features on GitHub, or submit PRs. Top contributors get free lifetime upgrades!",
        },
    ];

    return (
        <section className="bg-background">
            <div className="mx-4 max-w-7xl border-l border-r border-dashed px-4 py-16 dark:border-neutral-800 sm:px-6 md:mx-auto md:py-24 lg:px-8 lg:py-40">
                <div className="flex flex-col gap-5 md:flex-row">
                    <div className="mx-auto flex w-full max-w-sm flex-col">
                        <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
                            Frequently Asked Question
                        </h2>
                        <p className="mt-4 text-base md:mt-6">
                            Basic questions for potential buyers of Cnippet
                            templates
                        </p>
                        <div className="mt-auto">
                            <p className="text-sm text-gray-500">
                                Still have questions? Contact us at{" "}
                                <Link
                                    href="mailto:support@ui.cnippet.site"
                                    className="text-[#2F2B6B] underline transition hover:text-[#FFE27D]"
                                >
                                    support@ui.cnippet.site
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-5">
                        {faq.slice(0, 3).map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className="rounded-xl border border-dashed bg-white p-7 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-black/80"
                            >
                                <h3 className="text-lg font-semibold text-black dark:text-white">
                                    {item.question}
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400 md:text-base">
                                    {item.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex w-full flex-col gap-5">
                        {faq.slice(3).map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className="rounded-xl border border-dashed bg-white p-7 transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-black/80"
                            >
                                <h3 className="text-lg font-semibold text-black dark:text-white">
                                    {item.question}
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 dark:text-neutral-400 md:text-base">
                                    {item.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
