"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

export default function Component() {
    const id = useId();
    return (
        <div className="*:not-first:mt-2">
            <Label htmlFor={id}>Autogrowing textarea</Label>
            <Textarea
                id={id}
                placeholder="Leave a comment"
                className="field-sizing-content max-h-29.5 py-1.75 min-h-[none] resize-none"
            />
        </div>
    );
}
