import prisma from "@/lib/prisma";
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
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email: trimmedEmail },
    });

    if (existing) {
      return Response.json(
        { success: true, message: "You're already subscribed." },
        { status: 200 }
      );
    }

    const subscription = await prisma.newsletterSubscription.create({
      data: { email: trimmedEmail },
    });

    if (process.env.MAIL_TO) {
      const { subject, html } = buildNewsletterEmail(subscription);
      await sendMail({ to: process.env.MAIL_TO, subject, html });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to save newsletter subscription:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
