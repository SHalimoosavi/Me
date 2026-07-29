"use client";

import { FAQ_ITEMS } from "@/lib/data/faq";

export default function FAQAccordion() {
  return (
    <div className="divide-y divide-obsidian-line border-y border-obsidian-line">
      {FAQ_ITEMS.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-bone marker:content-none md:text-lg">
            {item.question}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-obsidian-line font-mono text-sm text-bone-muted transition-transform group-open:rotate-45 group-open:border-ledger-400/60 group-open:text-ledger-300"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-bone-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
