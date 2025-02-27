import { ComponentGroup } from "@/types";

export const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

export const motions: ComponentGroup[] = [
    {
        name: "Getting Started",
        items: [
            {
                name: "Introduction",
                href: "#",
            },
            {
                name: "Installation",
                href: "#",
            },
        ],
    },
    {
        name: "Core Components",
        items: [
            {
                name: "Accordion",
                href: "/motion/accordion",
            },
            {
                name: "Animated Background",
                href: "#",
            },
            {
                name: "Animated Group",
                href: "#",
            },
            {
                name: "Border Trail",
                href: "#",
            },
            {
                name: "Carousel",
                href: "/motion/carousel",
                isUpdated: true,
            },
            {
                name: "Cursor",
                href: "/motion/cursor",
            },
            {
                name: "Dialog",
                href: "/motion/dialog",
            },
            {
                name: "Collapsible",
                href: "/motion/collapsible",
                isNew: true,
            },
            {
                name: "In View",
                href: "#",
            },
            {
                name: "Infinite Slider",
                href: "#",
            },
            {
                name: "Transition Panel",
                href: "#",
            },
        ],
    },
    {
        name: "Text Effects",
        items: [
            {
                name: "Text Effect",
                href: "/motion/text-effect",
            },
            {
                name: "Text Loop",
                href: "/motion/text-loop",
            },
            {
                name: "Text Morph",
                href: "/motion/text-morph",
            },
            {
                name: "Text Roll",
                href: "/motion/text-roll",
            },
            {
                name: "Text Scramble",
                href: "/motion/text-scramble",
            },
            {
                name: "Text Shimmer",
                href: "/motion/text-shimmer",
            },
            {
                name: "Text Wave",
                href: "/motion/text-wave",
            },
        ],
    },
    {
        name: "Number Effects",
        items: [
            {
                name: "Animated Number",
                href: "#",
            },
            {
                name: "Sliding Number",
                href: "#",
            },
        ],
    },
    {
        name: "Interactive Elements",
        items: [
            {
                name: "Dock",
                href: "#",
            },
            {
                name: "Glow Effect",
                href: "#",
            },
            {
                name: "Image Comparison",
                href: "#",
            },
            {
                name: "Scroll Progress",
                href: "#",
            },
            {
                name: "Spotlight",
                href: "#",
            },
            {
                name: "Spinning Text",
                href: "#",
            },
            {
                name: "Tilt",
                href: "#",
            },
        ],
    },
    {
        name: "Toolbars",
        items: [
            {
                name: "Toolbar Dynamic",
                href: "#",
            },
            {
                name: "Toolbar Expandable",
                href: "#",
            },
        ],
    },
    {
        name: "Advanced Effects",
        items: [
            {
                name: "Magnetic",
                href: "#",
            },
            {
                name: "Morphing Dialog",
                href: "#",
            },
            {
                name: "Morphing Popover",
                href: "#",
            },
            {
                name: "Progressive Blur",
                href: "#",
            },
        ],
    },
];

export const components: ComponentGroup[] = [
    {
        name: "Getting Started",
        items: [
            {
                name: "Introduction",
                href: "#",
            },
            {
                name: "Installation",
                href: "#",
            },
        ],
    },
    {
        name: "Buttons",
        items: [
            {
                name: "Button",
                href: "#",
            },
            {
                name: "File Trigger",
                href: "#",
            },
            {
                name: "Toggle",
                href: "#",
            },
        ],
    },
    {
        name: "Controls",
        items: [
            {
                name: "Command Menu",
                href: "#",
            },
            {
                name: "Context Menu",
                href: "#",
            },
            {
                name: "Slider",
                href: "#",
            },
            {
                name: "Switch",
                href: "#",
            },
            {
                name: "Toolbar",
                href: "#",
            },
        ],
    },
    {
        name: "Date and Time",
        items: [
            {
                name: "Calendar",
                href: "#",
            },
            {
                name: "Range Calendar",
                href: "#",
            },
            {
                name: "Time Field",
                href: "#",
            },
            {
                name: "Date Field",
                href: "#",
            },
            {
                name: "Date Picker",
                href: "#",
            },
            {
                name: "Date Range Picker",
                href: "#",
            },
        ],
    },
    {
        name: "Drag and drop",
        items: [
            {
                name: "Drop Zone",
                href: "#",
            },
        ],
    },
    {
        name: "Forms",
        items: [
            {
                name: "Checkbox",
                href: "#",
            },
            {
                name: "Checkbox Group",
                href: "#",
            },
            {
                name: "Field",
                href: "#",
            },
            {
                name: "Input OTP",
                href: "#",
            },
            {
                name: "Radio Group",
                href: "#",
            },
            {
                name: "Search Field",
                href: "#",
            },
            {
                name: "Tag Field",
                href: "#",
            },
            {
                name: "Text Field",
                href: "#",
            },
            {
                name: "Textarea",
                href: "#",
            },
        ],
    },
    {
        name: "Layouts",
        items: [
            {
                name: "Container",
                href: "#",
            },
            {
                name: "Navbar",
                href: "#",
            },
            {
                name: "Sidebar",
                href: "#",
            },
        ],
    },
    {
        name: "Media",
        items: [
            {
                name: "Avatar",
                href: "#",
            },
            {
                name: "Carousel",
                href: "#",
            },
        ],
    },
    {
        name: "Navigation",
        items: [
            {
                name: "Breadcrumb",
                href: "#",
            },
            {
                name: "Collapsible",
                href: "#",
            },
            {
                name: "Accordion",
                href: "/components/accordion",
            },
            {
                name: "Pagination",
                href: "#",
            },
            {
                name: "Tabs",
                href: "#",
            },
        ],
    },
    {
        name: "Overlays",
        items: [
            {
                name: "Dialog",
                href: "#",
            },
            {
                name: "Drawer",
                href: "#",
            },
            {
                name: "Modal",
                href: "#",
            },
            {
                name: "Popover",
                href: "#",
            },
            {
                name: "Sheet",
                href: "#",
            },
            {
                name: "Tooltip",
                href: "#",
            },
        ],
    },
    {
        name: "Pickers",
        items: [
            {
                name: "Combobox",
                href: "#",
            },
            {
                name: "Multi select",
                href: "#",
            },
            {
                name: "Select",
                href: "#",
            },
        ],
    },
    {
        name: "Statuses",
        items: [
            {
                name: "Badge",
                href: "#",
            },
            {
                name: "Loader",
                href: "#",
            },
            {
                name: "Progress bar",
                href: "#",
            },
            {
                name: "Progress circle",
                href: "#",
            },
            {
                name: "Skeleton",
                href: "#",
            },
            {
                name: "Toast",
                href: "#",
            },
        ],
    },
    {
        name: "Surfaces",
        items: [
            {
                name: "Card",
                href: "#",
            },
            {
                name: "Description list",
                href: "#",
            },
            {
                name: "Grid",
                href: "#",
            },
            {
                name: "Heading",
                href: "#",
            },
            {
                name: "Separator",
                href: "#",
            },
        ],
    },
];
