import { createFileRoute } from '@tanstack/react-router';
import { ReferencePortfolio } from '@/components/portfolio/ReferencePortfolio';
import { PORTFOLIO_FAQS } from '@/components/portfolio/premium-data';
import { RESUME } from '@/components/portfolio/resume-data';

const title = 'N. Dhushyandh — Full Stack & Mobile App Developer | Vellore, India';
const description =
  'Official portfolio of N. Dhushyandh, a full-stack web and mobile app developer based in Vellore, India. Explore verified client projects, React & React Native applications, technical credentials, and freelance services.';

export const Route = createFileRoute('/')({
  head: () => {
    const siteUrl = 'https://dhushyandh.in/';
    const ogImage = 'https://dhushyandh.in/og-image.png';

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          url: siteUrl,
          name: 'N. Dhushyandh — Full Stack & Mobile App Developer',
          description,
          publisher: {
            '@id': `${siteUrl}#person`,
          },
          inLanguage: 'en-US',
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}#person`,
          name: 'N. Dhushyandh',
          alternateName: ['Dhushyandh Neduncheziyan', 'Dhushyandh N'],
          jobTitle: 'Full Stack Web & Mobile App Developer',
          url: siteUrl,
          image: `${siteUrl}dhushyandh_prof.png`,
          email: `mailto:${RESUME.email}`,
          telephone: RESUME.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vellore',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
          },
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: RESUME.education.school,
          },
          knowsAbout: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'React Native',
            'Node.js',
            'Express.js',
            'MongoDB',
            'PostgreSQL',
            'Tailwind CSS',
            'AWS Technical Essentials',
            'Oracle Cloud Infrastructure',
            'Gemini AI',
          ],
          hasCredential: RESUME.certificates.map((cert) => ({
            '@type': 'EducationalOccupationalCredential',
            name: cert,
          })),
          sameAs: [
            'https://github.com/dhushyandh',
            'https://linkedin.com/in/dhushyandh',
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}#faq`,
          mainEntity: PORTFOLIO_FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:site_name', content: 'Dhushyandh' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'Dhushyandh — Full-Stack Web Developer & Freelancer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: 'Dhushyandh — Full-Stack Web Developer & Freelancer' },
      ],
      links: [{ rel: 'canonical', href: siteUrl }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData),
        },
      ],
    };
  },
  component: ReferencePortfolio,
});
