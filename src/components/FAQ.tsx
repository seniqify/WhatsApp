"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const faqs = [
  {
    q: "How fast can you ship?",
    a: "Most projects see a live, interactive build within 7 days of kickoff. Full launches typically land in 3–6 weeks depending on scope.",
  },
  {
    q: "What does it cost?",
    a: "Projects are fixed-scope and quoted up front — no surprise hourly bills. Landing pages start small; full products are scoped after a quick call.",
  },
  {
    q: "Do we own the code?",
    a: "Always. You get the full repository, clean and documented, with no lock-in. Host it anywhere you like.",
  },
  {
    q: "Can you work with our existing stack?",
    a: "Yes. We plug into your repo, design system, and tools — or set up a modern stack from scratch if you'd prefer.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing retainers for iteration, growth, and support. Or we hand off cleanly so your team can run with it.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-medium tracking-tight">
          {q}
        </span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-300 ${
            open ? "rotate-45 text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal lines={[<>Questions, answered.</>]} />
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Still unsure about something? Reach out — we reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-3">
          {faqs.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
