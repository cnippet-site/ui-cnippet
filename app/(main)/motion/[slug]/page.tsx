import React from "react";
import { Metadata } from "next";
import { Mdx } from "@/mdx-components";
import { allMotions } from "@/.content-collections/generated";
import { BASE_URL } from "@/config/docs";
import { getTableOfContents } from "@/lib/toc";
import { TableOfContents } from "@/components/mdx/toc";

// interface Params {
//     slug: string;
// }
type Params = Promise<{ slug: string }>;

function getComponentDoc({ slug }: { slug: string }) {
    return allMotions.find((doc) => doc.slugAsParams === slug) || null;
}

export default async function ComponentPage({ params }: { params: Params }) {
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
        <main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0 max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-2 pb-6">
                    <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-3xl">
                        {doc.title}
                    </h1>
                    {doc.description && (
                        <p className="text-base text-muted-foreground">
                            {doc.description}
                        </p>
                    )}
                </div>

                <div className="pb-12 pt-6">
                    <article className="prose prose-gray dark:prose-invert max-w-none">
                        {doc.body.code && <Mdx code={doc.body.code} />}
                    </article>
                </div>
            </div>

            {doc?.toc && (
                <div className="hidden xl:block">
                    <div className="sticky top-16 -mt-10 pt-6">
                        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pb-6 pl-4 pr-2">
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
    const doc = getComponentDoc(slug);

    if (!doc) {
        return {
            title: "Component Not Found",
            description: "The requested component does not exist.",
            alternates: {
                canonical: `${BASE_URL}/404`,
            },
        };
    }

    const metadata: Metadata = {
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
            siteName: "Cnippet UI",
        },
        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
        },
    };

    if (doc.thumbnail) {
        const image = {
            url: `${BASE_URL}${doc.thumbnail.src}`,
            width: 1200,
            height: 630,
            alt: doc.thumbnail.alt || `${doc.title} component preview`,
        };

        metadata.openGraph!.images = [image];
        metadata.twitter!.images = [image];
    }

    return metadata;
}
