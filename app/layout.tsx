import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { BASE_URL } from "@/config/docs";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Cnippet UI",
        template: `%s | Cnippet UI`,
    },
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",

    applicationName: "Cnippet UI",

    keywords: ["UI components", "React components", "open source UI kit"],
    authors: [{ name: "Cnippet Team", url: BASE_URL }],
    category: "Technology",

    openGraph: {
        type: "website",
        title: "Cnippet UI",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        url: BASE_URL,
        images: [
            {
                url: `${BASE_URL}/images/site.png`,
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
        title: "Cnippet UI",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [`${BASE_URL}/images/site.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },

    alternates: {
        canonical: BASE_URL,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId="GTM-MZVF5K5T" />
            <body
                className={`antialiased dark:bg-neutral-950`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Sonner richColors expand={true} position="top-right" />
                </ThemeProvider>
            </body>
            <GoogleAnalytics gaId="G-78T110L7RD" />
        </html>
    );
}
