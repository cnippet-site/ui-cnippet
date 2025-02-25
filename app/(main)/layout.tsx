"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { NAVIGATION } from "@/config/docs";
import Nav1 from "@/components/routes/shared/navbar/nav-1";

function NavigationDesktop() {
    const pathname = usePathname();
    const activeRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "auto",
                block: "nearest",
            });
        }
    }, [pathname]);

    return (
        <aside className="border-dashed dark:border-neutral-800 pl-5 fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
            <ScrollArea className="h-full w-full">
                <nav className="pt-8">
                    <ul
                        role="list"
                        className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6"
                    >
                        {NAVIGATION.map((item, index) => {
                            return (
                                <li key={`${item.name}-${index}`}>
                                    <div className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-[450] text-zinc-950 dark:bg-zinc-950 dark:text-white">
                                        {item.name}
                                    </div>
                                    <ul
                                        role="list"
                                        className="space-y-3.5 border-zinc-200 dark:border-zinc-800"
                                    >
                                        {item.children.map((child) => {
                                            const isActive =
                                                pathname === child.href;

                                            return (
                                                <li
                                                    key={child.href}
                                                    ref={
                                                        isActive
                                                            ? activeRef
                                                            : null
                                                    }
                                                >
                                                    <Link
                                                        className={cn(
                                                            "relative inline-flex items-center pl-1 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                                                            isActive &&
                                                                "text-zinc-950",
                                                        )}
                                                        href={child.href}
                                                    >
                                                        {isActive && (
                                                            <motion.div
                                                                layout
                                                                className="-z-1 absolute -left-[1px] top-0 h-full w-0.5 rounded-[4px] bg-zinc-950 dark:bg-white"
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 26.7,
                                                                    damping: 4.1,
                                                                    mass: 0.2,
                                                                }}
                                                                layoutId="underline-sidebar"
                                                            />
                                                        )}
                                                        <span>
                                                            {child.name}
                                                        </span>
                                                        {child?.isNew && (
                                                            <span className="ml-2 whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
                                                                New
                                                            </span>
                                                        )}
                                                        {child?.isUpdated && (
                                                            <span className="ml-2 whitespace-nowrap rounded-lg bg-amber-100 px-2 text-[10px] font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-50">
                                                                Updated
                                                            </span>
                                                        )}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </ScrollArea>
        </aside>
    );
}

function NavigationMobile() {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedHref, setSelectedHref] = React.useState(pathname);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const href = e.target.value;
        setSelectedHref(href);
        router.push(href);
    };

    return (
        <div className="block w-full pt-8 md:hidden">
            <select
                className="block w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                value={selectedHref}
                onChange={handleChange}
            >
                {NAVIGATION.map((item) => {
                    return (
                        <optgroup label={item.name} key={item.name}>
                            {item.children.map((child) => (
                                <option key={child.href} value={child.href}>
                                    {child.name}
                                </option>
                            ))}
                        </optgroup>
                    );
                })}
            </select>
        </div>
    );
}

export default function ComponentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="bg-background relative flex min-h-svh flex-col">
                <div className="border-grid flex flex-1 flex-col">
                    <Nav1 />
                    <main className="flex flex-1 flex-col">
                        <div className="container-wrapper">
                            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10 ">
                                <NavigationDesktop />
                                <NavigationMobile />
                                <main className="w-full pl-10 pt-8">{children}</main>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
