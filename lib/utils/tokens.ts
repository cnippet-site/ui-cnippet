import { randomBytes } from "crypto";
import prisma from "@/lib/prisma";

export async function generateResetToken(userId: string): Promise<string> {
    const token = randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000); // 1 hour from now
    
    await prisma.passwordResetToken.create({
        data: {
            token,
            userId,
            expires,
        },
    });
    
    return token;
} 