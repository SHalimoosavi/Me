import { TECH_STACK } from "@/lib/data/techstack";

const GROUPS = ["Languages", "Frameworks", "AI / Data", "Infra & Tools"] as const;

export default function TechStack() {
  return (
    <section aria-labelledby="tech-stack-heading" className="relative border-y border-obsidian-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p id="tech-stack-heading" className="eyebrow mb-2">
          Tech Stack
        </p>
        <p className="max-w-xl text-sm text-bone-muted">
          Tools actually shipped in production across the SYJ ecosystem — not a résumé keyword list.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {GROUPS.map((group, i) => {
          const items = TECH_STACK.filter((t) => t.group === group);
          const looped = [...items, ...items];
          return (
            <div key={group} className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <ul
                className="animate-marquee flex w-max shrink-0 gap-3 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
                style={{ animationDirection: i % 2 === 0 ? "normal" : "reverse" }}
              >
                {looped.map((item, idx) => (
                  <li
                    key={`${item.name}-${idx}`}
                    className="glass shrink-0 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide text-bone-muted"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
