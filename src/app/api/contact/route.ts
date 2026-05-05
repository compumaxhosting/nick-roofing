import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, service, message } = body;

    const data = await resend.emails.send({
      from: "Contact Form <noreply@nickroofing.com>", // ⚠️ replace with your verified domain email
      to: ["nickcontractorllc@gmail.com", "wassay@compumaxllc.com"],
      subject: `New Contact Form Submission - ${service || "General"}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
