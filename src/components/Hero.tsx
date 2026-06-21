"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-clay-soft/60 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper/60 px-3.5 py-1.5 text-sm text-ink-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
          </span>
          Booking projects for Q3 2026
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          We design &amp; build the{" "}
          <span className="italic text-clay">storefronts</span>
          <br className="hidden sm:block" /> people actually finish.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          Seniqify is a small studio for fast websites, WhatsApp-native
          commerce, and brand systems — shipped with the craft of a product
          team and the speed of a startup.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-medium text-cream transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper/50 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-paper"
          >
            See selected work
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 text-sm text-ink-faint"
        >
          Trusted by founders across retail, F&amp;B, and D2C in India.
        </motion.p>
      </motion.div>
    </section>
  );
}
