export interface TimelineEntry {
  phase: string;
  status: "done" | "current" | "planned";
  title: string;
  description: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    phase: "Phase 1",
    status: "done",
    title: "Foundation — Product Ecosystem Build-out",
    description:
      "Building SaaS platforms, AI tools, and establishing the technical infrastructure of the SAYANJALI NEXUS ecosystem.",
  },
  {
    phase: "Phase 2",
    status: "done",
    title: "SAYANJALI BLOCKCHAIN MVP shipped (v0.1.0-mvp)",
    description:
      "Layer-1 chain live on GitHub: Proof-of-Work consensus, wallets, signed transactions, persistent storage, a REST API, and a CLI — 37 passing tests.",
  },
  {
    phase: "Phase 3",
    status: "current",
    title: "MVP Launch & Revenue",
    description:
      "Launching NexusIntel AI and NexusRank AI to market, establishing revenue streams and building the user base.",
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: "Token & Network — P2P, SYJ Token Genesis & Marketplace",
    description:
      "Multi-node peer-to-peer synchronization, SYJ Token launch on-chain, a block explorer, and a decentralized digital services marketplace.",
  },
];
