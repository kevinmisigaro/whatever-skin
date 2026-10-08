import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { products } from "@/lib/products";

const values = [
  {
    title: "Gentle by design",
    body: "Low-foam, pH-conscious formulas that clean and treat without disrupting your skin's barrier.",
  },
  {
    title: "Ingredients that earn their place",
    body: "Niacinamide, zinc PCA, and green tea extract — active where it matters, nothing extra.",
  },
  {
    title: "Made for every skin tone",
    body: "Formulated and tested to work beautifully across all skin tones and types.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-10 sm:px-10 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
            Coming soon
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            A little skin reset, every day.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
            élan Skincare is a small line of gentle, effective essentials —
            starting with a foaming cleanser and a blemish control serum
            built for real, everyday skin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="rounded-full bg-foreground px-7 py-3 text-center text-sm font-medium tracking-wide text-background transition-colors hover:bg-sage-dark"
            >
              Shop the collection
            </Link>
            <Link
              href="/about"
              className="text-center text-sm font-medium text-foreground/80 underline underline-offset-4 decoration-sage"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-cream">
            <Image
              src="/images/hero-flatlay.jpg"
              alt="élan Gentle Foaming Cleanser and Blemish Control Serum laid out on white linen"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line/70 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3 sm:px-10">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-serif text-lg text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
              The collection
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Two essentials to start.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-foreground/80 underline underline-offset-4 decoration-sage"
          >
            View all products
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Lifestyle */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-cream lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto">
            <Image
              src="/images/lifestyle-poolside.jpg"
              alt="élan Skincare products styled poolside"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
              Our promise
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground">
              Skincare that fits into real life, wherever it finds you.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/70">
              We kept the routine simple on purpose: a cleanser and a serum,
              formulated to work together and travel light — at home, on
              holiday, or anywhere in between.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-line/70 bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">
              Be first to know when we launch.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70">
              Join the list for early access, founding-member pricing, and a
              look behind the scenes as we get ready to launch.
            </p>
          </div>
          <NewsletterForm className="lg:w-auto" />
        </div>
      </section>
    </div>
  );
}
