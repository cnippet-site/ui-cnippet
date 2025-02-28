import { motion } from "motion/react";
import Link from "next/link";

export default function Faq() {
    const faq = [
        {
            question: "Do I need to know about how to code?",
            answer: "No coding experience is needed.",
        },
        {
            question: "Can I use it for multiple projects?",
            answer: "Definitely! Please use it however you like; we don't limit it.",
        },
        {
            question: "Can I redistribute this product?",
            answer: "Do not ever consider doing it.",
        },
        {
            question: "Can I use it for commercial projects?",
            answer: "Feel free to do so. Kloomix does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won't breathe a word).",
        },
        {
            question: "What is your refund policy?",
            answer: "We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.",
        },
    ];

    return (
        <section className="">
            <div className="mx-auto max-w-7xl border-l border-r border-dashed px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-40">
                <div className="flex flex-col gap-5 md:flex-row">
                    <div className="mx-auto flex w-full max-w-sm flex-col">
                        <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
                            Frequently Asked Question
                        </h2>
                        <p className="mt-4 text-base md:mt-6">
                            Basic questions for potential buyers of Kloomix
                            templates
                        </p>
                        <div className="mt-auto">
                            <p className="text-sm text-gray-500">
                                Still have questions? Contact us at{" "}
                                <Link
                                    href="mailto:support@kloomix.com"
                                    className="text-[#2F2B6B] underline transition hover:text-[#FFE27D]"
                                >
                                    support@kloomix.com
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
                                className="rounded-xl border bg-white p-7 transition-all hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-violet-950">
                                    {item.question}
                                </h3>
                                <p className="mt-0 text-gray-700 md:mt-2">
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
                                className="rounded-xl border bg-white p-7 transition-all hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-violet-950">
                                    {item.question}
                                </h3>
                                <p className="mt-0 text-gray-700 md:mt-2">
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
