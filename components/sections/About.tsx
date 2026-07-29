"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/data/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-28 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div data-about-reveal>
          <p className="eyebrow mb-4">About the Founder</p>
          <h2 className="font-display text-3xl leading-tight text-bone md:text-4xl">
            Technology entrepreneur building intelligent digital infrastructure.
          </h2>
        </div>

        <div className="space-y-6">
          {SITE.bio.long.map((paragraph, i) => (
            <p
              key={i}
              data-about-reveal
              className="text-balance text-base leading-relaxed text-bone-muted md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <div data-about-reveal className="flex flex-wrap gap-2 pt-2">
            {SITE.taglineWords.map((word) => (
              <span
                key={word}
                className="glass rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-bone-muted"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
