import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-foreground/5"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-sage-dark">
          {product.size}
        </p>
        <h3 className="font-serif text-xl text-foreground">{product.name}</h3>
        <p className="text-sm leading-relaxed text-foreground/70">
          {product.tagline}
        </p>
        <span className="mt-auto pt-4 text-sm font-medium text-foreground underline underline-offset-4 decoration-sage">
          View product
        </span>
      </div>
    </Link>
  );
}
