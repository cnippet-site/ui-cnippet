"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import prisma from "@/lib/prisma";
import NewsletterWelcomeEmail from "@/components/routes/resend/newsletter-welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export const Newsletter = async ({ email }: { email: string }) => {
    try {
        if (!email || typeof email !== "string") {
            return {
                success: false,
                error: "Email is required and must be a string",
            };
        }

        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            return {
                success: false,
                error: "Email already subscribed",
            };
        }

        const subscriber = await prisma.newsletter.create({
            data: { email },
        });

        //send welcome email
        try {
            const emailHtml = await render(
                NewsletterWelcomeEmail({ userEmail: email }),
            );

            await resend.emails.send({
                from: "Cnippet <newsletter@ui.cnippet.site>",
                to: email,
                subject: "Welcome to Cnippet Newsletter! 🎉",
                html: emailHtml,
            });

            return {
                success: true,
                message: "Welcome email sent successfully",
            };
        } catch (error) {
            console.error("Email sending error:", error);
            return {
                success: false,
                error: "Failed to send message",
            };
        }
    } catch (error) {
        console.error("Newsletter error:", error);
        return {
            success: false,
            error: "Failed to subscribe to newsletter",
        };
    }
};
