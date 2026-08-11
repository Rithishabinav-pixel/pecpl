import prisma from "@/lib/prisma";
import { isAdminRequestAuthorized } from "@/lib/adminAuth";

export async function DELETE(request, { params }) {
  if (!(await isAdminRequestAuthorized())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.newsletterSubscription.delete({ where: { id } });
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error.code === "P2025") {
      return Response.json({ error: "Record not found." }, { status: 404 });
    }

    console.error("Failed to delete newsletter subscription:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
