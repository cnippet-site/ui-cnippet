// "use client";
// import React from "react";
// import useMeasure from "react-use-measure";
// import {
//     useDragControls,
//     useMotionValue,
//     useAnimate,
//     motion,
// } from "motion/react";

// interface DragCloseDrawerProps {
//     open: boolean;
//     setOpen: (open: boolean) => void;
//     children: React.ReactNode;
// }

// export const DragCloseDrawer = ({
//     open,
//     setOpen,
//     children,
// }: DragCloseDrawerProps) => {
//     const [scope, animate] = useAnimate();
//     const [drawerRef, { height }] = useMeasure();

//     const y = useMotionValue(0);
//     const controls = useDragControls();

//     const handleClose = async () => {
//         animate(scope.current, {
//             opacity: [1, 0],
//         });

//         const yStart = typeof y.get() === "number" ? y.get() : 0;

//         await animate("#drawer", {
//             y: [yStart, height],
//         });

//         setOpen(false);
//     };

//     return (
//         <>
//             {open && (
//                 <motion.div
//                     ref={scope}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     onClick={handleClose}
//                     className="fixed inset-0 z-50 bg-neutral-950/70"
//                 >
//                     <motion.div
//                         id="drawer"
//                         ref={drawerRef}
//                         onClick={(e) => e.stopPropagation()}
//                         initial={{ y: "100%" }}
//                         animate={{ y: "0%" }}
//                         transition={{
//                             ease: "easeInOut",
//                         }}
//                         className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
//                         style={{ y }}
//                         drag="y"
//                         dragControls={controls}
//                         onDragEnd={() => {
//                             if (y.get() >= 100) {
//                                 handleClose();
//                             }
//                         }}
//                         dragListener={false}
//                         dragConstraints={{
//                             top: 0,
//                             bottom: 0,
//                         }}
//                         dragElastic={{
//                             top: 0,
//                             bottom: 0.5,
//                         }}
//                     >
//                         <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
//                             <button
//                                 onPointerDown={(e) => {
//                                     controls.start(e);
//                                 }}
//                                 className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
//                             ></button>
//                         </div>
//                         <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
//                             {children}
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </>
//     );
// };

// // Example usage component
// export const DragCloseDrawerExample = () => {
//     const [open, setOpen] = React.useState(false);

//     return (
//         <div className="grid h-screen place-content-center bg-neutral-950">
//             <button
//                 onClick={() => setOpen(true)}
//                 className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
//             >
//                 Open drawer
//             </button>

//             <DragCloseDrawer open={open} setOpen={setOpen}>
//                 <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
//                     <h2 className="text-4xl font-bold text-neutral-200">
//                         Drag the handle to close
//                     </h2>
//                     <p>Your custom content goes here...</p>
//                 </div>
//             </DragCloseDrawer>
//         </div>
//     );
// };

"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { Drawer as VaulDrawer } from "vaul";
import { cn } from "@/lib/utils";

interface DrawerContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("useDrawer must be used within a DrawerProvider");
    }
    return context;
};

interface ResponsiveDrawerProps {
    children: ReactNode;
    triggerContent?: ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    classname?: string;
}

export function ResponsiveDrawer({
    children,
    triggerContent,
    open: controlledOpen,
    setOpen: controlledSetOpen,
    classname,
}: ResponsiveDrawerProps) {
    const [internalOpen, setInternalOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = controlledSetOpen || setInternalOpen;

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsDesktop(event.matches);
        };

        setIsDesktop(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return (
        <DrawerContext.Provider value={{ open, setOpen }}>
            {triggerContent && <DrawerTrigger>{triggerContent}</DrawerTrigger>}
            {isDesktop ? (
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/50 backdrop-blur-sm"
                            onClick={() => setOpen(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                                className={cn(
                                    "bg-background relative w-full max-w-md cursor-default rounded-lg border p-6",
                                    classname,
                                )}
                            >
                                <button
                                    className="bg-primary text-background absolute top-2 right-2 z-[1] rounded-md border p-2"
                                    onClick={() => setOpen(false)}
                                >
                                    <X />
                                </button>
                                {children}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            ) : (
                <VaulDrawer.Root
                    shouldScaleBackground
                    open={open}
                    onOpenChange={setOpen}
                >
                    <VaulDrawer.Portal>
                        <VaulDrawer.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
                        <VaulDrawer.Content className="fixed bottom-0 left-0 z-50 max-h-[96%] w-full bg-white dark:bg-gray-900">
                            <div className="mx-auto my-4 h-[0.30rem] w-16 flex-shrink-0 rounded-full bg-gray-600" />
                            <div className="mx-auto max-h-[96vh] w-full overflow-auto">
                                {children}
                            </div>
                        </VaulDrawer.Content>
                    </VaulDrawer.Portal>
                </VaulDrawer.Root>
            )}
        </DrawerContext.Provider>
    );
}

export function DrawerContent({
    children,
    classname,
}: {
    children: ReactNode;
    classname?: string;
}) {
    return <div className={cn("", classname)}>{children}</div>;
}

export function DrawerTrigger({ children }: { children: ReactNode }) {
    const { setOpen } = useDrawer();
    return <div onClick={() => setOpen(true)}>{children}</div>;
}
