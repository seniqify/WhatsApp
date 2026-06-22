import HeroChat from "./HeroChat";

function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(37,211,102,0.35),rgba(45,212,191,0.1)_45%,transparent_70%)] blur-2xl"
    />
  );
}

/* ---- PocketLink storefront ---- */
function StorefrontMock() {
  const items = [
    { n: "Blue Kurta", p: "₹1,499", g: "from-sky-500/40 to-indigo-500/30" },
    { n: "Silk Saree", p: "₹2,999", g: "from-rose-500/40 to-pink-500/30" },
    { n: "Cotton Top", p: "₹799", g: "from-amber-400/40 to-orange-500/30" },
    { n: "Dupatta Set", p: "₹1,199", g: "from-emerald-400/40 to-teal-500/30" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <Glow />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-line bg-elevated/80 px-4 py-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-wa to-teal text-sm font-bold text-white">P</span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-text">Priya&apos;s Boutique</div>
            <div className="flex items-center gap-1 text-xs text-wa"><span className="h-1.5 w-1.5 rounded-full bg-wa" /> Open · WhatsApp store</div>
          </div>
          <span className="relative ml-auto grid h-9 w-9 place-items-center rounded-full bg-base/60 text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" /></svg>
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-wa text-[10px] font-bold text-base">2</span>
          </span>
        </div>
        <div className="px-4 py-4">
          <div className="mb-3 rounded-full bg-base/70 px-4 py-2 text-sm text-faint">Search products…</div>
          <div className="grid grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.n} className="overflow-hidden rounded-2xl border border-line bg-base/40">
                <div className={`aspect-square bg-gradient-to-br ${it.g}`} />
                <div className="p-2.5">
                  <div className="text-sm font-medium text-text">{it.n}</div>
                  <div className="mt-0.5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-wa">{it.p}</span>
                    <span className="rounded-full bg-wa px-2.5 py-0.5 text-[11px] font-semibold text-base">Order</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-line px-4 py-2.5 text-center text-[11px] text-faint">Powered by PocketLink</div>
      </div>
    </div>
  );
}

/* ---- Website browser mock ---- */
function BrowserMock() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <Glow />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/90 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-line bg-elevated/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 rounded-md bg-base/70 px-3 py-1 text-center font-mono text-[11px] text-faint">yourbusiness.com</span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-gradient-to-br from-wa to-teal" />
              <span className="h-2 w-16 rounded bg-line" />
            </div>
            <span className="h-6 w-20 rounded-full bg-gradient-to-r from-wa to-emerald" />
          </div>
          <div className="mt-7 grid grid-cols-[1.3fr_1fr] items-center gap-4">
            <div className="space-y-2.5">
              <div className="h-4 w-full rounded bg-text/80" />
              <div className="h-4 w-3/4 rounded bg-text/40" />
              <div className="mt-3 h-2 w-full rounded bg-line" />
              <div className="h-2 w-5/6 rounded bg-line" />
              <span className="mt-3 inline-block h-7 w-24 rounded-full bg-gradient-to-r from-wa to-emerald" />
            </div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-wa/30 to-teal/20" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {["from-sky-500/30","from-violet/30","from-amber-400/30"].map((g, i) => (
              <div key={i} className={`rounded-xl border border-line bg-gradient-to-br ${g} to-transparent p-3`}>
                <div className="h-5 w-5 rounded-md bg-text/30" />
                <div className="mt-2 h-1.5 w-full rounded bg-line" />
                <div className="mt-1 h-1.5 w-2/3 rounded bg-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Custom Solutions flow mock ---- */
function FlowMock() {
  const nodes = [
    { t: "New WhatsApp message", s: "Trigger", g: "from-wa to-wa-deep", icon: <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" /> },
    { t: "AI assistant replies", s: "Process", g: "from-violet to-blue", featured: true, icon: <path d="M4 8h16v11H4zM12 8V4M9 13h.01M15 13h.01" /> },
    { t: "Order saved to CRM", s: "Action", g: "from-teal to-cyan", icon: <path d="M4 7h16v13H4zM4 7l2-3h12l2 3" /> },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <Glow />
      <div className="relative space-y-0">
        {nodes.map((n, i) => (
          <div key={n.t}>
            <div className={`glass relative flex items-center gap-4 rounded-2xl p-4 ${n.featured ? "ring-grad" : ""}`}>
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${n.g} text-white`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">{n.icon}</svg>
              </span>
              <div className="leading-tight">
                <div className="font-mono text-[10px] uppercase tracking-widest text-faint">{n.s}</div>
                <div className="text-sm font-semibold text-text">{n.t}</div>
              </div>
              {n.featured && (
                <span className="ml-auto rounded-full bg-wa/15 px-2 py-0.5 text-[10px] font-semibold text-wa">AI</span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="mx-auto my-1.5 h-6 w-px bg-gradient-to-b from-wa to-transparent" />
            )}
          </div>
        ))}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted">
          <span className="rounded-full border border-line bg-elevated px-3 py-1">⚡ Runs 24/7</span>
          <span className="rounded-full border border-line bg-elevated px-3 py-1">0 manual work</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductMock({ slug }: { slug: string }) {
  if (slug === "whatsapp-api") return <HeroChat />;
  if (slug === "pocketlink") return <StorefrontMock />;
  if (slug === "website") return <BrowserMock />;
  return <FlowMock />;
}
