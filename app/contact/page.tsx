import dynamic from "next/dynamic";


const Nav1 = dynamic(() => import("@/components/routes/shared/navbar/nav-1"));
const Footer = dynamic(() => import("@/components/routes/shared/footer"));
const ContactForm = dynamic(() => import("@/components/contact-form"));

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <>
            <Nav1 />
            <main className="container-wrapper">
                <div className="mx-auto px-4 py-32">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
