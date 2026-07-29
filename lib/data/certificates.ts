const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Me" : "";

export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  category: "Certification" | "Recognition";
  description: string;
  date?: string;
  verifyUrl?: string;
  image: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    slug: "google-ai-for-data-analysis",
    title: "AI for Data Analysis",
    issuer: "Google, via Coursera",
    category: "Certification",
    description:
      "Course certificate authorized by Google and offered through Coursera, covering applied AI techniques for data analysis.",
    date: "June 19, 2026",
    verifyUrl: "https://coursera.org/verify/5N45H7HJO3BF",
    image: `${BASE_PATH}/certificates/google-ai-data-analysis.jpg`,
  },
  {
    slug: "vanderbilt-prompt-engineering",
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University, via Coursera",
    category: "Certification",
    description:
      "Course certificate authorized by Vanderbilt University's Department of Computer Science and offered through Coursera.",
    date: "June 19, 2026",
    verifyUrl: "https://coursera.org/verify/CAH5NWWMXB5J",
    image: `${BASE_PATH}/certificates/vanderbilt-prompt-engineering.jpg`,
  },
  {
    slug: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Certification",
    description:
      "Covers machine learning, deep learning, natural language processing, computer vision, and neural networks.",
    date: "May 24, 2026",
    verifyUrl:
      "https://www.credly.com/badges/e7aaccd2-3990-42d2-be5d-7789d023bfb9",
    image: `${BASE_PATH}/certificates/ibm-ai-fundamentals.jpg`,
  },
  {
    slug: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    issuer:
      "Anthropic, with University College Cork, Ringling College of Art & Design, and the Higher Education Authority",
    category: "Certification",
    description:
      "Certificate of completion for AI Fluency: Framework & Foundations, delivered in partnership with the listed academic institutions.",
    image: `${BASE_PATH}/certificates/anthropic-ai-fluency.jpg`,
  },
  {
    slug: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Certification",
    description:
      "Covers prompt engineering, Claude Projects & Artifacts, Skills & Connectors, and agentic workflows.",
    image: `${BASE_PATH}/certificates/anthropic-claude-101.jpg`,
  },
  {
    slug: "saudi-aramco-appreciation",
    title: "Certificate of Appreciation",
    issuer: "Saudi Aramco",
    category: "Recognition",
    description:
      "Awarded for extraordinary support and effort supporting the COVID-19 transportation mission, ensuring safe, reliable, and successful operations.",
    image: `${BASE_PATH}/certificates/saudi-aramco.jpg`,
  },
  {
    slug: "mowasalat-fifa-world-cup-2022",
    title: "Certificate of Appreciation — FIFA World Cup Qatar 2022",
    issuer: "Mowasalat",
    category: "Recognition",
    description:
      "Awarded for participating in tournament transportation for the FIFA World Cup Qatar 2022, in recognition of dedication, professionalism, and commitment.",
    image: `${BASE_PATH}/certificates/mowasalat-fifa.jpg`,
  },
];

export const CERTIFICATE_CATEGORIES = [
  "Certification",
  "Recognition",
] as const;
