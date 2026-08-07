import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Explore Job Opportunities | Careers - PECPL",
  description:
    "Join PECPL and build a rewarding career. Explore current job openings, apply today, and grow with a leading company committed to innovation and excellence.",
  path: "/career",
  keywords: [
    "Precision Equipments careers",
    "PECPL jobs",
    "engineering careers Chennai",
    "apply for job",
  ],
});

export default function Page() {
  return <Client />;
}
