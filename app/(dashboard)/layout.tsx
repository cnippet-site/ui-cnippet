import React from "react";
import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/actions/auth.actions";
import Footer from "@/components/routes/shared/footer";

const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getUserSession();
    if (!session) {
        redirect("/signin");
    }
    return (
        <>
            {/* <Nav1 /> */}
            {children}
            <Footer />
        </>
    );
};

export default layout;
