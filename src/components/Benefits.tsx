import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import type { Product } from "@/lib/products";

export default function Benefits({ product }: { product: Product }) {
  return (
    <section className="relative z-10 border-y border-line bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why it works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal lines={[<>How your business grows.</>]} />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <article className="ring-grad glass h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-wa to-teal text-white shadow-lg">
                  {b.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
