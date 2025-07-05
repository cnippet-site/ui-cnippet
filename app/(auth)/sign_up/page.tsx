import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("@/components/shared/form/sign-up"));

export const metadata: Metadata = {
    title: "Sign In",
    description: "",
};

export default function SignUp() {
    return (
        <>
            <SignUpForm />
        </>
    );
}
