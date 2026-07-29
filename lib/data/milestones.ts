export interface Milestone {
  metric: string;
  label: string;
  detail: string;
}

// Real, verifiable build milestones — separate from the real Certificates
// section (see lib/data/certificates.ts). These are checkable in code
// (test suites, repo history) rather than issued credentials.
export const MILESTONES: Milestone[] = [
  {
    metric: "37",
    label: "Passing tests on SAYANJALI BLOCKCHAIN",
    detail: "Layer-1 Proof-of-Work chain, v0.1.0-mvp — ECDSA wallets, signed transactions, REST API, CLI.",
  },
  {
    metric: "9+",
    label: "Open-source repositories shipped",
    detail: "MIT and Apache-2.0 licensed tools spanning AI, security, education, and trade compliance.",
  },
  {
    metric: "26",
    label: "Passing tests on SYJ OpenTrade Logic",
    detail: "Deterministic GRI classification engine tested against the live USITC 99-chapter HTS dataset.",
  },
  {
    metric: "137",
    label: "Automated tests on SYJ GST Reconciliation",
    detail: "Offline GST reconciliation tool for Indian businesses, at roughly 90% coverage.",
  },
  {
    metric: "9",
    label: "Learning tracks published on SYJ Educate",
    detail: "Free, MIT-licensed curriculum in AI, backend, database, frontend, security, and OSINT engineering.",
  },
  {
    metric: "0",
    label: "Cloud dependency in SYJ AI",
    detail: "Local-first autonomous coding agent — plans, codes, and verifies entirely offline via Ollama.",
  },
];
