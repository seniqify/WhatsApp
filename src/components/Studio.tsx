import Reveal from "./Reveal";

const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "7d", label: "Avg. to first design" },
  { value: "100", label: "Lighthouse target" },
  { value: "1:1", label: "Founder-led work" },
];

export default function Studio() {
  return (
    <section id="studio" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">The studio</p>
          <h2 className="mt-4 text-balance text-4xl leading-tight tracking-tight md:text-5xl">
            Small on purpose. Senior by default.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Seniqify is an independent design &amp; build studio. No account
              managers, no handoffs to juniors — you work directly with the
              people doing the work.
            </p>
            <p>
              We care about the details most teams skip: the loading state, the
              empty screen, the way a button feels when you press it. That care
              is the difference between a site that exists and one that earns.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-ink link-underline"
          >
            Work with us →
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper p-8">
                <div className="font-serif text-5xl tracking-tight text-clay">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>
          <blockquote className="mt-5 rounded-3xl border border-line bg-cream-deep/60 p-8">
            <p className="font-serif text-xl leading-relaxed tracking-tight">
              “They built our WhatsApp store in a week and sales started the same
              day. It just works.”
            </p>
            <footer className="mt-4 text-sm text-ink-soft">
              — A founder we worked with
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
