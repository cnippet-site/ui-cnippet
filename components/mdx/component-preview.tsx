"use client";

import * as React from "react";
import { Index } from "@/__registry__";
import { RotateCcw } from "lucide-react";

import { useConfig } from "@/lib/use-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { styles } from "@/registry/registry-styles";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    align?: "center" | "start" | "end";
    preview?: boolean;
}

export function ComponentPreview({
    name,
    children,
    className,
    align = "center",
    preview = false,
    ...props
}: ComponentPreviewProps) {
    const [key, setKey] = React.useState(0);
    const [config] = useConfig();
    const index = styles.findIndex((style) => style.name === config.style);

    const Codes = React.Children.toArray(children) as React.ReactElement[];
    // console.log(Codes);

    const Code = Codes[index];

    const Preview = React.useMemo(() => {
        const Component = Index[config.style][name]?.component;

        if (!Component) {
            console.error(
                `Component with name "${name}" not found in registry.`,
            );
            return (
                <p className="text-sm">
                    Component{" "}
                    <code className="font-mono relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }

        return <Component />;
    }, [name, config.style]);

    return (
        <div
            className={cn(
                "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
                className,
            )}
            {...props}
        >
            <Tabs defaultValue="preview"></Tabs>

            <Tabs defaultValue="preview" className="relative w-full">
                {!preview && (
                    <TabsList className="inline-flex h-auto w-full items-center justify-start rounded-none border-b border-border bg-transparent p-0">
                        <TabsTrigger
                            value="preview"
                            className="relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
                        >
                            Preview
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                            className="relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
                        >
                            Code
                        </TabsTrigger>
                    </TabsList>
                )}

                <TabsContent
                    value="preview"
                    className="relative mt-5 rounded-xl border bg-white dark:border-neutral-800 dark:bg-neutral-950"
                    key={key}
                >
                    <div
                        className={cn(
                            "font-sans flex min-h-[350px] w-full justify-center p-10",
                            {
                                "items-center": align === "center",
                                "items-start": align === "start",
                                "items-end": align === "end",
                            },
                        )}
                    >
                        <Button
                            onClick={() => setKey((prev) => prev + 1)}
                            className="absolute right-1.5 top-1.5 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
                            variant="ghost"
                        >
                            <RotateCcw aria-label="restart-btn" size={16} />
                        </Button>
                        <React.Suspense
                            fallback={
                                <div className="flex items-center text-sm">
                                    {/* <Icons.spinner className="mr-2 size-4 animate-spin" /> */}
                                    Loading...
                                </div>
                            }
                        >
                            {Preview}
                        </React.Suspense>
                    </div>
                </TabsContent>
                <TabsContent value="code" className="mt-5">
                    <div className="flex flex-col space-y-4">
                        <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                            {Code}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
