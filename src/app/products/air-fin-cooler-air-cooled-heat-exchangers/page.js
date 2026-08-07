import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Air Fin Cooler & Air Pre Heater Manufacturer Supplier - PECPL",
  description:
    "Leading Air fin cooler manufacturer and supplier, plus air pre-heater manufacturer and supplier. High-quality, efficient thermal solutions for industries.",
  path: "/products/air-fin-cooler-air-cooled-heat-exchangers",
  keywords: [
    "air fin cooler",
    "air cooled heat exchanger",
    "induced draft fan cooler",
    "process cooling equipment",
  ],
});

export default function Page() {
  return <Client />;
}
