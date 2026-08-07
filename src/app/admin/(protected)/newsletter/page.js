import Link from "next/link";
import prisma from "@/lib/prisma";
import style from "../admin.module.css";

const PAGE_SIZE = 20;

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

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
      <h1>Newsletter Subscriptions</h1>

      {subscriptions.length === 0 ? (
        <p className={style.empty}>No subscriptions yet.</p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td>{subscription.email}</td>
                <td>{formatDate(subscription.createdAt)}</td>
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
