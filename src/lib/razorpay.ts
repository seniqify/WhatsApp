// Maps a WhatsApp API plan key -> the env var holding its Razorpay subscription plan_id.
export const PLAN_ENV: Record<string, string> = {
  broadcast: "RAZORPAY_PLAN_BROADCAST",
  professional: "RAZORPAY_PLAN_PROFESSIONAL",
  fullsuite: "RAZORPAY_PLAN_FULLSUITE",
};

export function getRazorpayConfig() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  return { keyId, keySecret, configured: Boolean(keyId && keySecret) };
}

export function getPlanId(planKey: string): string | undefined {
  const envName = PLAN_ENV[planKey];
  return envName ? process.env[envName] : undefined;
}
