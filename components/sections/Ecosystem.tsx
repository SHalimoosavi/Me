import { SITE } from "@/lib/data/site";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative border-y border-obsidian-line bg-obsidian-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-4">SAYANJALI NEXUS Ecosystem</p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
          One ecosystem. Multiple intelligent verticals, interconnected by design.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-obsidian-line bg-obsidian-line sm:grid-cols-2 lg:grid-cols-3">
          {SITE.ecosystem.map((node, i) => (
            <div
              key={node.title}
              className="group relative bg-obsidian p-8 transition-colors hover:bg-obsidian-raised"
            >
              <span className="font-mono text-xs text-bone-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg text-bone group-hover:text-ledger-200">
                {node.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">{node.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
