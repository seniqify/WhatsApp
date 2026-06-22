import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import Particles from "./Particles";
import ProductInteractive from "./ProductInteractive";
import type { Product } from "@/lib/products";

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_55%,transparent)]"
      />
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute -top-32 left-0 h-[520px] w-[520px] rounded-full opacity-20 blur-[130px]"
        style={{ backgroundColor: "var(--brand)" }}
      />
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute top-10 right-0 h-[480px] w-[480px] rounded-full opacity-20 blur-[130px] [animation-delay:-6s]"
        style={{ backgroundColor: "var(--brand-2)" }}
      />
      <Particles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="glass mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm text-muted lg:mx-0">
              <span className="brand-fg">{product.icon}</span>
              {product.eyebrow}
            </div>
          </Reveal>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem]">
            <MaskReveal
              mount
              delay={0.15}
              lines={[
                <>{product.headline.lead}</>,
                <>
                  <span className="brand-text">{product.headline.accent}</span>
                </>,
              ]}
            />
          </h1>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              {product.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={product.primaryCta.href}
                className="brand-btn group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              >
                {product.primaryCta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={product.secondaryCta.href}
                {...(isExternal(product.secondaryCta.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-text transition-colors hover:bg-white/10"
              >
                {product.secondaryCta.label}
                {isExternal(product.secondaryCta.href) && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                )}
              </a>
            </div>
            <p className="mt-4 text-sm text-faint">
              ↓ Try the live demo — it&apos;s interactive.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <ProductInteractive slug={product.slug} />
        </div>
      </div>
    </section>
  );
}
