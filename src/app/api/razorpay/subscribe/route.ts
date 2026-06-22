import { getRazorpayConfig, getPlanId } from "@/lib/razorpay";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { keyId, keySecret, configured } = getRazorpayConfig();

  // Not set up yet — tell the client to fall back gracefully.
  if (!configured) {
    return Response.json({ configured: false });
  }

  let planKey: string | undefined;
  try {
    ({ plan: planKey } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const planId = planKey ? getPlanId(planKey) : undefined;
  if (!planId) {
    return Response.json({ error: "Unknown or unconfigured plan" }, { status: 400 });
  }

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const res = await fetch("https://api.razorpay.com/v1/subscriptions", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      plan_id: planId,
      total_count: 120, // up to 120 monthly cycles
      customer_notify: 1,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    return Response.json(
      { error: data?.error?.description ?? "Razorpay error" },
      { status: 502 }
    );
  }

  return Response.json({
    configured: true,
    subscriptionId: data.id,
    keyId,
  });
}
