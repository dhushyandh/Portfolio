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
    slug: "device-kart",
    title: "Device-Kart",
    tagline: "Product-focused marketplace experience for refurbished devices",
    year: "2026",
    role: "Full Stack Developer",
    status: "In Development",
    tint: "oklch(0.28 0.09 290)",
    github: "https://github.com/dhushyandh",
    overview:
      "Device-Kart is a product-oriented marketplace project focused on the refurbished-device experience. The project brings together responsive interface design, product discovery, commerce-oriented flows, and a mobile-ready application architecture.",
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
      "Device-Kart has strengthened my understanding of building product-oriented applications, designing responsive interfaces, and thinking beyond a browser-only experience when developing a full-stack application.",
  },

  {
    slug: "sri-guru-coaching-centre",
    title: "Sri Guru Coaching Centre",
    tagline: "Professional digital presence for an educational coaching centre",
    year: "2026",
    role: "Freelance Full Stack Developer",
    status: "Client Project",
    tint: "oklch(0.28 0.09 205)",
    github: "https://github.com/dhushyandh",
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
    slug: "nalanda-study-circle",
    title: "Nalanda Study Circle",
    tagline: "Responsive educational website built for a real client",
    year: "2026",
    role: "Freelance Full Stack Developer",
    status: "Client Project",
    tint: "oklch(0.28 0.09 155)",
    github: "https://github.com/dhushyandh",
    overview:
      "Nalanda Study Circle is a real freelance educational website project focused on creating a professional digital presence for the organisation. The experience is built around presenting programmes and information clearly while providing accessible contact pathways for prospective students and visitors.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Web Design",
      "SEO",
    ],
    features: [
      {
        title: "Educational Programme Presentation",
        description:
          "The website provides a structured way to present the organisation's programmes and educational information.",
      },
      {
        title: "Professional Visual Design",
        description:
          "The interface uses a clean visual hierarchy intended to build trust and present the organisation professionally.",
      },
      {
        title: "Responsive Layout",
        description:
          "The website is designed to remain usable and visually consistent across different screen sizes.",
      },
      {
        title: "Accessible Information",
        description:
          "Content is organised so visitors can quickly find the information they need without navigating an unnecessarily complicated interface.",
      },
      {
        title: "Contact Experience",
        description:
          "Clear contact pathways help prospective students and visitors move from discovering the organisation to getting in touch.",
      },
      {
        title: "SEO Considerations",
        description:
          "The website includes a search-friendly structure so the organisation can establish a stronger presence online.",
      },
    ],
    challenges:
      "The main challenge was creating a website that communicates an educational organisation clearly while balancing client requirements, visual presentation, responsiveness, and ease of navigation.",
    learnings:
      "This project strengthened my practical client-development workflow and taught me how to make design and implementation decisions around the needs of an actual organisation rather than only technical requirements.",
  },

  {
    slug: "ai-budget-utilization-monitoring",
    title: "AI-Based Budget Utilization Monitoring System",
    tagline: "AI-oriented system for analysing and presenting budget utilisation insights",
    year: "2026",
    role: "Student Developer",
    status: "Academic Project",
    tint: "oklch(0.28 0.10 70)",
    github: "https://github.com/dhushyandh",
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