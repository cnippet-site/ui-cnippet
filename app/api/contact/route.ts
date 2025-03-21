import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "../../../components/routes/resend/contact-email";
import { render } from "@react-email/render";
import { PrismaClient } from "@prisma/client";

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json();
        const { name, email, message, subject } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 },
            );
        }

        // Save to database
        try {
            await prisma.contact.create({
                data: {
                    name,
                    email,
                    subject: subject || "No Subject",
                    message,
                },
            });
        } catch (error) {
            console.error("Database error:", error);
            return NextResponse.json(
                { error: "Failed to save contact information" },
                { status: 500 },
            );
        }

        // Send contact email
        try {
            const emailHtml = await render(
                ContactEmail({
                    name,
                    email,
                    message,
                    subject,
                }),
            );

            await resend.emails.send({
                from: "Cnippet <contact@ui.cnippet.site>",
                to: email,
                subject: `New Contact Form Submission: ${subject || "No Subject"}`,
                html: emailHtml,
            });

            return NextResponse.json(
                { message: "Message sent successfully" },
                { status: 200 },
            );
        } catch (error) {
            console.error("Email sending error:", error);
            return NextResponse.json(
                { error: "Failed to send message" },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 },
        );
    }
}
