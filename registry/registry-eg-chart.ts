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
            slug: `/chart/${extractedParts.join("-")}`,
            type: "registry:charts",
            files: [
                `${BASE_PATH}chart/${extractedParts.join("-")}/${example.name}.tsx`,
            ],
            number: example.number,
        };
    });
};

export const chartExamples: Registry = generateExamples([
    { name: "area-chart-demo", number: "4" },
    { name: "line-chart-demo", number: "4" },
    { name: "bar-chart-demo", number: "4" },
    { name: "pie-chart-demo", number: "4" },
    { name: "radar-chart-demo", number: "4" },
    { name: "radial-chart-demo", number: "4" },
    { name: "scatter-chart-demo", number: "4" },
]);
