import React from "react";
import { Metadata } from "next";

import { Mdx } from "@/mdx-components";

import { allComponents } from "@/.content-collections/generated";

import { BASE_URL } from "@/config/docs";
import { getTableOfContents } from "@/lib/toc";
import { TableOfContents } from "@/components/mdx/toc";

type Params = Promise<{ slug: string }>;

async function getComponentDoc({ slug }: { slug: string }) {
    try {
        const doc = allComponents.find((doc) => doc.slugAsParams === slug);
        return doc ? { ...doc, link: `/components/${slug}` } : null;
    } catch (error) {
        console.error("Error fetching component:", error);
        return null;
    }
}

export default async function Blogpage({ params }: { params: Params }) {
    const slug = await params;
    const doc = await getComponentDoc(slug);

    if (!doc) {
        return <div>Component not found.</div>;
    }

    const toc = await getTableOfContents(doc.body.raw);

    return (
        <main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0 max-w-5xl">
                <div className="space-y-2">
                    <h1 className="truncate text-4xl font-medium capitalize text-black">
                        {doc.title}
                    </h1>
                    {doc?.description && (
                        <p className="text-dawn-500 text-muted-foreground text-balance text-base">
                            {doc.description}
                        </p>
                    )}
                </div>

                <div className="pb-12 pt-8">
                    {doc?.body.code && <Mdx code={doc?.body.code} />}
                </div>
            </div>
            {doc?.toc && (
                <div className="hidden text-sm xl:block">
                    <div className="sticky top-16 -mt-10 pt-4">
                        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] space-y-4 py-12">
                            <TableOfContents toc={toc} />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const slug = await params;
    const doc = await getComponentDoc(slug);

    if (!doc) {
        return {
            title: "Component Not Found",
            description: "The requested component does not exist.",
            alternates: {
                canonical: `${BASE_URL}/404`,
            },
        };
    }

    return {
        metadataBase: new URL(BASE_URL),

        title: doc.title,
        description: doc.description,

        alternates: {
            canonical: `${BASE_URL}/components/${slug}`,
        },

        openGraph: {
            type: "article",
            title: doc.title,
            description: doc.description,
            url: `${BASE_URL}/components/${slug}`,
            images: [
                {
                    url: `${BASE_URL}${doc.thumbnail.src}`,
                    width: 1200,
                    height: 630,
                    alt: doc.thumbnail.alt || `${doc.title} component preview`,
                },
            ],
            siteName: "Cnippet UI",
        },

        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
            images: [
                {
                    url: `${BASE_URL}${doc.thumbnail.src}`,
                    width: 1200,
                    height: 630,
                    alt: doc.thumbnail.alt || `${doc.title} component preview`,
                },
            ],
        },
    };
}
