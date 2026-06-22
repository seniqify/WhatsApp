import type { Metadata } from "next";
import ProductTemplate from "@/components/ProductTemplate";
import { products } from "@/lib/products";

const product = products["pocketlink"];

export const metadata: Metadata = {
  title: `${product.name} — ${product.eyebrow}`,
  description: product.subhead,
  alternates: { canonical: `/products/${product.slug}` },
};

export default function Page() {
  return <ProductTemplate product={product} />;
}
