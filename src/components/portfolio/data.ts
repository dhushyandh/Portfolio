export const NAV = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
  { id: "achievements", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Full Stack Developer",
  "Freelance Web Developer",
  "AI & Cloud Enthusiast",
];

export const STATS = [
  { value: "4", label: "Featured projects" },
  { value: "2+", label: "Client projects" },
  { value: "2023", label: "Started engineering" },
  { value: "∞", label: "Things to build" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  tint: string;
  github: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "renewx-crew",
    title: "RenewX Crew",
    category: "Product · Client Project",
    description:
      "A product-focused marketplace experience for refurbished devices, built around real-world commerce flows, responsive UX, and a mobile-ready architecture.",
    tags: ["Full Stack", "E-commerce", "Responsive", "Product"],
    tint: "oklch(0.31 0.10 290)",
    github: "https://github.com/dhushyandh/RenewXCrew",
    live: "https://renewx.dhushyandh.in",
  },
  {
    slug: "sri-guru-coaching-centre",
    title: "Sri Guru Coaching Centre",
    category: "Client · Freelance",
    description:
      "A real client website created to give an educational coaching centre a professional digital presence with clear information architecture and responsive presentation.",
    tags: ["Client Work", "Web Design", "Responsive", "SEO"],
    tint: "oklch(0.31 0.09 205)",
    github: "https://github.com/dhushyandh/SriGuruCoachingCentre",
    live: "https://srigurucoaching.in",
  },
  {
    slug: "project-management-app",
    title: "Project Management App",
    category: "Personal · Full Stack",
    description:
      "A personal project to explore full-stack development and create a simple project management application.",
    tags: ["Personal", "UI", "Responsive", "Full Stack"],
    tint: "oklch(0.31 0.09 155)",
    github: "https://github.com/dhushyandh/ProjectManagement",
    live: "https://projectmanage.dhushyandh.me",
  },
  {
    slug: "ai-budget-utilization-monitoring",
    title: "AI-Based Budget Utilization Monitoring System",
    category: "Academic · AI",
    description:
      "An AI-oriented monitoring system for analysing budget-utilization data and presenting useful insights through a web-based interface.",
    tags: ["AI", "Data", "Analytics", "Web App"],
    tint: "oklch(0.31 0.10 70)",
    github: "https://github.com/dhushyandh",
  },
];

export const SKILL_GROUPS = [
  {
    label: "Frontend",
    icon: "code",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  { label: "Backend", icon: "server", items: ["Node.js", "Express.js", "REST API"] },
  { label: "Database", icon: "database", items: ["MongoDB", "PostgreSQL", "Prisma"] },
  { label: "Cloud", icon: "cloud", items: ["AWS", "Vercel", "Render", "Docker"] },
  { label: "Tools", icon: "wrench", items: ["Git", "GitHub", "Postman", "VS Code", "Figma"] },
] as const;

export type ExperienceItem = {
  slug: string;
  icon: "briefcase" | "git" | "cap";
  title: string;
  org: string;
  period: string;
  description: string;
  type: "Freelance" | "Internship" | "Development" | "Education";
  tint: string;
};

export const TIMELINE: ExperienceItem[] = [
  {
    slug: "freelance-full-stack-developer",
    icon: "briefcase",
    title: "Freelance Full Stack Developer",
    org: "Independent",
    period: "Aug 2026 — Present",
    type: "Freelance",
    tint: "oklch(0.31 0.10 290)",
    description:
      "Building and delivering real client websites and product-oriented applications, handling requirements, UI development, full-stack implementation, deployment, and iteration.",
  },
  {
    slug: "unified-mentor-full-stack-internship",
    icon: "briefcase",
    title: "Full Stack Developer Intern",
    org: "Unified Mentor Pvt. Ltd.",
    period: "Aug 2026 — Oct 2026",
    type: "Internship",
    tint: "oklch(0.31 0.09 205)",
    description:
      "A 3-month full-stack development internship focused on practical application development and strengthening frontend, backend, database, API, and deployment workflows.",
  },
  {
    slug: "codec-technologies-mern-internship",
    icon: "briefcase",
    title: "MERN Stack Developer Intern",
    org: "Codec Technologies",
    period: "Feb 2026 — Mar 2026",
    type: "Internship",
    tint: "oklch(0.31 0.09 155)",
    description:
      "Worked as a MERN stack development intern, gaining practical experience across React, Node.js, Express, MongoDB, API development, and full-stack application workflows.",
  },
  {
    slug: "project-based-software-development",
    icon: "git",
    title: "Project-Based Software Development",
    org: "Independent",
    period: "2025 — Present",
    type: "Development",
    tint: "oklch(0.31 0.10 70)",
    description:
      "Built and explored full-stack applications across modern frontend development, backend APIs, databases, authentication, cloud technologies, and AI-assisted workflows.",
  },
  {
    slug: "be-computer-science-engineering",
    icon: "cap",
    title: "B.E. Computer Science Engineering",
    org: "C. Abdul Hakeem College of Engineering and Technology · Anna University",
    period: "2023 — 2027",
    type: "Education",
    tint: "oklch(0.31 0.09 250)",
    description:
      "Pursuing Computer Science Engineering alongside continuous project-based learning in software engineering, web development, systems, cloud technologies, and application development.",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    slug: "aws-technical-essentials",
    icon: "cloud",
    title: "AWS Technical Essentials",
    description:
      "Cloud fundamentals and AWS learning experience.",
  },
  {
    slug: "ibm-web-development",
    icon: "award",
    title: "IBM Web Development",
    description:
      "IBM learning covering HTML, CSS, and JavaScript fundamentals.",
  },
  {
    slug: "amazon-full-stack-web-development",
    icon: "book",
    title: "Amazon Full Stack Web Development",
    description:
      "Full-stack web development learning and project work.",
  },
  {
    slug: "oracle-cloud-infrastructure",
    icon: "trophy",
    title: "Oracle Cloud Infrastructure",
    description:
      "Cloud infrastructure learning through Oracle.",
  },
  {
    slug: "google-cloud-cybersecurity",
    icon: "cloud",
    title: "Google Cloud Cybersecurity Certificate",
    description:
      "Cybersecurity foundations and cloud security learning through Google.",
  },
  {
    slug: "mern-stack-development",
    icon: "award",
    title: "MERN Stack Development",
    description:
      "Full-stack JavaScript development across MongoDB, Express, React, and Node.js.",
  },
] as const;

export const GITHUB_STATS = [
  { icon: "git", value: "13", label: "Public Repos" },
  { icon: "star", value: "36", label: "Stars Earned" },
  { icon: "users", value: "5", label: "Followers" },
] as const;

export const REPOS = [
  {
    name: "ProjectManagement",
    description: "A full-stack project management platform.",
    language: "JavaScript",
    stars: 6,
    updated: "May 2026",
  },
  {
    name: "AIResumeAnalyser",
    description: "AI-powered resume analysis tool.",
    language: "TypeScript",
    stars: 4,
    updated: "July 2026",
  },
  {
    name: "Ecommerce-Website",
    description: "MERN e-commerce application.",
    language: "JavaScript",
    stars: 4,
    updated: "Jan 2026",
  },

];

export const LANGUAGES = [
  { name: "JavaScript", percent: 58, color: "#f1e05a" },
  { name: "Python", percent: 25, color: "#3572A5" },
  { name: "TypeScript", percent: 8, color: "#3178c6" },
  { name: "HTML", percent: 8, color: "#e34c26" },
];
