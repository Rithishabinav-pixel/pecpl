import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shell and Tube Heat Exchanger Manufacturer - PECPL",
  description:
    "Leading Shell and Tube Heat Exchanger Manufacturer & Supplier. We provide durable High-Pressure Shell and Tube Heat Exchangers for efficient heat transfer.",
  path: "/products/shell-and-tube-heat-exchangers",
  keywords: [
    "shell and tube heat exchanger",
    "helixchanger",
    "rod baffle heat exchanger",
    "refinery heat exchanger",
  ],
});

export default function Page() {
  return <Client />;
}
