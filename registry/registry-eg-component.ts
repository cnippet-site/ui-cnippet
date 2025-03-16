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
    { name: "avatar-demo", number: "4" },
    { name: "avatar-desc" },
    { name: "avatar-stack" },

    { name: "breadcrumb-demo", number: "4" },
    { name: "breadcrumb-folder" },
    { name: "breadcrumb-icon" },
    { name: "breadcrumb-select" },

    { name: "button-demo", number: "4" },
    { name: "button-icons" },
    { name: "button-login" },

    { name: "calendar-demo", number: "4" },
    { name: "calendar-range" },

    { name: "checkbox-demo", number: "4" },
    { name: "checkbox-box" },
    { name: "checkbox-color" },
    { name: "checkbox-terms" },

    { name: "collapsible-accordion" },

    { name: "combobox-demo", number: "4" },
    { name: "command-menu-demo", number: "4" },
    { name: "context-menu-demo", number: "4" },

    { name: "date-picker-demo", number: "4" },
    { name: "date-picker-range" },

    { name: "drawer-demo", number: "4" },
    { name: "drop-zone-demo", number: "4" },
    { name: "file-trigger-demo", number: "4" },

    { name: "input-demo", number: "4" },
    { name: "input-addon" },
    { name: "input-helper" },
    { name: "input-icon" },
    { name: "input-labelfloat" },

    { name: "label-demo", number: "4" },
    { name: "modal-demo", number: "4" },

    { name: "pagination-demo", number: "4" },
    { name: "pagination-numbers" },
    { name: "pagination-page" },
    { name: "pagination-select" },

    { name: "popover-demo", number: "4" },

    { name: "radio-group-demo", number: "4" },
    { name: "radio-group-desc" },
    { name: "radio-group-review" },

    { name: "select-demo", number: "4" },
    { name: "sheet-demo", number: "4" },
    { name: "sidebar-demo", number: "4" },

    { name: "slider-demo", number: "4" },
    { name: "slider-feedback" },
    { name: "slider-minmax" },
    { name: "slider-output" },
    { name: "slider-square" },
    { name: "slider-thumb" },

    { name: "switch-demo", number: "4" },
    { name: "switch-icon" },
    { name: "switch-label" },
    { name: "switch-sliding" },
    { name: "switch-square" },
    { name: "switch-text" },

    { name: "tabs-demo", number: "4" },

    { name: "tag-field-demo", number: "4" },
    { name: "tag-field-tags" },

    { name: "textarea-demo", number: "4" },
    { name: "textarea-autogrow" },
    { name: "textarea-label" },
    { name: "textarea-limit" },
    { name: "textarea-text" },

    { name: "tooltip-demo", number: "4" },
]);
