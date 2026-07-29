"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/85 backdrop-blur-sm"
      />

      <div className="glass relative w-full max-w-lg rounded-2xl p-8">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-obsidian-line text-bone-muted hover:text-bone"
        >
          <X size={16} />
        </button>

        <span className="eyebrow">{project.category}</span>
        <h3 id="project-modal-title" className="mt-2 font-display text-2xl text-bone">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-ledger-300">{project.tagline}</p>

        <p className="mt-5 text-sm leading-relaxed text-bone-muted">
          {project.description}
        </p>

        {project.highlight && (
          <p className="mt-4 rounded-lg border border-ledger-400/25 bg-ledger-400/5 px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-ledger-200">
            {project.highlight}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-obsidian-line px-2.5 py-1 font-mono text-[10px] text-bone-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ledger-400 px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-obsidian"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-bone"
            >
              <Github size={14} /> Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
