# Veraft Website

AI-first software company marketing site. Next.js (App Router) + TypeScript + Tailwind v4 + Motion + Lenis.

## Design system

- Everything derives from design tokens. Colors live as RGB channel triples in `app/globals.css` (`:root`, `--c-*`) and are mapped to utilities in `tailwind.config.ts`. No hardcoded colors in components — use token utilities (`bg-paper`, `text-ink`, `border-line`, `text-accent`, etc.). For direct CSS/SVG/inline use, solid `--color-*` vars are also exposed.
- Tailwind **v3.4** (pure-JS engine). v4 was unusable here: the corporate registry blocks the native oxide binary and the WASM fallback's scanner emits no utilities. See README.
- Aesthetic: "engineered calm" — precise, restrained, one signature element, surgical use of the accent (`#001FFE`).
- Mostly light/white with a couple of intentional dark sections (CTA band, footer). Hairline 1px borders over heavy shadows.
- Motion is restrained: fast, ease-out, scroll-reveal once, reduced-motion respected. When unsure, don't animate.
- Signature element: the request → agent → outcome pipeline in the home hero. Ambient motion lives ONLY there.

## Typography

- Display + body: **Geist Sans** (`geist/font/sans`), differentiated by scale/weight/tracking.
- Mono: **Geist Mono** (`geist/font/mono`) for eyebrows, labels, data, code.
- Self-hosted via the `geist` npm package (no external font requests, no layout shift).
- NOTE: original brief asked for Satoshi; swapped to Geist because the build environment cannot reach Google Fonts / Fontshare. To restore Satoshi, drop its `.woff2` into `app/fonts/`, load via `next/font/local`, and point `--font-display` at it.

## Conventions

- App Router, server components by default; client components (`"use client"`) only where interaction/animation needs them.
- Tailwind utility-first; extract repeated patterns into components (`components/ui`, `components/sections`), not `@apply` soup.
- Icons: lucide-react, consistent stroke width (1.5).
- Reusable section components in `components/sections/`, primitives in `components/ui/`, motion helpers in `components/motion/`.
- Site nav/config and copy constants live in `lib/`.

## Commands

- `npm run dev` / `npm run build` / `npm run lint`

## Rules

- Type-strict, no `any`. Build must pass clean before a phase is done.
- Don't introduce new dependencies without noting why.
- One feature/route per working session.
