"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./login.module.css";
import apiClient from "@/lib/apiClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setError(null);
    setSubmitting(true);

    try {
      const res = await apiClient.post("/api/admin/login", { password });

      const data = res.data;

      if (res.status >= 400) {
        setError(data.error || "Incorrect password.");
        return;
      }

      router.push("/admin/enquiries");
      router.refresh();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.field}>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>

          {error && <p className={style.error}>{error}</p>}

          <button type="submit" className={style.submit} disabled={submitting}>
            {submitting ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
