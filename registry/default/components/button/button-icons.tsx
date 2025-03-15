import { Button } from "@/components/ui/button";
import { ArchiveIcon, TrashIcon } from "lucide-react";

export default function Component() {
    return (
        <>
            <Button>
                <ArchiveIcon
                    className="-ms-1 opacity-60"
                    size={16}
                    aria-hidden="true"
                />
                Button
            </Button>
            <Button variant="destructive">
                <TrashIcon
                    className="-ms-1 opacity-60"
                    size={16}
                    aria-hidden="true"
                />
                Button
            </Button>
        </>
    );
}
