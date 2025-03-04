import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React from "react";

const InputDemo = () => {
    return (
        <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" type="email" />
        </div>
    );
};

export default InputDemo;
