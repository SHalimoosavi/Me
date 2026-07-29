"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import {
  CERTIFICATES,
  CERTIFICATE_CATEGORIES,
  type Certificate,
} from "@/lib/data/certificates";
import CertificateModal from "@/components/ui/CertificateModal";
import { cn } from "@/lib/utils";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [open, setOpen] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () =>
      CERTIFICATES.filter(
        (c) => activeCategory === "All" || c.category === activeCategory
      ),
    [activeCategory]
  );

  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Certificates &amp; Recognition</p>
          <h2 className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl">
            Credentials and appreciation, on the record.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter certificates">
          {["All", ...CERTIFICATE_CATEGORIES].map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              data-cursor-hover
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                activeCategory === category
                  ? "border-ledger-400 bg-ledger-400/10 text-ledger-200"
                  : "border-obsidian-line text-bone-muted hover:border-bone/30 hover:text-bone"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <button
            key={cert.slug}
            type="button"
            onClick={() => setOpen(cert)}
            data-cursor-hover
            className="glass group flex flex-col overflow-hidden rounded-2xl text-left transition-colors hover:border-ledger-400/30"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate, issued by ${cert.issuer}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="font-mono text-[10px] uppercase tracking-wide text-ledger-400">
                {cert.issuer}
              </span>
              <h3 className="mt-2 font-display text-lg text-bone group-hover:text-ledger-200">
                {cert.title}
              </h3>
              <div className="mt-auto flex items-center gap-3 pt-4 font-mono text-xs text-bone-faint">
                {cert.verifyUrl && (
                  <span className="inline-flex items-center gap-1 text-bone-muted">
                    <ShieldCheck size={12} className="text-ledger-400" /> Verifiable
                  </span>
                )}
                {cert.date && <span>{cert.date}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      <CertificateModal certificate={open} onClose={() => setOpen(null)} />
    </section>
  );
}
