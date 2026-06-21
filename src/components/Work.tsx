import Reveal from "./Reveal";

const projects = [
  {
    name: "PocketLink",
    category: "WhatsApp Storefronts",
    year: "2026",
    body: "A no-code platform that turns any small business into a WhatsApp-native store — catalog, orders, and payments in minutes.",
    accent: "from-clay/20 to-clay-soft/40",
  },
  {
    name: "Solapur Market",
    category: "Local Commerce",
    year: "2026",
    body: "Six showcase storefronts for local retailers, each with its own brand and one-tap WhatsApp ordering.",
    accent: "from-olive/15 to-cream-deep",
  },
  {
    name: "Studio Sites",
    category: "Web Design",
    year: "2025—26",
    body: "Editorial, high-performance marketing sites for D2C founders — built to load instantly and rank well.",
    accent: "from-ink/10 to-cream-deep",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-balance text-4xl tracking-tight md:text-5xl">
              Things we&apos;ve shipped.
            </h2>
          </div>
          <p className="max-w-xs text-ink-soft">
            A few recent projects across commerce, brand, and web.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group grid items-stretch gap-6 overflow-hidden rounded-3xl border border-line bg-paper p-3 transition-shadow duration-500 hover:shadow-[var(--shadow-lift)] md:grid-cols-[1.1fr_1fr]">
                <div
                  className={`relative grid min-h-56 place-items-center rounded-2xl bg-gradient-to-br ${p.accent}`}
                >
                  <span className="font-serif text-5xl tracking-tight text-ink/80 md:text-6xl">
                    {p.name}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-6 p-5 md:p-8">
                  <div>
                    <div className="flex items-center justify-between text-sm text-ink-faint">
                      <span>{p.category}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-4 text-3xl tracking-tight">{p.name}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                    View case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
