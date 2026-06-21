import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://seniqify.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seniqify — WhatsApp-first business infrastructure for India",
    template: "%s · Seniqify",
  },
  description:
    "Seniqify gives Indian businesses the WhatsApp API, storefronts, and automation to sell, support, and scale — right where their customers already chat.",
  keywords: [
    "WhatsApp API India",
    "WhatsApp Business Platform",
    "WhatsApp commerce",
    "PocketLink",
    "WhatsApp storefront",
    "MSME automation",
    "Seniqify",
  ],
  authors: [{ name: "Seniqify" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Seniqify — WhatsApp-first business infrastructure for India",
    description:
      "WhatsApp API, storefronts, and automation to sell, support, and scale where your customers already chat.",
    siteName: "Seniqify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seniqify — WhatsApp-first business infrastructure",
    description:
      "WhatsApp API, storefronts, and automation for Indian businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col bg-base text-text">
        <ScrollProgress />
        <Spotlight />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
