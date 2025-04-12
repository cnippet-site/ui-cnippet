import React from "react";

import Image from "next/image";
import {
    SpotLightItem,
    Spotlight,
} from "@/components/motion/spotlight-card";

export default function index() {
    const boxes = [
        {
            id: "12",

            // chart: "/chart_motl5z.webp",
            className: "grid xl:col-span-1 col-start-1 col-end-3",
        },
        {
            id: "52",

            // chart: "/chart4_s7wsku.webp",
            className: "grid xl:col-span-1 col-start-3 col-end-6",
        },

        {
            id: "42",

            // chart: "/chart3_i9wdgb.webp",
            className: "grid xl:col-span-1 col-start-1 col-end-3",
        },

        {
            id: "22",

            // chart: "/star_tb9ivg.webp",
            className: "grid xl:col-span-1 col-start-3 col-end-6",
        },
        {
            id: "32",
            title: "Track Goals",

            // chart: "/chart1_rll0mx.webp",
            des: "Keeping track of your goals helps you stay organized, motivated, and focused. Regularly monitoring your progress ensures you stay on course.",
            className:
                "xl:col-span-2 xl:row-span-2 row-start-2 row-end-3  col-start-1 col-end-6",
        },
    ];
    return (
        <>
            <div className="relative rounded-md bg-black p-4 sm:p-8">
                <Spotlight className="grid grid-flow-col grid-cols-4 gap-2">
                    {boxes?.map((box, index) => {
                        return (
                            <SpotLightItem
                                className={box.className}
                                key={index}
                            >
                                <div className="relative z-10 mx-auto h-full w-full rounded-lg bg-gradient-to-b from-[#0c0c0c] to-[#252525]">
                                    <div className="relative grid h-full max-h-full w-full place-content-center rounded-lg p-0 2xl:p-3">
                                        <div
                                            className={`absolute top-0 left-0 -z-10 h-full w-full rounded-lg bg-cover bg-center`}
                                        />

                                        {/* <Image
                                            src={box?.chart}
                                            alt="grid"
                                            width={600}
                                            className="mx-auto w-fit"
                                            height={600}
                                        /> */}
                                        <h1 className="text-center text-2xl font-semibold lg:text-xl xl:text-2xl">
                                            {box?.title}
                                        </h1>
                                        <p className="text-center text-xs lg:text-base">
                                            {box?.des}
                                        </p>
                                    </div>
                                </div>
                            </SpotLightItem>
                        );
                    })}
                </Spotlight>
            </div>
        </>
    );
}
