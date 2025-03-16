"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            let data;
            try {
                const textResponse = await response.text();
                data = textResponse ? JSON.parse(textResponse) : {};
            } catch (parseError) {
                console.error("Failed to parse response:", parseError);
                throw new Error("Invalid server response");
            }

            if (!response.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setMessage("Successfully subscribed to newsletter!");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error ? error.message : "Failed to subscribe"
            );
            console.error("Newsletter subscription error:", error);
        }
    };

    return (
        <div className="mx-auto w-full max-w-2xl rounded-lg bg-card px-4 py-8 shadow-sm">
            <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground">
                    Stay up to date with our latest news and updates.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 rounded-md border bg-background px-4 py-2"
                        required
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="rounded-md bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                    >
                        {status === "loading" ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                </div>

                {message && (
                    <p
                        className={`text-sm ${status === "success" ? "text-green-500" : "text-red-500"}`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
