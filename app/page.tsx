"use client";
import { SVGProps, useEffect } from "react";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

import { Cursor } from "@/components/motion/cursor";

// import Faq from "@/components/routes/home/faq";
// import Features from "@/components/routes/home/features";
// import Footer from "@/components/routes/shared/footer";
// import Navbar from "@/components/routes/shared/navbar";
// import Components from "@/components/routes/home/components";

const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Features = dynamic(() => import("@/components/routes/home/features"));
const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Footer = dynamic(() => import("@/components/routes/shared/footer"));
const Navbar = dynamic(() => import("@/components/routes/shared/navbar"));
const Components = dynamic(() => import("@/components/routes/home/components"));

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.05,
            duration: 2.2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Navbar />

            <div className="home-page">
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.15,
                    }}
                    className="top-4 z-[100]"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="inline-flex w-full items-center justify-center"
                    >
                        <div className="">
                            <MouseIcon className="size-7 -rotate-[80deg] fill-blue-600" />
                        </div>
                    </motion.div>
                </Cursor>
                <main className="font-sans">
                    <Hero />
                    <Features />
                    <Components />
                    <Faq />
                </main>
            </div>

            <Footer />
        </>
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
