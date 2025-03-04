"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/lib/utils";

// Define variants for the Label component
const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    {
        variants: {
            variant: {
                normal: "",
                float: "origin-start font-normal absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-foreground",
            },
        },
        defaultVariants: {
            variant: "normal",
        },
    },
);

const _Label = React.forwardRef<
    HTMLLabelElement,
    HTMLMotionProps<"label"> & VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => {
    return (
        <motion.label
            ref={ref}
            className={cn(labelVariants({ variant, className }))}
            {...props}
        />
    );
});

_Label.displayName = "Label";

const Label = motion.create(_Label);

export { Label };
