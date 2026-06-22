import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import ProductHero from "./ProductHero";
import Benefits from "./Benefits";
import ProductDemo from "./ProductDemo";
import PricingSection from "./PricingSection";
import type { Product } from "@/lib/products";

export default function ProductTemplate({ product }: { product: Product }) {
  const themeVars = {
    "--brand": product.theme.brand,
    "--brand-2": product.theme.brand2,
  } as React.CSSProperties;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div style={themeVars}>
          <ProductHero product={product} />
          <Benefits product={product} />
          <ProductDemo product={product} />
          <PricingSection
            plans={product.plans}
            charges={product.charges}
            note={product.priceNote}
            heading={{ lead: `${product.name} pricing`, accent: "made simple." }}
            subhead="Transparent plans with no surprises. Start free or talk to us for a custom fit."
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
