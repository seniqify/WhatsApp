import crypto from "crypto";
import { getRazorpayConfig } from "@/lib/razorpay";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { keySecret } = getRazorpayConfig();
  if (!keySecret) return Response.json({ valid: false }, { status: 200 });

  let body: {
    razorpay_payment_id?: string;
    razorpay_subscription_id?: string;
    razorpay_signature?: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ valid: false }, { status: 400 });
  }

  const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = body;
  if (!razorpay_payment_id || !razorpay_subscription_id || !razorpay_signature) {
    return Response.json({ valid: false }, { status: 400 });
  }

  // For subscriptions, signature = HMAC_SHA256(payment_id + "|" + subscription_id, key_secret)
  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
    .digest("hex");

  const valid =
    expected.length === razorpay_signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(razorpay_signature));

  return Response.json({ valid });
}
