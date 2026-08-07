"use client";

import React from "react";
import { useRouter } from "next/navigation";
import style from "./admin.module.css";
import apiClient from "@/lib/apiClient";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await apiClient.post("/api/admin/logout");
    router.push("/admin/login/");
    router.refresh();
  };

  return (
    <button type="button" className={style.logoutBtn} onClick={handleLogout}>
      Log Out
    </button>
  );
}
