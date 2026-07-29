"use client";

import { useEffect, useState } from "react";
import { GitFork, Github, Star, Users } from "lucide-react";
import { SITE } from "@/lib/data/site";

interface GhUser {
  public_repos: number;
  followers: number;
  html_url: string;
}

interface GhRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

type LoadState = "loading" | "ready" | "error";

const GH_USERNAME = "SHalimoosavi";

export default function GitHubActivity() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GH_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GH_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const userData: GhUser = await userRes.json();
        const reposData: GhRepo[] = await reposRes.json();

        if (!cancelled) {
          setUser(userData);
          setRepos(
            [...reposData]
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 6)
          );
          setState("ready");
        }
      } catch {
        if (!cancelled) setState("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Open Source</p>
          <h2 className="max-w-xl font-display text-3xl leading-tight text-bone md:text-4xl">
            Live from GitHub — building in the open.
          </h2>
        </div>
        <a
          href={SITE.social.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="glass inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-bone hover:border-ledger-400/60"
        >
          <Github size={14} /> Full profile
        </a>
      </div>

      {state === "error" && (
        <p className="rounded-2xl border border-dashed border-obsidian-line px-6 py-12 text-center font-mono text-sm text-bone-faint">
          Couldn&rsquo;t reach the GitHub API right now — view the profile directly on{" "}
          <a href={SITE.social.github} className="text-ledger-300 underline" target="_blank" rel="noreferrer">
            github.com/{GH_USERNAME}
          </a>
          .
        </p>
      )}

      {state !== "error" && (
        <>
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="glass rounded-2xl p-6">
              <Github size={16} className="text-ledger-400" />
              <p className="mt-3 font-display text-2xl text-bone">
                {state === "loading" ? "—" : user?.public_repos}
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-bone-faint">
                Public repositories
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <Users size={16} className="text-ledger-400" />
              <p className="mt-3 font-display text-2xl text-bone">
                {state === "loading" ? "—" : user?.followers}
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-bone-faint">
                Followers
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <Star size={16} className="text-ledger-400" />
              <p className="mt-3 font-display text-2xl text-bone">
                {state === "loading"
                  ? "—"
                  : repos.reduce((sum, r) => sum + r.stargazers_count, 0)}
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-bone-faint">
                Stars (top 6 repos)
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {state === "loading"
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className="glass h-36 animate-pulse rounded-2xl"
                  />
                ))
              : repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="glass block rounded-2xl p-6 transition-colors hover:border-ledger-400/30"
                  >
                    <p className="truncate font-display text-lg text-bone">{repo.name}</p>
                    <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm text-bone-muted">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-4 flex items-center gap-4 font-mono text-xs text-bone-faint">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="inline-flex items-center gap-1">
                        <Star size={12} /> {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork size={12} /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
          </div>
        </>
      )}
    </section>
  );
}
