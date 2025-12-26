export default function handler(req, res) {
  res.status(200).json({
    hasKey: !!process.env.RESEND_API_KEY,
    keyStart: process.env.RESEND_API_KEY?.slice(0, 3) || null,
  });
}
