"use client";

import { preload } from "react-dom";

export default function PreloadHeroImage() {
  preload("/assets/images/ban1.webp", {
    as: "image",
    fetchPriority: "high",
  });

   preload("/assets/images/ban2.webp", {
    as: "image",
    fetchPriority: "high",
  });

  preload("/assets/images/menu-arrow.svg", {
    as: "image",
    type: "image/svg+xml",
    fetchPriority: "high",
  });

  return null;
}