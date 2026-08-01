export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Full Stack Developer.",
  "Cloud Engineer.",
  "AI Enthusiast.",
  "Problem Solver.",
];

export const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "2+", label: "Years Coding" },
  { value: "1", label: "Degree in Progress" },
];

export const PROJECTS = [
  {
    title: "Project Workspace Management",
    description:
      "Enterprise-style workspace collaboration platform with authentication, role management, and project organization.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Clerk"],
    tint: "oklch(0.28 0.09 264)",
    github: "https://github.com/dhushyandh",
  },
  {
    title: "SmartMart",
    description:
      "Full-stack e-commerce application featuring authentication, payments, image uploads, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    tint: "oklch(0.28 0.09 150)",
    github: "https://github.com/dhushyandh",
  },
  {
    title: "AI Blog Platform",
    description:
      "Blogging platform with AI-assisted writing, rich text editing, and content moderation built on a modern stack.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    tint: "oklch(0.27 0.09 320)",
    github: "https://github.com/dhushyandh",
  },
  {
    title: "AI Interview Platform",
    description:
      "Mock interview experience with AI-generated questions, real-time feedback, and performance tracking.",
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    tint: "oklch(0.28 0.09 70)",
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

export const TIMELINE = [
  {
    icon: "briefcase",
    title: "Full Stack Development Intern",
    org: "Tech Company",
    period: "Jan 2025 — Present",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver scalable features.",
  },
  {
    icon: "git",
    title: "Open Source Contributions",
    org: "GitHub",
    period: "Ongoing",
    description:
      "Active contributor to open-source projects. Submitted pull requests, reported issues, and collaborated with global developer communities.",
  },
  {
    icon: "book",
    title: "Major Academic Projects",
    org: "University",
    period: "2023 — 2025",
    description:
      "Led and contributed to multiple full-stack projects covering AI integration, cloud deployment, and enterprise-grade architecture patterns.",
  },
  {
    icon: "cap",
    title: "Bachelor of Engineering",
    org: "Computer Science Engineering",
    period: "2022 — 2026",
    description:
      "Studying core computer science with a focus on software engineering, data structures, systems design, and cloud computing.",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    icon: "github",
    title: "GitHub Student Developer Pack",
    description: "Access to 100+ developer tools and resources through GitHub Education.",
  },
  {
    icon: "cloud",
    title: "AWS Learning",
    description: "Completed AWS cloud practitioner learning paths and hands-on labs.",
  },
  {
    icon: "award",
    title: "IBM Certifications",
    description: "Earned IBM professional certifications in cloud and AI technologies.",
  },
  {
    icon: "book",
    title: "Microsoft Learn",
    description: "Completed Microsoft Learn paths covering Azure, AI, and development.",
  },
  {
    icon: "trophy",
    title: "Hackathons",
    description:
      "Participated in multiple hackathons, building innovative solutions under time constraints.",
  },
  {
    icon: "users",
    title: "Technical Workshops",
    description:
      "Attended and facilitated technical workshops on modern web technologies.",
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
    description:
      "A modern full-stack Project Management Platform that helps teams organize projects, manage tasks, and collaborate.",
    language: "JavaScript",
    stars: 6,
    updated: "13 days ago",
  },
  { name: "dhushyandh", description: "", language: null, stars: 4, updated: "20 days ago" },
  {
    name: "Todo-List",
    description: "Todo-List Using Mern Stack",
    language: "JavaScript",
    stars: 4,
    updated: "28 days ago",
  },
  {
    name: "Ecommerce-Website",
    description: "Ecommerce Website using Mern Stack",
    language: "JavaScript",
    stars: 4,
    updated: "28 days ago",
  },
  {
    name: "SmartMart",
    description: "Ecommerce Webiste Using Mern Stack",
    language: "JavaScript",
    stars: 4,
    updated: "28 days ago",
  },
  {
    name: "Authentication",
    description: "Authentication using MERN stack",
    language: "JavaScript",
    stars: 4,
    updated: "28 days ago",
  },
];

export const LANGUAGES = [
  { name: "JavaScript", percent: 58, color: "#f1e05a" },
  { name: "Python", percent: 25, color: "#3572A5" },
  { name: "TypeScript", percent: 8, color: "#3178c6" },
  { name: "HTML", percent: 8, color: "#e34c26" },
];