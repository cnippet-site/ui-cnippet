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
    { name: "avatar" },
    { name: "badge" },
    { name: "breadcrumb" },
    { name: "button" },
    { name: "calendar" },
    { name: "card" },
    { name: "chart" },
    { name: "checkbox" },
    { name: "collapsible-cn" },
    { name: "command" },
    { name: "context-menu" },
    { name: "datefield" },
    { name: "dialog-cn" },
    { name: "drawer" },
    { name: "drop-zone" },
    // { name: "dropdown-menu" },
    // { name: "file-trigger" },
    { name: "form" },
    { name: "input" },
    { name: "label" },
    { name: "multiselect" },
    { name: "pagination" },
    { name: "popover" },
    { name: "radio-group" },
    { name: "scroll-area" },
    // { name: "select-cn" },
    { name: "select" },
    { name: "separator" },
    { name: "sheet" },
    { name: "skeleton" },
    { name: "slider" },
    { name: "sonner" },
    { name: "stepper" },
    { name: "switch" },
    { name: "tabs" },
    { name: "tag-field" },
    { name: "textarea" },
    { name: "toast" },
    { name: "toaster" },
    { name: "tooltip" },
]);
