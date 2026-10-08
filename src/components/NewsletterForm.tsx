"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm({
  className = "",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={`text-sm text-foreground/80 ${className}`}>
        You&rsquo;re on the list — thank you for joining us.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${className}`}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full rounded-full border border-line bg-white px-5 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-sage focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-sage-dark"
      >
        Join the list
      </button>
    </form>
  );
}
