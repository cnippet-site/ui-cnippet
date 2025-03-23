"use client";

import { useId, useState } from "react";
import { Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/actions/contact.actions";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";

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
    const id = useId();
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
            if (
                !formData.name ||
                !formData.email ||
                !formData.subject ||
                !formData.message
            ) {
                toast.error("All fields are required");
                return;
            }

            const response = await submitContactForm(formData);

            if (!response.success) {
                console.error("Form submission error:", response.error);
                toast.error(response.error || "Failed to send message");
                return;
            }

            toast.success(
                "Message sent successfully! We'll get back to you soon.",
            );
            setFormData(initialFormData);
        } catch (error) {
            console.error("Contact form error details:", error);
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-card mx-auto w-full max-w-md border border-dashed border-neutral-200 px-6 py-10 dark:border-neutral-800">
            <div className="mb-8 text-center">
                <h2 className="mb-2 text-3xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground">
                    Have a question or feedback? We&apos;d love to hear from
                    you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                    <div className="group relative col-span-2">
                        <Label htmlFor="name" variant="float">
                            <span className="bg-background inline-flex px-2">
                                Enter your name
                            </span>
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=""
                            className="rounded-none border-dashed shadow-none"
                        />
                    </div>

                    <div className="group relative col-span-2">
                        <Label htmlFor="email" variant="float">
                            <span className="bg-background inline-flex px-2">
                                Enter your email
                            </span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=""
                            className="rounded-none border-dashed shadow-none"
                        />
                    </div>

                    <div className="group relative col-span-2">
                        <Label htmlFor="subject" variant="float">
                            <span className="bg-background inline-flex px-2">
                                Enter your subject
                            </span>
                        </Label>
                        <Input
                            id="subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder=""
                            className="rounded-none border-dashed shadow-none"
                        />
                    </div>

                    <div className="group relative col-span-2">
                        <Label htmlFor="message" variant="float">
                            <span className="bg-background inline-flex px-2">
                                Enter your message
                            </span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder=" "
                            className="rounded-none border-dashed shadow-none"
                        />
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
