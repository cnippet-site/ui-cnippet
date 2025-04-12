import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog-cn";
import AuthDialog from "./routes/shared/auth/dialog";
import { Button } from "@/components/ui/button";

const AuthD = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="text-sm cursor-pointer hover:bg-white dark:hover:bg-black">
                    Login to view code
                </Button>
            </DialogTrigger>
            <AuthDialog />
        </Dialog>
    );
};

export default AuthD;
