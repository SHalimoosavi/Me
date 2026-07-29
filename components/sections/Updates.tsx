import { ArrowUpRight, Rss } from "lucide-react";
import { UPDATES } from "@/lib/data/updates";

export default function Updates() {
  return (
    <section id="updates" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Build Log</p>
          <h2 className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl">
            What shipped recently across the ecosystem.
          </h2>
        </div>
        <a
          href="/rss.xml"
          data-cursor-hover
          className="glass inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-bone hover:border-ledger-400/60"
        >
          <Rss size={14} /> RSS feed
        </a>
      </div>

      <ol className="divide-y divide-obsidian-line border-y border-obsidian-line">
        {UPDATES.map((entry) => (
          <li key={entry.slug} className="group grid gap-2 py-7 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ledger-400">
              <span>{entry.project}</span>
            </div>
            <div>
              <p className="font-display text-lg text-bone group-hover:text-ledger-200 md:text-xl">
                {entry.title}
              </p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-bone-muted">
                {entry.summary}
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span className="rounded-full border border-obsidian-line px-2.5 py-1 font-mono text-[10px] text-bone-faint">
                {entry.version}
              </span>
              {entry.url && (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  aria-label={`View ${entry.project} on GitHub`}
                  className="text-bone-muted hover:text-ledger-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
