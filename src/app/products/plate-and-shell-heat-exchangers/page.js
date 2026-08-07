import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plate and Shell Heat Exchanger | High Efficiency - PECPL",
  description:
    "Plate and Shell Heat Exchanger offers high thermal efficiency, compact design, and reliability for critical use in chemical, energy & marine industries.",
  path: "/products/plate-and-shell-heat-exchangers",
  keywords: [
    "plate and shell heat exchanger",
    "high pressure heat exchanger",
    "high thermal efficiency exchanger",
  ],
});

export default function Page() {
  return <Client />;
}
