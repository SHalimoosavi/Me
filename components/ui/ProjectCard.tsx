"use client";

import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<Project["status"], string> = {
  live: "bg-ledger-400/15 text-ledger-200 border-ledger-400/30",
  mvp: "bg-signal-500/15 text-signal-300 border-signal-500/30",
  "open-source": "bg-bone/10 text-bone-muted border-bone/20",
  "in-development": "bg-signal-500/10 text-signal-300 border-signal-500/20",
  upcoming: "bg-bone/5 text-bone-faint border-bone/10",
};

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`;
    card.style.setProperty("--px", `${(px + 0.5) * 100}%`);
    card.style.setProperty("--py", `${(py + 0.5) * 100}%`);
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 ease-out will-change-transform"
      style={{
        backgroundImage:
          "radial-gradient(400px circle at var(--px, 50%) var(--py, 50%), rgba(201,162,39,0.08), transparent 70%)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide",
            STATUS_STYLES[project.status]
          )}
        >
          {project.statusLabel}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-bone-faint">
          {project.category}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        data-cursor-hover
        className="mt-5 block text-left"
      >
        <h3 className="font-display text-xl text-bone group-hover:text-ledger-200 md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-bone-muted">{project.tagline}</p>
      </button>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-bone-faint">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-obsidian-line px-2.5 py-1 font-mono text-[10px] text-bone-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-obsidian-line pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ledger-300 hover:text-ledger-200"
          >
            Live Demo <ArrowUpRight size={13} />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-bone-muted hover:text-bone"
          >
            <Github size={13} /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
