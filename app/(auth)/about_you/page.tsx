import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Complete Signup",
    description: "",
};

const CompleteSignupPage = dynamic(() => import("./_components/main"));

const AboutYouPage = () => {
    return <CompleteSignupPage />;
};

export default AboutYouPage;
