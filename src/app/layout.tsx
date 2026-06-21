import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://seniqify.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seniqify — Design & build studio for modern commerce",
    template: "%s · Seniqify",
  },
  description:
    "Seniqify is a digital studio crafting fast websites, WhatsApp-native storefronts, and brand systems for ambitious businesses.",
  keywords: [
    "web design studio",
    "WhatsApp commerce",
    "Next.js development",
    "brand design",
    "ecommerce storefront",
    "Seniqify",
  ],
  authors: [{ name: "Seniqify" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Seniqify — Design & build studio for modern commerce",
    description:
      "Fast websites, WhatsApp-native storefronts, and brand systems for ambitious businesses.",
    siteName: "Seniqify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seniqify — Design & build studio",
    description:
      "Fast websites, WhatsApp-native storefronts, and brand systems for ambitious businesses.",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
