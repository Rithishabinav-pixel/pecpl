import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import style from "../admin.module.css";
import { formatDate } from "./format";

export default async function EnquiryDetail({ id, title, basePath, backLabel }) {
  const enquiry = await prisma.contactEnquiry.findUnique({ where: { id } });

  if (!enquiry) {
    notFound();
  }

  return (
    <div>
      <Link href={basePath} className={style.backLink}>
        &larr; {backLabel}
      </Link>

      <h1>{title}</h1>

      <div className={style.detailCard}>
        <div className={style.detailRow}>
          <strong>Name</strong>
          <span>{enquiry.name}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Phone</strong>
          <span>{enquiry.phone}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Email</strong>
          <span>{enquiry.email}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Location</strong>
          <span>{enquiry.location}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Message</strong>
          <span>{enquiry.message || "-"}</span>
        </div>
        <div className={style.detailRow}>
          <strong>Date</strong>
          <span>{formatDate(enquiry.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
