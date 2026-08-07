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
    { url: "/", },
    { url: "/about-us/"},
    { url: "/contact-us/"},
    { url: "/career/",},
    { url: "/clients/", },
    { url: "/industries/", },
    { url: "/knowledge-centre/",},
    { url: "/responsibility/", },
    { url: "/engineering/",  },
    { url: "/manufacturing-facilities-machinery/",},
    { url: "/logistics/",  },
    { url: "/products/",},
  ];

  const productPages = getProductSlugs().map((slug) => ({
    url: `/products/${slug}/`,
  }));

  return [...staticPages, ...productPages].map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified,
  }));
}
