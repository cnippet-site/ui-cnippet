import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
    return (
        <div className="flex -space-x-3">
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
            <Button
                variant="secondary"
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
                size="icon"
            >
                +3
            </Button>
        </div>
    );
}
