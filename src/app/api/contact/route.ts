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
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; background-color: #EEEEEE; padding: 20px; }
              .header { background-color: #E07B3B; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background-color: white; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { color: #35454f; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { color: #555; font-size: 16px; margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #364f4f; }
              .message-box { background-color: #f0f7f7; border-left: 4px solid #35454f; padding: 15px; margin-top: 5px; border-radius: 4px; }
              .footer { text-align: center; padding: 15px; color: #666; font-size: 12px; }
              .divider { height: 2px; background-color: #364f4f; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📋 New Contact Form Message</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #35454f; text-decoration: none;">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">📞 Phone</div>
                  <div class="value"><a href="tel:${phone}" style="color: #35454f; text-decoration: none;">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">🔧 Service</div>
                  <div class="value">${service || "Not specified"}</div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>© Nick Roofing - Contact Form Submission</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
