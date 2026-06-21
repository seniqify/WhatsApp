"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#how", label: "How it works" },
  { href: "#customers", label: "Customers" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa to-wa-deep text-white shadow-[0_0_20px_-4px] shadow-wa/60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Seniqify
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918625060631"
            className="hidden items-center gap-1.5 rounded-full border border-line bg-elevated/60 px-4 py-2 text-sm font-medium text-text transition-all duration-300 hover:border-wa/60 hover:shadow-[0_0_24px_-6px] hover:shadow-wa/70 md:inline-flex"
          >
            Talk to Sales
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-wa to-emerald px-4 py-2 text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5 md:inline-block"
          >
            Get Started Free
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted md:hidden"
          >
            <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-base/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-muted hover:bg-elevated hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-wa to-emerald px-4 py-2.5 text-center text-sm font-semibold text-base"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
