import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import style from "../../admin.module.css";
import { formatDate } from "../../_lib/format";

export default async function AdminCareerDetailPage({ params }) {
  const { id } = await params;
  const application = await prisma.careerApplication.findUnique({ where: { id } });

  if (!application) {
    notFound();
  }

  return (
    <div>
      <Link href="/admin/careers" className={style.backLink}>
        &larr; Back to Careers
      </Link>

      <h1>Application Details</h1>

      <div className={style.detailCard}>
        <div className={style.detailRow}>
          <strong>Name</strong>
          <span>{application.name}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Phone</strong>
          <span>{application.phone}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Email</strong>
          <span>{application.email}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Location</strong>
          <span>{application.location}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Position Applied</strong>
          <span>{application.position}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Message</strong>
          <span>{application.message || "-"}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Resume</strong>
          <span>
            <a className={style.viewLink} href={`/api/admin/resume/${application.id}`}>
              Download {application.resumeName}
            </a>
          </span>
        </div>
        <div className={style.detailRow}>
          <strong>Date</strong>
          <span>{formatDate(application.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
