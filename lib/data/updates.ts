export interface UpdateEntry {
  slug: string;
  version: string;
  project: string;
  title: string;
  summary: string;
  url?: string;
}

// Ordered most-recent-first by release sequence. Dates are intentionally
// omitted — only real GitHub release/commit timestamps should be shown, and
// those aren't wired in yet (see GitHubActivity for the live-fetched data).
export const UPDATES: UpdateEntry[] = [
  {
    slug: "syj-opentrade-logic-v0-3-0",
    version: "v0.3.0",
    project: "SYJ OpenTrade Logic",
    title: "OpenTrade Logic moves to a real FastAPI + SQLAlchemy service",
    summary:
      "The GRI classification engine now imports the full 99-chapter, 17,000+ record USITC dataset and exposes a persisted REST API — 26 tests passing, live against real tariff data.",
    url: "https://github.com/SHalimoosavi/SYJ-OpenTrade-Logic",
  },
  {
    slug: "syj-educate-v1-4-0",
    version: "v1.4.0",
    project: "SYJ Educate",
    title: "SYJ Educate adds an Agriculture industry track",
    summary:
      "A farm-labour management build mirroring a real EU-market MVP, covering scheduling, compliance, and reporting — the curriculum's first cross-industry project track.",
    url: "https://shalimoosavi.github.io/SYJ-EDU/index.html",
  },
  {
    slug: "syj-talentflow-cli-v1-0-0",
    version: "v1.0.0",
    project: "SYJ TalentFlow CLI",
    title: "TalentFlow CLI reaches v1.0.0",
    summary:
      "Resume parsing, AI-assisted candidate ranking, interview-kit generation, and recruiter email drafting — a five-command pipeline that runs identically on Windows, Linux, macOS, and Android Termux.",
    url: "https://github.com/SHalimoosavi/SYJ-TalentFlow-Cli",
  },
  {
    slug: "sayanjali-blockchain-v0-1-0-mvp",
    version: "v0.1.0-mvp",
    project: "SAYANJALI BLOCKCHAIN",
    title: "SAYANJALI BLOCKCHAIN ships its first MVP",
    summary:
      "An independent Layer-1 chain built from scratch in Python: Proof-of-Work consensus, ECDSA wallets, signed transactions, a SQLAlchemy persistence layer, a REST API, and a CLI — 37 passing tests.",
    url: "https://github.com/SHalimoosavi/SAYANJALI-BLOCKCHAIN",
  },
  {
    slug: "syj-ai-v0-1-0",
    version: "v0.1.0",
    project: "SYJ AI",
    title: "SYJ AI open-sources a local-first coding agent",
    summary:
      "An 8-stage plan → research → design → code → review → verify → optimize → document workflow, pairing DeepSeek for reasoning with QwenCoder for generation — fully offline through Ollama.",
    url: "https://shalimoosavi.github.io/SYJ-AI-Landing/",
  },
];
