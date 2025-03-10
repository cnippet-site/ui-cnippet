import { Registry } from "@/registry/schema";

const BASE_PATH = "registry/default/";

const generateExamples = (
    examplesConfig: { name: string; number?: string }[],
): Registry => {
    return examplesConfig.map((example) => {
        const parts = example.name.split("-");

        const extractedParts =
            parts.length > 2 ? [parts[0], parts[1]] : [parts[0]];

        return {
            name: example.name,
            slug: `/motion/${extractedParts.join("-")}`,
            type: "registry:motions",
            files: [
                `${BASE_PATH}motion/${extractedParts.join("-")}/${example.name}.tsx`,
            ],
            number: example.number,
        };
    });
};

export const motionExamples: Registry = generateExamples([
    {
        name: "accordion-demo",
        number: "4",
    },
    { name: "accordion-icon" },

    {
        name: "board-demo",
        number: "4",
    },
    {
        name: "grid-demo",
        number: "4",
    },
    {
        name: "horizontal-scroll-demo",
        number: "4",
    },
    {
        name: "infinite-slider-demo",
        number: "4",
    },
    {
        name: "infinite-slider-hover",
    },
    {
        name: "infinite-slider-vertical",
    },
    {
        name: "carousel-demo",
        number: "4",
    },
    {
        name: "collapsible-demo",
        number: "4",
    },
    {
        name: "cursor-demo",
        number: "4",
    },
    {
        name: "dialog-demo",
        number: "4",
    },

    {
        name: "text-effect-demo",
        number: "4",
    },
    {
        name: "text-loop-demo",
        number: "4",
    },
    {
        name: "text-morph-demo",
        number: "4",
    },
    {
        name: "text-roll-demo",
        number: "4",
    },
    {
        name: "text-scramble-demo",
        number: "4",
    },
    {
        name: "text-shimmer-demo",
        number: "4",
    },
    {
        name: "text-wave-demo",
        number: "4",
    },

    { name: "transition-panel-demo", number: "4" },

    { name: "animated-group-demo", number: "4" },
    { name: "animated-number-demo", number: "4" },
]);
