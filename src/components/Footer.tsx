const cols = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "hello@seniqify.com", href: "mailto:hello@seniqify.com" },
      { label: "WhatsApp", href: "https://wa.me/910000000000" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-line px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet to-cyan text-[15px] font-bold text-white">
                S
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Seniqify
              </span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              A senior design &amp; engineering studio for modern commerce. Built
              with care in India.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm font-medium text-text transition-all hover:border-accent/50 hover:shadow-[0_0_24px_-6px] hover:shadow-accent/70"
            >
              Start a project →
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
                      className="text-muted transition-colors hover:text-text"
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
          <p className="font-mono text-xs">Engineered in-house — Next.js + Edge.</p>
        </div>
      </div>
    </footer>
  );
}
