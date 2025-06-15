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

interface OTPEmailProps {
    userEmail?: string;
    otp?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://ui.cnippet.site";

export const OTPEmail = ({
    userEmail,
    otp,
}: OTPEmailProps) => {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Preview>Your Cnippet OTP Code</Preview>
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
                                        Your Cnippet OTP Code
                                    </Heading>
                                    <Text className="mx-4 mb-4 text-left text-[15px] leading-6 text-[#202124]">
                                        Hello,
                                        <br />
                                        Your One-Time Password (OTP) for Cnippet is:
                                    </Text>
                                    
                                    <Text className="mx-4 mb-8 text-center text-[32px] font-bold text-[#0066ff]">
                                        {otp}
                                    </Text>

                                    <Text className="mx-4 mb-4 text-left text-[15px] leading-6 text-[#202124]">
                                        This OTP is valid for 10 minutes. Please do not share this code with anyone.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <hr className="my-6 border-t border-[#e8eaed]" />
                        {/* Footer */}
                        <Section className="mt-2 text-center">
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                © {new Date().getFullYear()} Cnippet LLC · All rights reserved
                            </Text>
                            <Text className="my-1 text-[12px] text-[#5f6368]">
                                If you didn't request this OTP, please ignore this email.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default OTPEmail; 