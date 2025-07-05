"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const CompleteSignupForm = dynamic(() => import("./complete-signup-form"));

export default function CompleteSignupPage() {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        } else if (status === "authenticated" && session?.user?.username) {
            router.push("/");
        }
    }, [status, session, router]);

    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-gray-900" />
            </div>
        );
    }

    return (
        <section className="relative h-screen w-full overflow-hidden dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 pt-16 md:px-8">
                <div className="relative w-full">
                    <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
                        <CompleteSignupForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
