import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";
import type { PricingPlan } from "@/lib/products";

type Charge = { label: string; value: string };

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="brand-fg mt-0.5 shrink-0">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ plan, charges }: { plan: PricingPlan; charges?: Charge[] }) {
  const inner = (
    <article
      className={`flex h-full flex-col rounded-3xl p-7 ${
        plan.featured ? "bg-surface" : "brand-ring glass"
      }`}
    >
      {plan.featured && (
        <span className="brand-soft mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold">
          ★ Best Value
        </span>
      )}

      <h3 className="font-display text-xl font-semibold tracking-tight">
        {plan.name}
      </h3>

      <div className="mt-4 flex items-end gap-1">
        <span className="font-display text-4xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span className="mb-1 text-sm text-faint">{plan.period ?? "/mo"}</span>
      </div>
      <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-muted">
        {plan.tagline}
      </p>

      <a
        href="#contact"
        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
          plan.featured
            ? "brand-btn hover:-translate-y-0.5"
            : "brand-hover-border border border-line bg-elevated text-text"
        }`}
      >
        Get Started
        <span>→</span>
      </a>

      {charges && (
        <div className="mt-6 rounded-2xl border border-line bg-base/50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted">Conversation Charges</span>
            {plan.markup && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  plan.markup === "NO MARKUP" ? "brand-soft" : "bg-blue/15 text-blue"
                }`}
              >
                {plan.markup}
              </span>
            )}
          </div>
          <dl className="mt-3 space-y-2 text-sm">
            {charges.map((c) => (
              <div key={c.label} className="flex items-center justify-between">
                <dt className="text-muted">{c.label}</dt>
                <dd className="font-medium text-text">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-text">Features included</span>
        {plan.tier && (
          <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold text-faint">
            {plan.tier}+
          </span>
        )}
      </div>
      <ul className="mt-4 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-muted">
            <Check />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );

  if (plan.featured) {
    return (
      <div className="brand-border-grad rounded-3xl p-px shadow-[0_0_50px_-18px_var(--brand)] lg:-my-3">
        {inner}
      </div>
    );
  }
  return inner;
}

export default function PricingSection({
  plans,
  charges,
  note,
  heading = { lead: "Simple plans that", accent: "scale with you." },
  subhead = "Transparent pricing with no surprises. Upgrade or cancel anytime.",
}: {
  plans: PricingPlan[];
  charges?: Charge[];
  note?: string;
  heading?: { lead: string; accent: string };
  subhead?: string;
}) {
  const cols =
    plans.length >= 4 ? "lg:grid-cols-4" : plans.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section id="pricing" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>{heading.lead}</>,
                <>
                  <span className="brand-text">{heading.accent}</span>
                </>,
              ]}
            />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{subhead}</p>
        </Reveal>

        <div className={`mt-16 grid items-start gap-6 sm:grid-cols-2 ${cols}`}>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <Card plan={plan} charges={charges} />
            </Reveal>
          ))}
        </div>

        {note && <p className="mt-10 text-center text-sm text-faint">{note}</p>}
      </div>
    </section>
  );
}
