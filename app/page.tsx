import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";

// Temporary placeholder — replaced by the full home page in Phase 3.
export default function HomePage() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <Container className="py-32">
        <Eyebrow>AI-first software studio</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-display-xl">
          Software that works alongside your team.
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-muted">
          Foundation is in place. Building the experience phase by phase.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            See what we build
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
