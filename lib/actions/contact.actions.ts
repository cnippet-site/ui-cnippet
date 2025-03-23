"use server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "@/components/routes/resend/contact-email";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const submitContactForm = async ({
    name,
    email,
    subject,
    message,
}: ContactFormData) => {
    try {
        if (!name || !email || !subject || !message) {
            return {
                success: false,
                error: "All fields are required",
            };
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                error: "Please enter a valid email address",
            };
        }

        // Test database connection first
        try {
            await prisma.$connect();
        } catch (connectionError) {
            console.error("[DATABASE_CONNECTION_ERROR]", connectionError);
            return {
                success: false,
                error: "Unable to connect to database. Please check your connection.",
            };
        }

        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

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

            return {
                success: true,
                message: "Message sent successfully",
                contact,
            };
        } catch (error) {
            console.error("Email sending error:", error);
            return {
                success: false,
                error: "Failed to send message"
            };
        }
    } catch (error) {
        console.error("[CONTACT_SUBMISSION_ERROR]", {
            error,
            message: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined,
        });

        // Check for specific Prisma errors
        if (error instanceof Error) {
            if (error.message.includes("Prisma")) {
                return {
                    success: false,
                    error: "Database error. Please check your database configuration.",
                };
            }

            if (error.message.includes("connect")) {
                return {
                    success: false,
                    error: "Database connection failed. Please check your DATABASE_URL.",
                };
            }
        }

        return {
            success: false,
            error: "Failed to submit contact form. Please try again.",
        };
    } finally {
        // Always disconnect after the operation
        await prisma.$disconnect();
    }
};

export const getContactSubmissions = async () => {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return {
            success: true,
            contacts,
        };
    } catch (error) {
        console.error("[GET_CONTACTS_ERROR]", {
            error,
            message: error instanceof Error ? error.message : "Unknown error",
        });
        return {
            success: false,
            contacts: [],
            error: "Failed to fetch contact submissions",
        };
    }
};
