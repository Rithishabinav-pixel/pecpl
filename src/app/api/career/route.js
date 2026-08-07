import prisma from "@/lib/prisma";
import { validateCareerForm, validateResumeFile } from "@/lib/validation";
import { sendMail, buildCareerApplicationEmail } from "@/lib/mailer";
import { saveResumeFile } from "@/lib/resumeStorage";

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
  const position = formData.get("position");
  const message = formData.get("message");
  const resume = formData.get("resume");

  const { valid, errors } = validateCareerForm({ name, phone, email, location, position });
  const resumeError = validateResumeFile(resume);

  if (resumeError) errors.resume = resumeError;

  if (!valid || resumeError) {
    return Response.json({ errors }, { status: 400 });
  }

  try {
    const { resumePath, resumeName } = await saveResumeFile(resume);

    const application = await prisma.careerApplication.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        location: location.trim(),
        position: position.trim(),
        message: message?.trim() ? message.trim() : null,
        resumePath,
        resumeName,
      },
    });

    if (process.env.MAIL_TO) {
      const { subject, html } = buildCareerApplicationEmail(application);
      await sendMail({ to: process.env.MAIL_TO, subject, html });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to save career application:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
