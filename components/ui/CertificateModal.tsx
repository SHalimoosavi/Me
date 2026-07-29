"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import type { Certificate } from "@/lib/data/certificates";

export default function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!certificate) return;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm"
      />

      <div className="glass relative w-full max-w-2xl overflow-hidden rounded-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-obsidian-line bg-obsidian/80 text-bone-muted hover:text-bone"
        >
          <X size={16} />
        </button>

        <div className="relative aspect-[4/3] w-full bg-bone">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate, issued by ${certificate.issuer}`}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-contain"
          />
        </div>

        <div className="p-6">
          <span className="eyebrow">{certificate.issuer}</span>
          <h3 id="certificate-modal-title" className="mt-2 font-display text-xl text-bone">
            {certificate.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-bone-muted">
            {certificate.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {certificate.date && (
              <span className="font-mono text-xs text-bone-faint">{certificate.date}</span>
            )}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ledger-300 hover:text-ledger-200"
              >
                Verify credential <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
