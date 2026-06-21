const items = [
  "WhatsApp Business API",
  "Razorpay",
  "Meta Cloud API",
  "Shopify",
  "Google Sheets",
  "Zoho",
  "Delhivery",
  "UPI",
  "OpenAI",
  "Tally",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-line bg-surface/40 py-6">
      <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.22em] text-faint">
        Connects with the tools you already use
      </p>
      <div className="marquee-paused relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex shrink-0 items-center gap-12 whitespace-nowrap pr-12">
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-lg font-medium text-muted/80 transition-colors hover:text-text"
            >
              {item}
              <span className="text-wa/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
