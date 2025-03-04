import { Registry } from "./schema";
import { components } from "./registry-component";
import { motions } from "./registry-motion";
import { motionExamples } from "./registry-eg-motion";
import { chartExamples } from "./registry-eg-chart";
import { componentExamples } from "./registry-eg-component";

export const registry = [
    ...components,
    ...componentExamples,
    ...motions,
    ...motionExamples,
    ...chartExamples,
];
