import { ImageResponse } from "next/og";

export const alt = "Seniqify — WhatsApp-first business infrastructure for India";
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
          background: "#070b1a",
          backgroundImage:
            "radial-gradient(900px circle at 20% 0%, rgba(37,211,102,0.35), transparent 45%), radial-gradient(900px circle at 100% 100%, rgba(45,212,191,0.25), transparent 45%)",
          color: "#eaeefb",
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
              background: "linear-gradient(135deg, #25d366, #12a150)",
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
            Your business, powered by WhatsApp.
          </div>
          <div style={{ fontSize: 30, color: "#9aa6c6", maxWidth: 860 }}>
            WhatsApp API, storefronts &amp; automation for Indian businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#5f6c8c",
          }}
        >
          <span>seniqify.com</span>
          <span>500+ businesses · ₹2Cr+ GMV</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
