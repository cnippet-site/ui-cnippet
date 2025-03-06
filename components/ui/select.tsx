import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

const Select = ({
    className,
    children,
    ...props
}: React.ComponentProps<"select">) => {
    return (
        <div className="relative flex">
            <select
                data-slot="select-native"
                className={cn(
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs peer inline-flex w-full cursor-pointer appearance-none items-center rounded-md border border-input text-sm text-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground",
                    props.multiple
                        ? "py-1 *:px-3 *:py-1 [&_option:checked]:bg-accent"
                        : "h-9 pe-8 ps-3",
                    className,
                )}
                {...props}
            >
                {children}
            </select>
            {!props.multiple && (
                <span className="peer-aria-invalid:text-destructive/80 pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
                    <ChevronDownIcon size={16} aria-hidden="true" />
                </span>
            )}
        </div>
    );
};

export { Select };
