import type { ReactNode } from "react";

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  markup?: "MARKUP INCLUDED" | "NO MARKUP";
  tier?: string;
  features: string[];
  featured?: boolean;
  planKey?: string; // Razorpay subscription plan key (autopay)
};

export type Benefit = { title: string; body: string; icon: ReactNode };

export type Product = {
  slug: string;
  name: string;
  navDesc: string;
  icon: ReactNode;
  theme: { brand: string; brand2: string };
  eyebrow: string;
  headline: { lead: string; accent: string };
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  benefits: Benefit[];
  demoTitle: string;
  demoSub: string;
  demoFeatures: string[];
  charges?: { label: string; value: string }[];
  plans: PricingPlan[];
  priceNote?: string;
};

/* ---- shared inline icons ---- */
const ic = {
  message: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" /></svg>
  ),
  cart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10l1 2h2v2H4V6h2l1-2zm-2 6h14l-1.2 9.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 10z" /></svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
  ),
  handshake: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5a5 5 0 0 1 5 5v1a5 5 0 1 1-10 0v-1a5 5 0 0 1 5-5zM4 21a8 8 0 0 1 16 0z" /></svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>
  ),
  bot: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="8" width="16" height="11" rx="2" /><path d="M12 8V4M9 13h.01M15 13h.01" strokeLinecap="round" /></svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" /></svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4" /></svg>
  ),
  rupee: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 4h12M6 9h12M9 4c4 0 5 5 0 5H6l8 11" /></svg>
  ),
  spark: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.2 6.3L21 10l-5 4.2L17.5 21 12 17.4 6.5 21 8 14.2 3 10l6.8-1.7z" /></svg>
  ),
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3c4 1 7 4 7 8l-4 1-4-4 1-5zM5 14l-2 7 7-2-5-5z" /></svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" strokeLinecap="round" /></svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" /></svg>
  ),
  link: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 14a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5zM3 14l9 5 9-5" /></svg>
  ),
};

