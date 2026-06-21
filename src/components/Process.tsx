import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

const steps = [
  {
    no: "01",
    title: "Discover",
    body: "A sharp kickoff to align on goals, customers, and constraints — and define what success actually looks like.",
  },
  {
    no: "02",
    title: "Design",
    body: "Wireframes to high-fidelity in days. You see real, interactive screens early and steer the direction with us.",
  },
  {
    no: "03",
    title: "Build",
    body: "Production-grade code from day one. Typed, tested, fast, and handed over clean — no mystery, no lock-in.",
  },
  {
    no: "04",
    title: "Scale",
    body: "Launch is the start. We measure, tune, and iterate so the product keeps compounding in value.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-10 border-y border-line bg-surface/40 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal lines={[<>A tight process, run by seniors.</>]} />
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="group h-full bg-base p-8 transition-colors duration-500 hover:bg-elevated">
                <span className="font-display text-4xl font-semibold text-gradient">
                  {s.no}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
