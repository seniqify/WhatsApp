const cols = [
  {
    title: "Products",
    links: [
      { label: "WhatsApp API", href: "#products" },
      { label: "PocketLink", href: "#products" },
      { label: "Website Design", href: "#products" },
      { label: "Customer Solutions", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Customers", href: "#customers" },
      { label: "FAQ", href: "#faq" },
      { label: "Get started", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "seniqify@gmail.com", href: "mailto:seniqify@gmail.com" },
      { label: "+91 86250 60631", href: "https://wa.me/918625060631" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-line px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa to-wa-deep text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Seniqify
              </span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              WhatsApp-first business infrastructure for India. Sell, support,
              and scale where your customers already chat.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wa to-emerald px-4 py-2 text-sm font-semibold text-base transition-transform hover:-translate-y-0.5"
            >
              Get Started Free →
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-muted transition-colors hover:text-wa"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Seniqify. All rights reserved.</p>
          <p className="font-mono text-xs">Made in India 🇮🇳 for Indian business.</p>
        </div>
      </div>
    </footer>
  );
}
