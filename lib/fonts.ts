import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Self-hosted via the `geist` npm package — no external font requests,
 * no layout shift. `.variable` exposes `--font-geist-sans` /
 * `--font-geist-mono`, which the design tokens in globals.css consume.
 */
export const fontSans = GeistSans;
export const fontMono = GeistMono;
