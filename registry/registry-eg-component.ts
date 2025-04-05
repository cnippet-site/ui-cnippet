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
    { name: "input-otp" },
    { name: "input-double" },
    { name: "input-spaced" },
    { name: "input-phone" },

    { name: "label-demo", number: "4" },

    { name: "multiselect-demo", number: "4" },
    { name: "multiselect-clear" },

    { name: "pagination-demo", number: "4" },
    { name: "pagination-numbers" },
    { name: "pagination-page" },
    { name: "pagination-select" },

    { name: "popover-demo", number: "4" },

    { name: "radio-group-demo", number: "4" },
    { name: "radio-group-desc" },
    { name: "radio-group-review" },

    { name: "select-demo", number: "4" },
    { name: "select-placeholder" },
    { name: "select-icon" },

    { name: "sheet-demo", number: "4" },
    { name: "sidebar-demo", number: "4" },
    { name: "skeleton-demo", number: "1" },

    { name: "slider-demo", number: "4" },
    { name: "slider-feedback" },
    { name: "slider-minmax" },
    { name: "slider-output" },
    { name: "slider-square" },
    { name: "slider-thumb" },

    { name: "sonner-demo", number: "4" },
    { name: "sonner-direction" },
    { name: "sonner-custom" },

    { name: "stepper-demo", number: "4" },
    { name: "stepper-step" },
    { name: "stepper-vertical" },

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

    { name: "toast-demo", number: "4" },
    { name: "toast-direction" },
    { name: "toast-custom" },

    { name: "tooltip-demo", number: "4" },
    { name: "tooltip-arrow" },
    { name: "tooltip-dark" },
    { name: "tooltip-direction" },
    { name: "tooltip-image" },
    

]);
