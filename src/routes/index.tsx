import { createFileRoute } from '@tanstack/react-router';
import { PremiumPortfolio } from '@/components/portfolio/PremiumPortfolio';
const title = 'N. Dhushyandh — Web & Mobile App Developer';
const description = 'N. Dhushyandh is a full-stack web and mobile app developer in Vellore, India. Explore real e-commerce, education and AI projects, and discuss your next freelance project.';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://dhushyandh.in/' }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: 'https://dhushyandh.in/' }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'N. Dhushyandh', jobTitle: 'Web Developer & Mobile App Developer', url: 'https://dhushyandh.in/', sameAs: ['https://github.com/dhushyandh', 'https://linkedin.com/in/dhushyandh'] }) }] }),
 component: PremiumPortfolio,
});
