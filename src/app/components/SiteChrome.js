"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FooterCTA from "./ui/FooterCTA";

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <FooterCTA />
      <Footer />
    </>
  );
}
