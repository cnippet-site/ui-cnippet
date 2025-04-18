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
        name: "clip-path",
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
        name: "framer-carousel",
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
        name: "image-reveal",
    },
    {
        name: "image-tabs",
    },
    {
        name: "in-view",
    },
    {
        name: "infinite-slider",
    },
    {
        name: "masonary-grid",
    },
    {
        name: "morphing-dialog",
    },
    {
        name: "progressive-blur",
    },
    {
        name: "progressive-carousel",
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
        name: "spotlight-card",
    },
    {
        name: "tabs-rc",
    },
    {
        name: "text-effect",
    },
    {
        name: "text-loop",
    },
    {
        name: "text-marquee",
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
        name: "text-wave",
    },
    {
        name: "tilt",
    },
    {
        name: "transition-panel",
    },
]);
