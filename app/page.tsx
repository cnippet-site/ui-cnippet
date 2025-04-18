"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/routes/home/hero"));
const Features = dynamic(() => import("@/components/routes/home/features"));
const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Footer = dynamic(() => import("@/components/routes/shared/footer"));
const Components = dynamic(() => import("@/components/routes/home/components"));
const Feedback = dynamic(() => import("@/components/routes/home/feedback"));
const Cta = dynamic(() => import("@/components/routes/home/cta"));
const Nav1 = dynamic(() => import("@/components/routes/shared/navbar/nav-1"));
// const CreditCardLanding = dynamic(() => import("@/components/routes/shared/cta"));

export default function Home() {
    return (
        <>
            {/* <ResetPasswordEmail /> */}
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
