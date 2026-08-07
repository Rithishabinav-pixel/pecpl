import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Knowledge Centre | Engineering Insights & Solutions - PECPL",
  description:
    "Explore the expert newsletter with audio in our Knowledge Centre. Stay updated on engineering trends, process equipment, and innovative industrial solutions",
  path: "/knowledge-centre",
  keywords: [
    "heat exchanger knowledge centre",
    "process equipment FAQs",
    "Precision Equipments resources",
  ],
});

export default function Page() {
  return <Client />;
}
