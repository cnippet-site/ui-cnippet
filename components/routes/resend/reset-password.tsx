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
    resetLink?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://ui.cnippet.site";

export const ResetPasswordEmail = ({
    userEmail,
    resetLink,
}: NewsletterWelcomeEmailProps) => {
    console.log(userEmail);

    return (
        <Html>
            <Head />
            <Tailwind>
                <Preview>Reset your password</Preview>
                <Body className="font-['Google Sans',Roboto,Arial,sans-serif] mx-auto my-auto bg-[#f8f9fa] px-2 py-6">
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
                                        Recover your Cnippet account
                                    </Heading>
                                    <Text className="mx-4 mb-8 text-left text-[15px] leading-6 text-[#202124]">
                                        You have recently requested to recover
                                        the Cnippet account associated with
                                        email {userEmail}.
                                        <br />
                                        {/* Your username is {userEmail}. */}
                                        {/* <br /> */}
                                        Reset your password to complete the
                                        recovery and sign in to your account
                                        using your username and new password.
                                    </Text>

                                    <Button
                                        className="mb-4 inline-block rounded-full border-none bg-[#0066ff] px-6 py-3 text-center text-[16px] font-medium text-white uppercase no-underline hover:bg-[#0052cc]"
                                        href={resetLink}
                                    >
                                        Reset Password
                                    </Button>
                                </Column>
                            </Row>
                        </Section>

                        <hr className="my-6 border-t border-[#e8eaed]" />
                        {/* Footer */}
                        <Section className="mt-2 text-center">
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                © {new Date().getFullYear()} Cnippet LLC · All
                                rights reserved
                            </Text>
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                If you don&apos;t want to receive such emails in
                                the future, please{" "}
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

export default ResetPasswordEmail;
