import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const quotes = [
  {
    quote:
      "We set up our WhatsApp store in an evening and got 3 orders the same night. My customers love that they can just chat and pay.",
    name: "Priya S.",
    role: "Boutique owner, Pune",
    big: true,
  },
  {
    quote:
      "The API automation handles 80% of our customer queries now. We finally sleep at night.",
    name: "Rahul M.",
    role: "D2C brand, Bengaluru",
  },
  {
    quote:
      "Payments, catalog, delivery — all inside WhatsApp. My staff didn't need any training.",
    name: "Imran K.",
    role: "Grocery store, Solapur",
  },
  {
    quote:
      "Our website + WhatsApp combo doubled enquiries in a month. Best money we've spent.",
    name: "Anita R.",
    role: "Salon chain, Mumbai",
  },
];

export default function Testimonials() {
  return (
    <section id="customers" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Customers</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>Loved by founders</>,
                <>
                  across <span className="text-gradient">India</span>.
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
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-wa to-teal text-sm font-semibold text-white">
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
