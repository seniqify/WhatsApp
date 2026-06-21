import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const quotes = [
  {
    quote:
      "They built our WhatsApp store in a week and sales started the same day. It just works — and it looks premium.",
    name: "Retail founder",
    role: "D2C, Solapur",
    big: true,
  },
  {
    quote:
      "The fastest, cleanest handoff I've had. Zero spaghetti, real documentation, and it flies on mobile.",
    name: "Product lead",
    role: "SaaS",
  },
  {
    quote:
      "Design that actually converts. Our landing page beat the old one by double.",
    name: "Growth marketer",
    role: "F&B",
  },
  {
    quote:
      "Senior people, no middlemen. They treated our budget like their own and shipped early.",
    name: "Startup CEO",
    role: "Fintech",
  },
];

export default function Testimonials() {
  return (
    <section id="studio" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>Founders trust us with the</>,
                <>
                  <span className="text-gradient">whole build</span>.
                </>,
              ]}
            />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className={q.big ? "md:col-span-2" : ""}
            >
              <figure className="ring-grad glass flex h-full flex-col justify-between rounded-3xl p-8">
                <blockquote
                  className={`leading-relaxed text-text ${
                    q.big
                      ? "font-display text-2xl tracking-tight md:text-3xl"
                      : "text-lg"
                  }`}
                >
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-sm font-semibold text-white">
                    {q.name.charAt(0)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium text-text">{q.name}</span>
                    <span className="block text-faint">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
