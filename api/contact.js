import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    // 🔴 THIS IS REQUIRED ON VERCEL
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "RESEND_API_KEY not found in environment",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["ak1804309@gmail.com"],
      reply_to: email,
      subject: "New Portfolio Contact",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
