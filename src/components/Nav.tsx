"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { productNav } from "@/lib/products";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#customers", label: "Customers" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa to-wa-deep text-white shadow-[0_0_20px_-4px] shadow-wa/60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Seniqify
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-text">
              Products
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-3">
                <div className="glass overflow-hidden rounded-2xl p-2 shadow-[var(--shadow-card)]">
                  {productNav.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-wa to-teal text-white">
                        {p.icon}
                      </span>
                      <span className="leading-tight">
                        <span className="block text-sm font-semibold text-text">
                          {p.name}
                        </span>
                        <span className="block text-xs text-muted">{p.desc}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/#products"
                    className="mt-1 block rounded-xl px-3 py-2.5 text-center text-sm font-medium text-wa hover:bg-white/5"
                  >
                    View all products →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918625060631"
            className="hidden items-center gap-1.5 rounded-full border border-line bg-elevated/60 px-4 py-2 text-sm font-medium text-text transition-all duration-300 hover:border-wa/60 hover:shadow-[0_0_24px_-6px] hover:shadow-wa/70 md:inline-flex"
          >
            Talk to Sales
          </a>
          <Link
            href="/#contact"
            className="hidden rounded-full bg-gradient-to-r from-wa to-emerald px-4 py-2 text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5 md:inline-block"
          >
            Get Started Free
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted md:hidden"
          >
            <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-line bg-base/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-faint">
            Products
          </div>
          <div className="flex flex-col gap-1">
            {productNav.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-elevated"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa to-teal text-white">
                  {p.icon}
                </span>
                <span className="text-sm font-medium text-text">{p.name}</span>
              </Link>
            ))}
          </div>

          <div className="my-3 h-px bg-line" />
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-muted hover:bg-elevated hover:text-text"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-wa to-emerald px-4 py-2.5 text-center text-sm font-semibold text-base"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
