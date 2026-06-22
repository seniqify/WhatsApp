"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const darkInk = "#08111f";

function MaskWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, var(--brand), transparent 62%)",
        }}
      />
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0 round 26px)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0 0% 0 round 26px)", opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ============ 1. WhatsApp API — interactive chat ============ */
type Chat = { from: "in" | "out"; text: string };
const replies: { label: string; reply: string }[] = [
  { label: "💰 Price?", reply: "Our Blue Kurta is ₹1,499 with free delivery!" },
  { label: "🛒 Order", reply: "Great choice! Tap below to pay ₹1,499 and confirm." },
  { label: "📦 Track order", reply: "Order #1042 is out for delivery — arriving today 🚚" },
];

function InteractiveChat() {
  const [msgs, setMsgs] = useState<Chat[]>([
    { from: "out", text: "Hi 👋 Welcome to Seniqify Store! How can I help?" },
  ]);
  const [typing, setTyping] = useState(false);
  const [sent, setSent] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
  }, [msgs, typing]);

  function ask(r: { label: string; reply: string }) {
    if (typing) return;
    setMsgs((m) => [...m, { from: "in", text: r.label }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "out", text: r.reply }]);
    }, 850);
  }

  function broadcast() {
    setSent((s) => s + 1240);
    setMsgs((m) => [
      ...m,
      { from: "out", text: "📣 Broadcast sent to 1,240 contacts ✓" },
    ]);
  }

  return (
    <MaskWrap>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-line bg-elevated/80 px-4 py-3">
          <span className="brand-tile grid h-10 w-10 place-items-center rounded-full text-sm font-bold">S</span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">Seniqify Store</div>
            <div className="flex items-center gap-1 text-xs brand-fg">
              <span className="brand-bg h-1.5 w-1.5 rounded-full" /> online
            </div>
          </div>
          {sent > 0 && (
            <span className="brand-soft ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold">
              {sent.toLocaleString("en-IN")} sent
            </span>
          )}
        </div>

        <div ref={bodyRef} className="h-64 space-y-2.5 overflow-y-auto px-4 py-4">
          {msgs.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${m.from === "out" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                  m.from === "out" ? "rounded-tr-md" : "rounded-tl-md bg-elevated text-text"
                }`}
                style={m.from === "out" ? { backgroundColor: "var(--brand)", color: darkInk } : undefined}
              >
                {m.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-tr-md px-3 py-2.5" style={{ backgroundColor: "var(--brand)" }}>
                <span className="flex gap-1">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full" style={{ backgroundColor: darkInk, animationDelay: `${d * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-line bg-elevated/60 px-3 py-3">
          <div className="flex flex-wrap gap-2">
            {replies.map((r) => (
              <button
                key={r.label}
                onClick={() => ask(r)}
                className="brand-hover-border rounded-full border border-line bg-base/70 px-3 py-1.5 text-xs text-text transition-colors"
              >
                {r.label}
              </button>
            ))}
            <button
              onClick={broadcast}
              className="brand-btn rounded-full px-3 py-1.5 text-xs font-semibold"
            >
              📣 Send broadcast
            </button>
          </div>
        </div>
      </div>
    </MaskWrap>
  );
}

/* ============ 2. PocketLink — interactive storefront ============ */
const shopItems = [
  { n: "Blue Kurta", p: 1499, g: "from-sky-500/40 to-indigo-500/30" },
  { n: "Silk Saree", p: 2999, g: "from-rose-500/40 to-pink-500/30" },
  { n: "Cotton Top", p: 799, g: "from-amber-400/40 to-orange-500/30" },
  { n: "Dupatta Set", p: 1199, g: "from-emerald-400/40 to-teal-500/30" },
];

function InteractiveStore() {
  const [cart, setCart] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [placed, setPlaced] = useState(false);

  return (
    <MaskWrap>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-line bg-elevated/80 px-4 py-3">
          <span className="brand-tile grid h-10 w-10 place-items-center rounded-full text-sm font-bold">P</span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">Priya&apos;s Boutique</div>
            <div className="flex items-center gap-1 text-xs brand-fg"><span className="brand-bg h-1.5 w-1.5 rounded-full" /> Open · tap Add to shop</div>
          </div>
          <span className="relative ml-auto grid h-9 w-9 place-items-center rounded-full bg-base/60 text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" /></svg>
            {cart > 0 && (
              <span className="brand-bg absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold" style={{ color: darkInk }}>{cart}</span>
            )}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 px-4 py-4">
          {shopItems.map((it) => (
            <div key={it.n} className="overflow-hidden rounded-2xl border border-line bg-base/40">
              <div className={`aspect-square bg-gradient-to-br ${it.g}`} />
              <div className="p-2.5">
                <div className="text-sm font-medium text-text">{it.n}</div>
                <div className="mt-0.5 flex items-center justify-between">
                  <span className="text-sm font-semibold brand-fg">₹{it.p.toLocaleString("en-IN")}</span>
                  <button
                    onClick={() => { setCart((c) => c + 1); setTotal((t) => t + it.p); }}
                    className="brand-btn rounded-full px-2.5 py-0.5 text-[11px] font-semibold active:scale-95"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line bg-elevated/60 px-4 py-3">
          <div className="text-sm">
            <span className="text-faint">Total </span>
            <span className="font-semibold text-text">₹{total.toLocaleString("en-IN")}</span>
          </div>
          <button
            disabled={cart === 0}
            onClick={() => setPlaced(true)}
            className="brand-btn rounded-full px-4 py-2 text-sm font-semibold disabled:opacity-40"
          >
            Checkout on WhatsApp
          </button>
        </div>

        <AnimatePresence>
          {placed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 grid place-items-center bg-base/85 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="brand-tile mx-auto grid h-14 w-14 place-items-center rounded-full text-2xl">🎉</div>
                <div className="mt-4 text-lg font-semibold text-text">Order placed!</div>
                <div className="mt-1 text-sm text-muted">₹{total.toLocaleString("en-IN")} · confirmed on WhatsApp</div>
                <button
                  onClick={() => { setPlaced(false); setCart(0); setTotal(0); }}
                  className="mt-5 rounded-full border border-line bg-elevated px-4 py-2 text-sm text-text brand-hover-border"
                >
                  Try again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MaskWrap>
  );
}

/* ============ 3. Website — Figma-style template switcher ============ */
const templates = [
  { name: "Café", url: "brewbean.in", g: "from-amber-500 to-orange-600", h: "Freshly brewed, daily." },
  { name: "Boutique", url: "stylehouse.in", g: "from-pink-500 to-fuchsia-600", h: "Wear your story." },
  { name: "Gym", url: "ironpark.in", g: "from-emerald-500 to-lime-600", h: "Train harder, together." },
];

function InteractiveWebsite() {
  const [tpl, setTpl] = useState(0);
  const [mobile, setMobile] = useState(false);
  const t = templates[tpl];

  return (
    <MaskWrap>
      <div>
        {/* controls */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {templates.map((tp, i) => (
              <button
                key={tp.name}
                onClick={() => setTpl(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === tpl ? "brand-btn" : "border border-line bg-elevated text-muted brand-hover-border"
                }`}
              >
                {tp.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobile((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-elevated text-muted brand-hover-border"
            aria-label="Toggle device"
          >
            {mobile ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 20h8" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="3" width="10" height="18" rx="2" /></svg>
            )}
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-line bg-elevated/80 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 flex-1 truncate rounded-md bg-base/70 px-3 py-1 text-center font-mono text-[11px] text-faint">{t.url}</span>
          </div>

          <div className={`mx-auto transition-all duration-500 ${mobile ? "max-w-[210px]" : "max-w-full"}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${tpl}-${mobile}`}
                initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0%)", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-5 w-5 rounded-md bg-gradient-to-br ${t.g}`} />
                    <span className="h-2 w-14 rounded bg-line" />
                  </div>
                  {!mobile && <span className={`h-6 w-16 rounded-full bg-gradient-to-r ${t.g}`} />}
                </div>
                <div className="mt-6">
                  <div className="text-lg font-semibold text-text">{t.h}</div>
                  <div className="mt-2 h-2 w-full rounded bg-line" />
                  <div className="mt-1.5 h-2 w-4/5 rounded bg-line" />
                  <span className={`mt-4 inline-block h-7 w-24 rounded-full bg-gradient-to-r ${t.g}`} />
                </div>
                <div className={`mt-5 grid gap-2.5 ${mobile ? "grid-cols-2" : "grid-cols-3"}`}>
                  {[0, 1, 2].slice(0, mobile ? 2 : 3).map((i) => (
                    <div key={i} className={`rounded-xl border border-line bg-gradient-to-br ${t.g} p-3 opacity-80`}>
                      <div className="h-4 w-4 rounded bg-white/70" />
                      <div className="mt-2 h-1.5 w-full rounded bg-white/30" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-faint">Switch industries & devices — same engine, your brand.</p>
      </div>
    </MaskWrap>
  );
}

/* ============ 4. Custom Solutions — runnable automation flow ============ */
const flowNodes = [
  { t: "New WhatsApp message", s: "Trigger", icon: <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" /> },
  { t: "AI assistant replies", s: "Process", icon: <path d="M4 8h16v11H4zM12 8V4M9 13h.01M15 13h.01" /> },
  { t: "Order saved to CRM", s: "Action", icon: <path d="M4 7h16v13H4zM4 7l2-3h12l2 3" /> },
];

function InteractiveFlow() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(0);

  function run() {
    if (running) return;
    setRunning(true);
    setStep(0);
    let i = 0;
    const tick = () => {
      i += 1;
      if (i < flowNodes.length) {
        setStep(i);
        setTimeout(tick, 800);
      } else {
        setTimeout(() => {
          setRunning(false);
          setStep(-1);
          setDone((d) => d + 1);
        }, 700);
      }
    };
    setTimeout(tick, 800);
  }

  return (
    <MaskWrap>
      <div>
        <div className="space-y-0">
          {flowNodes.map((n, i) => {
            const active = step === i;
            const complete = !running && done > 0;
            return (
              <div key={n.t}>
                <motion.div
                  animate={{ scale: active ? 1.03 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="glass relative flex items-center gap-4 rounded-2xl p-4"
                  style={
                    active
                      ? { borderColor: "var(--brand)", boxShadow: "0 0 30px -8px var(--brand)" }
                      : undefined
                  }
                >
                  <span className="brand-tile grid h-11 w-11 shrink-0 place-items-center rounded-xl">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">{n.icon}</svg>
                  </span>
                  <div className="leading-tight">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-faint">{n.s}</div>
                    <div className="text-sm font-semibold text-text">{n.t}</div>
                  </div>
                  {(active || complete) && (
                    <span className="brand-soft ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold">
                      {active ? "running…" : "done ✓"}
                    </span>
                  )}
                </motion.div>
                {i < flowNodes.length - 1 && (
                  <div className="mx-auto h-6 w-px overflow-hidden">
                    <motion.div
                      className="h-full w-full"
                      style={{ backgroundColor: "var(--brand)" }}
                      animate={{ scaleY: step > i || (step === i && running) ? 1 : 0.15, opacity: step >= i ? 1 : 0.3 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={run}
            disabled={running}
            className="brand-btn rounded-full px-5 py-2.5 text-sm font-semibold disabled:opacity-50"
          >
            {running ? "Running…" : "▶ Run automation"}
          </button>
          <span className="text-sm text-muted">
            Processed: <span className="font-semibold text-text">{done}</span>
          </span>
        </div>
      </div>
    </MaskWrap>
  );
}

export default function ProductInteractive({ slug }: { slug: string }) {
  if (slug === "whatsapp-api") return <InteractiveChat />;
  if (slug === "pocketlink") return <InteractiveStore />;
  if (slug === "website") return <InteractiveWebsite />;
  return <InteractiveFlow />;
}
