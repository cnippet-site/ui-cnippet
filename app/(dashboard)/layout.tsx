import React from "react";
import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/actions/auth.actions";
import Nav1 from "@/components/routes/shared/navbar/nav-1";
const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getUserSession();
    if (!session) {
        redirect("/signin");
    }
    return (
        <>
            <Nav1 />
            {children}
        </>
    );
};

export default layout;
