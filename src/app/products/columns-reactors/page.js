import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Columns and Reactors Manufacturer - Precision Equipment",
  description:
    "PECPL is a trusted Columns and Reactors Manufacturer delivering high-quality, durable, and efficient process equipment for diverse industrial applications.",
  path: "/products/columns-reactors",
  keywords: [
    "columns and reactors",
    "process columns",
    "chemical reactors manufacturer",
  ],
});

export default function Page() {
  return <Client />;
}
