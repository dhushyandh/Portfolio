export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  status: string;
  tint: string;
  github: string;
  live?: string;
  overview: string;
  stack: string[];
  features: { title: string; description: string }[];
  challenges: string;
  learnings: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "project-workspace-management",
    title: "Project Workspace Management",
    tagline: "Enterprise-grade workspace collaboration platform",
    year: "2025",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 264)",
    github: "https://github.com/dhushyandh",
    overview:
      "A full-featured workspace management platform built for teams that need structured project organization, role-based access control, and real-time collaboration. Inspired by tools like Linear and Notion, this app brings enterprise-level project management to small and mid-size teams.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Clerk"],
    features: [
      {
        title: "Workspace & Project Organization",
        description:
          "Hierarchical structure with workspaces, projects, and tasks. Supports nested views, labels, and priority levels.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Fine-grained permissions — Owner, Admin, Member, and Viewer roles with per-project overrides.",
      },
      {
        title: "Authentication via Clerk",
        description:
          "Secure auth with email/password, OAuth (Google, GitHub), and session management powered by Clerk.",
      },
      {
        title: "Real-Time Updates",
        description:
          "Live task status updates and notifications using WebSocket connections for seamless team collaboration.",
      },
      {
        title: "Activity Logs",
        description:
          "Full audit trail of all workspace actions — who did what and when — for accountability and transparency.",
      },
      {
        title: "REST API",
        description:
          "Well-structured Express REST API with input validation, error handling, and Prisma ORM for type-safe DB queries.",
      },
    ],
    challenges:
      "The biggest challenge was designing a flexible permission system that could handle both workspace-level and project-level roles without becoming overly complex. I solved this by building a layered permission resolver that checks project-level overrides first, then falls back to workspace defaults.",
    learnings:
      "This project deepened my understanding of relational data modeling, especially for hierarchical structures. I also learned a lot about optimizing PostgreSQL queries with Prisma and managing complex state in React with context and custom hooks.",
  },
  {
    slug: "smartmart",
    title: "SmartMart",
    tagline: "Full-stack e-commerce platform with payments and admin dashboard",
    year: "2025",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 150)",
    github: "https://github.com/dhushyandh",
    overview:
      "A production-ready e-commerce application with a complete shopping experience — product catalog, cart, Stripe checkout, order management, and a full admin dashboard for inventory and order tracking. Built with a focus on performance, security, and scalability.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    features: [
      {
        title: "Product Catalog & Search",
        description:
          "Dynamic product listings with category filters, search, sorting, and pagination. Optimized for fast load times.",
      },
      {
        title: "Stripe Payments",
        description:
          "Secure checkout flow with Stripe integration — supports card payments, webhooks for order confirmation, and refund handling.",
      },
      {
        title: "Image Uploads via Cloudinary",
        description:
          "Product image management with Cloudinary — automatic optimization, resizing, and CDN delivery.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Full admin panel for managing products, viewing orders, updating inventory, and tracking revenue metrics.",
      },
      {
        title: "Cart & Order Management",
        description:
          "Persistent cart with local storage sync, order history, and status tracking for customers.",
      },
      {
        title: "Authentication & Security",
        description:
          "JWT-based auth with refresh tokens, bcrypt password hashing, and protected admin routes.",
      },
    ],
    challenges:
      "Handling Stripe webhooks reliably was the most complex part — ensuring idempotency so duplicate webhook events don't create duplicate orders. I implemented an event deduplication layer using MongoDB's unique indexes.",
    learnings:
      "I gained deep experience with Stripe's payment lifecycle, webhook verification, and error handling. I also improved my MongoDB schema design skills, particularly around embedding vs. referencing for order data.",
  },
  {
    slug: "ai-blog-platform",
    title: "AI Blog Platform",
    tagline: "Modern blogging platform with AI-assisted content creation",
    year: "2024",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.27 0.09 320)",
    github: "https://github.com/dhushyandh",
    overview:
      "A feature-rich blogging platform that combines a clean writing experience with AI-powered content assistance. Writers can draft, edit, and publish articles with rich media support, while readers enjoy a fast, well-structured reading experience.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS S3"],
    features: [
      {
        title: "Rich Text Editor",
        description:
          "Block-based editor with support for headings, code blocks, images, embeds, and markdown shortcuts.",
      },
      {
        title: "AWS S3 Media Uploads",
        description:
          "Direct-to-S3 image uploads with pre-signed URLs, automatic compression, and CDN delivery.",
      },
      {
        title: "Authentication & Sessions",
        description:
          "Secure auth with NextAuth.js — supports email/password and OAuth providers with persistent sessions.",
      },
      {
        title: "SEO Optimization",
        description:
          "Server-side rendering with Next.js for fast page loads and full SEO support — meta tags, Open Graph, and structured data.",
      },
      {
        title: "Content Management",
        description:
          "Draft/publish workflow, scheduled publishing, post categories, tags, and author profiles.",
      },
      {
        title: "TypeScript Throughout",
        description:
          "End-to-end type safety from database schema (Prisma) to API routes to React components.",
      },
    ],
    challenges:
      "Managing file uploads securely without exposing AWS credentials to the client was a key challenge. I implemented a pre-signed URL flow where the server generates a short-lived upload URL, and the client uploads directly to S3 — keeping credentials server-side only.",
    learnings:
      "This project gave me a thorough understanding of Next.js App Router, server components vs. client components, and how to structure a full-stack Next.js application. I also learned AWS S3 best practices for secure media handling.",
  },
  {
    slug: "ai-interview-platform",
    title: "AI Interview Platform",
    tagline: "AI-powered technical interview and candidate evaluation system",
    year: "2025",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 70)",
    github: "https://github.com/dhushyandh",
    overview:
      "An intelligent interview platform that automates and enhances the technical hiring process. Candidates complete AI-evaluated coding assessments and interviews, while recruiters get detailed analytics, scoring breakdowns, and candidate comparison tools.",
    stack: ["React", "Node.js", "OpenAI", "PostgreSQL", "Docker"],
    features: [
      {
        title: "AI-Powered Evaluation",
        description:
          "OpenAI integration for evaluating code quality, problem-solving approach, and communication in interview responses.",
      },
      {
        title: "Resume Analysis",
        description:
          "Automated resume parsing and skill extraction to pre-populate candidate profiles and suggest relevant interview questions.",
      },
      {
        title: "Coding Assessments",
        description:
          "In-browser code editor with multi-language support, test case execution, and AI-assisted feedback on solutions.",
      },
      {
        title: "Recruiter Dashboard",
        description:
          "Comprehensive dashboard for managing job postings, reviewing candidates, scheduling interviews, and comparing scores.",
      },
      {
        title: "Candidate Analytics",
        description:
          "Detailed performance analytics — skill scores, time-on-task, comparison against benchmarks, and hiring recommendations.",
      },
      {
        title: "Docker Deployment",
        description:
          "Containerized with Docker Compose for consistent dev/prod environments and easy cloud deployment.",
      },
    ],
    challenges:
      "Designing reliable AI evaluation prompts that produce consistent, structured scoring was the hardest part. I built a prompt engineering layer with few-shot examples and JSON schema enforcement to ensure the AI always returns parseable, comparable scores.",
    learnings:
      "This project taught me a lot about prompt engineering, OpenAI's function calling API, and how to build AI features that are reliable enough for production use. I also gained experience with Docker multi-stage builds and container orchestration.",
  },
  {
    slug: "todo-list",
    title: "Todo List (MERN)",
    tagline: "Task manager with auth, priorities and persistent state",
    year: "2024",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 200)",
    github: "https://github.com/dhushyandh/Todo-List",
    overview:
      "A clean, fast task manager built to learn the MERN stack end to end. Users sign up, create lists, set priorities and due dates, and everything persists to MongoDB through an Express REST API.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      { title: "Authenticated Lists", description: "Each user gets private lists secured with JWT sessions." },
      { title: "Priorities & Due Dates", description: "Sort and filter tasks by priority, due date, or completion state." },
      { title: "Optimistic UI", description: "Updates render instantly and reconcile with the API response." },
      { title: "REST API", description: "Express routes with validation, error handling, and Mongoose models." },
    ],
    challenges:
      "Keeping the UI instant while staying consistent with the server was tricky. I added optimistic updates with rollback on failure so the list never drifts out of sync.",
    learnings:
      "This was my foundation project for REST design, Mongoose schemas, and structuring React state around server data.",
  },
  {
    slug: "ecommerce-website",
    title: "Ecommerce Website",
    tagline: "Storefront with catalog, cart, checkout and order history",
    year: "2024",
    role: "Full Stack Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 30)",
    github: "https://github.com/dhushyandh/Ecommerce-Website",
    overview:
      "A complete shopping flow — browse products, filter by category, manage a persistent cart, check out, and review past orders. Built to practise modelling real commercial data and multi-step user flows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      { title: "Product Catalog", description: "Category filters, search, and detail pages served from a paginated API." },
      { title: "Persistent Cart", description: "Cart state survives reloads and syncs to the account after login." },
      { title: "Checkout Flow", description: "Address capture, order summary, and order confirmation with stored receipts." },
      { title: "Order History", description: "Per-user order list with statuses and line-item breakdowns." },
    ],
    challenges:
      "Cart merging between guest and logged-in sessions caused duplicates. I solved it with a deterministic merge keyed on product id that sums quantities on login.",
    learnings:
      "I learned how much of e-commerce is state reconciliation rather than UI, and how to design APIs around transactional flows.",
  },
  {
    slug: "auth-system",
    title: "MERN Authentication System",
    tagline: "Reusable auth service with JWT, verification and password reset",
    year: "2024",
    role: "Backend Developer",
    status: "Completed",
    tint: "oklch(0.28 0.09 110)",
    github: "https://github.com/dhushyandh/Authentication",
    overview:
      "A drop-in authentication service I reuse across projects: registration, email verification, login with refresh-token rotation, password reset, and protected route middleware.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    features: [
      { title: "Refresh Token Rotation", description: "Short-lived access tokens with rotating refresh tokens stored httpOnly." },
      { title: "Email Verification", description: "Signed, expiring verification links delivered through Nodemailer." },
      { title: "Password Reset", description: "Single-use reset tokens with rate limiting to block abuse." },
      { title: "Route Middleware", description: "Composable guards for authentication and role checks." },
    ],
    challenges:
      "Getting token rotation right without logging users out on race conditions took several iterations; a short grace window on the previous refresh token fixed it.",
    learnings:
      "Deep practical understanding of session security, hashing, token lifetimes, and why auth is worth getting right once and reusing.",
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    tagline: "Fast, SEO-optimised portfolio with scroll motion and case studies",
    year: "2026",
    role: "Designer & Developer",
    status: "Live",
    tint: "oklch(0.28 0.09 290)",
    github: "https://github.com/dhushyandh/dhushyandh",
    live: "https://dhushyandh.dev",
    overview:
      "The site you are reading. A server-rendered portfolio with a dark design system, scroll-triggered motion, per-project case studies, structured data for search engines, and a fully responsive layout.",
    stack: ["React", "TypeScript", "Tailwind CSS", "TanStack Router", "SSR"],
    features: [
      { title: "Scroll Motion", description: "IntersectionObserver-driven reveals that respect reduced-motion preferences." },
      { title: "SEO Foundation", description: "Per-route metadata, canonical URLs, JSON-LD structured data, and a generated sitemap." },
      { title: "Case Study Routes", description: "Every project has its own indexable page with unique title and description." },
      { title: "Responsive Design", description: "Mobile-first layout tuned from 360px through ultrawide displays." },
    ],
    challenges:
      "Balancing rich motion with performance and accessibility — animations are CSS-driven and disabled entirely under prefers-reduced-motion.",
    learnings:
      "Sharpened my eye for typography, spacing, and how technical SEO decisions like structured data and canonical URLs affect discoverability.",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (i === -1) return undefined;
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}