"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { SITE } from "@/lib/data/site";

const LedgerScene = dynamic(() => import("@/components/three/LedgerScene"), {
  ssr: false,
});

const NAME_LINE_1 = "Syed Ali";
const NAME_LINE_2 = "Hasan Moosavi";

function splitToChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block will-change-transform"
      aria-hidden="true"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const chars = rootRef.current!.querySelectorAll("[data-hero-char]");
      const rest = rootRef.current!.querySelectorAll("[data-hero-fade]");

      if (prefersReducedMotion) {
        gsap.set([chars, rest], { opacity: 1, y: 0 });
        return;
      }

      gsap.set(chars, { opacity: 0, yPercent: 120 });
      gsap.set(rest, { opacity: 0, y: 18 });

      const tl = gsap.timeline({ delay: 1.9, defaults: { ease: "power4.out" } });
      tl.to(chars, { opacity: 1, yPercent: 0, duration: 1, stagger: 0.018 }).to(
        rest,
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        "-=0.5"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-glow-radial"
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-2xl opacity-70 md:opacity-90">
        <LedgerScene />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p
          data-hero-fade
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-ledger-400" />
          Available for select engagements · {SITE.location.city}, {SITE.location.country}
        </p>

        <h1 className="font-display text-[13vw] font-light leading-[0.95] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <span data-hero-char className="block">
              {splitToChars(NAME_LINE_1)}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-char className="block italic text-ledger-400">
              {splitToChars(NAME_LINE_2)}
            </span>
          </span>
        </h1>

        <p
          data-hero-fade
          className="mt-8 max-w-xl text-balance font-body text-base leading-relaxed text-bone-muted md:text-lg"
        >
          {SITE.bio.short}
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-ledger-400 px-6 py-3.5 font-mono text-xs uppercase tracking-wide text-obsidian transition-transform hover:-translate-y-0.5"
          >
            Explore Products
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-mono text-xs uppercase tracking-wide text-bone transition-colors hover:border-ledger-400/60"
          >
            Schedule a Consultation
          </a>
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            aria-label="View resume"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-obsidian-line text-bone-muted transition-colors hover:border-ledger-400/60 hover:text-ledger-200"
          >
            <FileDown size={16} aria-hidden="true" />
          </a>
        </div>

        <dl data-hero-fade className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {SITE.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="eyebrow">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl text-bone">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        data-cursor-hover
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-faint md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
