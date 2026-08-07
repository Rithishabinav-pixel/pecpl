import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Trusted Heat Exchanger Partner for Global Clients - PECPL",
  description:
    "We partner with leading end users and EPCs, delivering bespoke heat exchangers and pressure equipment that ensure reliable, efficient performance worldwide.",
  path: "/clients",
  keywords: [
    "Precision Equipments clients",
    "EPC clients",
    "end user clients",
    "PECPL customers",
  ],
});

export default function Page() {
  return <Client />;
}
