import { validateNewsletterEmail } from "@/lib/validation";
import { sendMail, buildNewsletterEmail } from "@/lib/mailer";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email } = body ?? {};
  const { valid, errors } = validateNewsletterEmail(email);

  if (!valid) {
    return Response.json({ errors }, { status: 400 });
  }

  const trimmedEmail = email.trim();

  try {
    if (process.env.MAIL_TO) {
      const { subject, html } = buildNewsletterEmail({
        email: trimmedEmail,
        createdAt: new Date(),
      });

      const result = await sendMail({ to: process.env.MAIL_TO, subject, html });

      if (!result.ok) {
        return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
      }
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send newsletter email:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
