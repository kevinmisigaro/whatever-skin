import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | élan Skincare",
  description: "Browse the full élan Skincare collection.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
        The collection
      </p>
      <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
        Shop élan Skincare
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
        Two essentials, formulated to work together: a gentle daily cleanser
        and a targeted blemish control serum.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
