"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/actions/contact.actions";
import { toast } from "sonner";

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
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);

        try {
            // Validate form data before submission
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                toast.error("All fields are required");
                return;
            }

            const response = await submitContactForm(formData);
            
            if (!response.success) {
                console.error("Form submission error:", response.error);
                toast.error(response.error || "Failed to send message");
                return;
            }
            
            toast.success("Message sent successfully! We'll get back to you soon.");
            setFormData(initialFormData);
        } catch (error) {
            console.error("Contact form error details:", error);
            toast.error(error instanceof Error ? error.message : "Failed to send message");
        } finally {
            setIsLoading(false);
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
                        disabled={isLoading}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
