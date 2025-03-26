"use client";
import { SVGProps, useEffect } from "react";
import Lenis from "lenis";

import Faq from "@/components/routes/home/faq";
import Features from "@/components/routes/home/features";
import Hero from "@/components/routes/home/hero";
import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";
import { Cursor } from "@/components/motion/cursor";
import { motion } from "motion/react";

export default function Home() {
    // useEffect(() => {
    //     const lenis = new Lenis({
    //         smoothWheel: true,
    //         lerp: 0.05,
    //         duration: 2.2,
    //         infinite: false,
    //     });

    //     function raf(time: number) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);

    //     return () => {
    //         lenis.destroy();
    //     };
    // }, []);

    return (
        <div className="">
           
            {/* <AreaChartDemo /> */}
            {/* <Navbar /> */}
            <main className="font-sans">
                <Hero />
                {/* <Features /> */}
                {/* <Faq /> */}
            </main>
            <Footer />
        </div>
    );
}

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24.00 24.00"
            id="cursor"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="secondary"
                    d="M19.54,3.1,3.62,10.31A1.17,1.17,0,0,0,4,12.5l6.23,1.26L11.5,20a1.17,1.17,0,0,0,2.19.39L20.9,4.46A1,1,0,0,0,19.54,3.1Z"
                ></path>
                <path
                    id="primary"
                    d="M19.54,3.1,3.62,10.31A1.17,1.17,0,0,0,4,12.5l6.23,1.26L11.5,20a1.17,1.17,0,0,0,2.19.39L20.9,4.46A1,1,0,0,0,19.54,3.1Z"
                ></path>
            </g>
        </svg>
    );
};
