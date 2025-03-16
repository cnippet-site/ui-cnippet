"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialFormData: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
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
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setMessage(
                "Message sent successfully! We'll get back to you soon.",
            );
            setFormData(initialFormData);
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to send message",
            );
            console.error("Contact form error:", error);
        }
    };

    return (
        <div className="mx-auto w-full max-w-xl rounded-lg bg-card px-6 py-20 shadow-sm">
            <div className="mb-8 text-center">
                <h2 className="mb-2 text-3xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground">
                    Have a question or feedback? We&apos;d love to hear from you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-md border bg-background px-4 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md border bg-background px-4 py-2"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border bg-background px-4 py-2"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-md border bg-background px-4 py-2"
                        required
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>

                {message && (
                    <p
                        className={`text-center text-sm ${
                            status === "success"
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
