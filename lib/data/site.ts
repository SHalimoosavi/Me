export const SITE = {
  name: "Syed Ali Hasan Moosavi",
  shortName: "Moosavi",
  title:
    "Syed Ali Hasan Moosavi | AI Engineer | Full Stack Developer | Founder | Blockchain Developer",
  description:
    "Syed Ali Hasan Moosavi is an AI Engineer, Full Stack Developer, Blockchain Developer and Founder of SAYANJALI NEXUS PRIVATE LIMITED. Explore AI products, Web3 applications, SaaS platforms, automation tools, open-source projects, research, experience, certifications and innovative software engineering solutions.",
  url: "https://shalimoosavi.github.io/moosavi-v2", // update to final deployment URL
  locale: "en_US",
  role: "Founder & Managing Director",
  company: "SAYANJALI NEXUS PRIVATE LIMITED",
  location: {
    city: "Hyderabad",
    region: "Telangana",
    country: "India",
    lat: 17.385,
    lng: 78.4867,
  },
  taglineWords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Blockchain Developer",
    "SaaS Architect",
    "Open-Source Builder",
    "Founder",
  ],
  bio: {
    short:
      "Software architect, AI innovator, and ecosystem builder based in Hyderabad, India, building a portfolio of AI-powered SaaS platforms, business automation tools, and open-source developer tools under the SYJ brand.",
    long: [
      "Syed Ali Hasan Moosavi is a technology entrepreneur building intelligent digital infrastructure. Through SAYANJALI NEXUS PRIVATE LIMITED, he develops AI-powered SaaS platforms, business automation tools, cybersecurity intelligence systems, and open-source developer tools.",
      "His work spans the full stack — from product strategy and architecture to frontend design and backend infrastructure — with a strong emphasis on practical applications of machine learning, natural language processing, and real-time data systems.",
      "His long-term mission is the SAYANJALI NEXUS ecosystem: a unified platform combining AI, blockchain, logistics, education technology, and digital services — infrastructure for the next generation of digital business.",
    ],
  },
  stats: [
    { label: "Products & Tools", value: "10+" },
    { label: "Blockchain Shipped", value: "L1" },
    { label: "Open Source Repos", value: "9+" },
    { label: "Based, Global Reach", value: "HYD" },
  ],
  social: {
    github: "https://github.com/SHalimoosavi",
    linkedin: "https://www.linkedin.com/in/syed-ali-hasan-moosavi-3b13782a7",
    twitter: "https://x.com/SHAliMoosavi",
    email: "cto@sayanjalinexus.com",
    emailPersonal: "shalimoosavi@gmail.com",
    whatsapp: "https://wa.me/918008123605",
    whatsappAlt: "https://wa.me/916304225807",
    phone: "+918008123605",
  },
  // No resume PDF has been supplied yet — this points at LinkedIn as a working
  // stand-in. Drop a real PDF at /public/resume.pdf and change this to
  // "/resume.pdf" once it exists; every "Resume" button reads from here.
  resumeUrl: "https://www.linkedin.com/in/syed-ali-hasan-moosavi-3b13782a7",
  ecosystem: [
    {
      title: "Artificial Intelligence",
      copy: "LLM integration, AI agents, NLP, predictive analytics, and intelligent automation.",
    },
    {
      title: "SaaS Platforms",
      copy: "Multi-tenant cloud applications for revenue intelligence, SEO, and enterprise workflows.",
    },
    {
      title: "Business Automation",
      copy: "Workflow automation, CRM integrations, data pipelines, and reporting systems.",
    },
    {
      title: "Blockchain",
      copy: "SYJ Token, smart contracts, decentralized identity, and Web3 infrastructure.",
    },
    {
      title: "Education Technology",
      copy: "AI-powered study tools, offline-first learning systems, and knowledge management.",
    },
    {
      title: "Cyber Intelligence",
      copy: "OSINT platforms, threat intelligence, DNS and domain investigation tools.",
    },
  ],
} as const;
