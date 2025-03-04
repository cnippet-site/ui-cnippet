import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputDemo = () => {
    return (
        <div className="w-full max-w-sm space-y-8">
            <div className="group relative">
                <Label
                    htmlFor="input-31"
                    className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50"
                >
                    Enter your email
                </Label>
                <Input
                    id="input-31"
                    className="h-10"
                    placeholder="Email"
                    type="email"
                />
            </div>
            <div className="group relative">
                <Label htmlFor="input-32" variant="float">
                    <span className="inline-flex bg-background px-2">
                        Enter your email
                    </span>
                </Label>
                <Input id="input-32" type="email" placeholder="" />
            </div>
        </div>
    );
};
export default InputDemo;
