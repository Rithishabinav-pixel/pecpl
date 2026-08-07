import prisma from "@/lib/prisma";
import { validateEnquiryForm } from "@/lib/validation";
import { sendMail, buildEnquiryEmail } from "@/lib/mailer";

const FORM_TYPES = ["CONTACT", "REQUEST_QUOTE"];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, location, message, formType } = body ?? {};

  if (!FORM_TYPES.includes(formType)) {
    return Response.json({ error: "Invalid form type." }, { status: 400 });
  }

  const { valid, errors } = validateEnquiryForm({ name, phone, email, location });

  if (!valid) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        location: location.trim(),
        message: message?.trim() ? message.trim() : null,
        formType,
      },
    });

    if (process.env.MAIL_TO) {
      const { subject, html } = buildEnquiryEmail(enquiry);
      await sendMail({ to: process.env.MAIL_TO, subject, html });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to save enquiry:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
