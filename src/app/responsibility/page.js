import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Precision CSR & HSE | Responsibility in Action - PECPL",
  description:
    "Precision drives CSR and HSE by empowering education, supporting communities, ensuring safety, promoting sustainability, and building long-term impact.",
  path: "/responsibility",
  keywords: [
    "Precision Equipments CSR",
    "corporate social responsibility",
    "sustainability",
    "health and safety",
  ],
});

export default function Page() {
  return <Client />;
}
