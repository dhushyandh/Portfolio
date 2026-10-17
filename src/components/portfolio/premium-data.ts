import cvpilot from '@/assets/cvpilot-preview.png';
import smartmart from '@/assets/smartmart-preview.png';
import sriguru from '@/assets/sriguru-preview.png';
import renewxMobile from '@/assets/renewx-mobile-preview.png';
import seyonMobile from '@/assets/seyon-mobile-preview.png';

export type PortfolioProject = {
  slug: string; title: string; category: string; description: string;
  role: string; status: string; stack: string[]; features: string[];
  image?: string; github?: string; live?: string; note?: string;
  projectType?: 'website' | 'mobile';
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: 'sri-guru-coaching-centre',
    title: 'Sri Guru Coaching Centre',
    category: 'Paid client · Website project',
    description: 'An education website and student portal for Sri Guru Coaching Centre. Genuine paid client work focused on the centre’s digital presence with structured course catalogs, schedules, and direct student inquiry entry points.',
    role: 'Website Development',
    status: 'Website live',
    image: sriguru,
    live: 'https://srigurucoaching.in/',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: ['Public course information & schedules', 'Direct student inquiry portal', 'Responsive mobile layout'],
    projectType: 'website',
    note: 'Project scope provided by Dhushyandh. The public education website is verified.',
  },
  {
    slug: 'renewx-crew',
    title: 'RenewX Crew',
    category: 'Client work · Mobile App',
    description: 'A Certifiedelectronics marketplace and trade-in mobile application layout. Built with transparent gadget valuation, instant buyback quote calculation, verified pre-owned device catalog, and WhatsApp checkout integration.',
    role: 'Mobile App & UI Development',
    status: 'Mobile App',
    image: renewxMobile,
    live: 'https://renewx.expo.app/',
    stack: ['React Native', 'TypeScript', 'Mobile UI/UX', 'Tailwind CSS'],
    features: ['Instant device quote valuation', 'Verified Certifiedtech catalog', 'Mobile touch-first experience', 'WhatsApp order coordination'],
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
    image: seyonMobile,
    stack: ['React Native', 'Mobile UI/UX', 'Tailwind CSS', 'TypeScript'],
    features: ['Festive combo package builder', 'Bulk order volume discounts', 'Mobile price list & catalog', 'Direct festival order booking'],
    projectType: 'mobile',
    note: 'Mobile App designed for direct-from-factory fireworks ordering.',
  },
  {
    slug: 'cvpilot',
    title: 'CVPilot',
    category: 'AI-powered application',
    description: 'A smarter starting point for your next career move. An AI-powered resume builder and ATS analyzer, bringing resume review, job matching and cover letters into one experience.',
    role: 'Full-stack development',
    status: 'Live',
    image: cvpilot,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Gemini AI'],
    features: ['Resume editor & PDF export', 'ATS analysis', 'Job-description matching', 'AI cover letters'],
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
    image: smartmart,
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    features: ['Product search & filtering', 'Persistent shopping cart', 'Order history', 'Admin product management'],
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