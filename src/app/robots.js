const SITE_URL = process.env.SITE_URL || "https://yourdomain.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/dashboard/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}