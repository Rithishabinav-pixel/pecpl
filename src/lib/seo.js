const SITE_URL = process.env.SITE_URL || "http://localhost:3000";
const DEFAULT_IMAGE = "/assets/images/hero-banner.webp";

export function buildMetadata({ title, description, path, keywords, image, noIndex }) {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "Precision Equipments",
      images: [{ url: image || DEFAULT_IMAGE }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || DEFAULT_IMAGE],
    },
  };
}