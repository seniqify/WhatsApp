const items = [
  "Web Design",
  "WhatsApp Commerce",
  "Next.js Builds",
  "Brand Systems",
  "Landing Pages",
  "Shopify & Headless",
  "Motion & Interaction",
  "SEO Foundations",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section
      aria-hidden
      className="marquee-paused border-y border-line bg-paper/50 py-5"
    >
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-serif text-xl text-ink-soft md:text-2xl">
                {item}
              </span>
              <span className="text-clay">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
