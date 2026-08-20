import { validateCareerForm, validateResumeFile } from "@/lib/validation";
import { sendMail, buildCareerApplicationEmail } from "@/lib/mailer";

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const location = formData.get("location");
  const message = formData.get("message");
  const resume = formData.get("resume");

  const { valid, errors } = validateCareerForm({ name, phone, email, location });
  const resumeError = validateResumeFile(resume);

  if (resumeError) errors.resume = resumeError;

  if (!valid || resumeError) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
    if (process.env.MAIL_TO) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      const { subject, html } = buildCareerApplicationEmail({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        location: location.trim(),
        message: message?.trim() ? message.trim() : null,
        resumeName: resume.name,
        createdAt: new Date(),
      });

      const result = await sendMail({
        to: process.env.MAIL_TO,
        subject,
        html,
        attachments: [{ filename: resume.name, content: resumeBuffer }],
      });

      if (!result.ok) {
        return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
      }
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send career application email:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
