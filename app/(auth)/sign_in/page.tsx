import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Sign In",
    description: "",
};

const SignInForm = dynamic(() => import("@/components/shared/form/sign-in"));

const page = () => {
    return <SignInForm />;
};

export default page;
