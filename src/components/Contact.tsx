import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="ring-grad glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />
          <div aria-hidden className="float-slow pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet/30 blur-[100px]" />
          <div aria-hidden className="float-slow pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-cyan/25 blur-[100px] [animation-delay:-7s]" />

          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">Let&apos;s build</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              <MaskReveal
                lines={[
                  <>Got something to ship?</>,
                  <>
                    <span className="text-gradient">Let&apos;s talk.</span>
                  </>,
                ]}
              />
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Tell us what you&apos;re building. We&apos;ll reply within a day
              with honest thoughts and a clear next step — no pressure, no sales
              deck.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:seniqify@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-indigo px-7 py-4 text-base font-medium text-white glow-accent transition-transform duration-300 hover:-translate-y-0.5"
              >
                seniqify@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/918625060631"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-medium text-text transition-colors hover:bg-white/10"
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
