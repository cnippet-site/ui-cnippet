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
    { name: "accordion-demo", number: "3" },
    { name: "accordion-icon" },
    { name: "accordion-sign" },

    { name: "animated-group-demo", number: "1" },
    { name: "animated-number-demo", number: "1" },

    { name: "blocks-demo", number: "1" },

    { name: "board-demo", number: "1" },

    { name: "carousel-demo", number: "1" },

    { name: "collapsible-demo", number: "1" },

    { name: "cursor-demo", number: "1" },

    { name: "dialog-demo", number: "1" },

    { name: "drag-items-demo", number: "1" },
    
    { name: "drawer-rc-demo", number: "1" },

    { name: "grid-demo", number: "1" },

    { name: "horizontal-scroll-demo", number: "1" },

    { name: "image-mousetrail-demo", number: "1" },

    { name: "infinite-slider-demo", number: "3" },
    { name: "infinite-slider-hover" },
    { name: "infinite-slider-vertical" },

    { name: "morphing-dialog-demo", number: "1" },
    { name: "morphing-dialog-cards" },
    
    { name: "text-effect-demo", number: "1" },

    { name: "text-loop-demo", number: "1" },

    { name: "text-morph-demo", number: "1" },

    { name: "text-roll-demo", number: "1" },

    { name: "text-scramble-demo", number: "1" },

    { name: "text-shimmer-demo", number: "1" },

    { name: "text-wave-demo", number: "1" },

    { name: "transition-panel-demo", number: "1" },
]);
