import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Corporate sites, SaaS products, landing pages, e-commerce, and web apps — fast, accessible, and well-built.",
};

export default function Page() {
  return <ServiceDetail slug="web-development" />;
}
