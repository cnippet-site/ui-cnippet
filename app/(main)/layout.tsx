"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { charts, components, motions } from "@/config/docs";
import Nav1 from "@/components/routes/shared/navbar/nav-1";

function NavigationDesktop({ navigation }: { navigation: typeof components }) {
    const pathname = usePathname();
    const activeRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "auto",
                block: "center",
            });
        }
    }, [pathname]);

    return (
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-dashed pl-5 dark:border-neutral-800 md:sticky md:block">
            <ScrollArea className="h-full w-full">
                <nav className="pt-8">
                    <ul
                        role="list"
                        className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6"
                    >
                        {navigation.map((nav, index) => {
                            return (
                                <li key={`${nav.name}-${index}`}>
                                    <div className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white">
                                        {nav.name}
                                    </div>
                                    <ul
                                        role="list"
                                        className="space-y-3.5 border-zinc-200 dark:border-zinc-800"
                                    >
                                        {nav.items.map((item, j) => {
                                            const isActive =
                                                pathname === item.href;

                                            return (
                                                <li
                                                    key={`${item.name}-${j}`}
                                                    ref={
                                                        isActive
                                                            ? activeRef
                                                            : null
                                                    }
                                                >
                                                    <Link
                                                        className={cn(
                                                            "relative inline-flex w-full items-center pl-1 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                                                            isActive &&
                                                                "w-full rounded-l-lg bg-gray-100 py-1.5 pl-3 text-zinc-950 dark:bg-neutral-900 dark:text-neutral-200",
                                                            item.href === "#" &&
                                                                "cursor-default text-gray-400 hover:text-gray-400",
                                                        )}
                                                        href={item.href}
                                                    >
                                                        <span>{item.name}</span>
                                                        {item.href === "#" && (
                                                            <span className="mr-4 ml-auto whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
                                                                Coming soon
                                                            </span>
                                                        )}
                                                        {item?.isNew && (
                                                            <span className="ml-2 whitespace-nowrap rounded-lg bg-blue-100 px-2 text-[10px] font-semibold text-blue-800 dark:bg-blue-950 dark:text-emerald-50">
                                                                New
                                                            </span>
                                                        )}
                                                        {item?.isUpdated && (
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

function NavigationMobile({ navigation }: { navigation: typeof components }) {
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
                {navigation.map((nav) => {
                    return (
                        <optgroup label={nav.name} key={nav.name}>
                            {nav.items.map((item) => (
                                <option
                                    key={`${item.href}-${item.name}`}
                                    value={item.href}
                                >
                                    {item.name}
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
    const pathname = usePathname();

    const getNavigation = () => {
        if (pathname?.startsWith("/component")) {
            return components;
        }
        if (pathname?.startsWith("/motion")) {
            return motions;
        }
        if (pathname?.startsWith("/chart")) {
            return charts;
        }
        return [];
    };

    const currentNavigation = getNavigation();

    return (
        <>
            <div className="relative flex min-h-svh flex-col bg-background">
                <div className="border-grid flex flex-1 flex-col">
                    <Nav1 />
                    <main className="flex flex-1 flex-col">
                        <div className="container-wrapper">
                            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-10">
                                <NavigationDesktop
                                    navigation={currentNavigation}
                                />
                                <NavigationMobile
                                    navigation={currentNavigation}
                                />
                                <div className="w-full pt-8">{children}</div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
