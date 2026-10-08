import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | élan Skincare",
  description: "Get in touch with the élan Skincare team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-10">
      <p className="text-xs uppercase tracking-[0.3em] text-sage-dark">
        Get in touch
      </p>
      <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
        We&rsquo;d love to hear from you.
      </h1>
      <p className="mt-5 text-base leading-relaxed text-foreground/70">
        Questions about ingredients, wholesale, or press? Send us a message
        and we&rsquo;ll get back to you as soon as we can.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
