import React from "react";
import Link from "next/link";
import style from "./admin.module.css";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function AdminLayout({ children }) {
  return (
    <div className={style.page}>
      <AdminHeader />

      <div className={style.shell}>
        <aside className={style.sidebar}>
          <nav className={style.nav}>
            <span className={style.navGroupLabel}>Forms</span>
            <Link href="/admin/enquiries">Contact Enquiries</Link>
            <Link href="/admin/request-quote">Request Quote</Link>
            <Link href="/admin/careers">Careers</Link>
            <Link href="/admin/newsletter">Newsletter</Link>
          </nav>
        </aside>

        <main className={style.content}>{children}</main>
      </div>

      <AdminFooter />
    </div>
  );
}
