import { unlink } from "fs/promises";
import prisma from "@/lib/prisma";
import { isAdminRequestAuthorized } from "@/lib/adminAuth";
import { getResumeAbsolutePath } from "@/lib/resumeStorage";

export async function DELETE(request, { params }) {
  if (!(await isAdminRequestAuthorized())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const application = await prisma.careerApplication.delete({ where: { id } });

    try {
      await unlink(getResumeAbsolutePath(application.resumePath));
    } catch (fileError) {
      console.error("Failed to delete resume file:", fileError);
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error.code === "P2025") {
      return Response.json({ error: "Record not found." }, { status: 404 });
    }

    console.error("Failed to delete career application:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
