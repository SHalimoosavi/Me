"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data/site";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certificates" },
  { label: "Updates", href: "#updates" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          data-cursor-hover
          className={cn(
            "glass flex items-center gap-2 rounded-full px-4 py-2 transition-shadow",
            scrolled && "shadow-glow"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ledger-400" aria-hidden="true" />
          <span className="font-display text-sm tracking-wide text-bone">
            Moosavi
            <span className="text-ledger-400">.</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="glass hidden items-center gap-0.5 overflow-x-auto rounded-full px-2 py-1.5 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide text-bone-muted transition-colors hover:bg-obsidian-raised hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.resumeUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="glass hidden items-center rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-bone transition-colors hover:border-ledger-400/60 hover:text-ledger-200 lg:flex"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-bone lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="glass mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wide text-bone-muted hover:bg-obsidian-raised hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 rounded-xl bg-ledger-400 px-4 py-3 text-center font-mono text-sm uppercase tracking-wide text-obsidian"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
