"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.style.overflow = "hidden";

    const counter = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        document.body.style.overflow = "";
        setDone(true);
      },
    });

    if (prefersReducedMotion) {
      tl.to(counter, { value: 0, duration: 0.01 });
      tl.set(barRef.current, { scaleX: 1 });
      tl.to(wrapRef.current, { autoAlpha: 0, duration: 0.2 });
      return () => {
        document.body.style.overflow = "";
      };
    }

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.floor(counter.value)).padStart(3, "0");
        }
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${counter.value / 100})`;
        }
      },
    })
      .to(wrapRef.current, { autoAlpha: 0, duration: 0.6 }, "+=0.15")
      .set(wrapRef.current, { display: "none" });

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden={done}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 bg-obsidian"
    >
      <div className="font-mono text-xs uppercase tracking-widest2 text-bone-muted">
        Syncing ledger
      </div>
      <div className="flex items-baseline gap-1 font-display text-6xl font-light text-bone md:text-8xl">
        <span ref={countRef}>000</span>
        <span className="text-2xl text-ledger-400 md:text-4xl">%</span>
      </div>
      <div className="h-px w-48 overflow-hidden bg-obsidian-line md:w-64">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-ledger-400 to-signal-500"
        />
      </div>
    </div>
  );
}
