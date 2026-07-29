"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SITE.social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl leading-tight text-bone md:text-4xl">
            Start your project with {SITE.company.split(" ").slice(0, 2).join(" ")}.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bone-muted">
            Whether you&rsquo;re building a SaaS product, need enterprise software,
            or want AI or blockchain integration — a free initial consultation
            starts every engagement.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={`mailto:${SITE.social.email}`}
                data-cursor-hover
                className="group flex items-center gap-3 font-mono text-sm text-bone-muted hover:text-bone"
              >
                <Mail size={16} className="text-ledger-400" />
                {SITE.social.email}
                <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group flex items-center gap-3 font-mono text-sm text-bone-muted hover:text-bone"
              >
                <MessageCircle size={16} className="text-ledger-400" />
                WhatsApp
                <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li className="flex items-center gap-3 font-mono text-sm text-bone-muted">
              <MapPin size={16} className="text-ledger-400" />
              {SITE.location.city}, {SITE.location.region}, {SITE.location.country} · Mon–Sat, 9 AM–7 PM IST
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-8">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-bone-muted">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-obsidian-line bg-obsidian-surface px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-ledger-400/60 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-bone-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-obsidian-line bg-obsidian-surface px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-ledger-400/60 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-bone-muted">
              Project details
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-2 w-full resize-none rounded-lg border border-obsidian-line bg-obsidian-surface px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-ledger-400/60 focus:outline-none"
              placeholder="What are you building?"
            />
          </div>
          <button
            type="submit"
            data-cursor-hover
            className="w-full rounded-lg bg-ledger-400 px-6 py-3.5 font-mono text-xs uppercase tracking-wide text-obsidian transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
          <p className="text-center font-mono text-[11px] text-bone-faint">
            Opens your email client, addressed to {SITE.social.email}
          </p>
        </form>
      </div>
    </section>
  );
}
