import { cookies } from "next/headers";
import { readFile } from "fs/promises";
import prisma from "@/lib/prisma";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/adminAuth";
import { getResumeAbsolutePath, getResumeContentType } from "@/lib/resumeStorage";

export async function GET(request, { params }) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE);

  if (!isValidAdminSession(session?.value)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const application = await prisma.careerApplication.findUnique({ where: { id } });

  if (!application) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const buffer = await readFile(getResumeAbsolutePath(application.resumePath));

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": getResumeContentType(application.resumeName),
        "Content-Disposition": `attachment; filename="${application.resumeName.replace(/"/g, "")}"`,
      },
    });
  } catch (error) {
    console.error("Failed to read resume file:", error);
    return Response.json({ error: "File not found" }, { status: 404 });
  }
}
