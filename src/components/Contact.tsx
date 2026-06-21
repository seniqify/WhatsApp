"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = email
      ? `Hi Seniqify! I'd like to get started. My email is ${email}`
      : "Hi Seniqify! I'd like to get started on WhatsApp.";
    window.open(
      `https://wa.me/918625060631?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl">
        {/* green gradient border */}
        <div className="rounded-[2rem] bg-gradient-to-r from-wa via-teal to-wa p-px shadow-[0_0_60px_-20px_rgba(37,211,102,0.6)]">
          <div className="relative overflow-hidden rounded-[2rem] bg-surface px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]"
            />
            <div
              aria-hidden
              className="float-slow pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-wa/25 blur-[100px]"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow">Get started free</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Start selling on{" "}
                <span className="text-gradient">WhatsApp</span> today.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                No setup fees. No code. Drop your email and we&apos;ll get you
                live — usually within a day.
              </p>

              <form
                onSubmit={onSubmit}
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@business.com"
                  className="w-full flex-1 rounded-full border border-line bg-base/70 px-5 py-3.5 text-base text-text placeholder:text-faint focus:border-wa/60 focus:outline-none focus:ring-2 focus:ring-wa/30"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-wa to-emerald px-6 py-3.5 text-base font-semibold text-base glow-accent transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get Started Free
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
              <p className="mt-4 text-xs text-faint">
                Prefer to chat? <span className="text-wa">Talk to sales on WhatsApp →</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
