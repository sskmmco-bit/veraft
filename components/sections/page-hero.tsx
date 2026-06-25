"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/**
 * Inner-page hero. Light by default, with an orchestrated load reveal that
 * matches the home hero's rhythm.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1 variants={item} className="mt-6 text-display-lg text-ink">
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-body-lg text-muted"
            >
              {intro}
            </motion.p>
          )}
          {children && (
            <motion.div variants={item} className="mt-9">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
