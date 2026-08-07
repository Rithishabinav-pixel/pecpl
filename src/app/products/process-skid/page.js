import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Top Process Skid Manufacturers - Precision Equipment",
  description:
    "PECPL is among the leading Process Skid manufacturers, delivering reliable, customized skid-mounted systems for various industries with precision and quality.",
  path: "/products/process-skid",
  keywords: [
    "process skid",
    "modular process systems",
    "skid mounted equipment",
  ],
});

export default function Page() {
  return <Client />;
}
