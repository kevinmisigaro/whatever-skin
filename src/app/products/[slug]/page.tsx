import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/NewsletterForm";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | élan Skincare`,
    description: product.tagline,
  };
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetail params={params} />
    </Suspense>
  );
}

function ProductSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-square w-full animate-pulse rounded-[2rem] bg-cream" />
        <div className="space-y-4">
          <div className="h-4 w-20 animate-pulse rounded bg-cream" />
          <div className="h-10 w-2/3 animate-pulse rounded bg-cream" />
          <div className="h-24 w-full animate-pulse rounded bg-cream" />
        </div>
      </div>
    </div>
  );
}

async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
      <Link
        href="/products"
        className="text-sm text-foreground/60 hover:text-foreground"
      >
        &larr; Back to shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
            {product.size}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            {product.description}
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-cream p-6">
            <p className="text-sm font-medium text-foreground">
              Not available yet — join the list for early access.
            </p>
            <NewsletterForm className="mt-4" />
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-xl text-foreground">
              Key ingredients
            </h2>
            <ul className="mt-4 space-y-4">
              {product.keyIngredients.map((ingredient) => (
                <li key={ingredient.name} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {ingredient.name}
                    </p>
                    <p className="text-sm text-foreground/70">
                      {ingredient.benefit}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-xl text-foreground">
              How to use
            </h2>
            <ol className="mt-4 space-y-3">
              {product.howToUse.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-foreground/70">
                  <span className="font-medium text-foreground">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
