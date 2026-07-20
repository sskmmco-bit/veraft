"use client";

import { Sparkles, Globe, Smartphone, Workflow, Boxes, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";

/**
 * The hero's single ambient element: a live feed of what Veraft builds,
 * cycling as notification cards. Accent-blue and paper cards alternate.
 */

type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const services: Service[] = [
  { title: "AI integration", desc: "Assistants & agents", icon: Sparkles },
  { title: "Web development", desc: "SaaS & web apps", icon: Globe },
  { title: "Mobile app development", desc: "iOS & Android", icon: Smartphone },
  { title: "Automation", desc: "Workflows that run themselves", icon: Workflow },
  { title: "Custom software", desc: "Internal tools & platforms", icon: Boxes },
  { title: "API integration", desc: "Connect your stack", icon: Plug },
];

function NotificationCard({ title, desc, icon: Icon }: Service) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 shadow-sm shadow-ink/[0.04]">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon size={20} strokeWidth={1.5} aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-tight text-ink">{title}</p>
        <p className="mt-0.5 text-sm text-muted">{desc}</p>
      </div>
    </div>
  );
}

export function HeroNotifications() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-sm">
      <AnimatedList
        items={services}
        maxVisible={4}
        interval={2400}
        className="flex flex-col gap-3"
        renderItem={(s) => <NotificationCard {...s} />}
      />
    </div>
  );
}
