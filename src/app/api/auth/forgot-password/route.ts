import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users, passwordResetTokens } from "@/db/schema";
import { forgotPasswordSchema } from "@/lib/validations";
import { z } from "zod";
import { eq } from "drizzle-orm";
import crypto from "crypto";
import { addHours } from "date-fns";

// In a real app, use Resend or SendGrid here
const sendResetEmail = async (email: string, token: string) => {
  console.log(`Sending reset email to ${email} with token ${token}`);
  // Mock email sending delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return true;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = forgotPasswordSchema.parse(body);

    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      // Security best practice: Don't reveal if email exists
      return NextResponse.json(
        { message: "If an account exists, a reset link has been sent." },
        { status: 200 }
      );
    }

    // Generate token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = addHours(new Date(), 1); // 1 hour expiry

    // Save token to DB
    await db.insert(passwordResetTokens).values({
      token,
      userId: user.id,
      expires,
    });

    // Send email
    await sendResetEmail(email, token);

    return NextResponse.json(
      { message: "If an account exists, a reset link has been sent." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}