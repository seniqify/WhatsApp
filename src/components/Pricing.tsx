import Reveal from "./Reveal";
import MaskReveal from "./MaskReveal";

type Plan = {
  emoji: string;
  name: string;
  price: string;
  tagline: string;
  markup: "MARKUP INCLUDED" | "NO MARKUP";
  tier: string;
  features: string[];
  featured?: boolean;
};

const charges = [
  { label: "Marketing", value: "₹1.09" },
  { label: "Utility", value: "₹0.25" },
  { label: "Authentication", value: "₹0.25" },
];

const plans: Plan[] = [
  {
    emoji: "📣",
    name: "Broadcast",
    price: "₹500",
    tagline: "Everything you need to get started on WhatsApp.",
    markup: "MARKUP INCLUDED",
    tier: "BASIC",
    features: [
      "Free Blue Tick verification",
      "Unlimited users",
      "₹50 free conversation credits",
      "Inbox: WhatsApp",
      "Chatbot: unlimited sessions, 10 triggers",
      "Team inbox: 1 agent",
      "Click to WhatsApp Ads Manager",
      "Upload & manage contacts",
    ],
  },
  {
    emoji: "🚀",
    name: "Professional",
    price: "₹2,000",
    tagline: "Best for growing brands running retargeting campaigns.",
    markup: "NO MARKUP",
    tier: "GROWTH",
    featured: true,
    features: [
      "Everything in Broadcast",
      "Dedicated relationship manager",
      "Drip campaigns",
      "Webhooks",
      "Inbox: WhatsApp, Facebook, Instagram & Email",
      "Full developer API access",
    ],
  },
  {
    emoji: "👑",
    name: "Full Suite",
    price: "₹3,000",
    tagline: "The complete platform for scale and automation.",
    markup: "NO MARKUP",
    tier: "SCALE",
    features: [
      "Everything in Professional",
      "Team inbox: unlimited agents",
      "Chatbot: unlimited triggers",
      "Broadcast scheduling + retargeting",
      "WhatsApp Flows",
      "Template Send Message API",
      "Priority chat support",
    ],
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-wa"
    >
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ plan }: { plan: Plan }) {
  const inner = (
    <article
      className={`flex h-full flex-col rounded-3xl p-7 ${
        plan.featured ? "bg-surface" : "ring-grad glass"
      }`}
    >
      {plan.featured && (
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-wa/15 px-3 py-1 text-xs font-semibold text-wa">
          ★ Best Value
        </span>
      )}

      <div className="flex items-center gap-2 text-xl">
        <span>{plan.emoji}</span>
        <h3 className="font-display font-semibold tracking-tight">
          {plan.name}
        </h3>
      </div>

      <div className="mt-4 flex items-end gap-1">
        <span className="font-display text-4xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span className="mb-1 text-sm text-faint">/mo</span>
      </div>
      <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-muted">
        {plan.tagline}
      </p>

      <a
        href="#contact"
        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
          plan.featured
            ? "bg-gradient-to-r from-wa to-emerald text-base glow-accent hover:-translate-y-0.5"
            : "border border-line bg-elevated text-text hover:border-wa/60"
        }`}
      >
        Get Started
        <span>→</span>
      </a>

      {/* conversation charges */}
      <div className="mt-6 rounded-2xl border border-line bg-base/50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted">
            Conversation Charges
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              plan.markup === "NO MARKUP"
                ? "bg-wa/15 text-wa"
                : "bg-blue/15 text-blue"
            }`}
          >
            {plan.markup}
          </span>
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

      {/* features */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-text">Features included</span>
        <span className="rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold text-faint">
          {plan.tier}+
        </span>
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
      <div className="rounded-3xl bg-gradient-to-b from-wa via-teal to-wa/40 p-px shadow-[0_0_50px_-18px_rgba(37,211,102,0.7)] lg:-my-3">
        {inner}
      </div>
    );
  }
  return inner;
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            <MaskReveal
              lines={[
                <>Simple plans that</>,
                <>
                  scale with <span className="text-gradient">you</span>.
                </>,
              ]}
            />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Flat monthly pricing for the platform. Conversation charges are
            pass-through Meta rates — upgrade to remove markup and unlock a
            dedicated relationship manager.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <Card plan={plan} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-faint">
          All plans billed monthly · GST applicable · Cancel anytime.
        </p>
      </div>
    </section>
  );
}
