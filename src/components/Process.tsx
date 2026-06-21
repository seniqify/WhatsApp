import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "Discover",
    body: "We start with your goals, customers, and constraints. A short, sharp kickoff that aligns on what success looks like.",
  },
  {
    no: "02",
    title: "Design",
    body: "Wireframes to high-fidelity in days, not months. You see real screens early and steer the direction with us.",
  },
  {
    no: "03",
    title: "Build",
    body: "Production-grade code from day one. Fast, accessible, and handed over clean — no mystery, no lock-in.",
  },
  {
    no: "04",
    title: "Grow",
    body: "Launch is the start. We measure, tune, and iterate so the work keeps earning its keep.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-10 border-y border-line bg-paper/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-balance text-4xl tracking-tight md:text-5xl">
            A simple process, run with care.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="border-t border-line-strong pt-6">
                <span className="font-serif text-4xl text-clay">{s.no}</span>
                <h3 className="mt-4 text-xl tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
