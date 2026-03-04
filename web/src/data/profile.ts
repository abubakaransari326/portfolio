export type SocialLinkId = "github" | "linkedin" | "x" | "email" | "website";

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  summary: string;
  fullSummary: string;
  currentRole?: string;
  socialLinks: SocialLink[];
};

export const profile: Profile = {
  name: "Abu Bakar",
  title: "Full-Stack Software Engineer",
  location: "Jersey City, NJ, USA",
  summary:
    "I build reliable, and scalable systems.",
  fullSummary: `I'm a full-stack software engineer with 4+ years of experience building production-ready applications across frontend and backend systems. I specialize in designing APIs, database-driven applications, and modern web interfaces using Java, Spring Boot, JavaScript, and Vue.js. I enjoy working at the intersection of product and engineering, where clear requirements meet robust, maintainable code.

Currently, I'm an MS student in Computer Science at Stevens Institute of Technology and a Fulbright Scholar, deepening my foundation in system design, databases, and scalable architectures. In parallel, I'm actively exploring ML/AI through coursework in NLP, deep learning, and computer vision.

Previously, I've worked in enterprise software and fintech—at Nakisa Inc., I led the migration of a shared analytics platform from Vue.js 2 to Vue.js 3, modernizing the frontend architecture across multiple applications and building dynamic configuration systems with JSON Patch-based deltas. At United Bank Limited, I automated mission-critical workflows, developed integration APIs for core banking systems, and designed scalable message flows in a high-compliance environment. These experiences have shaped how I think about building systems that are both well-architected and practical to ship.`,
  currentRole:
    "MS Computer Science student at Stevens Institute of Technology · Fulbright Scholar",
  socialLinks: [
    {
      id: "email",
      label: "Email",
      url: "mailto:anoorulh@stevens.edu",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abubakaransari326",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/abubakaransari326",
    },
  ],
};

