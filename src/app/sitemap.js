import fs from "fs";
import path from "path";

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

function getProductSlugs() {
  const productsDir = path.join(process.cwd(), "src", "app", "products");

  return fs
    .readdirSync(productsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export default function sitemap() {
  const lastModified = new Date();

  const staticPages = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/about-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/career", changeFrequency: "weekly", priority: 0.7 },
    { url: "/clients", changeFrequency: "monthly", priority: 0.6 },
    { url: "/industries", changeFrequency: "monthly", priority: 0.8 },
    { url: "/knowledge-centre", changeFrequency: "weekly", priority: 0.7 },
    { url: "/responsibility", changeFrequency: "monthly", priority: 0.6 },
    { url: "/engineering", changeFrequency: "monthly", priority: 0.7 },
    { url: "/manufacturing-facilities-machinery", changeFrequency: "monthly", priority: 0.7 },
    { url: "/logistics", changeFrequency: "monthly", priority: 0.7 },
    { url: "/products", changeFrequency: "weekly", priority: 0.9 },
  ];

  const productPages = getProductSlugs().map((slug) => ({
    url: `/products/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages].map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
