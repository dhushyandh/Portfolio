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
    slug: "renewx-crew",
    title: "RenewX Crew",
    tagline: "Product-focused marketplace experience for refurbished devices",
    year: "2026",
    role: "Full Stack Developer",
    status: "In Development",
    tint: "oklch(0.28 0.09 290)",
    github: "https://github.com/dhushyandh/RenewXCrew",
    overview:
      "RenewX Crew is a product-oriented marketplace project focused on the refurbished-device experience. The project brings together responsive interface design, product discovery, commerce-oriented flows, and a mobile-ready application architecture.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Capacitor",
    ],
    features: [
      {
        title: "Refurbished Device Marketplace",
        description:
          "A product-focused experience designed around browsing and discovering refurbished devices through a structured marketplace interface.",
      },
      {
        title: "Product-Focused UX",
        description:
          "The interface is designed around clear product presentation, responsive layouts, and practical shopping-oriented interactions.",
      },
      {
        title: "Responsive Experience",
        description:
          "The application is designed to work across desktop and mobile screen sizes rather than treating mobile as an afterthought.",
      },
      {
        title: "Mobile-Ready Architecture",
        description:
          "The project is being developed with a mobile application path in mind using Capacitor alongside the web application.",
      },
      {
        title: "Full-Stack Architecture",
        description:
          "The project combines a modern frontend with backend application logic and data-driven product workflows.",
      },
      {
        title: "Product Development Approach",
        description:
          "The project focuses on building a realistic product experience rather than a small isolated practice application.",
      },
    ],
    challenges:
      "The main challenge is bringing together the different parts of a real product experience — responsive UI, marketplace flows, backend functionality, and mobile application requirements — while keeping the architecture maintainable.",
    learnings:
      "RenewX Crew has strengthened my understanding of building product-oriented applications, designing responsive interfaces, and thinking beyond a browser-only experience when developing a full-stack application.",
  },

  {
    slug: "sri-guru-coaching-centre",
    title: "Sri Guru Coaching Centre",
    tagline: "Professional digital presence for an educational coaching centre",
    year: "2026",
    role: "Freelance Full Stack Developer",
    status: "Client Project",
    tint: "oklch(0.28 0.09 205)",
    github: "https://github.com/dhushyandh/ProjectManagement",
    overview:
      "Sri Guru Coaching Centre is a real freelance client website created to give an educational coaching centre a professional online presence. The project focuses on clear communication, accessible information architecture, responsive presentation, and making important centre information easy for visitors to discover.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Web Design",
      "SEO",
    ],
    features: [
      {
        title: "Professional Centre Website",
        description:
          "A dedicated website that presents the coaching centre in a structured and professional way for prospective students and visitors.",
      },
      {
        title: "Clear Information Architecture",
        description:
          "Important information is organised into clear sections so visitors can understand the centre and its offerings without unnecessary complexity.",
      },
      {
        title: "Responsive Design",
        description:
          "The website adapts across desktop, tablet, and mobile screen sizes for a consistent browsing experience.",
      },
      {
        title: "Educational Content Presentation",
        description:
          "The interface is designed to present the centre's educational information clearly while maintaining a professional visual hierarchy.",
      },
      {
        title: "Contact Pathways",
        description:
          "The website provides clear pathways for visitors who want to get in touch with the coaching centre.",
      },
      {
        title: "Search-Friendly Foundation",
        description:
          "The project was structured with discoverability and SEO considerations in mind rather than treating the website as only a visual brochure.",
      },
    ],
    challenges:
      "The challenge was translating a real client's needs into a website that feels professional while keeping the information simple and accessible. Unlike a practice project, the implementation had to consider the client's actual audience and communication requirements.",
    learnings:
      "This project gave me practical freelance experience working from a real client's requirements and strengthened my ability to turn business and communication needs into a usable responsive website.",
  },

{
  slug: "project-management",

  title: "ProjectManagement",

  tagline: "Full-stack project management platform built for organized team workflows",

  year: "2025",

  role: "Full Stack Developer",

  status: "Personal Project",

  tint: "oklch(0.28 0.10 250)",

  github: "https://github.com/dhushyandh",

  overview:
    "ProjectManagement is a full-stack project management platform focused on organizing projects, tasks, and team workflows through a centralized web application. The project was built to strengthen practical full-stack development skills while exploring how frontend interfaces, backend APIs, database operations, and application workflows work together.",

  stack: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Responsive Web Design",
  ],

  features: [
    {
      title: "Project Organization",
      description:
        "The platform provides a centralized space for organizing projects and keeping related work structured.",
    },

    {
      title: "Task Management",
      description:
        "Tasks can be managed within project workflows to make ongoing work easier to organize and track.",
    },

    {
      title: "Full-Stack Architecture",
      description:
        "The application combines a React-based frontend with backend APIs and database operations in a complete full-stack workflow.",
    },

    {
      title: "REST API Integration",
      description:
        "Frontend functionality communicates with backend services through REST API-based application workflows.",
    },

    {
      title: "Database-Driven Application",
      description:
        "Application data is persisted through a database-backed architecture rather than relying only on client-side state.",
    },

    {
      title: "Responsive Experience",
      description:
        "The interface is designed to remain usable across different screen sizes and common device layouts.",
    },
  ],

  challenges:
    "The main challenge was bringing multiple parts of a full-stack application together into one consistent workflow, from designing the interface and managing application state to connecting APIs and handling persistent data.",

  learnings:
    "This project strengthened my understanding of full-stack application architecture and gave me practical experience connecting frontend interfaces, backend services, APIs, and database operations into a cohesive product.",
},

  {
    slug: "ai-budget-utilization-monitoring",
    title: "AI-Based Budget Utilization Monitoring System",
    tagline: "AI-oriented system for analysing and presenting budget utilisation insights",
    year: "2026",
    role: "Student Developer",
    status: "Academic Project",
    tint: "oklch(0.28 0.10 70)",
    github: "https://github.com/dhushyandh/",
    overview:
      "An academic AI-oriented monitoring system designed around budget-utilization data. The project explores how a web-based application can present financial utilisation information and surface useful insights from structured budget data.",
    stack: [
      "React",
      "JavaScript",
      "Python",
      "AI",
      "Data Analytics",
      "Web Application",
    ],
    features: [
      {
        title: "Budget Utilization Monitoring",
        description:
          "The system focuses on tracking and presenting how allocated budgets are being utilised through a web-based interface.",
      },
      {
        title: "Data Analysis",
        description:
          "Structured budget information can be analysed to identify useful patterns and utilisation trends.",
      },
      {
        title: "Insight-Oriented Interface",
        description:
          "The application presents analysed information in a way intended to make budget utilisation easier to understand.",
      },
      {
        title: "AI-Oriented Workflow",
        description:
          "The project explores the use of AI techniques to support analysis and interpretation of budget-utilization data.",
      },
      {
        title: "Web-Based Monitoring",
        description:
          "A web interface brings the monitoring workflow together so information can be accessed and reviewed in one place.",
      },
      {
        title: "Academic Problem Solving",
        description:
          "The project applies software development and AI concepts to a practical budget-monitoring problem.",
      },
    ],
    challenges:
      "The key challenge was turning structured budget information into useful monitoring and insight rather than simply displaying raw data. The project required thinking about how data should be represented so that users can understand utilisation and identify meaningful information.",
    learnings:
      "This project strengthened my understanding of combining software development, data analysis, and AI-oriented problem solving into a practical application. It also gave me experience applying technical concepts to a real-world style monitoring problem.",
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