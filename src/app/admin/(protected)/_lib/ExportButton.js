"use client";

import { useState } from "react";
import apiClient from "@/lib/apiClient";
import style from "../admin.module.css";

export default function ExportButton({ endpoint, label = "Export Data" }) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    if (exporting) return;
    setExporting(true);

    try {
      const res = await apiClient.get(endpoint, { responseType: "blob" });
      const contentType = res.headers?.["content-type"] || "";

      if (res.status >= 400 || contentType.includes("application/json")) {
        const text = await res.data.text();
        let message = "Export failed. Please try again.";
        try {
          message = JSON.parse(text).error || message;
        } catch {
          // keep default message
        }
        alert(message);
        return;
      }

      const disposition = res.headers?.["content-disposition"] || "";
      const match = disposition.match(/filename="?([^"]+)"?/);
      const filename = match ? match[1] : "export.csv";

      const url = URL.createObjectURL(res.data);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      alert("Export failed. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <button type="button" className={style.exportBtn} onClick={handleExport} disabled={exporting}>
      {exporting ? "Exporting..." : label}
    </button>
  );
}
