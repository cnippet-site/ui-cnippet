import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { codeImport } from "remark-code-import";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeComponent } from "./lib/rehype-component";
import { rehypeNpmCommand } from "./lib/rehype-npm-command";

const prettyCodeOptions: Options = { theme: "catppuccin-mocha" };

const sharedSchema = (z: any) => ({
    title: z.string(),
    description: z.string(),
    thumbnail: z.object({ src: z.string(), alt: z.string() }),
    link: z.string(),
    toc: z.boolean().optional().default(true),
});

const processPreElement = (node: any) => {
    const [codeEl] = node.children;
    if (codeEl.tagName !== "code") return;

    if (codeEl.data?.meta) {
        const match = codeEl.data.meta.match(/event="([^"]*)"/);
        if (match) {
            node.__event__ = match[1];
            codeEl.data.meta = codeEl.data.meta.replace(/event="([^"]*)"/, "");
        }
    }
    node.__rawString__ = codeEl.children?.[0].value;
    node.__src__ = node.properties?.__src__;
    node.__style__ = node.properties?.__style__;
};

const processFigureElement = (node: any) => {
    if (!("data-rehype-pretty-code-figure" in node.properties)) return;
    const preElement = node.children.at(-1);
    if (preElement.tagName !== "pre") return;

    preElement.properties["__withMeta__"] =
        node.children.at(0).tagName === "div";
    preElement.properties["__rawString__"] = node.__rawString__;
    if (node.__src__) preElement.properties["__src__"] = node.__src__;
    if (node.__event__) preElement.properties["__event__"] = node.__event__;
    if (node.__style__) preElement.properties["__style__"] = node.__style__;
};

const sharedRehypePlugins = [
    rehypeSlug,
    rehypeComponent,
    () => (tree: any) =>
        visit(
            tree,
            (node) =>
                node?.type === "element" &&
                node?.tagName === "pre" &&
                processPreElement(node),
        ),
    [rehypePrettyCode, prettyCodeOptions],
    () => (tree: any) =>
        visit(
            tree,
            (node) =>
                node?.type === "element" &&
                node?.tagName === "figure" &&
                processFigureElement(node),
        ),
    rehypeNpmCommand,
    [
        rehypeAutolinkHeadings,
        {
            properties: {
                className: ["subheading-anchor"],
                ariaLabel: "Link to section",
            },
        },
    ],
];

const createCollection = (name: string, directory: string) =>
    defineCollection({
        name,
        directory,
        include: "*.mdx",
        schema: sharedSchema,
        transform: async (document, context) => ({
            ...document,
            slugAsParams: document._meta.path,
            body: {
                raw: document.content,
                code: await compileMDX(context, document, {
                    remarkPlugins: [codeImport, remarkGfm],
                    rehypePlugins: sharedRehypePlugins as any,
                }),
            },
        }),
    });

export default defineConfig({
    collections: [
        createCollection("components", "content/components"),
        createCollection("motions", "content/motion"),
        createCollection("charts", "content/chart"),
    ],
});
