"use client";
import { useState } from "react";
import { TextMorph } from "@/components/motion/text-morph";

export default function TextMorphButton() {
    const [text, setText] = useState("Cnippet");

    return (
        <button
            onClick={() => setText(text === "Cnippet" ? "Awesome" : "Cnippet")}
            className="shadow-xs flex h-10 w-[120px] shrink-0 items-center justify-center rounded-full bg-black px-4 text-base font-medium text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
        >
            <TextMorph>{text}</TextMorph>
        </button>
    );
}
