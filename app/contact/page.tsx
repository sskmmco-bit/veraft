import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { site, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the software you want to build or the work you'd like to automate. We usually reply within a business day.",
};

const nextSteps = [
  "We read your message and reply within a business day.",
  "A short call to understand the problem and the outcome you want.",
  "A clear, honest proposal — scope, timeline, and cost.",
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Start a project."
        intro="Tell us about the software you want to build or the work you'd like to automate. The more context, the better the first reply."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* Details */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-mono text-label uppercase tracking-[0.12em] text-muted">
                  Get in touch
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-display-md text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                  <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden />
                </a>
                <p className="mt-3 text-body text-muted">{site.location}</p>
              </div>

              <div>
                <h2 className="font-mono text-label uppercase tracking-[0.12em] text-muted">
                  What happens next
                </h2>
                <ol className="mt-4 flex flex-col gap-3">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-body-sm text-ink">
                      <span className="font-mono text-label text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-mono text-label uppercase tracking-[0.12em] text-muted">
                  Elsewhere
                </h2>
                <ul className="mt-4 flex gap-5">
                  {social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-body-sm text-muted transition-colors hover:text-ink"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}
