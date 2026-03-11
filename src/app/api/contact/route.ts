import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, _gotcha } = body;

    // 1. Honeypot Check
    if (_gotcha) {
      // Silently fail for bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Server-side Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3. Basic Sanitization (Prevent basic injection)
    const cleanName = name.replace(/<[^>]*>?/gm, "");
    const cleanMessage = message.replace(/<[^>]*>?/gm, "");

    // 4. Logic to send email would go here (e.g., Resend, SendGrid, Nodemailer)
    // For this static export demo, we simulate success after a delay
    // console.log("Form submission received:", {
    //   name: cleanName,
    //   email,
    //   phone,
    //   message: cleanMessage,
    // });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}