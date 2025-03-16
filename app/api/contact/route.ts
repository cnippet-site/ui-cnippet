import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PrismaClient } from "@prisma/client";

// Create a single PrismaClient instance and reuse it
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Parse request body
        let body;
        try {
            body = await request.json();
        } catch (error) {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 }
            );
        }

        // Validate input
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        if (typeof name !== "string" || typeof email !== "string" || 
            typeof subject !== "string" || typeof message !== "string") {
            return NextResponse.json(
                { error: "Invalid field types" },
                { status: 400 }
            );
        }

        // Store contact submission in database
        try {
            await prisma.contact.create({
                data: {
                    name,
                    email,
                    subject,
                    message,
                },
            });
        } catch (error) {
            console.error("Database creation error:", error);
            return NextResponse.json(
                { error: "Failed to save contact submission" },
                { status: 500 }
            );
        }

        // Send notification email
        try {
            await resend.emails.send({
                from: "Cnippet <contact@ui.cnippet.site>",
                to: "your-email@example.com", // Replace with your email
                subject: `New Contact Form Submission: ${subject}`,
                html: `
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            });

            // Send confirmation email to the user
            await resend.emails.send({
                from: "Cnippet <contact@ui.cnippet.site>",
                to: email,
                subject: "We've Received Your Message - Cnippet",
                html: `
                    <h1>Thank You for Contacting Us!</h1>
                    <p>Dear ${name},</p>
                    <p>We've received your message and will get back to you as soon as possible.</p>
                    <p>Here's a copy of your message:</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    <br>
                    <p>Best regards,</p>
                    <p>The Cnippet Team</p>
                `,
            });
        } catch (error) {
            console.error("Email sending error:", error);
            // Don't return an error as the submission was saved
        }

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact submission error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
} 