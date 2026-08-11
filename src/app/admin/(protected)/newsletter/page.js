import Link from "next/link";
import prisma from "@/lib/prisma";
import style from "../admin.module.css";
import { formatDate } from "@/lib/format";
import ExportButton from "../_lib/ExportButton";
import DeleteButton from "../_lib/DeleteButton";

const PAGE_SIZE = 20;

export default async function AdminNewsletterPage({ searchParams }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const [subscriptions, total] = await Promise.all([
    prisma.newsletterSubscription.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.newsletterSubscription.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div>
      <div className={style.pageHeader}>
        <h1>Newsletter Subscriptions</h1>
        <ExportButton endpoint="/api/admin/newsletter/export" />
      </div>

      {subscriptions.length === 0 ? (
        <p className={style.empty}>No subscriptions yet.</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td>{subscription.email}</td>
                <td>{formatDate(subscription.createdAt)}</td>
                <td>
                  <DeleteButton endpoint={`/api/admin/newsletter/${subscription.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={style.pagination}>
        <Link
          href={`/admin/newsletter?page=${page - 1}`}
          className={page <= 1 ? style.disabled : ""}
        >
          Previous
        </Link>
        <span>
          Page {page} of {totalPages}
        </span>
        <Link
          href={`/admin/newsletter?page=${page + 1}`}
          className={page >= totalPages ? style.disabled : ""}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
