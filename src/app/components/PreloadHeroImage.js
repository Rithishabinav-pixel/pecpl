"use client";

import { preload } from "react-dom";

export default function PreloadHeroImage() {
  preload("/assets/images/hero-banner.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return null;
}