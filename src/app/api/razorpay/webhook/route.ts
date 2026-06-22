import crypto from "crypto";

export const runtime = "nodejs";

// Optional but recommended: Razorpay calls this on subscription events
// (subscription.charged, subscription.activated, etc.). Configure the URL
// + secret in Razorpay Dashboard → Settings → Webhooks.
export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return Response.json({ ok: false }, { status: 200 });

  const signature = req.headers.get("x-razorpay-signature") ?? "";
  const raw = await req.text();

  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");
  const valid =
    expected.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

  if (!valid) return Response.json({ ok: false }, { status: 400 });

  // Signature valid — handle the event (activate access, store record, etc.).
  // const event = JSON.parse(raw);
  return Response.json({ ok: true });
}
