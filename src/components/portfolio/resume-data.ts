export const RESUME_URL = "/Dhushyandh_Resume.pdf";

export const CERTIFICATE_SLUGS = {
  "IBM — Introduction to HTML, CSS, JavaScript": "ibm-web-development",
  "Amazon — Full Stack Web Development": "amazon-full-stack-web-development",
  "Google — Cloud Cybersecurity Certificate": "google-cloud-cybersecurity",
  "AWS — Technical Essentials": "aws-technical-essentials",
  "MERN Stack Development": "mern-stack-development",
  "Oracle — Cloud Infrastructure 2025": "oracle-cloud-infrastructure",
} as const;

export const RESUME = {
  name: "Dhushyandh N",
  title: "Full Stack Developer",
  profile:
    "Aspiring Full-Stack Developer | Cloud & AI Enthusiast | Computer Science Engineering Student",
  location: "Vellore, Tamil Nadu, India",
  email: "dhushyandhneduncheziyan4896@gmail.com",
  phone: "+91 93427 63553",
  education: {
    degree: "B.E - Computer Science Engineering",
    school: "C. Abdul Hakeem College of Engineering and Technology, Anna University",
    place: "Ranipet, Tamil Nadu",
    period: "2023 — 2027",
  },
  technicalSkills: [
    "Full Stack Development",
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "Cloud & DevOps",
    "Databases",
  ],
  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Time Management",
    "Adaptability",
  ],
  certificates: [
    "IBM — Introduction to HTML, CSS, JavaScript",
    "Amazon — Full Stack Web Development",
    "Google — Cloud Cybersecurity Certificate",
    "AWS — Technical Essentials",
    "MERN Stack Development",
    "Oracle — Cloud Infrastructure 2025",
  ],
  projects: [
    {
      title: "AI Resume Analyser",
      date: "07/2026",
      description:
        "Build, analyze, and optimize professional resumes with the power of AI. Improve ATS scores, generate cover letters, and prepare for interviews in one platform.",
      stack: ["TypeScript", "React.js", "Node.js", "Express.js", "Gemini API", "PostgreSQL"],
    },
    {
      title: "Project Management App",
      date: "06/2026",
      description:
        "Full-stack project management platform with secure authentication and collaborative workspace management, role-based access control, task tracking, and REST APIs on a scalable PostgreSQL database.",
      stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Clerk"],
    },
    {
      title: "E-Commerce Platform",
      date: "02/2026",
      description:
        "Full-stack e-commerce application featuring authentication, product management, shopping cart, and order processing with secure REST APIs and Cloudinary image storage.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    },
  ],
} as const;
