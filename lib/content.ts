/** Shared editorial content used across multiple routes. */

export type ProcessStep = {
  id: string;
  title: string;
  teaser: string;
  detail: string;
};

/** The real working sequence — the one place numbered steps are warranted. */
export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    title: "Discover",
    teaser: "Understand the work before touching software.",
    detail:
      "We start with how your team actually works today — the tools, the handoffs, the parts that quietly eat hours. We map where software helps and, just as importantly, where it shouldn't.",
  },
  {
    id: "design",
    title: "Design",
    teaser: "Shape the smallest thing that changes the day.",
    detail:
      "We design the interface and the system together, prototyping the flows that matter most so you can react to something real before we build it.",
  },
  {
    id: "build",
    title: "Build",
    teaser: "Ship in working increments, not big reveals.",
    detail:
      "We build in short cycles with production-quality code from day one. You see progress every week and steer as it takes shape — no months-long black box.",
  },
  {
    id: "deploy",
    title: "Deploy & iterate",
    teaser: "Launch, measure, and keep improving.",
    detail:
      "We deploy carefully, watch how it performs against the outcome we agreed on, and keep refining. Software that works alongside people is never quite finished.",
  },
];

/** Principles that guide every engagement. */
export const principles = [
  {
    title: "Augment, don't replace",
    body: "We build software that takes the repetitive load off people so they can do the work only people can do — not software that quietly removes them.",
  },
  {
    title: "Earn trust with accuracy",
    body: "AI that makes things up is worse than no AI. We ground assistants in your data and design for honest 'I don't know' over confident guesses.",
  },
  {
    title: "Ship small, ship often",
    body: "Value in weeks, not quarters. Small releases keep risk low and let you change direction while it's still cheap.",
  },
  {
    title: "Own what we build",
    body: "Clean, documented, standard code on infrastructure you control. No lock-in to us — you can take it anywhere.",
  },
];

/** Per-service detail copy, keyed by pillar slug. */
export type ServiceDetail = {
  whoFor: string;
  approach: { title: string; body: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-solutions": {
    whoFor:
      "For teams drowning in repetitive questions — customer support, sales, and internal helpdesks.",
    approach: [
      {
        title: "Grounded in your data",
        body: "We connect the assistant to your docs, tickets, and systems so answers are specific, current, and traceable.",
      },
      {
        title: "Honest by design",
        body: "It defers to a person when it isn't sure — with the full thread and context already attached.",
      },
      {
        title: "Measured by resolution",
        body: "We track deflection and accuracy against real conversations, not vanity chat volume.",
      },
    ],
  },
  "custom-software": {
    whoFor:
      "For teams outgrowing spreadsheets and bending themselves around rigid off-the-shelf tools.",
    approach: [
      {
        title: "Modeled on your process",
        body: "We map how work really flows, then build to fit it — instead of forcing your team to fit the software.",
      },
      {
        title: "Built to last",
        body: "A clean data model, a standard stack, and documentation that makes the next change easy.",
      },
      {
        title: "Adopted, not just shipped",
        body: "We design for the people who live in it every day, so it actually gets used.",
      },
    ],
  },
  "web-development": {
    whoFor:
      "For companies whose website or product needs to feel as considered as it is capable.",
    approach: [
      {
        title: "Fast and accessible",
        body: "Performance and accessibility are requirements from the first commit, not a final-week scramble.",
      },
      {
        title: "Designed and built together",
        body: "One team across design and engineering, so intent doesn't get lost in handoff.",
      },
      {
        title: "Yours to run",
        body: "Clean, standard code on infrastructure you own and control.",
      },
    ],
  },
  automation: {
    whoFor:
      "For teams losing hours to manual, repetitive steps shuffled between disconnected tools.",
    approach: [
      {
        title: "Map before we automate",
        body: "We find the steps genuinely worth removing — and deliberately leave the judgment calls to people.",
      },
      {
        title: "Reliable over clever",
        body: "Observable, retry-safe workflows you can trust to run unattended, with alerts when something needs you.",
      },
      {
        title: "Connected to what you use",
        body: "We integrate with your existing tools through their APIs — no rip-and-replace.",
      },
    ],
  },
};

/** Tech we reach for (kept honest and high-level). */
export const techStack = [
  { group: "Product", items: ["Next.js", "React", "TypeScript", "React Native"] },
  { group: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { group: "AI", items: ["LLM agents", "RAG pipelines", "Vector search", "Evals"] },
  { group: "Platform", items: ["AWS", "Vercel", "Docker", "CI/CD"] },
];
