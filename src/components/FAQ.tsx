"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const faqs = [
  {
    q: "Do I need the official WhatsApp Business API?",
    a: "We set it up for you on the official Meta/WhatsApp Business Platform — verified sender, green tick eligible, no risk of bans. You can also start with PocketLink on a normal number.",
  },
  {
    q: "How quickly can I go live?",
    a: "Most businesses are live within a day. PocketLink storefronts can be set up the same evening — no code needed.",
  },
  {
    q: "What does it cost?",
    a: "There's a free tier to get started. Paid plans are transparent and made for Indian MSME budgets — you only pay as you grow. Talk to sales for a quote.",
  },
  {
    q: "Can it handle payments and delivery?",
    a: "Yes. Accept UPI and cards via Razorpay right inside chat, and connect delivery partners so orders flow end-to-end.",
  },
  {
    q: "Will my staff need training?",
    a: "No. If your team can use WhatsApp, they can use Seniqify. Everything happens in the chats they already know.",
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
