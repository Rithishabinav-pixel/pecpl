import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pressure Vessels Manufacturer - Precision Equipment",
  description:
    "Precision Equipment is a trusted Pressure Vessels Manufacturer, delivering high-quality, durable, and custom-engineered vessels for industrial applications.",
  path: "/products/pressure-vessels",
  keywords: [
    "pressure vessel manufacturer",
    "ASME pressure vessels",
    "process pressure vessels",
  ],
});

export default function Page() {
  return <Client />;
}
