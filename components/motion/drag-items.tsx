"use client";
import React, { useEffect } from "react";
import {
    useMotionValue,
    Reorder,
    useDragControls,
    motion,
    MotionValue,
    animate,
    DragControls,
} from "motion/react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Grip } from "lucide-react";

export const DragItems = ({
    items,
    onReorder,
    children,
}: {
    items: any[];
    onReorder: (newItems: any[]) => void;
    children: React.ReactNode;
}) => {
    return (
        <Reorder.Group
            axis="y"
            values={items}
            onReorder={onReorder}
            className="mx-auto w-full max-w-2xl space-y-3"
        >
            {children}
        </Reorder.Group>
    );
};

export const Item = ({
    children,
    item,
}: {
    children: React.ReactNode;
    item: any;
}) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    const dragControls = useDragControls();

    return (
        <Reorder.Item
            value={item}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={dragControls}
            className="w-full"
        >
            <Card className="overflow-hidden border transition-all duration-300">
                <div className="flex items-center p-3">
                    <div className="flex-1">{children}</div>
                    <ReorderIcon dragControls={dragControls} />
                </div>
            </Card>
        </Reorder.Item>
    );
};

const ReorderIcon = ({ dragControls }: { dragControls: DragControls }) => {
    return (
        <motion.div
            // whileTap={{ scale: 0.85 }}
            onPointerDown={(e) => {
                e.preventDefault();
                dragControls.start(e);
            }}
            className="ml-2 cursor-grab active:cursor-grabbing"
        >
            <Grip size={30} />
        </motion.div>
    );
};

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0)";

const useRaisedShadow = (value: MotionValue<number>) => {
    const boxShadow = useMotionValue(inactiveShadow);

    useEffect(() => {
        let isActive = false;
        value.onChange((latest) => {
            const wasActive = isActive;
            if (latest !== 0) {
                isActive = true;
                if (isActive !== wasActive) {
                    animate(boxShadow, "0px 0px 0px rgba(0,0,0,0)");
                }
            } else {
                isActive = false;
                if (isActive !== wasActive) {
                    animate(boxShadow, inactiveShadow);
                }
            }
        });
    }, [value, boxShadow]);

    return boxShadow;
};
