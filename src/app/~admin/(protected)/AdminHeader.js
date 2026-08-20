import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./admin.module.css";
import LogoutButton from "./LogoutButton";

export default function AdminHeader() {
  return (
    <header className={style.adminHeader}>
      <Link href="/admin" className={style.adminLogo}>
        <Image src="/assets/images/logo.svg" width={180} height={48} alt="Precision Equipments" priority />
      </Link>
      <LogoutButton />
    </header>
  );
}
