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
        let email: string;
        try {
            const body = await request.json();
            email = body.email;
        } catch (error) {
            return NextResponse.json(
                { error: "Invalid request body" },
                { status: 400 }
            );
        }

        // Validate email
        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Email is required and must be a string" },
                { status: 400 }
            );
        }

        // Check if email already exists
        try {
            const existingSubscriber = await prisma.newsletter.findUnique({
                where: { email },
            });

            if (existingSubscriber) {
                return NextResponse.json(
                    { error: "Email already subscribed" },
                    { status: 400 }
                );
            }
        } catch (error) {
            console.error("Database query error:", error);
            return NextResponse.json(
                { error: "Failed to check subscription status" },
                { status: 500 }
            );
        }

        // Create new subscriber
        try {
            const subscriber = await prisma.newsletter.create({
                data: { email },
            });
        } catch (error) {
            console.error("Database creation error:", error);
            return NextResponse.json(
                { error: "Failed to create subscription" },
                { status: 500 }
            );
        }

        // Send welcome email
        try {
            await resend.emails.send({
                from: "Cnippet <newsletter@ui.cnippet.site>",
                to: email,
                subject: "Welcome to Cnippet Newsletter!",
                html: `
                    <h1>Welcome to Cnippet Newsletter!</h1>
                    <p>Thank you for subscribing to our newsletter. We're excited to share our latest updates with you!</p>
                    <p>Best regards,</p>
                    <p>The Cnippet Team</p>
                `,
            });
        } catch (error) {
            console.error("Email sending error:", error);
            // Don't return an error here as the subscription was successful
            // Just log the error and continue
        }

        return NextResponse.json(
            { message: "Successfully subscribed to newsletter" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
