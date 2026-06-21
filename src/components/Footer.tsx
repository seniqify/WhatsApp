const cols = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#studio" },
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
              <span className="grid h-7 w-7 place-items-center rounded-full bg-clay text-[15px] font-semibold text-white">
                S
              </span>
              <span className="font-serif text-lg tracking-tight">Seniqify</span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-ink-soft">
              A design &amp; build studio for modern commerce. Made with care in
              India.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-sans text-sm font-semibold tracking-tight text-ink">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-ink-soft transition-colors hover:text-clay"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Seniqify. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
