import { Registry } from "./schema";
import { components } from "./registry-component";
import { examples } from "./registry-example";

export const registry = [...components, ...examples];
