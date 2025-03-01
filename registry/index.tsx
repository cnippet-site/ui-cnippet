import { Registry } from "./schema";
import { components } from "./registry-component";
import { motions } from "./registry-motion";
import { motionExamples } from "./registry-eg-motion";
import { chartExamples } from "./registry-eg-chart";

export const registry = [
    ...components,
    ...motions,
    ...motionExamples,
    ...chartExamples,
];
