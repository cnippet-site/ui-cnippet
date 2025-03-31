import { signUpWithCredentials } from "@/lib/actions/auth.actions";
import SignUpForm from "@/components/form/signup-form";

interface SignUpPageProps {
    searchParams: Promise<{
        callbackUrl: string;
    }>;
}

const SignUpPage = async ({ searchParams }: SignUpPageProps) => {
    const { callbackUrl } = await searchParams;

    return (
        <div className="w-full">
            <SignUpForm
                callbackUrl={callbackUrl || "/"}
                signUpWithCredentials={signUpWithCredentials}
            />
        </div>
    );
};

export default SignUpPage;
