import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "Workflow and business process automation, API integration, AI agents, and email automation that runs reliably in the background.",
};

export default function Page() {
  return <ServiceDetail slug="automation" />;
}
