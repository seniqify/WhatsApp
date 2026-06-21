import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import TiltCard from "./TiltCard";

const products = [
  {
    title: "WhatsApp API",
    desc: "Send messages, automate flows, and connect at scale on the official WhatsApp Business Platform.",
    gradient: "from-wa to-wa-deep",
    tags: ["Broadcast", "Automation", "Webhooks"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4z" />
      </svg>
    ),
  },
  {
    title: "PocketLink",
    desc: "A WhatsApp-native storefront for micro-businesses — catalog, orders, and payments in minutes.",
    gradient: "from-teal to-cyan",
    tags: ["Storefront", "Catalog", "Payments"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" />
      </svg>
    ),
  },
  {
    title: "Website Design",
    desc: "Conversion-focused, lightning-fast websites built for Indian businesses and their customers.",
    gradient: "from-blue to-indigo",
    tags: ["Next.js", "SEO", "Mobile-first"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 3v11h14V8H5zm2-3v1h2V5H7zm4 0v1h2V5h-2z" />
      </svg>
    ),
  },
  {
    title: "Customer Solutions",
    desc: "Custom automation and AI integrations tailored to how your business actually runs.",
    gradient: "from-violet to-blue",
    tags: ["AI", "CRM", "Custom"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 1 1-10 0V7a5 5 0 0 1 5-5zM4 20a8 8 0 0 1 16 0v1H4v-1z" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Products</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>Everything you need to</>,
                <>
                  sell on <span className="text-gradient">WhatsApp</span>.
                </>,
              ]}
            />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            One platform, four building blocks — from the raw API to a ready-made
            store. Start with one, scale into all of them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <TiltCard className="rounded-3xl h-full">
                <article className="ring-grad glass group flex h-full flex-col rounded-3xl p-8">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-lg`}
                  >
                    {p.icon}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{p.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line bg-elevated px-3 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-wa">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
