import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { name, email, phone, subject, message } = body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["ak1804309@gmail.com"], 
      reply_to: email,
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
