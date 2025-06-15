"use server";
import prisma from "@/lib/prisma";
import { render } from "@react-email/render";
import { OTPEmail } from "@/emails/otp-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function storeOTP(email: string, otp: string) {
    try {
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        return await prisma.otp.upsert({
            where: { email },
            update: { code: otp, expiresAt, attempts: 0 },
            create: { email, code: otp, expiresAt, attempts: 0 }
        });
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to store OTP");
    }
}

export async function sendOTP(email: string) {
    try {
        const otp = generateOTP();
        await storeOTP(email, otp);

        const emailHtml = render(OTPEmail({ userEmail: email, otp }));
        const { data, error } = await resend.emails.send({
            from: "OTP@ui.cnippet.site",
            to: email,
            subject: "Your Verification OTP",
            html: await emailHtml,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: "Failed to send OTP email. Please try again." };
        }

        return { success: true, data };
    } catch (error) {
        console.error("OTP Process Error:", error);
        return { error: "OTP process failed. Please try again." };
    }
}

export async function verifyOTP(email: string, otp: string) {
    try {
        const otpRecord = await prisma.otp.findUnique({ where: { email } });
        if (!otpRecord) return { error: "OTP not found. Please request a new one." };

        if (otpRecord.expiresAt < new Date()) {
            await prisma.otp.delete({ where: { email } });
            return { error: "OTP expired. Please request a new one." };
        }

        if (otpRecord.attempts >= 3) {
            await prisma.otp.delete({ where: { email } });
            return { error: "Too many attempts. Please request a new OTP." };
        }

        if (otpRecord.code !== otp) {
            await prisma.otp.update({
                where: { email },
                data: { attempts: { increment: 1 } }
            });
            return { error: "Invalid OTP. Please try again." };
        }

        await prisma.otp.delete({ where: { email } });
        return { success: true };
    } catch (error) {
        console.error("Verification Error:", error);
        return { error: "OTP verification failed. Please try again." };
    }
}