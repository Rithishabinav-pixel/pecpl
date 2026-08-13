import { Lato, Open_Sans } from "next/font/google";import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import SiteChrome from "./components/SiteChrome";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "Precision Equipments | Heat Exchangers & Process Equipment Manufacturer",
  description:
    "Precision Equipments (PECPL) designs and manufactures heat exchangers, pressure vessels, and critical process equipment for Oil & Gas, Petrochemical, Fertilizer, LNG, and Renewable Energy industries.",
 icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  };

   const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PECPL",
  "alternateName": "Precision Equipment Manufacture",
  "url": "https://pecpl.com/",
  "logo": "https://pecpl.com/assets/images/logo.svg",
  "sameAs": "https://www.linkedin.com/company/shellandtubeheatexchangers/"
  };

export default function RootLayout({ children }) {



  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${lato.variable} ${openSans.variable}`}
>
  <body>
    <GoogleTagManager gtmId="GTM-MDVV5KQ" />

    <GoogleAnalytics gaId="G-F86RNNWHDP" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />

    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MDVV5KQ"
        height="0"
        width="0"
        style={{
          display: "none",
          visibility: "hidden",
        }}
      />
    </noscript>

    <main>
      <SiteChrome>{children}</SiteChrome>
    </main>
  </body>
</html>
  );
}