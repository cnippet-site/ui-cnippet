import React from "react";
import { Metadata } from "next";

import { Mdx } from "@/mdx-components";
import { allComponents } from "@/.content-collections/generated";
import { BASE_URL } from "@/config/docs";
import { getTableOfContents } from "@/lib/toc";
import { TableOfContents } from "@/components/mdx/toc";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true;

// Generate static params for all components at build time
export async function generateStaticParams() {
    return allComponents.map((component) => ({
        slug: component.slugAsParams,
    }));
}

// type Params = Promise<{ slug: string }>;

function getComponentDoc({ slug }: { slug: string }) {
    return allComponents?.find((doc) => doc.slugAsParams === slug) || null;
}

export default async function ComponentPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;
    const doc = getComponentDoc(slug);

    if (!doc) {
        return (
            <div className="flex min-h-screen items-center justify-center p-4">
                <h1 className="text-2xl font-medium text-red-600">
                    Component not found
                </h1>
            </div>
        );
    }

    const toc = await getTableOfContents(doc.body.raw);

    return (
        <main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_240px]">
            <div className="mx-auto w-full max-w-4xl min-w-0 px-4 sm:px-6 lg:px-8">
                <div className="space-y-2 pb-6">
                    <h1 className="text-foreground text-2xl font-medium tracking-tight sm:text-3xl">
                        {doc.title}
                    </h1>
                    {doc.description && (
                        <p className="text-muted-foreground text-sm md:text-base">
                            {doc.description}
                        </p>
                    )}
                </div>

                <div className="pb-12 md:pt-6">
                    <article className="prose prose-gray dark:prose-invert max-w-none">
                        {doc.body.code && <Mdx code={doc.body.code} />}
                    </article>
                </div>
            </div>

            {doc?.toc && (
                <div className="hidden xl:block">
                    <div className="sticky top-16 -mt-10 pt-6">
                        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-2 pb-6 pl-4">
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
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = await params;
    const doc = getComponentDoc(slug);

    if (!doc) {
        return {
            title: "Component Not Found",
            description: "The requested component does not exist.",
        };
    }

    const metadata: Metadata = {
        metadataBase: new URL(BASE_URL),
        title: doc.title,
        description: doc.description,

        openGraph: {
            type: "article",
            title: doc.title,
            description: doc.description,
            url: `${BASE_URL}/component/${doc.slugAsParams}`,
            images: [
                {
                    url: `${BASE_URL}/images/site.png`,
                    width: 1200,
                    height: 630,
                    alt: "Cnippet UI Component Library",
                },
            ],
            siteName: "Cnippet UI",
        },
        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
            images: [`${BASE_URL}/images/site.png`],
            site: "@cnippet_ui",
            creator: "@cnippet_ui",
        },
    };

    // if (doc.thumbnail) {
    //     const image = {
    //         url: `${BASE_URL}${doc.thumbnail.src}`,
    //         width: 1200,
    //         height: 630,
    //         alt: doc.thumbnail.alt || `${doc.title} component preview`,
    //     };

    //     metadata.openGraph!.images = [image];
    //     metadata.twitter!.images = [image];
    // }

    return metadata;
}
