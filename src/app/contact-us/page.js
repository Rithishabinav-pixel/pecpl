import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get Local & Global Support | Contact - Precision Equipments",
  description:
    "Reach out to Precision Equipments across 8 locations—India, UAE, Kuwait, Oman, Saudi Arabia, USA & Malaysia. We're here to discuss your projects with precision.",
  path: "/contact-us",
  keywords: [
    "contact Precision Equipments",
    "PECPL office locations",
    "request a quote",
    "heat exchanger enquiry",
  ],
});

export default function Page() {
  return <Client />;
}
