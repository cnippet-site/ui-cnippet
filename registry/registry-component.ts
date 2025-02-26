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
    {
        name: "file-trigger",
    },
    {
        name: "toggle",
    },
    {
        name: "command-menu",
    },
    {
        name: "context-menu",
    },
    {
        name: "slider",
    },
    {
        name: "switch",
    },
    {
        name: "toolbar",
    },
    {
        name: "calendar",   
    },
    {
        name: "date",
    },
    {
        name: "drop-zone",
    },
    {
        name: "checkbox",
    },
    {
        name: "label",
    },
    {
        name: "input",
    },
    {
        name: "input-otp",
    },
    {
        name: "radio-group",
    },
    {
        name: "search-field",
    },
    {
        name: "tag-field",
    },
    {
        name: "text-field",
    },
    {
        name: "textarea",
    },
    {
        name: "container",
    },
    {
        name: "navbar",
    },
    {
        name: "sidebar",
    },
    {
        name: "avatar",
    },
    {
        name: "carousel",
    },
    {
        name: "breadcrumb",
    },
    {
        name: "collapsible",
    },
    {
        name: "accordion",
    },
    {
        name: "pagination",
    },
    {
        name: "tabs",
    },
    {
        name: "dialog",
    },
    {
        name: "drawer",
    },
    {
        name: "modal",
    },
    {
        name: "popover",
    },
    {
        name: "sheet",
    },
    {
        name: "tooltip",
    },
    {
        name: "combobox",
    },
    {
        name: "multi-select",
    },
    {
        name: "select",
    },
    {
        name: "badge",
    },
    {
        name: "loader",
    },
    {
        name: "progress-bar",
    },
    {
        name: "progress-circle",
    },
    {
        name: "skeleton",
    },
    {
        name: "toast",
    },
    {
        name: "card",
    },
    {
        name: "description-list",
    },
    {
        name: "grid",
    },
    {
        name: "heading",
    },
    {
        name: "separator",
    },
]);
