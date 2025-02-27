import { Registry } from "@/registry/schema";

const BASE_PATH = "components/motion/";

const generateComponents = (componentsConfig: { name: string }[]): Registry => {
    return componentsConfig.map((component) => ({
        name: component.name,
        slug: `/components/${component.name}`,
        type: "registry:component",
        files: [`${BASE_PATH}${component.name}.tsx`],
    }));
};

export const motions: Registry = generateComponents([
    {
        name: "animated-group",
    },
    {
        name: "animated-number",
    },
    {
        name: "carousel",
    },
    {
        name: "collapsible",
    },
    {
        name: "cursor",
    },
    {
        name: "dialog",
    },
    {
        name: "dock",
    },
    {
        name: "image-comparison",
    },
    {
        name: "in-view",
    },
    {
        name: "infinite-slider",
    },
    {
        name: "progressive-blur",
    },
    {
        name: "scroll-progress",
    },
    {
        name: "sliding-number",
    },
    {
        name: "spinning-text",
    },
    {
        name: "spotlight",
    },
    {
        name: "text-effect",
    },
    {
        name: "text-loop",
    },
    {
        name: "text-morph",
    },
    {
        name: "text-roll",
    },
    {
        name: "text-scramble",
    },
    {
        name: "text-shimmer-wave",
    },
    {
        name: "text-shimmer",
    },
    {
        name: "trasition-panel",
    },
]);
