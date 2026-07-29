export interface SkillGroup {
  domain: string;
  summary: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    domain: "AI & Machine Learning",
    summary: "LLM integration, AI agents, and offline-first intelligent workflows.",
    items: [
      "LLM Integration",
      "AI Agents",
      "Ollama",
      "DeepSeek / QwenCoder",
      "NLP",
      "Prompt Engineering",
      "RAG Pipelines",
    ],
  },
  {
    domain: "Full-Stack Development",
    summary: "End-to-end product engineering, from API to interface.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Node.js",
      "PostgreSQL / SQLite",
    ],
  },
  {
    domain: "Blockchain & Web3",
    summary: "Chain-level engineering, not just smart-contract scripting.",
    items: [
      "Layer-1 Design",
      "Proof-of-Work Consensus",
      "ECDSA Wallets",
      "Smart Contracts",
      "Tokenomics",
      "REST API Design",
    ],
  },
  {
    domain: "Automation & Cybersecurity",
    summary: "OSINT tooling, threat intelligence, and workflow automation.",
    items: [
      "OSINT",
      "Threat Intelligence",
      "DNS / WHOIS Investigation",
      "CI/CD",
      "Workflow Automation",
      "Termux / Mobile-Native Tooling",
    ],
  },
  {
    domain: "Product & Founder Craft",
    summary: "Taking products from architecture to a shipped ecosystem.",
    items: [
      "Product Architecture",
      "SaaS Strategy",
      "Technical SEO / AEO / GEO",
      "Open-Source Maintenance",
      "Startup Advisory",
    ],
  },
];
