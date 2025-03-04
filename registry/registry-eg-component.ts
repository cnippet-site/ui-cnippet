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
            slug: `/component/${extractedParts.join("-")}`,
            type: "registry:components",
            files: [
                `${BASE_PATH}components/${extractedParts.join("-")}/${example.name}.tsx`,
            ],
            number: example.number,
        };
    });
};

export const componentExamples: Registry = generateExamples([
    { name: "input-demo", number: "4" },
    { name: "input-addon" },
    { name: "input-helper" },
    { name: "input-icon" },
    { name: "input-labelfloat" },

    { name: "label-demo", number: "4" },

    { name: "button-demo", number: "4" },
    { name: "file-trigger-demo", number: "4" },
    { name: "calendar-demo", number: "4" },
    { name: "drop-zone-demo", number: "4" },
    { name: "checkbox-demo", number: "4" },
    { name: "textarea-demo", number: "4" },]);
