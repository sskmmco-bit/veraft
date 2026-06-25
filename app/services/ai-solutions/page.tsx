import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Chatbots, support assistants, knowledge-base AI, internal assistants, document search, and voice — grounded in your business data.",
};

export default function Page() {
  return <ServiceDetail slug="ai-solutions" />;
}
