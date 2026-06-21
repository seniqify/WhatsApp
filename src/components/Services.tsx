import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>One studio for design,</>,
                <>
                  <span className="text-gradient">engineering</span> &amp;
                  growth.
                </>,
              ]}
            />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            From first pixel to production traffic — we own the whole stack so
            you don&apos;t have to coordinate five vendors.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-3">
          {/* large feature tile */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="ring-grad glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet/20 blur-3xl"
              />
              <div className="relative">
                <span className="font-mono text-sm text-accent">01</span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Websites &amp; Web Apps
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  Marketing sites, product UIs, and dashboards built on Next.js
                  and the edge. Sub-second loads, accessible by default, and
                  engineered to convert.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {["Next.js 16", "React 19", "Edge", "Design Systems", "A11y"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-elevated px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="ring-grad glass flex h-full flex-col justify-between rounded-3xl p-7">
              <span className="font-mono text-sm text-accent">02</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  WhatsApp Commerce
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Native storefronts, catalogs, and automated order flows that
                  turn chats into checkouts.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="ring-grad glass flex h-full flex-col justify-between rounded-3xl p-7">
              <span className="font-mono text-sm text-accent">03</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  AI Integrations
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Chat assistants, content engines, and smart automations wired
                  into your product.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="ring-grad glass flex h-full flex-col justify-between rounded-3xl p-7">
              <span className="font-mono text-sm text-accent">04</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Brand &amp; Identity
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Logo, type, color, and a complete system that feels considered
                  everywhere.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <article className="ring-grad glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-cyan/15 blur-3xl"
              />
              <div className="relative flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-sm">
                  <span className="font-mono text-sm text-accent">05</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    Growth &amp; Performance
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Technical SEO, analytics, and Core Web Vitals tuning so the
                    work keeps paying off long after launch.
                  </p>
                </div>
                <div className="font-display text-5xl font-semibold text-gradient">
                  +120%
                  <span className="block font-sans text-xs font-normal text-faint">
                    avg. conversion lift
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
