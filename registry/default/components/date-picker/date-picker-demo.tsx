"use client";

import { Calendar } from "@/components/ui/calendar";
import { DateInput } from "@/components/ui/datefield";
import { CalendarIcon } from "lucide-react";
import {
    Button,
    DatePicker,
    Dialog,
    Group,
    Label,
    Popover,
} from "react-aria-components";

export default function Component() {
    return (
        <DatePicker className="*:not-first:mt-2">
            <Label className="text-sm font-medium text-foreground">
                Date picker
            </Label>
            <div className="flex">
                <Group className="w-full">
                    <DateInput className="pe-9" />
                </Group>
                <Button className="data-focus-visible:border-ring data-focus-visible:ring-ring/50 data-focus-visible:ring-[3px] z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground">
                    <CalendarIcon size={16} />
                </Button>
            </div>
            <Popover
                className="data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 outline-hidden z-50 rounded-lg border bg-background text-popover-foreground shadow-lg"
                offset={4}
            >
                <Dialog className="max-h-[inherit] overflow-auto p-2">
                    <Calendar />
                </Dialog>
            </Popover>
            <p
                className="mt-2 text-xs text-muted-foreground"
                role="region"
                aria-live="polite"
            >
                Built with{" "}
                <a
                    className="underline hover:text-foreground"
                    href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
                    target="_blank"
                    rel="noopener nofollow"
                >
                    React Aria
                </a>
            </p>
        </DatePicker>
    );
}
