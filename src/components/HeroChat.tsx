"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---- message bubbles ---- */
type Msg =
  | { from: "in" | "out"; text: string; time: string }
  | { from: "card"; time: string };

const messages: Msg[] = [
  { from: "in", text: "Hi! Is the blue kurta still in stock? 👗", time: "10:24" },
  { from: "out", text: "Yes! ₹1,499 only. Tap below to pay 👇", time: "10:24" },
  { from: "card", time: "10:25" },
  { from: "in", text: "Paid! ✅", time: "10:26" },
  { from: "out", text: "Order confirmed 🎉 Shipping today.", time: "10:26" },
];

function Check() {
  return (
    <svg width="15" height="11" viewBox="0 0 16 11" fill="none" className="text-sky-400">
      <path d="M1 5.5 4 8.5 9.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 8.5 11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FloatCard({
  icon,
  title,
  sub,
  gradient,
  className,
  delay,
  floatDelay,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  gradient: string;
  className: string;
  delay: number;
  floatDelay: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="badge-float glass flex items-center gap-3 rounded-2xl p-2.5 pr-4 shadow-[var(--shadow-card)]"
        style={{ animationDelay: floatDelay }}
      >
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${gradient} text-white`}>
          {icon}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-text">{title}</span>
          <span className="block text-xs text-muted">{sub}</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroChat() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* green glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(37,211,102,0.4),rgba(45,212,191,0.12)_45%,transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl"
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-line bg-elevated/80 px-4 py-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-wa to-wa-deep text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.5-.2-.3.2-.3.5-.9.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">Seniqify Store</div>
            <div className="flex items-center gap-1 text-xs text-wa">
              <span className="h-1.5 w-1.5 rounded-full bg-wa" /> online
            </div>
          </div>
          <div className="ml-auto flex gap-3 text-faint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" /></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1l-2.2 2.2z" /></svg>
          </div>
        </div>

        {/* body */}
        <div className="space-y-2.5 px-4 py-5">
          {messages.map((m, i) => {
            const common = {
              initial: { opacity: 0, y: 10, scale: 0.96 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, ease, delay: 0.5 + i * 0.35 },
            };

            if (m.from === "card") {
              return (
                <motion.div key={i} {...common} className="flex justify-end">
                  <div className="w-[78%] rounded-2xl rounded-tr-md bg-wa/15 p-2.5">
                    <div className="flex items-center gap-3 rounded-xl bg-base/60 p-2.5">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-wa to-teal text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" /></svg>
                      </span>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-text">Blue Kurta</div>
                        <div className="text-xs text-muted">₹1,499 · Free delivery</div>
                      </div>
                    </div>
                    <button className="mt-2 w-full rounded-lg bg-wa py-1.5 text-center text-sm font-semibold text-base">
                      Pay ₹1,499
                    </button>
                    <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted">
                      {m.time} <Check />
                    </div>
                  </div>
                </motion.div>
              );
            }

            const out = m.from === "out";
            return (
              <motion.div key={i} {...common} className={`flex ${out ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    out
                      ? "rounded-tr-md bg-wa/90 text-base"
                      : "rounded-tl-md bg-elevated text-text"
                  }`}
                >
                  <span>{m.text}</span>
                  <span className={`mt-0.5 flex items-center justify-end gap-1 text-[10px] ${out ? "text-base/60" : "text-muted"}`}>
                    {m.time} {out && <Check />}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 border-t border-line bg-elevated/60 px-3 py-3">
          <div className="flex-1 rounded-full bg-base/70 px-4 py-2 text-sm text-faint">
            Type a message…
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-wa text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l18 9-18 9 4-9-4-9z" /></svg>
          </span>
        </div>
      </motion.div>

      {/* floating cards */}
      <FloatCard
        className="-right-4 top-10 md:-right-10"
        delay={1.1}
        floatDelay="0s"
        gradient="from-wa to-wa-deep"
        title="Payment received"
        sub="₹1,499 · just now"
        icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg>}
      />
      <FloatCard
        className="-left-4 bottom-16 md:-left-10"
        delay={1.25}
        floatDelay="1.8s"
        gradient="from-blue to-cyan"
        title="New order #1042"
        sub="Auto-confirmed"
        icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" /></svg>}
      />
    </div>
  );
}
