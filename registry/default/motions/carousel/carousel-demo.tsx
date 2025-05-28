import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
    Slider,
    SliderContainer,
    SliderDotButton,
    SliderNextButton,
    SliderPrevButton,
} from "@/components/motion/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DefaultSlider() {
    const OPTIONS: EmblaOptionsType = { loop: false };
    return (
        <>
            <Carousel options={OPTIONS}>
                <SliderContainer>
                    <Slider className="w-full">
                        <div className="h-[300px] w-full rounded-lg bg-blue-500 sm:h-full md:h-[500px]"></div>
                    </Slider>
                    <Slider className="w-full">
                        <div className="h-[300px] w-full rounded-lg bg-green-500 sm:h-full md:h-[500px]"></div>
                    </Slider>
                    <Slider className="w-full">
                        <div className="h-[300px] w-full rounded-lg bg-yellow-500 sm:h-full md:h-[500px]"></div>
                    </Slider>
                    <Slider className="w-full">
                        <div className="h-[300px] w-full rounded-lg bg-red-500 sm:h-full md:h-[500px]"></div>
                    </Slider>
                </SliderContainer>
                <SliderPrevButton className="text-primary absolute top-[50%] left-4 rounded-full border-2 bg-white/25 p-2 backdrop-blur-sm disabled:opacity-20 dark:border-white dark:bg-black/25">
                    <ChevronLeft className="h-8 w-8" />
                </SliderPrevButton>
                <SliderNextButton className="text-primary absolute top-[50%] right-4 rounded-full border-2 bg-white/25 p-2 backdrop-blur-sm disabled:opacity-20 dark:border-white dark:bg-black/25">
                    <ChevronRight className="h-8 w-8" />
                </SliderNextButton>
                <div className="flex justify-center py-2">
                    <SliderDotButton />
                </div>
            </Carousel>
        </>
    );
}

export default DefaultSlider;
