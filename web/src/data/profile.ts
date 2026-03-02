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
  currentRole?: string;
  socialLinks: SocialLink[];
};

export const profile: Profile = {
  name: "Abu Bakar Noor Ul Hassan",
  title: "Full-Stack Software Engineer",
  location: "Jersey City, NJ, USA",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building and shipping production-ready applications across frontend and backend systems. Strong focus on API design, database-driven applications, and modern web interfaces using Java, Spring Boot, JavaScript, and Vue.js.",
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

