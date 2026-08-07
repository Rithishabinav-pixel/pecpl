import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plate and Frame Heat Exchanger for Efficient Cooling-PECPL",
  description:
    "PECPL manufactures high quality Plate and Frame Heat Exchanger systems for efficient heat transfer, long service life, and easy industrial maintenance needs.",
  path: "/products/plate-frame-heat-exchanger",
  keywords: [
    "plate and frame heat exchanger",
    "gasketed plate heat exchanger",
    "corrugated plate exchanger",
  ],
});

export default function Page() {
  return <Client />;
}
