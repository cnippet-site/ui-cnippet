import { LayoutGrid, Blocks, Database } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: LayoutGrid,
            title: "Multi Layout Web Design",
            description:
                "Improve user experience with Multi-Layout Web Design! Create flexible, responsive websites that work smoothly across multiple devices.",
        },
        {
            icon: Blocks,
            title: "Framer Component",
            description:
                "Save time and design faster! Browse Framer Component Collections, which are packed with responsive and dynamic components.",
        },
        {
            icon: Database,
            title: "Framer CMS",
            description:
                "Framer CMS allows you to manage content effortlessly! A solid, no-code solution for dynamic, scalable websites.",
        },
    ];

    return (
        <section className="pt-16 md:pt-24 lg:pt-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-[#09071b] px-6 py-12 md:p-12 lg:px-16 lg:py-20">
                    <div className="mb-6 text-center md:mb-8 lg:mb-10">
                        <h2 className="text-3xl font-medium text-white sm:text-4xl md:text-5xl">
                            Main Features in the Kloomix Template
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 md:mt-6">
                            Explore the key characteristics of the Kloomix template,
                            designed to provide a clean, user-friendly, and fully
                            configurable experience for modern websites.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group rounded-xl flex gap-1 flex-col justify-between p-6 transition-all hover:bg-[#16132E] md:p-8"
                            >
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE27D] transition-transform group-hover:scale-105">
                                    <feature.icon className="h-6 w-6 text-[#2F2B6B]" />
                                </div>
                                <h3 className="text-xl font-medium text-white md:text-2xl">
                                    {feature.title}
                                </h3>
                                <p className="mt-auto text-base text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}