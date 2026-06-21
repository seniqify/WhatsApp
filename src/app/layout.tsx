import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col bg-base text-text">
        {children}
      </body>
    </html>
  );
}
