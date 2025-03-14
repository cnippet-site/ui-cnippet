"use client";
import React from "react";
import useMeasure from "react-use-measure";
import {
    useDragControls,
    useMotionValue,
    useAnimate,
    motion,
} from "motion/react";

interface DragCloseDrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
}

export const DragCloseDrawer = ({
    open,
    setOpen,
    children,
}: DragCloseDrawerProps) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, { height }] = useMeasure();

    const y = useMotionValue(0);
    const controls = useDragControls();

    const handleClose = async () => {
        animate(scope.current, {
            opacity: [1, 0],
        });

        const yStart = typeof y.get() === "number" ? y.get() : 0;

        await animate("#drawer", {
            y: [yStart, height],
        });

        setOpen(false);
    };

    return (
        <>
            {open && (
                <motion.div
                    ref={scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClose}
                    className="fixed inset-0 z-50 bg-neutral-950/70"
                >
                    <motion.div
                        id="drawer"
                        ref={drawerRef}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
                        style={{ y }}
                        drag="y"
                        dragControls={controls}
                        onDragEnd={() => {
                            if (y.get() >= 100) {
                                handleClose();
                            }
                        }}
                        dragListener={false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.5,
                        }}
                    >
                        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
                            <button
                                onPointerDown={(e) => {
                                    controls.start(e);
                                }}
                                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                            ></button>
                        </div>
                        <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

// Example usage component
export const DragCloseDrawerExample = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="grid h-screen place-content-center bg-neutral-950">
            <button
                onClick={() => setOpen(true)}
                className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
            >
                Open drawer
            </button>

            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Drag the handle to close
                    </h2>
                    <p>Your custom content goes here...</p>
                </div>
            </DragCloseDrawer>
        </div>
    );
};
