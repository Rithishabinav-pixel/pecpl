import Link from "next/link";
import prisma from "@/lib/prisma";
import style from "../admin.module.css";
import { formatDate } from "./format";
import ExportButton from "./ExportButton";
import DeleteButton from "./DeleteButton";

const PAGE_SIZE = 20;

export default async function EnquiryTable({ formType, title, basePath, searchParams }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const where = { formType };

  const [enquiries, total] = await Promise.all([
    prisma.contactEnquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.contactEnquiry.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <div className={style.pageHeader}>
        <h1>{title}</h1>
        <ExportButton endpoint={`/api/admin/enquiry/export?formType=${formType}`} />
      </div>

      {enquiries.length === 0 ? (
        <p className={style.empty}>No entries yet.</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Message</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>{enquiry.name}</td>
                <td>{enquiry.phone}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.location}</td>
                <td>
                  {enquiry.message
                    ? `${enquiry.message.slice(0, 40)}${enquiry.message.length > 40 ? "..." : ""}`
                    : "-"}
                </td>
                <td>{formatDate(enquiry.createdAt)}</td>
                <td>
                  <div className={style.actions}>
                    <Link className={style.viewLink} href={`${basePath}/${enquiry.id}`}>
                      View
                    </Link>
                    <DeleteButton endpoint={`/api/admin/enquiry/${enquiry.id}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={style.pagination}>
        <Link
          href={`${basePath}?page=${page - 1}`}
          className={page <= 1 ? style.disabled : ""}
        >
          Previous
        </Link>
        <span>
          Page {page} of {totalPages}
        </span>
        <Link
          href={`${basePath}?page=${page + 1}`}
          className={page >= totalPages ? style.disabled : ""}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
