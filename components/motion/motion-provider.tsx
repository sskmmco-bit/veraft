"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { SmoothScroll } from "./smooth-scroll";

/**
 * App-wide motion boundary. `reducedMotion="user"` makes every Motion
 * component honor the OS setting automatically, and Lenis is mounted here
 * so smooth scroll lives in one place.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      {children}
    </MotionConfig>
  );
}
