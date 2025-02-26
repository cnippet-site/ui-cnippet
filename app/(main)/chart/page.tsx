import React from "react";
import { Metadata } from "next";

// import AllComponents from "@/components/shared/layout/all-components";

const baseUrl = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Webpage",
    name: "Components - cnippet/ui",
    url: `${baseUrl}/components`,
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
    image: `${baseUrl}/images/og/site.png`,

    publisher: {
        "@type": "Organization",
        name: "Cnippet UI",
        url: baseUrl,
    },
};

const page = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            {/* <AllComponents count={35} /> */}
        </>
    );
};

export default page;

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: "Components",
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",

        alternates: {
        canonical: `${baseUrl}/components`,
    },

    openGraph: {
        type: "website",
        title: "Components - cnippet/ui",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        url: `${baseUrl}/components`,
        images: [
            {
                url: `${baseUrl}/images/og/site.png`,
                width: 1200,
                height: 630,
                alt: "Cnippet UI Component Library",
            },
        ],
        siteName: "Cnippet UI",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Components - cnippet/ui",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [`${baseUrl}/images/og/site.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },
};
