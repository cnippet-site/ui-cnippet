import React from "react";
import Footer from "@/components/routes/shared/footer";
import Nav1 from "@/components/routes/shared/navbar/nav-1";

const layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Nav1 />
            {children}
            <Footer />
        </>
    );
};

export default layout;
