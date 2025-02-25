"use client";
import { useEffect } from "react";
import Lenis from "lenis";

import Faq from "@/components/routes/home/faq";
import Features from "@/components/routes/home/features";
import Hero from "@/components/routes/home/hero";
import Footer from "@/components/routes/shared/footer";
import Navbar from "@/components/routes/shared/navbar";

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
            <main className="font-sans">
                <Hero />
                <Features />
                <Faq />
            </main>
            <Footer />
        </>
    );
}
