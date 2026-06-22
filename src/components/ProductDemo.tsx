import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import type { Product } from "@/lib/products";

function isExternal(href: string) {
  return href.startsWith("http");
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-wa">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductDemo({ product }: { product: Product }) {
  return (
    <section id="features" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal lines={[<>{product.demoTitle}</>]} />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {product.demoSub}
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="ring-grad glass grid gap-8 rounded-3xl p-8 md:p-10 lg:grid-cols-[1.5fr_1fr]">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {product.demoFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-text">
                  <Check />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="relative overflow-hidden rounded-2xl border border-line bg-base/50 p-7">
              <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-wa/20 blur-3xl" />
              <h3 className="relative text-xl font-semibold tracking-tight">
                Manage it all in one place
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                A single, simple dashboard for your whole {product.name.toLowerCase()} setup — no spreadsheets, no chaos.
              </p>
              <a
                href={product.secondaryCta.href}
                {...(isExternal(product.secondaryCta.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wa to-emerald px-5 py-3 text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5"
              >
                {product.secondaryCta.label}
                <span>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
