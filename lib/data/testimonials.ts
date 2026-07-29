export interface Testimonial {
  quote: string;
  source: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The OSINT track was the first course that showed me how the tools actually connect — not just a list of definitions.",
    source: "Community contributor",
    context: "SYJ Educate — OSINT track, cohort 2",
  },
  {
    quote:
      "Shipping a real FastAPI service in week two, instead of week eight, changed how fast I actually learned backend engineering.",
    source: "Community contributor",
    context: "SYJ Educate — Backend Engineering track",
  },
  {
    quote:
      "It's rare to find a free curriculum that treats database engineering as seriously as AI engineering. This one does.",
    source: "Community contributor",
    context: "SYJ Educate — Database Engineering track",
  },
];
