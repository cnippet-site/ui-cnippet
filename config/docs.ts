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
                href: "/motion/installation",
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
                name: "Animated Group",
                href: "/motion/animated-group",
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
                href: "/motion/transition-panel",
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
                href: "/motion/animated-number",
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

export const charts: ComponentGroup[] = [
    {
        name: "Getting Started",
        items: [
            {
                name: "Introduction",
                href: "#",
            },
            {
                name: "Installation",
                href: "/motion/installation",
            },
        ],
    },
    {
        name: "Core Components",
        items: [
            {
                name: "Area Chart",
                href: "/chart/area-chart",
            },
            {
                name: "Line Chart",
                href: "/chart/line-chart",
            },
            {
                name: "Bar Chart",
                href: "/chart/bar-chart",
            },
            {
                name: "Pie Chart",
                href: "/chart/pie-chart",
            },
            {
                name: "Radar Chart",
                href: "/chart/radar-chart",
            },
            {
                name: "Radial Chart",
                href: "/chart/radial-chart",
            },
            {
                name: "Scatter Chart",
                href: "/chart/scatter-chart",
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
                href: "/component/button",
            },
            {
                name: "File Trigger",
                href: "/component/file-trigger",
            },
        ],
    },
    {
        name: "Controls",
        items: [
            {
                name: "Command Menu",
                href: "/component/command-menu",
            },
            {
                name: "Context Menu",
                href: "/component/context-menu",
            },
            {
                name: "Slider",
                href: "/component/slider",
            },
            {
                name: "Switch",
                href: "/component/switch",
            },
        ],
    },
    {
        name: "Date and Time",
        items: [
            {
                name: "Calendar",
                href: "/component/calendar",
            },
            {
                name: "Date Field",
                href: "/component/date-picker",
            },
        ],
    },
    {
        name: "Drag and drop",
        items: [
            {
                name: "Drop Zone",
                href: "/component/drop-zone",
            },
        ],
    },
    {
        name: "Forms",
        items: [
            {
                name: "Checkbox",
                href: "/component/checkbox",
            },
            {
                name: "Input",
                href: "/component/input",
            },
            {
                name: "Label",
                href: "/component/label",
            },
            {
                name: "Radio Group",
                href: "/component/radio-group",
            },
            {
                name: "Tag Field",
                href: "/component/tag-field",
            },
            {
                name: "Textarea",
                href: "/component/textarea",
            },
        ],
    },
    {
        name: "Layouts",
        items: [
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
                href: "/component/avatar",
            },
            {
                name: "Carousel",
                href: "/component/carousel",
            },
        ],
    },
    {
        name: "Navigation",
        items: [
            {
                name: "Breadcrumb",
                href: "/component/breadcrumb",
            },
            {
                name: "Collapsible",
                href: "/component/collapsible",
            },
            {
                name: "Accordion",
                href: "/component/accordion",
            },
            {
                name: "Pagination",
                href: "/component/pagination",
            },
            {
                name: "Tabs",
                href: "/component/tabs",
            },
        ],
    },
    {
        name: "Overlays",
        items: [
            {
                name: "Dialog",
                href: "/component/dialog",
            },
            {
                name: "Drawer",
                href: "/component/drawer",
            },
            {
                name: "Modal",
                href: "/component/modal",
            },
            {
                name: "Popover",
                href: "/component/popover",
            },
            {
                name: "Sheet",
                href: "/component/sheet",
            },
            {
                name: "Tooltip",
                href: "/component/tooltip",
            },
        ],
    },
    {
        name: "Pickers",
        items: [
            {
                name: "Combobox",
                href: "/component/combobox",
            },
            {
                name: "Select",
                href: "/component/select",
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
