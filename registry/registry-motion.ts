import { Registry } from "@/registry/schema";

const BASE_PATH = "components/motion/";

const generateComponents = (componentsConfig: { name: string }[]): Registry => {
    return componentsConfig.map((component) => ({
        name: component.name,
        slug: `/components/${component.name}`,
        type: "registry:motion",
        files: [`${BASE_PATH}${component.name}.tsx`],
    }));
};

export const motions: Registry = generateComponents([
    {
        name: "accordion",
    },
    {
        name: "animated-group",
    },
    {
        name: "animated-number",
    },
    {
        name: "blocks",
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
        name: "drag-items",
    },
    {
        name: "drawer-rc",
    },
    {
        name: "grid",
    },
    {
        name: "horizontal-scroll",
    },
    {
        name: "image-comparison",
    },
    {
        name: "image-mousetrail",
    },
    {
        name: "in-view",
    },
    {
        name: "infinite-slider",
    },
    {
        name: "morphing-dialog",
    },
    {
        name: "progressive-blur",
    },
    {
        name: "scroll-progress",
    },
    {
        name: "shuffle-text",
    },
    {
        name: "shuffle",
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
        name: "tilt",
    },
    {
        name: "transition-panel",
    },
]);
