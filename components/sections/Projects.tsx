"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">SYJ Product Ecosystem</p>
          <h2 className="font-display text-3xl leading-tight text-bone md:text-4xl">
            Intelligent platforms built for real-world impact.
          </h2>
        </div>

        <label className="glass flex w-full items-center gap-2 rounded-full px-4 py-3 md:w-72">
          <Search size={15} className="text-bone-faint" aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech…"
            className="w-full bg-transparent font-mono text-xs text-bone placeholder:text-bone-faint focus:outline-none"
          />
        </label>
      </div>

      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {["All", ...PROJECT_CATEGORIES].map((category) => (
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

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-obsidian-line px-6 py-16 text-center font-mono text-sm text-bone-faint">
          No projects match “{query}”. Try a different search or category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setOpenProject} />
          ))}
        </div>
      )}

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
