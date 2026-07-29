import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative border-y border-obsidian-line bg-obsidian-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">From the Community</p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
          What learners say about SYJ Educate.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.context} className="glass flex h-full flex-col rounded-2xl p-7">
              <Quote size={20} className="text-ledger-400" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-bone-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-obsidian-line pt-4 font-mono text-xs uppercase tracking-wide text-bone-faint">
                {t.source} · {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
