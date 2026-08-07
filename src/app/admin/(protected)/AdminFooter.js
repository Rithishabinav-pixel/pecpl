import React from "react";
import style from "./admin.module.css";

export default function AdminFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.adminFooter}>
      &copy; Copyright {year} Precision Equipments Pvt. Ltd. All Rights Reserved.
    </footer>
  );
}
