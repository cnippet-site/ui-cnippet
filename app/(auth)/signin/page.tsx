import SignInForm from "@/components/form/signin-form";

interface SignInPageProps {
    searchParams: Promise<{
        callbackUrl: string;
    }>;
}

const SignInPage = async ({ searchParams }: SignInPageProps) => {
    const { callbackUrl } = await searchParams;

    return (
        <div className="w-full">
            <SignInForm callbackUrl={callbackUrl || "/"} />
        </div>
    );
};

export default SignInPage;
