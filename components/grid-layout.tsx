import Image from "next/image";

interface GridProps {
    className?: string;
    columns?: number;
}

export function GridWithCircles() {
    return (
        <>
            <GridsHorizontal />
            <GridsHorizontal className="border-b" />
            <div className="absolute inset-0 grid h-[6rem] w-full grid-cols-8 md:h-[11.6666rem] md:grid-cols-12">
                <div className="col-span-1 h-full w-full rounded-r-full border border-gray-200 dark:border-neutral-900" />

                <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-900" />
                <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-900" />
                <div className="col-span-2 flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-white dark:border-neutral-900 dark:bg-black">
                    <Image
                        src="/images/logo-dark.png"
                        alt=""
                        className="size-12 rounded-full md:size-24"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="col-span-2 h-full w-full rounded-full border border-gray-200 dark:border-neutral-900" />
                <div className="col-span-2 hidden h-full w-full rounded-full border border-gray-200 md:block dark:border-neutral-900" />

                <div className="col-span-1 h-full w-full rounded-l-full border border-gray-200 dark:border-neutral-900" />
            </div>
        </>
    );
}

export function Grids() {
    return (
        <div className="grid w-full grid-cols-12 divide-x border-b dark:divide-neutral-900 dark:border-neutral-900">
            <div className="col-span-1 h-[5rem] w-full border-l" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full" />
            <div className="col-span-1 h-[5rem] w-full border-r dark:border-neutral-900" />
        </div>
    );
}

export function GridsHorizontal({ className }: GridProps) {
    return (
        <div>
            <div
                className={`relative grid h-[5.83333rem] w-full grid-cols-8 border-t border-r border-l md:grid-cols-12 dark:border-neutral-900 ${className}`}
            >
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className={`col-span-1 dark:border-neutral-900 ${index === 11 ? "border-r-0" : "border-r"}`}
                    />
                ))}
            </div>
        </div>
    );
}

export function GridsVertical({ columns = 12, className }: GridProps) {
    return (
        <div
            className={`grid w-full grid-rows-${columns} col-span-1 divide-y dark:divide-neutral-900 dark:border-neutral-900 ${className}`}
        >
            {Array.from({ length: columns }).map((_, index) => (
                <div key={index} className="col-span-1 h-[5.83333rem] w-full" />
            ))}
        </div>
    );
}
