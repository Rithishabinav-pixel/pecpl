import prisma from "@/lib/prisma";
import { isAdminRequestAuthorized } from "@/lib/adminAuth";
import { buildCsv, csvResponse } from "@/lib/csv";
import { formatDate } from "@/lib/format";

const FORM_TYPE_CONFIG = {
  CONTACT: { filenamePrefix: "enquiries" },
  REQUEST_QUOTE: { filenamePrefix: "request-quotes" },
};

const COLUMNS = [
  { label: "Name", value: (row) => row.name },
  { label: "Phone", value: (row) => row.phone },
  { label: "Email", value: (row) => row.email },
  { label: "Location", value: (row) => row.location },
  { label: "Message", value: (row) => row.message || "" },
  { label: "Date", value: (row) => formatDate(row.createdAt) },
];

export async function GET(request) {
  if (!(await isAdminRequestAuthorized())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const formType = searchParams.get("formType");
  const config = FORM_TYPE_CONFIG[formType];

  if (!config) {
    return Response.json({ error: "Invalid form type." }, { status: 400 });
  }

  const rows = await prisma.contactEnquiry.findMany({
    where: { formType },
    orderBy: { createdAt: "desc" },
  });

  if (rows.length === 0) {
    return Response.json({ error: "No records to export." }, { status: 200 });
  }

  const csv = buildCsv(COLUMNS, rows);
  return csvResponse(csv, config.filenamePrefix);
}
