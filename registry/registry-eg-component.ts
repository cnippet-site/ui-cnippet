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
            slug: `/component/${extractedParts.join("-")}`,
            type: "registry:components",
            files: [
                `${BASE_PATH}components/${extractedParts.join("-")}/${example.name}.tsx`,
            ],
            number: example.number,
        };
    });
};

export const componentExamples: Registry = generateExamples([
    { name: "button-demo", number: "4" },
    { name: "file-trigger-demo", number: "4" },
    { name: "command-menu-demo", number: "4" },
    { name: "context-menu-demo", number: "4" },
    { name: "slider-demo", number: "4" },
    { name: "switch-demo", number: "4" },
    { name: "calendar-demo", number: "4" },
    { name: "date-picker-demo", number: "4" },
    { name: "drop-zone-demo", number: "4" },
    { name: "checkbox-demo", number: "4" },

    { name: "input-demo", number: "4" },
    { name: "input-addon" },
    { name: "input-helper" },
    { name: "input-icon" },
    { name: "input-labelfloat" },

    { name: "label-demo", number: "4" },
    { name: "radio-group-demo", number: "4" },
    { name: "tag-field-demo", number: "4" },
    { name: "textarea-demo", number: "4" },
    { name: "sidebar-demo", number: "4" },
    { name: "avatar-demo", number: "4" },
    // { name: "carousel-demo", number: "4" },
    { name: "breadcrumb-demo", number: "4" },
    // { name: "collapsible-demo", number: "4" },
    { name: "pagination-demo", number: "4" },
    { name: "tabs-demo", number: "4" },
    // { name: "dialog-demo", number: "4" },
    { name: "drawer-demo", number: "4" },
    { name: "modal-demo", number: "4" },
    { name: "popover-demo", number: "4" },
    { name: "sheet-demo", number: "4" },
    { name: "tooltip-demo", number: "4" },
    { name: "combobox-demo", number: "4" },
    { name: "select-demo", number: "4" },
]);
