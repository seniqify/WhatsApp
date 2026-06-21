import { ImageResponse } from "next/og";

export const alt = "Seniqify — Design & engineering studio for modern commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#060609",
          backgroundImage:
            "radial-gradient(900px circle at 20% 0%, rgba(124,108,255,0.35), transparent 45%), radial-gradient(900px circle at 100% 100%, rgba(34,211,238,0.25), transparent 45%)",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              fontSize: 34,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>Seniqify</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            We engineer digital products that print revenue.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1b5", maxWidth: 860 }}>
            Senior design &amp; engineering studio — websites, WhatsApp commerce,
            and AI tools.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#6c6c82",
          }}
        >
          <span>seniqify.com</span>
          <span>Next.js · Edge · AI</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
