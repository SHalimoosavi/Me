import { MILESTONES } from "@/lib/data/milestones";

export default function Milestones() {
  return (
    <section id="milestones" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <p className="eyebrow mb-4">Milestones</p>
      <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
        Verified in code, not on a wall.
      </h2>
      <p className="mt-4 max-w-xl text-sm text-bone-muted">
        Every number here is checkable in a public repository — test suites, release
        tags, and commit history, not a framed certificate.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-obsidian-line bg-obsidian-line sm:grid-cols-2 lg:grid-cols-3">
        {MILESTONES.map((m) => (
          <div key={m.label} className="bg-obsidian p-8">
            <p className="font-display text-4xl text-ledger-400">{m.metric}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-wide text-bone">
              {m.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone-muted">{m.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
