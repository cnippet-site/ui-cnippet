import { Registry } from "./schema";
import { components } from "./registry-component";
import { motions } from "./registry-motion";
import { motionExamples } from "./registry-eg-motion";

export const registry = [...components, ...motions, ...motionExamples];
