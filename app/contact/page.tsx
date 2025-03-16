import { ContactForm } from "@/components/contact-form";

export const metadata = {
    title: "Contact Us - Cnippet",
    description: "Get in touch with us. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    Whether you have a question about our services, need technical support,
                    or just want to say hello, we're here to help.
                </p>
            </div>
            <ContactForm />
        </div>
    );
} 