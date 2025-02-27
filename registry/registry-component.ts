import { Registry } from "@/registry/schema";

const BASE_PATH = "components/ui/";

const generateComponents = (componentsConfig: { name: string }[]): Registry => {
    return componentsConfig.map((component) => ({
        name: component.name,
        slug: `/components/${component.name}`,
        type: "registry:component",
        files: [`${BASE_PATH}${component.name}.tsx`],
    }));
};

export const components: Registry = generateComponents([
    {
        name: "button",
    },
    // {
    //     name: "collapsible",
    // },
    {
        name: "tabs",
    },
]);
