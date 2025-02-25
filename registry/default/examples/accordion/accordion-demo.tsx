import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
    {
        id: "1",
        title: "Is cnippet/ui accessible?",
        content:
            "Yes. It adheres to the WAI-ARIA design pattern, making it accessible for users with disabilities. It also supports screen readers and other assistive technologies.",
    },
    {
        id: "2",
        title: "Does cnippet/ui have a dark mode?",
        content:
            "Yes. It has a dark mode that can be toggled in the settings. Dark mode is designed to reduce eye strain, especially in low-light environments.",
    },
    {
        id: "3",
        title: "Is cnippet/ui responsive?",
        content:
            "Yes. It's fully responsive and works seamlessly across devices with different screen sizes, from mobile phones to large desktop monitors.",
    },
];

export default function AccordionDemo() {
    return (
        <div className="max-w-lg space-y-4">
            <Accordion className="w-full">
                {items.map((item) => (
                    <AccordionItem
                        value={item.id}
                        key={item.id}
                        className="py-2"
                    >
                        <AccordionTrigger className="py-2 text-sm leading-6 hover:no-underline">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-2">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
