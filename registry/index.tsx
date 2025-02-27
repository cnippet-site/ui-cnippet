import { Registry } from "./schema";
import { components } from "./registry-component";
import { motions } from "./registry-motion";

export const registry = [...components, ...motions];
