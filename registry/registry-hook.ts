import { Registry } from "@/registry/schema";

const BASE_PATH = "hooks/";

const generateComponents = (componentsConfig: { name: string }[]): Registry => {
    return componentsConfig.map((component) => ({
        name: component.name,
        slug: `/components/${component.name}`,
        type: "registry:hook",
        files: [`${BASE_PATH}${component.name}.tsx`],
    }));
};

export const hooks: Registry = generateComponents([
    { name: "use-click-outside" },
    { name: "use-image-upload" },
    { name: "use-prevent-scroll" },
]);
