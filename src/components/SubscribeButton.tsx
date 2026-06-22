"use client";

import { useState } from "react";

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
};
type RazorpayOptions = {
  key: string;
  subscription_id: string;
  name: string;
  description?: string;
  theme?: { color?: string };
  handler: (r: RazorpayResponse) => void;
  modal?: { ondismiss?: () => void };
};
interface RazorpayInstance {
  open(): void;
  on(event: string, cb: () => void): void;
}
declare global {
  interface Window {
    Razorpay?: new (o: RazorpayOptions) => RazorpayInstance;
  }
}

const SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

function loadScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function SubscribeButton({
  plan,
  label,
  className,
}: {
  plan: string;
  label: string;
  className: string;
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleClick() {
    setLoading(true);
    setStatus(null);
    try {
      const r = await fetch("/api/razorpay/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await r.json();

      // Payments not configured yet → fall back to WhatsApp.
      if (!data.configured) {
        window.open(
          `https://wa.me/918625060631?text=${encodeURIComponent(
            `Hi! I'd like to subscribe to the ${plan} WhatsApp API plan.`
          )}`,
          "_blank"
        );
        setLoading(false);
        return;
      }
      if (!data.subscriptionId) throw new Error("No subscription");

      const ok = await loadScript();
      if (!ok || !window.Razorpay) throw new Error("Checkout failed to load");

      const rzp = new window.Razorpay({
        key: data.keyId,
        subscription_id: data.subscriptionId,
        name: "Seniqify",
        description: `WhatsApp API — ${plan} plan`,
        theme: { color: "#25d366" },
        handler: async (resp) => {
          await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resp),
          });
          setStatus("success");
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      rzp.on("payment.failed", () => setStatus("error"));
      rzp.open();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="brand-soft mt-5 rounded-full px-5 py-3 text-center text-sm font-semibold">
        ✓ Subscribed! Check your inbox.
      </div>
    );
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? "Starting…" : label}
      {!loading && <span>→</span>}
      {status === "error" && (
        <span className="ml-1 text-xs text-rose-400">retry</span>
      )}
    </button>
  );
}
