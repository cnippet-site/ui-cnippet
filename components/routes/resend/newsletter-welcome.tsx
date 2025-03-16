import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NewsletterWelcomeEmailProps {
    userEmail?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://ui.cnippet.site";

export const NewsletterWelcomeEmail = ({
    userEmail = "there",
}: NewsletterWelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Preview>Welcome to Cnippet - Your UI Component Journey Begins</Preview>
                <Body className="font-['Google Sans',Roboto,Arial,sans-serif] mx-auto my-auto bg-[#f8f9fa] p-10">
                    <Container className="mx-auto max-w-[520px] rounded-2xl bg-white p-6">
                        {/* Header Section */}
                        <Section className="mb-4 text-center">
                            <Img
                                src={`${baseUrl}/images/logo-light.png`}
                                width="80"
                                height="auto"
                                alt="Cnippet Logo"
                                className="mx-auto"
                            />
                        </Section>

                        {/* Main Content */}
                        <Section className="mx-auto mb-4 text-center">
                            <Row>
                                <Column>
                                    <Heading className="mb-4 text-center text-[24px] font-normal text-[#202124]">
                                        Your UI journey starts here
                                    </Heading>
                                    <Text className="mb-8 text-[15px] text-left mx-4 leading-6 text-[#202124]">
                                        Welcome to Cnippet! We're excited to have you join our community of innovative developers and designers. Get ready to transform your projects with our carefully crafted UI components.
                                    </Text>

                                    <Button
                                        className="mb-4 inline-block rounded-full border-none bg-[#0066ff] px-6 py-3 text-center text-[14px] font-medium text-white no-underline hover:bg-[#0052cc]"
                                        href="https://ui.cnippet.site/components"
                                    >
                                        Explore Components Library
                                    </Button>

                                    <Text className="mb-6 text-[15px] text-left mx-4 leading-6 text-[#5f6368]">
                                        Here's what you'll get with your subscription:
                                    </Text>

                                    <ul className="mx-auto max-w-[400px] text-left">
                                        {benefits.map((benefit, index) => (
                                            <li
                                                key={index}
                                                className="m-0 mb-3 flex items-center gap-2 py-1.5 text-[14px] leading-6 text-[#202124]"
                                            >
                                                <span className="mr-2 text-[18px]">{benefit.icon}</span>{" "}
                                                {benefit.text}
                                            </li>
                                        ))}
                                    </ul>

                                    <Text className="mt-8 text-[13px] leading-6 text-[#5f6368]">
                                        Stay tuned for our first newsletter, arriving in your inbox soon!
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <hr className="border-t border-[#e8eaed] my-6" />
                        {/* Footer */}
                        <Section className="mt-2 text-center">
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                © {new Date().getFullYear()} Cnippet LLC · All rights reserved
                            </Text>
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                If you don't want to receive such emails in the
                                future, please{" "}
                                <Link
                                    href="https://ui.cnippet.site/unsubscribe"
                                    className="text-[#0066ff] no-underline hover:underline"
                                >
                                    unsubscribe here
                                </Link>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const benefits = [
    { icon: "🎨", text: "Premium UI components with regular updates and new additions" },
    { icon: "💡", text: "Expert design tips and implementation best practices" },
    { icon: "🚀", text: "Early access to beta features and new component libraries" },
    { icon: "📚", text: "Exclusive tutorials and developer resources" },
    { icon: "🛠️", text: "Technical support and community discussions" }
];

export default NewsletterWelcomeEmail;
