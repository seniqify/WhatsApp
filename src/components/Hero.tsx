"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MaskReveal from "./MaskReveal";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const codeLines = [
  { t: [["const ", "kw"], ["store", "var"], [" = ", "op"], ["await ", "kw"], ["seniqify", "fn"], [".launch({", "op"]] },
  { t: [["  channel: ", "prop"], ["'whatsapp'", "str"], [",", "op"]] },
  { t: [["  stack: ", "prop"], ["['next', 'edge', 'ai']", "str"], [",", "op"]] },
  { t: [["  ship: ", "prop"], ["'7 days'", "str"], [",", "op"]] },
  { t: [["});", "op"]] },
  { t: [["", "op"]] },
  { t: [["// → revenue, live.", "cm"]] },
];

const tokenColor: Record<string, string> = {
  kw: "text-violet",
  var: "text-cyan",
  fn: "text-blue",
  prop: "text-muted",
  str: "text-emerald-300",
  op: "text-faint",
  cm: "text-faint italic",
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yOrbs = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yCode = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacityCode = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44"
    >
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent)]" />
      <motion.div style={{ y: yOrbs }} aria-hidden className="float-slow pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]" />
      <motion.div style={{ y: yOrbs }} aria-hidden className="float-slow pointer-events-none absolute -top-20 right-1/4 h-[460px] w-[460px] translate-x-1/2 rounded-full bg-cyan/20 blur-[120px] [animation-delay:-6s]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="glass mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Booking engineering sprints for Q3 2026
        </motion.div>

        <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          <MaskReveal
            mount
            delay={0.2}
            lines={[
              <>
                We engineer{" "}
                <span className="text-gradient">digital products</span>
              </>,
              <>that print revenue.</>,
            ]}
          />
        </h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl"
        >
          Seniqify is a senior design &amp; engineering studio building
          high-performance websites, WhatsApp-native commerce, and AI-powered
          tools — shipped fast, built to scale.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-indigo px-6 py-3.5 text-base font-medium text-white glow-accent transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-text transition-colors hover:bg-white/10"
          >
            See our work
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-faint"
        >
          <span>★★★★★ Founder-rated</span>
          <span className="hidden sm:inline">•</span>
          <span>40+ products shipped</span>
          <span className="hidden sm:inline">•</span>
          <span>100 Lighthouse target</span>
        </motion.div>
      </motion.div>

      {/* code window visual */}
      <motion.div
        style={{ y: yCode, opacity: opacityCode }}
        className="relative mx-auto mt-16 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="ring-grad glass overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-faint">launch.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 text-left font-mono text-sm leading-relaxed sm:text-base">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="select-none text-faint/50">{i + 1}</span>
                <span>
                  {line.t.map(([txt, c], j) => (
                    <span key={j} className={tokenColor[c]}>{txt}</span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </motion.div>
      </motion.div>
    </section>
  );
}
