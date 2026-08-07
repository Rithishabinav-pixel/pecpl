import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Heat Exchanger Manufacturer - Precision Equipments",
  description:
    "Leading manufacturer of shell & tube heat exchangers with 40+ years of expertise. Delivering reliable, efficient process equipment for global industries.",
  path: "/about-us",
  keywords: [
    "about Precision Equipments",
    "heat exchanger manufacturer since 1981",
    "PECPL company overview",
    "leadership",
    "accreditations",
  ],
});

export default function Page() {
  return <Client />;
}
