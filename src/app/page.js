import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Heat Exchanger Manufacturer | High Flux Heat Exchanger - PECPL",
  description:
    "PECPL delivers advanced heat transfer solutions with high flux and high pressure heat exchangers. Trusted heat exchanger manufacturer for global industries.",
  path: "/",
  keywords: [
    "heat exchanger manufacturer",
    "shell and tube heat exchangers",
    "pressure vessels",
    "process equipment",
    "Precision Equipments",
  ],
});

export default function Page() {
  return <Client />;
}
