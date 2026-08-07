import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hairpin Heat Exchanger | Hairpin Type Heat Exchanger - PECPL",
  description:
    "Explore PECPL Hairpin Heat Exchanger solutions. Our Hairpin Type Heat Exchangers deliver high efficiency, durability, and performance for industrial needs.",
  path: "/products/hairpin-heat-exchangers",
  keywords: [
    "hairpin heat exchanger",
    "U-tube heat exchanger",
    "compact heat exchanger",
  ],
});

export default function Page() {
  return <Client />;
}
