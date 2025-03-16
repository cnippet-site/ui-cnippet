import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/50 field-sizing-content shadow-xs aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none dark:aria-invalid:focus-visible:ring-4 flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base outline-ring/50 ring-ring/10 transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50 dark:outline-ring/40 dark:ring-ring/20 md:text-sm",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
