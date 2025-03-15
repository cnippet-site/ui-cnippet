import Image from "next/image";

export default function Component() {
    return (
        <div className="flex items-center rounded-full border bg-background p-1 shadow-sm">
            <div className="flex -space-x-1.5">
                <Image
                    className="rounded-full ring-1 ring-background"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1739106437/a1.jpg"
                    width={20}
                    height={20}
                    alt="Avatar 01"
                />
                <Image
                    className="rounded-full ring-1 ring-background"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1739106437/a1.jpg"
                    width={20}
                    height={20}
                    alt="Avatar 02"
                />
                <Image
                    className="rounded-full ring-1 ring-background"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1739106437/a1.jpg"
                    width={20}
                    height={20}
                    alt="Avatar 03"
                />
                <Image
                    className="rounded-full ring-1 ring-background"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1739106437/a1.jpg"
                    width={20}
                    height={20}
                    alt="Avatar 04"
                />
            </div>
            <p className="px-2 text-xs text-muted-foreground">
                Trusted by{" "}
                <strong className="font-medium text-foreground">60K+</strong>{" "}
                developers.
            </p>
        </div>
    );
}
