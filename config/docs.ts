import { MainNavItem, SidebarNavItem } from "@/types";
interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
    sectionNav: SidebarNavItem[];
}

export const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Components",
            href: "/components",
        },
        {
            title: "Templates",
            href: "#",
            label: "New",
        },
        {
            title: "Showcase",
            href: "#",
        },
    ],
    sidebarNav: [
        {
            title: "Components",
            items: [
                {
                    title: "Accordion",
                    href: `/components/accordion`,
                    items: [],
                },
                {
                    title: "Alert",
                    href: `/components/alert`,
                    items: [],
                },
                {
                    title: "Avatar",
                    href: `/components/avatar`,
                    items: [],
                },
                {
                    title: "Badge",
                    href: `/components/badge`,
                    items: [],
                },
                // {
                //     title: "Banner",
                //     href: `/components/banner`,
                //     items: [],
                // },
                {
                    title: "Breadcrumb",
                    href: `/components/breadcrumb`,
                    items: [],
                },
                {
                    title: "Button",
                    href: `/components/button`,
                    items: [],
                },
                {
                    title: "Calendar",
                    href: `/components/calendar`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Card",
                    href: `/components/card`,
                    items: [],
                },
                {
                    title: "Carousel",
                    href: `/components/carousel`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Checkbox",
                    href: `/components/checkbox`,
                    items: [],
                },
                {
                    title: "Collapsible",
                    href: `/components/collapsible`,
                    items: [],
                },
                // {
                //     title: "Data Table",
                //     href: `/components/data-table`,
                //     items: [],
                // },
                {
                    title: "Date-picker",
                    href: `/components/date-picker`,
                    items: [],
                },
                {
                    title: "Dialog",
                    href: `/components/dialog`,
                    items: [],
                },
                {
                    title: "Drawer",
                    href: `/components/drawer`,
                    items: [],
                },
                {
                    title: "Dropdown Menu",
                    href: `/components/dropdown-menu`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Input",
                    href: `/components/input`,
                    items: [],
                },
                {
                    title: "Label",
                    href: `/components/label`,
                    items: [],
                },
                {
                    title: "Pagination",
                    href: `/components/pagination`,
                    items: [],
                },
                {
                    title: "Popover",
                    href: `/components/popover`,
                    items: [],
                },
                {
                    title: "Radio Group",
                    href: `/components/radio-group`,
                    items: [],
                },
                {
                    title: "Scroll-area",
                    href: `/components/scroll-area`,
                    items: [],
                },
                {
                    title: "Select",
                    href: `/components/select`,
                    items: [],
                },
                {
                    title: "Separator",
                    href: `/components/separator`,
                    items: [],
                },
                {
                    title: "Sheet",
                    href: `/components/sheet`,
                    items: [],
                },
                {
                    title: "Skeleton",
                    href: `/components/skeleton`,
                    items: [],
                },
                {
                    title: "Slider",
                    href: `/components/slider`,
                    items: [],
                },
                {
                    title: "Sonner",
                    href: `/components/sonner`,
                    items: [],
                },
                {
                    title: "Switch",
                    href: `/components/switch`,
                    items: [],
                },
                {
                    title: "Table",
                    href: `/components/table`,
                    items: [],
                },
                {
                    title: "Tabs",
                    href: `/components/tabs`,
                    items: [],
                    paid: "New",
                },
                {
                    title: "Textarea",
                    href: `/components/textarea`,
                    items: [],
                },
                {
                    title: "Toast",
                    href: `/components/toast`,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Tooltip",
                    href: `/components/tooltip`,
                    items: [],
                },
            ],
        },
    ],
    sectionNav: [
        {
            title: "Components",
            items: [
                {
                    title: "Banner",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Blog",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Career",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Contact",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "CTA",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "FAQ",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Feature",
                    href: `/sections/feature`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Footer",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Header",
                    href: `/sections/header`,
                    items: [],
                },
                {
                    title: "Hero",
                    href: `/sections/hero`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Metrics",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Newsletter",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Pricing",
                    href: `/sections/pricing`,
                    items: [],
                    label: "New",
                },
                {
                    title: "Team",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
                {
                    title: "Testimonial",
                    href: ``,
                    items: [],
                    label: "Coming Soon",
                },
            ],
        },
    ],
};

type NavigationItem = {
    name: string;
    href: string;
    isNew?: boolean;
    isUpdated?: boolean;
};

type NavigationGroup = {
    name: string;
    children: NavigationItem[];
};

