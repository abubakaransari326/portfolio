export type Project = {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  techStack: string[];
  role?: string;
  link?: string;
  sourceCodeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "multi-feature-query-processor",
    name: "Multi-Feature Query Processor (MF / EMF Engine)",
    description:
      "Custom OLAP query processing engine for complex analytical workloads using Multi-Feature (MF) and Extended Multi-Feature (EMF) query syntax.",
    highlights: [
      "Implemented MF/EMF-based query processing inspired by academic research on advanced OLAP evaluation.",
      "Designed an in-memory MF structure to evaluate complex aggregation queries without relying on PostgreSQL's native optimizer.",
      "Enabled efficient execution of multi-scan, multi-grouping queries with higher expressiveness than standard SQL.",
      "Demonstrated performance and flexibility advantages over naïve SQL approaches for advanced analytical workloads.",
    ],
    techStack: ["Python", "PostgreSQL"],
    role: "Individual project",
  },
  {
    slug: "project-management-web-app",
    name: "Project Management Web Application",
    description:
      "Full-stack project management platform supporting project creation, task assignment, user management, and timeline tracking.",
    highlights: [
      "Implemented core project management features including task assignment, user management, and timeline tracking.",
      "Built critical path analysis, project cost calculation, and dynamic schedule updates to reflect changes in real time.",
      "Designed interactive dashboards with Gantt charts and visual analytics to monitor project progress and budgets.",
      "Developed RESTful backend APIs with Spring Boot and a responsive frontend using Vue.js and Quasar, backed by MySQL.",
    ],
    techStack: ["Java", "Spring Boot", "Vue.js", "Quasar", "MySQL"],
    role: "Full-stack development",
  },
  {
    slug: "kisaan-rehnuma-android-app",
    name: "Kisaan Rehnuma – Android Application for Farmers",
    description:
      "Android application built in collaboration with Fauji Fertilizer Company (FFC) to support farmers with data-driven agricultural planning.",
    highlights: [
      "Integrated features such as weather forecasting, fertilizer recommendations, soil testing requests, and expert consultation.",
      "Enabled farmers to order soil testing services online and access customized crop recommendations.",
      "Implemented Firebase-based authentication, real-time data storage, and cloud messaging.",
      "Designed a multilingual, accessibility-focused UI tailored for non-technical users in rural environments.",
    ],
    techStack: ["Kotlin", "Android", "Firebase"],
    role: "Android development",
  },
];