const apiPlans: PricingPlan[] = [
  {
    name: "📣 Broadcast",
    price: "₹500",
    tagline: "Everything you need to get started on WhatsApp.",
    markup: "MARKUP INCLUDED",
    tier: "BASIC",
    planKey: "broadcast",
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
    name: "🚀 Professional",
    price: "₹2,000",
    tagline: "Best for growing brands running retargeting campaigns.",
    markup: "NO MARKUP",
    tier: "GROWTH",
    featured: true,
    planKey: "professional",
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
    name: "👑 Full Suite",
    price: "₹3,000",
    tagline: "The complete platform for scale and automation.",
    markup: "NO MARKUP",
    tier: "SCALE",
    planKey: "fullsuite",
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

export const products: Record<string, Product> = {
  "whatsapp-api": {
    slug: "whatsapp-api",
    name: "WhatsApp API",
    navDesc: "Send, automate & broadcast at scale",
    icon: ic.message,
    theme: { brand: "#25d366", brand2: "#2dd4bf" },
    eyebrow: "WhatsApp Business API",
    headline: { lead: "Scale conversations,", accent: "not your team." },
    subhead:
      "The official WhatsApp Business Platform with broadcasts, automation, and developer APIs — built for high-volume Indian businesses.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Go to Dashboard", href: "https://app.seniqify.com" },
    benefits: [
      { title: "Reach customers instantly", body: "Broadcast offers and updates to thousands with 90%+ open rates.", icon: ic.bolt },
      { title: "Automate the busywork", body: "Auto-replies, order flows, and chatbots handle queries 24/7.", icon: ic.bot },
      { title: "Never get blocked", body: "Official green-tick verified sender on Meta's platform.", icon: ic.shield },
      { title: "Built for developers", body: "Full REST APIs, webhooks, and template messaging.", icon: ic.code },
    ],
    demoTitle: "Everything in one inbox",
    demoSub: "See how a customer chat turns into a paid order — automatically.",
    demoFeatures: [
      "No-code broadcast & campaign builder",
      "Chatbot with unlimited sessions",
      "Shared team inbox across channels",
      "Click-to-WhatsApp ads integration",
      "Webhooks & developer APIs",
      "Real-time delivery & read analytics",
    ],
    charges: [
      { label: "Marketing", value: "₹1.09" },
      { label: "Utility", value: "₹0.25" },
      { label: "Authentication", value: "₹0.25" },
    ],
    plans: apiPlans,
    priceNote: "All plans billed monthly · GST applicable · Cancel anytime.",
  },

  pocketlink: {
    slug: "pocketlink",
    name: "PocketLink",
    navDesc: "WhatsApp-native storefront in minutes",
    icon: ic.cart,
    theme: { brand: "#38bdf8", brand2: "#22d3ee" },
    eyebrow: "WhatsApp Storefront",
    headline: { lead: "Your store,", accent: "inside WhatsApp." },
    subhead:
      "Turn any micro-business into a WhatsApp-native store — catalog, orders, and payments without code or a website.",
    primaryCta: { label: "Start Free", href: "#pricing" },
    secondaryCta: { label: "Open Dashboard", href: "https://pocketlink.store" },
    benefits: [
      { title: "Sell in minutes", body: "Add products, share a link, and start taking orders the same day.", icon: ic.rocket },
      { title: "Get paid instantly", body: "Accept UPI & cards right inside chat with Razorpay.", icon: ic.rupee },
      { title: "Look professional", body: "A clean storefront that builds instant customer trust.", icon: ic.spark },
      { title: "Zero tech skills", body: "If you can use WhatsApp, you can run PocketLink.", icon: ic.handshake },
    ],
    demoTitle: "A storefront customers love",
    demoSub: "Browse, tap, and order — all without leaving WhatsApp.",
    demoFeatures: [
      "Unlimited product catalog",
      "One-tap WhatsApp ordering",
      "UPI & card payments",
      "Custom link (yourname.pocketlink.store)",
      "Order management dashboard",
      "WhatsApp OTP login for customers",
    ],
    plans: [
      {
        name: "Free",
        price: "₹0",
        tagline: "Test the waters and take your first orders.",
        tier: "FREE",
        features: ["1 store", "Up to 10 products", "WhatsApp ordering", "Basic storefront"],
      },
      {
        name: "Pro",
        price: "₹249",
        tagline: "For sellers ready to grow.",
        tier: "PRO",
        featured: true,
        features: ["Unlimited products", "UPI & card payments", "Custom store link", "Remove PocketLink branding", "Order dashboard"],
      },
      {
        name: "Business",
        price: "₹500",
        tagline: "For busy shops and small teams.",
        tier: "BUSINESS",
        features: ["Everything in Pro", "Multiple staff logins", "Sales analytics", "Priority support"],
      },
      {
        name: "Premium",
        price: "₹1,000",
        tagline: "Storefront + WhatsApp API power.",
        tier: "PREMIUM",
        features: ["Everything in Business", "WhatsApp Business API add-on", "Automation & broadcasts", "Dedicated manager"],
      },
    ],
    priceNote: "Billed monthly · Pay yearly and get 2 months free.",
  },

  website: {
    slug: "website",
    name: "Website Design",
    navDesc: "Conversion-focused sites for India",
    icon: ic.globe,
    theme: { brand: "#8b5cf6", brand2: "#6366f1" },
    eyebrow: "Website Design",
    headline: { lead: "Websites that", accent: "win customers." },
    subhead:
      "Fast, beautiful, mobile-first websites engineered to turn visitors into WhatsApp conversations and sales.",
    primaryCta: { label: "Get a Quote", href: "#pricing" },
    secondaryCta: { label: "Talk to Sales", href: "https://wa.me/918625060631" },
    benefits: [
      { title: "Built to convert", body: "Every section is designed to drive enquiries and orders.", icon: ic.bolt },
      { title: "Lightning fast", body: "Sub-second loads that feel great even on mobile data.", icon: ic.clock },
      { title: "WhatsApp-first", body: "Click-to-chat everywhere so customers reach you instantly.", icon: ic.message },
      { title: "Found on Google", body: "Technical SEO baked in from day one.", icon: ic.search },
    ],
    demoTitle: "A site that works as hard as you do",
    demoSub: "Custom design, no templates — built around your business.",
    demoFeatures: [
      "Custom design (no templates)",
      "Mobile-first & responsive",
      "WhatsApp & payment integration",
      "SEO + analytics setup",
      "Fast managed hosting",
      "Content & launch support",
    ],
    plans: [
      {
        name: "Starter",
        price: "₹14,999",
        period: "one-time",
        tagline: "A sharp one-page site to get online fast.",
        tier: "STARTER",
        features: ["1-page website", "Mobile responsive", "WhatsApp button", "Basic SEO", "Live in 5 days"],
      },
      {
        name: "Business",
        price: "₹29,999",
        period: "one-time",
        tagline: "A complete multi-page site for growing brands.",
        tier: "BUSINESS",
        featured: true,
        features: ["Up to 5 pages", "Custom design", "Catalog / gallery", "SEO + analytics", "WhatsApp + payments", "Live in 2 weeks"],
      },
      {
        name: "Custom",
        price: "Let's talk",
        period: "",
        tagline: "Full builds, e-commerce, and integrations.",
        tier: "CUSTOM",
        features: ["Unlimited pages", "E-commerce / web app", "Custom integrations", "Ongoing support"],
      },
    ],
    priceNote: "One-time project pricing · Optional care plans available.",
  },

  "custom-solutions": {
    slug: "custom-solutions",
    name: "Custom Solutions",
    navDesc: "Automation & AI built for you",
    icon: ic.handshake,
    theme: { brand: "#f59e0b", brand2: "#fb7185" },
    eyebrow: "Custom Solutions",
    headline: { lead: "Automation &", accent: "AI, your way." },
    subhead:
      "Bespoke automations, AI assistants, and integrations tailored to exactly how your business runs.",
    primaryCta: { label: "Get a Quote", href: "#pricing" },
    secondaryCta: { label: "Book a Call", href: "https://wa.me/918625060631" },
    benefits: [
      { title: "Save hours daily", body: "Automate repetitive workflows from end to end.", icon: ic.clock },
      { title: "AI that works for you", body: "Custom assistants trained on your own business.", icon: ic.bot },
      { title: "Connect everything", body: "WhatsApp, CRM, sheets, and ERPs — all in sync.", icon: ic.link },
      { title: "Scale without hiring", body: "Let software handle the volume as you grow.", icon: ic.layers },
    ],
    demoTitle: "Software shaped around your business",
    demoSub: "From a single automation to a full internal platform.",
    demoFeatures: [
      "Workflow automation",
      "Custom AI chat assistants",
      "CRM & ERP integrations",
      "Data dashboards & reporting",
      "API development",
      "Dedicated solution architect",
    ],
    plans: [
      {
        name: "Automation",
        price: "From ₹9,999",
        period: "",
        tagline: "Automate one key workflow, fast.",
        tier: "STARTER",
        features: ["1 automated workflow", "WhatsApp / sheet triggers", "Setup & handover", "30-day support"],
      },
      {
        name: "AI Assistant",
        price: "From ₹24,999",
        period: "",
        tagline: "A custom AI bot trained on your business.",
        tier: "GROWTH",
        featured: true,
        features: ["Custom AI assistant", "Knowledge base training", "WhatsApp + web deploy", "Analytics", "Ongoing tuning"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        tagline: "A full internal platform, built to spec.",
        tier: "SCALE",
        features: ["Multiple integrations", "Custom dashboards", "Dedicated architect", "SLA & priority support"],
      },
    ],
    priceNote: "Project-based pricing · Final quote after a discovery call.",
  },
};

export const productNav = Object.values(products).map((p) => ({
  slug: p.slug,
  name: p.name,
  desc: p.navDesc,
  icon: p.icon,
}));

export const productSlugs = Object.keys(products);
