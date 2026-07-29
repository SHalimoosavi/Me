"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/data/timeline";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATUS_LABEL: Record<string, string> = {
  done: "Shipped",
  current: "In Progress",
  planned: "Planned",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-timeline-item]", {
        opacity: 0,
        x: -24,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <p className="eyebrow mb-4">Roadmap · The SAYANJALI Build Log</p>
      <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
        Every phase is a block — shipped in order, verified before the next one starts.
      </h2>

      <div className="relative mt-16 pl-10">
        <div className="absolute left-[7px] top-2 h-full w-px bg-obsidian-line" aria-hidden="true" />
        <div
          ref={lineRef}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-ledger-400 to-signal-500"
          aria-hidden="true"
        />

        <ol className="space-y-14">
          {TIMELINE.map((entry) => (
            <li key={entry.phase} data-timeline-item className="relative">
              <span
                className={cn(
                  "absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2",
                  entry.status === "done" && "border-ledger-400 bg-ledger-400",
                  entry.status === "current" && "border-signal-500 bg-signal-500 shadow-glow",
                  entry.status === "planned" && "border-obsidian-line bg-obsidian"
                )}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">{entry.phase}</span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide",
                    entry.status === "done" && "border-ledger-400/40 text-ledger-200",
                    entry.status === "current" && "border-signal-500/40 text-signal-300",
                    entry.status === "planned" && "border-obsidian-line text-bone-faint"
                  )}
                >
                  {STATUS_LABEL[entry.status]}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl text-bone md:text-2xl">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-muted">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
