import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: "500+", label: "Businesses onboarded" },
  { value: "₹2Cr+", label: "GMV enabled" },
  { value: "99.9%", label: "API uptime" },
];

export default function SocialProof() {
  return (
    <section className="relative z-10 border-y border-line bg-surface/40 px-6 py-14">
      <Reveal className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
              <Counter value={s.value} />
            </div>
            <div className="mt-2 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
