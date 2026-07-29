"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILL_GROUPS } from "@/lib/data/skills";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-skill-card]", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <p className="eyebrow mb-4">Capabilities</p>
      <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
        A full-stack skillset shaped by shipping products, not studying for certificates.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.domain}
            data-skill-card
            className="glass rounded-2xl p-7 transition-colors hover:border-ledger-400/30"
          >
            <h3 className="font-display text-lg text-bone">{group.domain}</h3>
            <p className="mt-2 text-sm text-bone-muted">{group.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-obsidian-line px-3 py-1.5 font-mono text-xs text-bone-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
