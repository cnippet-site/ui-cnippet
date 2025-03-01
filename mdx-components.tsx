import { useMDXComponent } from "@content-collections/mdx/react";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/mdx/copy-button";

import { ComponentPreview } from "@/components/mdx/component-preview";
import { CollapsibleSource } from "./components/mdx/collapsible-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlockCommand } from "./components/mdx/code-block-command";
import { Button } from "@/components/ui/button";

interface MDXProps {
    code: string;
    className?: string;
}

const components = {
    ComponentPreview,
    CollapsibleSource,
    Button,
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "font-heading mt-12 scroll-m-20 border-b pb-2 font-ins text-2xl tracking-tight first:mt-0 dark:border-dawn-800",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "font-heading mt-8 scroll-m-20 font-ins text-xl tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn(
                "font-normal leading-7 mt-3",
                className,
            )}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),

    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto font-ins text-sm font-medium">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("m-0 border-t p-0", className)} {...props} />
    ),
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border px-4 py-2 text-left font-ins font-medium dark:border-dawn-600 [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border px-4 py-2 text-left dark:border-dawn-600 [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),

    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className={cn("font-ins font-medium", className)} {...props} />
    ),

    figure: ({ children, raw, ...props }: ExtendedPreProps) => (
        <figure {...props} className="relative mb-4 rounded-lg">
            {children}
        </figure>
    ),

    pre: ({
        className,
        __rawString__,
        __npmCommand__,
        __pnpmCommand__,
        __yarnCommand__,
        __bunCommand__,
        __withMeta__,
        __src__,
        // __event__,
        // __style__,
        __name__,
        ...props
    }: React.HTMLAttributes<HTMLPreElement> & {
        // __style__?: Style["name"]
        __rawString__?: string;
        __npmCommand__?: string;
        __pnpmCommand__?: string;
        __yarnCommand__?: string;
        __bunCommand__?: string;
        __withMeta__?: boolean;
        __src__?: string;
        // __event__?: Event["name"];
        __name__?: string;
    }) => {
        const isNpmCommand =
            __npmCommand__ &&
            __yarnCommand__ &&
            __pnpmCommand__ &&
            __bunCommand__;

        if (isNpmCommand) {
            return (
                <CodeBlockCommand
                    __npmCommand__={__npmCommand__}
                    __yarnCommand__={__yarnCommand__}
                    __pnpmCommand__={__pnpmCommand__}
                    __bunCommand__={__bunCommand__}
                />
            );
        }

        return (
            <>
                <pre
                    className={`overflow-x-auto rounded-lg border !bg-neutral-950 dark:!bg-zinc-900 dark:border-neutral-800 text-wrap ${className}`}
                    {...props}
                />
                {__rawString__ && (
                    <CopyButton value={__rawString__} />
                )}
            </>
        );
    },

    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "font-mono font-normal px-4 py-5 text-sm",
                className,
            )}
            {...props}
        />
    ),

    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
        <h3
            className={cn(
                "font-sans font-bold [&>p]:font-medium text-base text-black dark:text-white",
                className,
            )}
            {...props}
        />
    ),

    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps mb-16 ml-4 border-l border-dawn-100 pl-[2.1rem] [counter-reset:step] dark:border-dawn-500"
            {...props}
        />
    ),

    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none bg-transparent p-0",
                className,
            )}
            {...props}
        />
    ),
    TabsTrigger: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "data-[state=active]:bg- relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-2 pb-3 pt-2 font-ins font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none dark:font-normal",
                className,
            )}
            {...props}
        />
    ),
    TabsContent: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className,
            )}
            {...props}
        />
    ),
};

export function Mdx({ code, className }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className={`z-50 mx-auto ${className}`}>
            <Component components={components} />
        </article>
    );
}

interface ExtendedPreProps extends HTMLAttributes<HTMLPreElement> {
    raw?: string;
}
