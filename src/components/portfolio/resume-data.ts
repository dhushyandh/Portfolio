import resumeFile from "@/assets/Dhushyandh_Resume.pdf";

export const RESUME_URL = resumeFile;

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

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  category: string;
  image: string;
  credentialUrl?: string;
};

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "oracle-oci-2025",
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle",
    issueDate: "2025",
    category: "Cloud Infrastructure",
    image: "/certificates/Oracle - oci.png",
  },
  {
    id: "aws-technical-essentials",
    title: "AWS Technical Essentials",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    category: "Cloud Computing",
    image: "/certificates/aws.png",
  },
  {
    id: "google-cybersecurity",
    title: "Google Cloud Cybersecurity Certificate",
    issuer: "Google",
    issueDate: "2024",
    category: "Security & Cloud",
    image: "/certificates/CyberSecurity-Google.png",
  },
  {
    id: "amazon-fullstack",
    title: "Amazon Full Stack Web Development",
    issuer: "Amazon",
    issueDate: "2024",
    category: "Full Stack",
    image: "/certificates/FullStack - Amazon.png",
  },
  {
    id: "ibm-frontend",
    title: "IBM Introduction to HTML, CSS, JavaScript",
    issuer: "IBM",
    issueDate: "2023",
    category: "Frontend Development",
    image: "/certificates/IBM-frontend.png",
  },
  {
    id: "mern-internship",
    title: "MERN Stack Development Internship",
    issuer: "CodeBind Technologies",
    issueDate: "2024",
    category: "Full Stack",
    image: "/certificates/MERN_Intern.png",
  },
];

