import Reveal from "./Reveal";

const services = [
  {
    no: "01",
    title: "Websites & Web Apps",
    body: "Marketing sites, product pages, and dashboards built on Next.js — fast, accessible, and easy to edit. Designed to convert, engineered to last.",
    tags: ["Next.js", "Design", "CMS"],
  },
  {
    no: "02",
    title: "WhatsApp Commerce",
    body: "Sell where your customers already are. We set up WhatsApp-native storefronts, catalogs, and automated order flows that turn chats into checkouts.",
    tags: ["Catalog", "Automation", "Payments"],
  },
  {
    no: "03",
    title: "Brand & Identity",
    body: "Logos, type, color, and a complete visual system. A brand that feels considered everywhere — from your storefront to your shipping label.",
    tags: ["Logo", "System", "Guidelines"],
  },
  {
    no: "04",
    title: "Growth & SEO",
    body: "Technical SEO, analytics, and performance tuning so the work keeps paying off. We measure what matters and iterate on it.",
    tags: ["SEO", "Analytics", "Speed"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-balance text-4xl tracking-tight md:text-5xl">
            A studio that handles the whole stack — design, build, and growth.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.06}>
              <article className="group h-full bg-paper p-8 transition-colors duration-500 hover:bg-cream-deep md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl text-clay">{s.no}</span>
                  <span className="text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink">
                    →
                  </span>
                </div>
                <h3 className="mt-6 text-2xl tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line-strong bg-cream px-3 py-1 text-xs text-ink-soft"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
