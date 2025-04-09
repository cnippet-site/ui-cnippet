"use client";
import React, { useState } from "react";
import { DragItems, Item } from "@/components/motion/drag-items";

export default function ParentComponent() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Follow me on X",
            subtitle: "Get more update follow me on X",
            date: "32.8.2024",
            src: "https://images.unsplash.com/photo-1724908549265-06972c22ca37?q=80&w=2070&auto=format&fit=crop",
            link: "https://x.com/naymur_dev",
            category: "Social",
        },
        {
            id: 2,
            title: "Star the repo",
            subtitle: "If you like star the repo",
            date: "32.8.2024",
            src: "https://images.unsplash.com/photo-1724908549265-06972c22ca37?q=80&w=2070&auto=format&fit=crop",
            link: "https://github.com/ui-layouts/uilayouts",
            category: "GitHub",
        },
        {
            id: 3,
            title: "Share it with your friend",
            subtitle: "if you like it, please Share it with your friend ",
            date: "32.8.2024",
            src: "https://images.unsplash.com/photo-1724908549265-06972c22ca37?q=80&w=2070&auto=format&fit=crop",
            link: "https://www.ui-layout.com/",
            category: "Community",
        },
    ]);

    return (
        <div className="mx-auto px-4 py-12">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold">Drag & Drop Items</h1>
                <p className="text-muted-foreground">
                    Rearrange the items by dragging them
                </p>
            </div>

            <DragItems items={items} onReorder={setItems}>
                {items.map((item) => (
                    <Item key={item.id} item={item}>
                        <div className="flex items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-lg font-semibold">
                                        {item.title}
                                    </h2>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </Item>
                ))}
            </DragItems>
        </div>
    );
}
