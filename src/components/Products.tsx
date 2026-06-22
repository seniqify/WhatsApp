import Link from "next/link";
import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import TiltCard from "./TiltCard";
import { products } from "@/lib/products";

const gradients = [
  "from-wa to-wa-deep",
  "from-teal to-cyan",
  "from-blue to-indigo",
  "from-violet to-blue",
];

export default function Products() {
  const list = Object.values(products);
  return (
    <section id="products" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Products</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>Everything you need to</>,
                <>
                  sell on <span className="text-gradient">WhatsApp</span>.
                </>,
              ]}
            />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Four building blocks, one platform — explore each to see how it
            works, what&apos;s included, and pricing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <TiltCard className="rounded-3xl h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="ring-grad glass group flex h-full flex-col rounded-3xl p-8"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} text-white shadow-lg`}
                  >
                    {p.icon}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-muted">
                    {p.subhead}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-wa">
                    Explore {p.name}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
