import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import MaskReveal from "./MaskReveal";

const projects = [
  {
    name: "PocketLink",
    category: "WhatsApp Storefronts",
    year: "2026",
    body: "A no-code platform that turns any small business into a WhatsApp-native store — catalog, orders, and payments in minutes.",
    metric: "0→1 in 6 weeks",
    accent: "from-violet/30 via-indigo/10 to-transparent",
  },
  {
    name: "Solapur Market",
    category: "Local Commerce",
    year: "2026",
    body: "Six showcase storefronts for local retailers, each with its own brand and one-tap WhatsApp ordering.",
    metric: "6 stores live",
    accent: "from-cyan/25 via-blue/10 to-transparent",
  },
  {
    name: "Studio Sites",
    category: "Web Design",
    year: "2025—26",
    body: "Editorial, high-performance marketing sites for D2C founders — built to load instantly and rank well.",
    metric: "99 Lighthouse",
    accent: "from-fuchsia-500/20 via-violet/10 to-transparent",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              <MaskReveal lines={[<>Shipped &amp; in production.</>]} />
            </h2>
          </div>
          <p className="max-w-xs text-muted">
            A few recent builds across commerce, brand, and web.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <TiltCard className="rounded-3xl">
              <article className="ring-grad glass group grid items-stretch gap-6 overflow-hidden rounded-3xl p-3 transition-shadow duration-500 hover:shadow-[var(--shadow-card)] md:grid-cols-[1.1fr_1fr]">
                <div
                  className={`relative grid min-h-60 place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${p.accent}`}
                >
                  <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
                  <span className="relative font-display text-5xl font-semibold tracking-tight md:text-6xl">
                    {p.name}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full border border-line bg-base/60 px-3 py-1 font-mono text-xs text-cyan backdrop-blur">
                    {p.metric}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-6 p-5 md:p-8">
                  <div>
                    <div className="flex items-center justify-between font-mono text-sm text-faint">
                      <span>{p.category}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-text">
                    View case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
