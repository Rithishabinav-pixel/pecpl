import Link from "next/link";
import prisma from "@/lib/prisma";
import style from "../admin.module.css";
import { formatDate } from "../_lib/format";
import ExportButton from "../_lib/ExportButton";
import DeleteButton from "../_lib/DeleteButton";

const PAGE_SIZE = 20;

export default async function AdminCareersPage({ searchParams }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const [applications, total] = await Promise.all([
    prisma.careerApplication.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.careerApplication.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <div className={style.pageHeader}>
        <h1>Careers</h1>
        <ExportButton endpoint="/api/admin/careers/export" />
      </div>

      {applications.length === 0 ? (
        <p className={style.empty}>No applications yet.</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Resume</th>
              <th>Message</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>{application.name}</td>
                <td>{application.phone}</td>
                <td>{application.email}</td>
                <td>
                  <a className={style.viewLink} href={`/api/admin/resume/${application.id}`}>
                    Download
                  </a>
                </td>
                <td>
                  {application.message
                    ? `${application.message.slice(0, 40)}${application.message.length > 40 ? "..." : ""}`
                    : "-"}
                </td>
                <td>{formatDate(application.createdAt)}</td>
                <td>
                  <div className={style.actions}>
                    <Link className={style.viewLink} href={`/admin/careers/${application.id}`}>
                      View
                    </Link>
                    <DeleteButton endpoint={`/api/admin/careers/${application.id}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={style.pagination}>
        <Link
          href={`/admin/careers?page=${page - 1}`}
          className={page <= 1 ? style.disabled : ""}
        >
          Previous
        </Link>
        <span>
          Page {page} of {totalPages}
        </span>
        <Link
          href={`/admin/careers?page=${page + 1}`}
          className={page >= totalPages ? style.disabled : ""}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
