export type SkillGroupId =
  | "languages"
  | "backend"
  | "frontend"
  | "databases"
  | "cloud_devops"
  | "ml_ai"
  | "tools";

export type Skill = {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  highlight?: boolean;
};

export type SkillGroup = {
  id: SkillGroupId;
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Programming Languages",
    skills: [
      { name: "Java", level: "advanced", highlight: true },
      { name: "Python", level: "advanced", highlight: true },
      { name: "JavaScript", level: "advanced", highlight: true },
      { name: "C++", level: "intermediate" },
      { name: "SQL", level: "advanced" },
      { name: "ESQL", level: "intermediate" },
      { name: "LaTeX", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    skills: [
      { name: "Spring Boot", level: "advanced", highlight: true },
      { name: "Hibernate", level: "intermediate" },
      { name: "RESTful APIs", level: "advanced", highlight: true },
      { name: "Microservices", level: "intermediate" },
      { name: "SOA", level: "intermediate" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Vue.js 2", level: "advanced", highlight: true },
      { name: "Vue.js 3", level: "advanced", highlight: true },
      { name: "Quasar Framework", level: "advanced" },
      { name: "HTML & CSS", level: "advanced" },
      { name: "JavaScript (ES6+)", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: "advanced", highlight: true },
      { name: "MySQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Firebase Realtime DB", level: "intermediate" },
    ],
  },
  {
    id: "cloud_devops",
    label: "Cloud & Deployment",
    skills: [
      { name: "AWS EC2", level: "intermediate" },
      { name: "AWS S3", level: "intermediate" },
      { name: "Serverless Concepts", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
      { name: "Kubernetes", level: "beginner" },
    ],
  },
  {
    id: "ml_ai",
    label: "ML / AI",
    skills: [
      { name: "TensorFlow", level: "intermediate" },
      { name: "PyTorch", level: "intermediate" },
      { name: "NLP", level: "intermediate" },
      { name: "Deep Learning", level: "intermediate" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git", level: "advanced", highlight: true },
      { name: "Cursor", level: "advanced" },
      { name: "GitHub Copilot", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "Kubernetes", level: "beginner" },
      { name: "IntelliJ IDEA", level: "advanced" },
      { name: "VS Code", level: "advanced" },
      { name: "Anaconda", level: "intermediate" },
    ],
  },
];

