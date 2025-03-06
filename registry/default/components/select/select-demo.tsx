import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { useId } from "react";

export default function Component() {
    const id = useId();
    return (
        <div className="w-1/2 space-y-2">
            <Label htmlFor={id}>Simple select</Label>
            <Select id={id}>
                <option value="1">React</option>
                <option value="2">Next.js</option>
                <option value="3">Astro</option>
                <option value="4">Gatsby</option>
            </Select>
        </div>
    );
}
