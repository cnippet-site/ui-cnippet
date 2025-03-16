import { ContactForm } from "@/components/contact-form";
import Nav1 from "@/components/routes/shared/navbar/nav-1";
import Footer from "@/components/routes/shared/footer";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <>
            <Nav1 />
            <main>
                <div className="container mx-auto px-4 py-12">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
