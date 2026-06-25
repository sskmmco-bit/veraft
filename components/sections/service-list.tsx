import { Check } from "lucide-react";
import { pillars } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/motion/reveal";

/** Offering checklist — reused on the services overview and detail pages. */
export function OfferingList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-2.5">
          <Check
            size={18}
            strokeWidth={1.75}
            aria-hidden
            className="mt-0.5 shrink-0 text-accent"
          />
          <span className="text-body-sm text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** The four pillars expanded with full offerings, each linking to detail. */
export function ServiceList() {
  return (
    <Section tone="paper">
      <Container>
        <div className="divide-y divide-line">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.slug}
              delay={i * 0.04}
              className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[1fr_1.25fr] lg:gap-16"
            >
              <div className="lg:max-w-sm">
                <span className="font-mono text-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  id={pillar.slug}
                  className="mt-4 scroll-mt-28 text-display-md text-ink"
                >
                  {pillar.title}
                </h2>
                <p className="mt-4 text-body text-muted">{pillar.summary}</p>
                <ArrowLink href={pillar.href} className="mt-6">
                  Explore {pillar.title.toLowerCase()}
                </ArrowLink>
              </div>

              <OfferingList
                items={pillar.offerings}
                className="grid gap-x-8 sm:grid-cols-2"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
