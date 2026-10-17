import cvpilot from '@/assets/cvpilot-preview.png';
import smartmart from '@/assets/smartmart-preview.png';
import sriguru from '@/assets/sriguru-preview.png';
import renewxMobile from '@/assets/renewx-mobile-preview.png';
import seyonMobile from '@/assets/seyon-mobile-preview.png';

export type ProjectFeature = {
  title: string;
  description: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  role: string;
  status: string;
  stack: string[];
  features: string[];
  detailedFeatures?: ProjectFeature[];
  challenges?: string;
  learnings?: string;
  year?: string;
  image?: string;
  github?: string;
  live?: string;
  note?: string;
  projectType?: 'website' | 'mobile';
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'sri-guru-coaching-centre',
    title: 'Sri Guru Coaching Centre',
    category: 'Paid client · Website project',
    description: 'An education website and student portal for Sri Guru Coaching Centre. Genuine paid client work focused on the centre’s digital presence with structured course catalogs, schedules, and direct student inquiry entry points.',
    role: 'Website Development & Frontend Architecture',
    status: 'Website live',
    year: '2024–2026',
    image: sriguru,
    live: 'https://srigurucoaching.in/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Public course information & schedules', 'Direct student inquiry portal', 'Responsive mobile layout', 'Fast asset optimization'],
    detailedFeatures: [
      {
        title: 'Public Course Information & Schedules',
        description: 'Cleanly structured course catalogs, subject modules, and batch timings enabling prospective students and parents to find relevant academic details quickly.',
      },
      {
        title: 'Direct Student Inquiry Portal',
        description: 'Dedicated web inquiry flow allowing students to submit questions directly to administration, reducing reliance on manual phone inquiries.',
      },
      {
        title: 'Mobile-First Responsive Layout',
        description: 'Optimized for mobile viewports to provide rapid load times and legible typography on mobile networks throughout Tamil Nadu.',
      },
      {
        title: 'Institutional SEO & Accessibility',
        description: 'Semantic HTML hierarchy and structured metadata ensuring high discoverability in local education and coaching searches.',
      },
    ],
    challenges: 'Designing a lightweight, accessible academic interface that organizes dense batch schedules and subject requirements without overwhelming first-time visitors on mobile devices.',
    learnings: 'Built a reliable digital front door for the coaching centre, replacing physical notices with a crawlable, high-performance web experience.',
    projectType: 'website',
    note: 'Project scope provided by Dhushyandh. The public education website is verified.',
  },
  {
    slug: 'renewx-crew',
    title: 'RenewX Crew',
    category: 'Client work · Mobile App',
    description: 'A certified electronics marketplace and trade-in mobile application layout. Built with transparent gadget valuation, instant buyback quote calculation, verified pre-owned device catalog, and WhatsApp checkout integration.',
    role: 'Mobile App & UI Development',
    status: 'Mobile App',
    year: '2024–2026',
    image: renewxMobile,
    live: 'https://renewx.expo.app/',
    stack: ['React Native', 'TypeScript', 'Mobile UI/UX', 'Tailwind CSS'],
    features: ['Instant device quote valuation', 'Verified Certifiedtech catalog', 'Mobile touch-first experience', 'WhatsApp order coordination'],
    detailedFeatures: [
      {
        title: 'Instant Device Valuation Engine',
        description: 'Interactive diagnostic questionnaire calculating buyback estimates in real time according to device condition, battery health, and storage.',
      },
      {
        title: 'Verified Pre-Owned Catalog',
        description: 'High-density mobile catalog featuring transparent condition grading, warranty specifications, and high-resolution product inspection images.',
      },
      {
        title: 'Touch-First Mobile Experience',
        description: 'Engineered specifically for handheld ergonomics with bottom-sheet modals, swift filter transitions, and tactile feedback.',
      },
      {
        title: 'WhatsApp Checkout & Trade-in Flow',
        description: 'Encodes verified device choices and pre-fills structured purchase orders directly into customer service WhatsApp channels.',
      },
    ],
    challenges: 'Balancing detailed technical gadget specifications (battery health, cosmetic grading, warranty periods) with an uncluttered mobile layout that guides visitors toward rapid trade-in conversions.',
    learnings: 'Developed a frictionless mobile valuation experience that connects browsing customers to direct store communication channels in seconds.',
    projectType: 'mobile',
    note: 'Mobile App and verified storefront for RenewX pre-owned electronics.',
  },
  {
    slug: 'seyon-crackers',
    title: 'Seyon Crackers',
    live: 'https://seyonfirecrackers.expo.app',
    category: 'Client work · Mobile App',
    description: 'A direct-from-factory fireworks and crackers ordering mobile application layout engineered for seasonal festive demand. Features custom festival combo builders, volume discount tiers, categorized fireworks catalog, and instant dispatch booking.',
    role: 'Mobile App & UI Development',
    status: 'Mobile App',
    year: '2024–2026',
    image: seyonMobile,
    stack: ['React Native', 'Mobile UI/UX', 'Tailwind CSS', 'TypeScript'],
    features: ['Festive combo package builder', 'Bulk order volume discounts', 'Mobile price list & catalog', 'Direct festival order booking'],
    detailedFeatures: [
      {
        title: 'Festive Combo Package Builder',
        description: 'Interactive package configurator that helps customers customize family and community celebration bundles with instant price updates.',
      },
      {
        title: 'Bulk Order Volume Discount Tiers',
        description: 'Dynamic price calculations supporting automated wholesale and corporate tier savings based on order volume.',
      },
      {
        title: 'Categorized Mobile Price Catalog',
        description: 'Structured product breakdown across sparklers, ground chakkars, flower pots, and sound crackers with safety guidelines.',
      },
      {
        title: 'Seasonal Booking & Dispatch Inquiry',
        description: 'Streamlined seasonal order submission flow designed to handle concentrated festive ordering traffic with clear dispatch confirmations.',
      },
    ],
    challenges: 'Displaying extensive multi-category seasonal inventories on mobile screens with real-time price tiering while preserving high rendering performance.',
    learnings: 'Architected a clean direct-to-consumer mobile shopping layout tailored for the Sivakasi fireworks seasonal wholesale and retail market.',
    projectType: 'mobile',
    note: 'Mobile App designed for direct-from-factory fireworks ordering.',
  },
  {
    slug: 'cvpilot',
    title: 'CVPilot',
    category: 'AI-powered application',
    description: 'A smarter starting point for your next career move. An AI-powered resume builder and ATS analyzer, bringing resume review, job matching and cover letters into one experience.',
    role: 'Full-stack development & AI Integration',
    status: 'Live',
    year: '2024–2026',
    image: cvpilot,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Gemini AI'],
    features: ['Resume editor & PDF export', 'ATS analysis', 'Job-description matching', 'AI cover letters'],
    detailedFeatures: [
      {
        title: 'AI Resume Analysis & ATS Scoring',
        description: 'Parses resume content and benchmarks it against ATS criteria to identify missing keywords, readability issues, and structural weaknesses.',
      },
      {
        title: 'Real-Time Resume Editor & PDF Export',
        description: 'Live interactive editor with standardized professional typography, instant preview, and high-fidelity PDF output.',
      },
      {
        title: 'Job Description Alignment',
        description: 'Analyzes target job postings to recommend role-specific skill additions and phrasing refinements.',
      },
      {
        title: 'AI Cover Letter Generation',
        description: 'Generates tailored, professional cover letters that highlight relevant candidate experience for specific positions.',
      },
    ],
    challenges: 'Integrating Google Gemini LLM API calls with deterministic JSON response parsing while keeping client-side editing responsive and providing immediate ATS feedback.',
    learnings: 'Gained in-depth full-stack experience combining Node.js backends, PostgreSQL relational schemas, and practical AI application pipelines.',
    github: 'https://github.com/dhushyandh/AIResumeAnalyser',
    live: 'https://cvpilot.dhushyandh.in/',
    projectType: 'website',
    note: 'Features documented in the project repository; the public landing page is verified.',
  },
  {
    slug: 'smartmart',
    title: 'SmartMart',
    category: 'Full-stack e-commerce',
    description: 'From browsing to placing an order. A MERN commerce project with a product catalog, persistent cart, authentication and order management. The current public storefront is branded CampusCart.',
    role: 'Full-stack development',
    status: 'Live',
    year: '2024–2026',
    image: smartmart,
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    features: ['Product search & filtering', 'Persistent shopping cart', 'Order history', 'Admin product management'],
    detailedFeatures: [
      {
        title: 'Product Catalog & Search Filtering',
        description: 'Fast faceted search across categories, pricing ranges, and real-time product availability.',
      },
      {
        title: 'Persistent Shopping Cart',
        description: 'State-managed shopping cart that syncs across page transitions and preserves user selections.',
      },
      {
        title: 'User Authentication & Checkout Flow',
        description: 'Secure token-based user authentication protecting customer profiles, order history, and delivery details.',
      },
      {
        title: 'Cloudinary Asset Integration',
        description: 'Automated image uploads and optimized CDN delivery for catalog product images.',
      },
    ],
    challenges: 'Designing a normalized MongoDB schema for users, orders, and products while ensuring state consistency across the frontend shopping experience.',
    learnings: 'Built and deployed a complete MERN stack architecture with secure RESTful endpoints and persistent database storage.',
    github: 'https://github.com/dhushyandh/SmartMart',
    live: 'https://smart-mart-in.onrender.com/',
    projectType: 'website',
  },
];

