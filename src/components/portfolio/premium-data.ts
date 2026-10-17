import cvpilot from '@/assets/cvpilot-preview.png.asset.json';
import smartmart from '@/assets/smartmart-preview.png.asset.json';
import sriguru from '@/assets/sriguru-preview.png.asset.json';
import renewx from '@/assets/renewx-preview.png.asset.json';

export type PortfolioProject = {
  slug: string; title: string; category: string; description: string;
  role: string; status: string; stack: string[]; features: string[];
  image?: string; github?: string; live?: string; note?: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'cvpilot', title: 'CVPilot', category: 'AI-powered application',
    description: 'A smarter starting point for your next career move. An AI-powered resume builder and ATS analyzer, bringing resume review, job matching and cover letters into one experience.',
    role: 'Full-stack development', status: 'Live', image: cvpilot.url,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Gemini AI'],
    features: ['Resume editor & PDF export', 'ATS analysis', 'Job-description matching', 'AI cover letters'],
    github: 'https://github.com/dhushyandh/AIResumeAnalyser', live: 'https://cvpilot.dhushyandh.me/',
    note: 'Features documented in the project repository; the public landing page is verified.',
  },
  {
    slug: 'smartmart', title: 'SmartMart', category: 'Full-stack e-commerce',
    description: 'From browsing to placing an order. A MERN commerce project with a product catalog, persistent cart, authentication and order management. The current public storefront is branded CampusCart.',
    role: 'Full-stack development', status: 'Live', image: smartmart.url,
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    features: ['Product search & filtering', 'Persistent shopping cart', 'Order history', 'Admin product management'],
    github: 'https://github.com/dhushyandh/SmartMart', live: 'https://smart-mart-in.onrender.com/',
  },
  {
    slug: 'sri-guru-coaching-centre', title: 'Sri Guru Coaching Centre', category: 'Paid client · Education',
    description: 'An education website and learning-management project for Sri Guru Coaching Centre. Genuine paid client work focused on the centre’s digital presence.',
    role: 'Website / LMS development', status: 'Website live · LMS unconfirmed', image: sriguru.url, live: 'https://srigurucoaching.in/', stack: [], features: ['Public course information', 'Contact information', 'Student login entry'],
    note: 'Project scope provided by Dhushyandh. The public education website is verified; LMS functionality and the technology stack are not yet confirmed.',
  },
  {
    slug: 'renewx-crew', title: 'RenewX Crew', category: 'E-commerce · Web & mobile',
    description: 'An e-commerce web and mobile application project. A refurbished electronics marketplace with a verified public storefront, product discovery and a device-selling entry point.',
    role: 'Web & mobile development', status: 'Web live · Mobile in progress', image: renewx.url, live: 'https://renewx.dhushyandh.in/', stack: [], features: ['Public marketplace', 'Shop & sell-device entry points', 'Instant quote entry'],
    github: 'https://github.com/dhushyandh/RenewX-Crew',
    note: 'Public web storefront verified. Mobile delivery and backend implementation details are not yet confirmed.',
  },
  {
    slug: 'seyon-crackers', title: 'Seyon Crackers', category: 'E-commerce · Web & app',
    description: 'A fireworks e-commerce website and application project. A commerce-focused addition to my web and mobile work.',
    role: 'Web & app development', status: 'Details pending', stack: [], features: [],
    note: 'Project scope provided by Dhushyandh. Screenshots, stack and delivery status are awaiting confirmation.',
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