export const motions: NavigationGroup[] = [
    {
        name: "Getting Started",
        children: [
            {
                name: "Introduction",
                href: "/docs",
            },
            {
                name: "Installation",
                href: "/docs/installation",
            },
        ],
    },
    {
        name: "Core Components",
        children: [
            {
                name: "Accordion",
                href: "",
            },
            {
                name: "Button",
                href: "",
            },
            {
                name: "Card",
                href: "",
            },
            {
                name: "Carousel",
                href: "",
            },
            {
                name: "Cursor",
                href: "",
            },
            {
                name: "Dialog",
                href: "",
            },
            {
                name: "Popover",
                href: "",
            },
            {
                name: "tables",
                href: "",
            },
            {
                name: "Transition Panel",
                href: "",
            },
            {
                name: "Toast",
                href: "",
            },
            {
                name: "Tooltip",
                href: "",
            },
            {
                name: "Sonner",
                href: "",
            },
            {
                name: "Skeleton",
                href: "",
            },
            {
                name: "Scroll Area",
                href: "",
            },
            {
                name: "Sheet",
                href: "",
            },
            {
                name: "Pagination",
                href: "",
            },
        ],
    },
    {
        name: "Text Effects",
        children: [
            {
                name: "Text Effect",
                href: "/docs/text-effect",
                isUpdated: true,
            },
            {
                name: "Text Loop",
                href: "/docs/text-loop",
                isUpdated: true,
            },
            {
                name: "Text Morph",
                href: "/docs/text-morph",
                isUpdated: true,
            },
            {
                name: "Text Roll",
                href: "/docs/text-roll",
                isNew: true,
            },
            {
                name: "Text Scramble",
                href: "/docs/text-scramble",
            },
            {
                name: "Text Shimmer",
                href: "/docs/text-shimmer",
            },
            {
                name: "Text Shimmer Wave",
                href: "/docs/text-shimmer-wave",
            },
        ],
    },
    {
        name: "Number Effects",
        children: [
            {
                name: "Animated Number",
                href: "/docs/animated-number",
            },
            {
                name: "Sliding Number",
                href: "/docs/sliding-number",
                isNew: true,
            },
        ],
    },
    {
        name: "Interactive Elements",
        children: [
            {
                name: "Dock",
                href: "/docs/dock",
            },
            {
                name: "Glow Effect",
                href: "/docs/glow-effect",
                isNew: true,
            },
            {
                name: "Image Comparison",
                href: "/docs/image-comparison",
            },
            {
                name: "Scroll Progress",
                href: "/docs/scroll-progress",
            },
            {
                name: "Spotlight",
                href: "/docs/spotlight",
            },
            {
                name: "Spinning Text",
                href: "/docs/spinning-text",
            },
            {
                name: "Tilt",
                href: "/docs/tilt",
            },
        ],
    },
    {
        name: "Toolbars",
        children: [
            {
                name: "Toolbar Dynamic",
                href: "/docs/toolbar-dynamic",
            },
            {
                name: "Toolbar Expandable",
                href: "/docs/toolbar-expandable",
            },
        ],
    },
    {
        name: "Advanced Effects",
        children: [
            {
                name: "Magnetic",
                href: "/docs/magnetic",
            },
            {
                name: "Morphing Dialog",
                href: "/docs/morphing-dialog",
            },
            {
                name: "Morphing Popover",
                href: "/docs/morphing-popover",
                isNew: true,
            },
            {
                name: "Progressive Blur",
                href: "/docs/progressive-blur",
                isNew: true,
            },
        ],
    },
];

type ComponentItem = {
    name: string;
    href: string;
    isNew?: boolean;
    isUpdated?: boolean;
};

type ComponentGroup = {
    name: string;
    children: ComponentItem[];
};

export const components: ComponentGroup[] = [
    {
        name: "Getting Started",
        children: [
            {
                name: "Introduction",
                href: "/docs",
            },
            {
                name: "Installation",
                href: "/docs/installation",
            },
        ],
    },
    {
        name: "Buttons",
        children: [
            {
                name: "Button",
                href: "",
            },
            {
                name: "File Trigger",
                href: "",
            },
            {
                name: "Toggle",
                href: "",
            },
        ],
    },
    {
        name: "Controls",
        children: [
            {
                name: "Command Menu",
                href: "",
            },
            {
                name: "Context Menu",
                href: "",
            },
            {
                name: "Slider",
                href: "",
            },
            {
                name: "Switch",
                href: "",
            },
            {
                name: "Toolbar",
                href: "",
            },
        ],
    },
    {
        name: "Date and Time",
        children: [
            {
                name: "Calendar",
                href: "",
            },
            {
                name: "Range Calendar",
                href: "",
            },
            {
                name: "Time Field",
                href: "",
            },
            {
                name: "Date Field",
                href: "",
            },
            {
                name: "Date Picker",
                href: "",
            },
            {
                name: "Date Range Picker",
                href: "",
            },
        ],
    },
    {
        name: "Drag and drop",
        children: [
            {
                name: "Drop Zone",
                href: "",
            },
        ],
    },
    {
        name: "Forms",
        children: [
            {
                name: "Checkbox",
                href: "",
            },
            {
                name: "Checkbox Group",
                href: "",
            },
            {
                name: "Field",
                href: "",
            },
            {
                name: "Input OTP",
                href: "",
            },
            {
                name: "Radio Group",
                href: "",
            },
            {
                name: "Search Field",
                href: "",
            },
            {
                name: "Tag Field",
                href: "",
            },
            {
                name: "Text Field",
                href: "",
            },
            {
                name: "Textarea",
                href: "",
            },
        ],
    },
    {
        name: "Layouts",
        children: [
            {
                name: "Container",
                href: "",
            },
            {
                name: "Navbar",
                href: "",
            },
            {
                name: "Sidebar",
                href: "",
            },
        ],
    },
    {
        name: "Media",
        children: [
            {
                name: "Avatar",
                href: "",
            },
            {
                name: "Carousel",
                href: "",
            },
        ],
    },
    {
        name: "Navigation",
        children: [
            {
                name: "Breadcrumb",
                href: "",
            },
            {
                name: "Disclosure | Collapsible",
                href: "",
            },
            {
                name: "Disclosure group | Accordion",
                href: "",
            },
            {
                name: "Pagination",
                href: "",
            },
            {
                name: "Tabs",
                href: "",
            },
        ],
    },
    {
        name: "Overlays",
        children: [
            {
                name: "Dialog",
                href: "",
            },
            {
                name: "Drawer",
                href: "",
            },
            {
                name: "Modal",
                href: "",
            },
            {
                name: "Popover",
                href: "",
            },
            {
                name: "Sheet",
                href: "",
            },
            {
                name: "Tooltip",
                href: "",
            },
        ],
    },
    {
        name: "Pickers",
        children: [
            {
                name: "Combobox",
                href: "",
            },
            {
                name: "Multi select",
                href: "",
            },
            {
                name: "Select",
                href: "",
            },
        ],
    },

];
