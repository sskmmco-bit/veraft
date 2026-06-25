import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pillars, primaryNav, site, social } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

const companyLinks = [
  ...primaryNav,
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink-soft text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Logo onDark />
            <p className="mt-5 text-body-sm text-muted-dark">
              An AI-first software studio. We design and build software that
              works quietly alongside your team.
            </p>
          </div>

          <FooterColumn title="Services">
            {pillars.map((p) => (
              <FooterLink key={p.href} href={p.href}>
                {p.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 text-body-sm text-paper hover:text-accent-2"
            >
              {site.email}
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden />
            </a>
            <span className="text-body-sm text-muted-dark">
              {site.location}
            </span>
            <ul className="mt-2 flex gap-4">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-label text-muted-dark transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line-dark pt-8 text-label text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built to work alongside people.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-mono text-label uppercase tracking-[0.12em] text-muted-dark">
        {title}
      </h2>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-body-sm text-muted-dark transition-colors hover:text-paper"
    >
      {children}
    </Link>
  );
}
