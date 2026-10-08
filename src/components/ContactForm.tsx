"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-cream p-8 text-center">
        <h2 className="font-serif text-xl text-foreground">
          Thanks for reaching out.
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          We&rsquo;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-foreground px-7 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-sage-dark"
      >
        Send message
      </button>
    </form>
  );
}
