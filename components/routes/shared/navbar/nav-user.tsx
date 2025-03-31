"use client";

import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { ChevronsUpDown } from "lucide-react";
import { Sparkles, BadgeCheck, CreditCard, Bell, LogOut } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog-cn";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/routes/shared/auth/dialog";
import { RiUser3Fill, RiUser6Fill } from "@remixicon/react";

const NavUser = () => {
    const { status, data: session } = useSession();

    return (
        <>
            {status === "loading" ? (
                <div className="-mt-5 ml-5 w-fit">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    {status === "authenticated" ? (
                        <div>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="w-full">
                                    <div className="mt-0 flex w-fit cursor-pointer items-center justify-center gap-2 bg-white">
                                        <Avatar className="size-9 rounded-full">
                                            <AvatarImage
                                                src={
                                                    session.user?.image
                                                        ? session.user.image
                                                        : "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                                                }
                                                alt="user profile"
                                                width={1080}
                                                height={680}
                                            />
                                            <AvatarFallback className="size-9 rounded-full">
                                                <Image
                                                    src={
                                                        session.user?.image
                                                            ? session.user.image
                                                            : "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                                                    }
                                                    alt=""
                                                    width={1080}
                                                    height={680}
                                                />
                                            </AvatarFallback>
                                        </Avatar>
                                      
                                        <ChevronsUpDown
                                            className={`ml-auto size-4`}
                                        />
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-52 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage
                                                src={
                                                    session.user?.image
                                                        ? session.user.image
                                                        : "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                                                }
                                                alt="deepak"
                                            />
                                            <AvatarFallback>
                                                <Image
                                                    src={
                                                        session.user?.image
                                                            ? session.user.image
                                                            : "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
                                                    }
                                                    alt=""
                                                    width={1080}
                                                    height={680}
                                                    className="w-8 rounded-full"
                                                />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold text-black">
                                                {" "}
                                                {session.user?.name}
                                            </span>
                                            <span className="truncate text-xs">
                                                {session.user?.email}
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => signOut()}>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </div>
                    ) : (
                        <Dialog>
                            <DialogTrigger asChild>
                                {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
                                    </svg>
                                    <span className={``}>login</span> */}
                                <RiUser3Fill className="size-5" />
                            </DialogTrigger>
                            <AuthDialog />
                        </Dialog>
                    )}
                </>
            )}
        </>
    );
};

export default NavUser;