export const SERVICES = [
  { number: '01', title: 'Websites that make an impression.', label: 'Website development', description: 'Thoughtful, responsive websites that bring your business online with a clear identity and a fast, accessible experience.', icon: 'web' },
  { number: '02', title: 'Ideas, engineered end to end.', label: 'Full-stack applications', description: 'From the interface to the API and data layer. Connected applications built around the way your users actually work.', icon: 'code' },
  { number: '03', title: 'A better way to shop.', label: 'E-commerce development', description: 'Product discovery, shopping carts and order workflows, designed to make the buying journey feel straightforward.', icon: 'shop' },
  { number: '04', title: 'Your product. In their pocket.', label: 'Mobile applications', description: 'Mobile app development with React Native, bringing your product to a touch-first experience across devices.', icon: 'mobile' },
] as const;

export const TECHNOLOGIES = ['React', 'TypeScript', 'JavaScript', 'Next.js', 'React Native', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Gemini AI', 'Git', 'AWS', 'Figma'];

export const PROCESS = [
  { title: 'Understand', description: 'Start with your idea, your audience and what the project needs to achieve. Define a clear scope together.' },
  { title: 'Design', description: 'Map the experience and shape the visual direction before moving into development.' },
  { title: 'Develop', description: 'Build the interface, connect the data and refine the details through regular feedback.' },
  { title: 'Deliver', description: 'Test across devices, prepare the deployment and make the handover clear.' },
];

export const PORTFOLIO_FAQS = [
  {
    question: 'Who is N. Dhushyandh and what are your core engineering specializations?',
    answer: 'I am a full-stack web and mobile application developer based in Vellore, Tamil Nadu, India. I specialize in modern frontend engineering with React, Next.js, and TypeScript, backend architecture with Node.js, Express, MongoDB, and PostgreSQL, alongside mobile application development using React Native.',
  },
  {
    question: 'What verified client and production projects have you delivered?',
    answer: 'My active portfolio includes: (1) Sri Guru Coaching Centre — a responsive web portal and course catalog for a paid education client; (2) RenewX Crew — a mobile app layout and certified pre-owned electronics marketplace with instant valuation and WhatsApp checkout; (3) Seyon Crackers — a factory-direct fireworks ordering mobile application layout with festive bulk tiers; (4) CVPilot — an AI-powered resume builder and ATS analyzer; and (5) SmartMart — a full-stack MERN e-commerce application.',
  },
  {
    question: 'What technologies, frameworks, and cloud platforms do you use?',
    answer: 'Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, Vanilla CSS. Mobile: React Native. Backend & Data: Node.js, Express.js, PostgreSQL, MongoDB, Supabase. Cloud & Certifications: AWS Technical Essentials, Oracle Cloud Infrastructure (OCI 2024 Certified Foundations Associate), and Google Cybersecurity Certificate.',
  },
  {
    question: 'Are you available for freelance work, contract development, or full-time roles?',
    answer: 'Yes. I am actively available for freelance web development, full-stack contracts, and mobile application builds. I collaborate with clients remotely across India and internationally, as well as locally in Vellore and Chennai, delivering clear scopes and structured milestones.',
  },
  {
    question: 'What is your project development process and communication approach?',
    answer: 'Every project follows a straightforward four-stage lifecycle: (1) Understand — align on user needs and define a concrete scope; (2) Design — build visual wireframes and component systems; (3) Develop — write clean, type-safe code with responsive layouts and database integrations; (4) Deliver — perform cross-device testing, SEO/accessibility audits, and smooth deployment handover.',
  },
  {
    question: 'How can potential clients or recruiters get in touch with you?',
    answer: 'You can email me directly at dhushyandhneduncheziyan4896@gmail.com, connect on LinkedIn at linkedin.com/in/dhushyandh, message on WhatsApp at +91 9342763553, or submit the contact inquiry form on this website. I review inquiries daily and respond promptly.',
  },
] as const;