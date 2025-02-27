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
        <section className="border-b border-dashed">
            <div className="mx-auto max-w-7xl border-l border-r border-dashed px-4 pt-0 sm:px-6 lg:px-0">
                <div className="bg-white px-6 md:p-12 lg:px-0">
                    <div className="mb-6 text-center md:mb-8 lg:mb-10">
                        <h2 className="text-3xl font-medium text-black sm:text-4xl md:text-6xl">
                            Main Features in the Kloomix Template
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-700 md:mt-6">
                            Explore the key characteristics of the Kloomix
                            template, designed to provide a clean,
                            user-friendly, and fully configurable experience for
                            modern websites.
                        </p>
                    </div>

                    <div className="border-b border-t border-dashed py-10">
                        <div className="grid gap-6 px-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col justify-between gap-1 rounded-xl bg-[#09071b] p-6 transition-all md:p-8"
                                >
                                    <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE27D] transition-transform group-hover:scale-105">
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
            </div>
        </section>
    );
}
