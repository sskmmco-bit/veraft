import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "Custom Software",
  description:
    "CRM and ERP modules, HR and inventory systems, admin dashboards, and portals — built around how your team actually works.",
};

export default function Page() {
  return <ServiceDetail slug="custom-software" />;
}
