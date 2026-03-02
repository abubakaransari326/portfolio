export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  bullets: string[];
  techStack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "nakisa-software-developer",
    title: "Software Developer",
    company: "Nakisa Inc.",
    location: "Lahore, Pakistan",
    startDate: "2022-06",
    endDate: "2024-07",
    bullets: [
      "Led migration of a shared analytics platform from Vue 2 to Vue 3, modernizing the frontend architecture and improving performance across three dependent enterprise applications.",
      "Owned end-to-end feature delivery, from clarifying product requirements to implementing backend APIs and frontend UI components.",
      "Designed and implemented a dynamic configuration management system that enabled user-customizable UI components without breaking future platform updates.",
      "Built a JSON Patch–based delta system to persist user-specific configuration overrides while keeping a clean set of base defaults.",
      "Collaborated with cross-functional teams to ship production-ready features on tight timelines while balancing long-term architecture needs.",
      "Proactively identified architectural bottlenecks and refactored legacy components to improve maintainability and developer velocity.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "Vue.js (2 & 3)",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    id: "ubl-technology-analyst",
    title: "Technology Analyst",
    company: "United Bank Limited",
    location: "Lahore, Pakistan",
    startDate: "2020-08",
    endDate: "2022-06",
    bullets: [
      "Automated mission-critical operational workflows, including firewall updates and daily performance monitoring across nationwide branches, using Python.",
      "Cut manual workload by roughly 50% through script-driven automation and internal tooling.",
      "Built reusable internal tools that improved operational reliability and reduced incident response times.",
      "Developed and maintained secure integration APIs connecting core banking systems with external financial networks in a service-oriented architecture.",
      "Designed scalable message flows with IBM Integration Bus to ensure high availability and reliable data exchange.",
      "Owned API deployments, testing, and validation to ensure production stability in a high-compliance banking environment.",
    ],
    techStack: [
      "Python",
      "IBM Integration Bus (IIB)",
      "REST APIs",
      "SOAP",
      "SQL",
    ],
  },
];

