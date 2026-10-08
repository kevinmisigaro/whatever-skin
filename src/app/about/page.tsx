import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | élan Skincare",
  description: "The story and philosophy behind élan Skincare.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
        About us
      </p>
      <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
        Skincare, kept simple.
      </h1>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-cream">
        <Image
          src="/images/lifestyle-poolside.jpg"
          alt="élan Skincare products styled poolside"
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
        <p>
          élan started with a simple frustration: skincare routines had
          gotten too long, too complicated, and too full of promises that
          didn&rsquo;t hold up. We wanted something simpler — a small set of
          essentials, formulated well, that actually earn a permanent spot on
          the shelf.
        </p>
        <p>
          That&rsquo;s why we started with just two products. A gentle
          foaming cleanser built around green tea extract, soft enough for
          daily use without stripping your skin. And a blemish control serum,
          powered by niacinamide and zinc PCA, for anyone dealing with
          congestion, uneven tone, or excess oil.
        </p>
        <p>
          Every formula is built to work across all skin tones and skin
          types, because &ldquo;everyday skin&rdquo; looks different for
          everyone. No filler ingredients, no twelve-step routines — just a
          little reset, every day.
        </p>
      </div>

      <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-foreground">Gentle first</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Formulas designed to treat your skin barrier as an asset, not an
            obstacle.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg text-foreground">
            Purposeful ingredients
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Every ingredient is there for a reason — nothing added just to
            pad a label.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg text-foreground">
            Inclusive by default
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Formulated and tested to perform beautifully on every skin tone.
          </p>
        </div>
      </div>
    </div>
  );
}
