"use client";
import dynamic from "next/dynamic";

const Nav1 = dynamic(() => import("@/components/routes/shared/navbar/nav-1"))
const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Components = dynamic(() => import("@/components/routes/home/components"));
const Features = dynamic(() => import("@/components/routes/home/features"));
const Feedback = dynamic(() => import("@/components/routes/home/feedback"));
const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Cta = dynamic(() => import("@/components/routes/home/cta"));
const Footer = dynamic(() => import("@/components/routes/shared/footer"));

// const CreditCardLanding = dynamic(() => import("@/components/routes/shared/cta"));

export default function Home() {
    return (
        <>
            <Nav1 />
            <main className="font-sans">
                <Hero />
                <Components />
                <Features />
                <Feedback />
                <Faq />
                <Cta />
            </main>
            <Footer />
            {/* <CreditCardLanding /> */}
        </>
    );
}
