export interface TechItem {
  name: string;
  group: "Languages" | "Frameworks" | "AI / Data" | "Infra & Tools";
}

export const TECH_STACK: TechItem[] = [
  { name: "Python", group: "Languages" },
  { name: "TypeScript", group: "Languages" },
  { name: "JavaScript", group: "Languages" },
  { name: "Solidity", group: "Languages" },
  { name: "Next.js", group: "Frameworks" },
  { name: "React", group: "Frameworks" },
  { name: "FastAPI", group: "Frameworks" },
  { name: "Node.js", group: "Frameworks" },
  { name: "Tailwind CSS", group: "Frameworks" },
  { name: "Ollama", group: "AI / Data" },
  { name: "DeepSeek", group: "AI / Data" },
  { name: "QwenCoder", group: "AI / Data" },
  { name: "Anthropic API", group: "AI / Data" },
  { name: "OpenAI API", group: "AI / Data" },
  { name: "PostgreSQL", group: "AI / Data" },
  { name: "SQLite", group: "AI / Data" },
  { name: "SQLAlchemy", group: "AI / Data" },
  { name: "Docker", group: "Infra & Tools" },
  { name: "GitHub Actions", group: "Infra & Tools" },
  { name: "Termux", group: "Infra & Tools" },
  { name: "GSAP", group: "Infra & Tools" },
  { name: "Three.js", group: "Infra & Tools" },
];
