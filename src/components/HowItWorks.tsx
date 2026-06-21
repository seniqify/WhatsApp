import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const steps = [
  {
    no: "01",
    title: "Connect",
    body: "Link your WhatsApp number, catalog, and payments in minutes — no code, no paperwork headaches.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Automate",
    body: "Set up replies, order flows, broadcasts, and AI assistants that work around the clock for you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Grow",
    body: "Turn conversations into revenue. Track orders, re-engage customers, and scale with confidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 18 9 13l3 3 7-7m0 0h-4m4 0v4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal lines={[<>Live in three simple steps.</>]} />
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1} className="relative text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-line bg-elevated text-wa shadow-[var(--shadow-card)]">
                {s.icon}
              </div>
              <div className="mt-5 font-mono text-xs text-wa">{s.no}</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
