import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-cream md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-clay/30 blur-3xl"
          />
          <div className="relative">
            <p className="eyebrow !text-clay-soft">Let&apos;s build</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl leading-tight tracking-tight text-cream md:text-6xl">
              Have a project in mind? Let&apos;s make it real.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
              Tell us what you&apos;re building. We&apos;ll reply within a day
              with honest thoughts and next steps — no pressure, no sales deck.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@seniqify.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-4 text-base font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                hello@seniqify.com
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://wa.me/910000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-base font-medium text-cream transition-colors hover:bg-cream/10"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
