export type ProjectStatus = "live" | "mvp" | "open-source" | "in-development" | "upcoming";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "sayanjali-blockchain",
    name: "SAYANJALI BLOCKCHAIN",
    tagline: "An independent Layer-1 blockchain, built from scratch in Python",
    description:
      "The native settlement layer for the SYJ Token — not a token on someone else's chain. Its own block format, consensus engine, and node software: Proof-of-Work consensus, ECDSA wallets, signed transactions, a SQLAlchemy persistence layer, a REST API, and a CLI, backed by 37 passing tests.",
    status: "mvp",
    statusLabel: "v0.1.0-mvp · Live on GitHub",
    category: "Blockchain",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Proof-of-Work", "ECDSA"],
    liveUrl: "https://shalimoosavi.github.io/syj-blockchain-web/",
    repoUrl: "https://github.com/SHalimoosavi/SAYANJALI-BLOCKCHAIN",
    highlight: "37 passing tests",
    featured: true,
  },
  {
    slug: "syj-ai",
    name: "SYJ AI",
    tagline: "Local-first autonomous AI software engineering agent",
    description:
      "Plans, codes, reviews, and verifies real files — not chat text — running entirely offline through Ollama. Mobile-native from Android/Termux to Linux, Windows, and macOS. An 8-stage workflow (plan, research, design, code, review, verify, optimize, document) pairs a DeepSeek reasoning model with QwenCoder for generation.",
    status: "open-source",
    statusLabel: "Open Source · MIT Licensed",
    category: "Artificial Intelligence",
    tech: ["Python", "Ollama", "DeepSeek", "QwenCoder", "Termux"],
    liveUrl: "https://shalimoosavi.github.io/SYJ-AI-Landing/",
    repoUrl: "https://github.com/SHalimoosavi/SYJ-AI",
    highlight: "Runs fully offline",
    featured: true,
  },
  {
    slug: "syj-token",
    name: "SYJ Token",
    tagline: "The utility token powering the SAYANJALI ecosystem",
    description:
      "Settles natively on SAYANJALI BLOCKCHAIN, with planned use cases across AI, SaaS, automation, education, and blockchain services — service payments, a rewards system, education-tool access, logistics integration, and a digital services marketplace.",
    status: "in-development",
    statusLabel: "Web3 · Token Economy",
    category: "Blockchain",
    tech: ["Web3", "Tokenomics", "Smart Contracts"],
    liveUrl: "https://shalimoosavi.github.io/SYJ-TOKEN/",
    featured: true,
  },
  {
    slug: "syj-talentflow-cli",
    name: "SYJ TalentFlow CLI",
    tagline: "AI-powered recruitment automation for the terminal",
    description:
      "An open-source, MIT-licensed CLI that parses resumes, scores candidates against a job description with AI, ranks them into Shortlisted / Review / Rejected, and drafts interview kits and recruiter emails — cross-platform with zero native dependencies, including Android Termux.",
    status: "open-source",
    statusLabel: "Open Source · v1.0.0",
    category: "Automation",
    tech: ["Node.js", "Anthropic API", "OpenAI API", "OpenRouter"],
    liveUrl: "https://shalimoosavi.github.io/SYJ-TalentFlow-Cli-Web/",
    repoUrl: "https://github.com/SHalimoosavi/SYJ-TalentFlow-Cli",
    highlight: "5-command pipeline",
    featured: true,
  },
  {
    slug: "syj-educate",
    name: "SYJ Educate",
    tagline: "Learn software engineering by shipping real projects",
    description:
      "A free, open-source curriculum in AI engineering, backend systems, databases, cybersecurity, OSINT, automation, and SaaS architecture — nine tracks, each pairing a structured curriculum with real, production-grade repositories instead of toy tutorials.",
    status: "open-source",
    statusLabel: "100% Open Source · MIT Licensed",
    category: "Education Technology",
    tech: ["FastAPI", "PostgreSQL", "Next.js", "Docker"],
    liveUrl: "https://shalimoosavi.github.io/SYJ-EDU/index.html",
    repoUrl: "https://github.com/SHalimoosavi/SYJ-Educate",
    highlight: "9 learning tracks",
  },
  {
    slug: "syj-canvasforge",
    name: "SYJ CanvasForge",
    tagline: "Browser-based PDF & image editor",
    description:
      "A free, open-source, browser-based PDF and image editor — crop, annotate, merge, and export files entirely client-side, without ever uploading them to a server.",
    status: "open-source",
    statusLabel: "Open Source",
    category: "Productivity Tools",
    tech: ["JavaScript", "Canvas API", "Client-Side PDF"],
    liveUrl: "https://shalimoosavi.github.io/SYJ-CanvasForge/",
    repoUrl: "https://github.com/SHalimoosavi/SYJ-CanvasForge",
    highlight: "Zero server uploads",
  },
  {
    slug: "syj-opentrade-logic",
    name: "SYJ OpenTrade Logic",
    tagline: "Deterministic, explainable HTS trade-classification engine",
    description:
      "An open-source engine implementing the actual General Rules of Interpretation (GRI) that customs authorities use — a DAG traversal over a 99-chapter, 17,000+ record HTS tariff tree — built to replace black-box AI classifiers with auditable, decision-path-backed trade compliance. AI assists; it never decides.",
    status: "in-development",
    statusLabel: "v0.3.0 · 26 tests passing",
    category: "Enterprise / Trade Compliance",
    tech: ["Python", "FastAPI", "SQLAlchemy", "GRI Rules Engine"],
    repoUrl: "https://github.com/SHalimoosavi/SYJ-OpenTrade-Logic",
    highlight: "Zero-dependency core engine",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const PROJECT_CATEGORIES = Array.from(
  new Set(PROJECTS.map((p) => p.category))
);
