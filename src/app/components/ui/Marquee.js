"use client";

import React from "react";
import Image from "next/image";
import style from "./Marquee.module.css";
import { labelFromImagePath } from "@/lib/imageLabel";

export default function Marquee({ items, direction = "left", itemClassName = "", itemLabel = "Client logo" }) {
  const loopItems = [...items, ...items];

  return (
    <div className={style.marquee}>
      <div className={`${style.track} ${direction === "right" ? style.reverse : ""}`}>
        {loopItems.map((item, index) => (
          <div className={`${style.item} ${itemClassName}`} key={index}>
            <Image
              src={item}
              width={150}
              height={82}
              alt={labelFromImagePath(item, itemLabel)}
              sizes="(max-width: 576px) 70px, (max-width: 768px) 90px, (max-width: 1024px) 110px, (max-width: 1400px) 130px, 150px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
