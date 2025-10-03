import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Debug log (development only)
    console.log("📩 Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
    });

    // Ensure recipients array is never undefined
    const recipients =
      process.env.TO_EMAILS?.split(",").map((email) => email.trim()) || [];

    if (recipients.length === 0) {
      throw new Error("No recipient emails defined in TO_EMAILS");
    }

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: recipients, // Safe: always a string[]
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json({ success: false, error });
  }
}
