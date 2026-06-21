import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: "40+", label: "Products shipped" },
  { value: "7d", label: "To first live build" },
  { value: "99", label: "Avg. Lighthouse score" },
  { value: "120%", label: "Avg. conversion lift" },
];

export default function Stats() {
  return (
    <section className="relative z-10 px-6 py-12">
      <Reveal className="mx-auto max-w-6xl">
        <div className="ring-grad glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 px-6 py-10 text-center"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
                <Counter value={s.value} />
              </span>
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
