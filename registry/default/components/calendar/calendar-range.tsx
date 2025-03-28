"use client";

import { RangeCalendar } from "@/components/ui/calendar";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import type { DateRange } from "react-aria-components";

export default function Component() {
    const now = today(getLocalTimeZone());
    const [date, setDate] = useState<DateRange | null>({
        start: now,
        end: now.add({ days: 3 }),
    });

    return (
        <div>
            <RangeCalendar
                className="rounded-md border p-2"
                value={date}
                onChange={setDate}
            />
            <p
                className="mt-4 text-center text-xs text-muted-foreground"
                role="region"
                aria-live="polite"
            >
                Range calendar -{" "}
                <a
                    className="underline hover:text-foreground"
                    href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html"
                    target="_blank"
                    rel="noopener nofollow"
                >
                    React Aria
                </a>
            </p>
        </div>
    );
}
