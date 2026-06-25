# Veraft

Marketing website for Veraft — an AI-first software studio. Built with Next.js (App Router),
TypeScript, Tailwind CSS v4, Motion, and Lenis.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run lint     # eslint
```

## Environment note — Tailwind v4 oxide engine

This project was set up behind a corporate registry that **blocks the native Tailwind oxide
binary** (`@tailwindcss/oxide-win32-x64-msvc` returns `403 Forbidden`). Tailwind v4 falls back
to its WebAssembly engine when the native binary is absent, so the build still works — but the
WASM package has a `cpu: wasm32` constraint that a normal `npm install` skips on an x64 host.

If a fresh `npm install` leaves you with a build error like
`Cannot find module '@tailwindcss/oxide-win32-x64-msvc'`, install the WASM fallback once:

```bash
npm install @tailwindcss/oxide-wasm32-wasi@4.3.1 --force --no-save
```

(It is also listed under `optionalDependencies` for documentation.) On a network where the native
binary is reachable, none of this is needed — delete the optional dep and let npm install the
native engine. `tailwindcss` is pinned to `4.3.1` so the engine versions stay aligned.

Node also needs to trust the corporate root CA for installs to succeed:

```bash
export NODE_OPTIONS=--use-system-ca   # trusts the OS certificate store
```

## Structure

- `app/` — App Router routes, `globals.css` (design tokens via Tailwind `@theme`).
- `components/ui/` — primitives (Button, Container, Section, Eyebrow, …).
- `components/sections/` — composed page sections.
- `components/layout/` — Header, Footer, mobile menu, logo.
- `components/motion/` — Lenis smooth scroll + reveal helpers.
- `lib/` — site config, fonts, helpers.

See `CLAUDE.md` for design-system conventions.
