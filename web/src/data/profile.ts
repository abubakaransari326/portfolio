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
    "I build reliable, scalable applications across the full stack — from APIs and databases to modern web interfaces.",
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

