import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl lowercase">élan</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              Gentle, effective skincare essentials — formulated for real,
              everyday skin. Join our list for first access when we launch.
            </p>
            <NewsletterForm className="mt-6" />
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-foreground/90">
              Shop
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li>
                <Link href="/products" className="hover:text-foreground">
                  All products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gentle-foaming-cleanser"
                  className="hover:text-foreground"
                >
                  Gentle Foaming Cleanser
                </Link>
              </li>
              <li>
                <Link
                  href="/products/blemish-control-serum"
                  className="hover:text-foreground"
                >
                  Blemish Control Serum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-foreground/90">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About élan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 élan Skincare. All rights reserved.</p>
          <p>Made with care, for every skin.</p>
        </div>
      </div>
    </footer>
  );
}
