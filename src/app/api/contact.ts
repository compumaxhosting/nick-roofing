import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message, token } = req.body;

  // 🔹 Verify Google reCAPTCHA
  const verifyResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    { method: "POST" }
  );
  const captchaResult = await verifyResponse.json();

  if (!captchaResult.success) {
    return res.status(400).json({ error: "Failed reCAPTCHA verification" });
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: `New Contact Form Submission - ${service || "General"}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
