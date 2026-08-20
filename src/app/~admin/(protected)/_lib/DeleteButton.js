"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/apiClient";
import style from "../admin.module.css";

export default function DeleteButton({ endpoint }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (deleting) return;
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    setDeleting(true);

    try {
      const res = await apiClient.delete(endpoint);

      if (res.status >= 400) {
        alert(res.data?.error || "Failed to delete. Please try again.");
        return;
      }

      router.refresh();
    } catch (error) {
      alert("Failed to delete. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button type="button" className={style.deleteLink} onClick={handleDelete} disabled={deleting}>
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
