import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceList } from "@/components/sections/service-list";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI solutions, custom software, web development, and automation — often combined into one system that fits how your team works.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Modern software and AI, built around your work."
        intro="We build across four areas — often combined into one system. Pick a starting point, or tell us the problem and we'll shape the right mix."
      />
      <ServiceList />
      <CtaBand
        title="Not sure which one you need?"
        body="Most projects span more than one area. Describe the outcome you're after and we'll propose the simplest path to it."
      />
    </main>
  );
}
