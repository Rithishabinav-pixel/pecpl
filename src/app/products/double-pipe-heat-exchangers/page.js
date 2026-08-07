import Client from "./client";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Double Pipe Heat Exchanger - Precision Equipment",
  description:
    "Explore Precision Equipment Double Pipe Heat Exchanger for efficient heat transfer in industrial applications. Durable, reliable, & custom-built to your needs.",
  path: "/products/double-pipe-heat-exchangers",
  keywords: [
    "double pipe heat exchanger",
    "modular heat exchanger",
    "high temperature differential exchanger",
  ],
});

export default function Page() {
  return <Client />;
}
