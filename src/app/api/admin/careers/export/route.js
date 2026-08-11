import prisma from "@/lib/prisma";
import { isAdminRequestAuthorized } from "@/lib/adminAuth";
import { buildCsv, csvResponse } from "@/lib/csv";
import { formatDate } from "@/lib/format";

const COLUMNS = [
  { label: "Name", value: (row) => row.name },
  { label: "Phone", value: (row) => row.phone },
  { label: "Email", value: (row) => row.email },
  { label: "Location", value: (row) => row.location },
  { label: "Message", value: (row) => row.message || "" },
  { label: "Resume File Name", value: (row) => row.resumeName },
  { label: "Date", value: (row) => formatDate(row.createdAt) },
];

export async function GET() {
  if (!(await isAdminRequestAuthorized())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await prisma.careerApplication.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (rows.length === 0) {
    return Response.json({ error: "No records to export." }, { status: 200 });
  }

  const csv = buildCsv(COLUMNS, rows);
  return csvResponse(csv, "careers");
}
