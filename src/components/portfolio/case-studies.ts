import { PORTFOLIO_PROJECTS, ARCHIVED_PROJECTS } from './premium-data';
import { PROJECTS } from './data';
export type CaseStudy = { slug: string; title: string; tagline: string; year: string; role: string; status: string; tint: string; github: string; live?: string | undefined; image?: string | undefined; overview: string; stack: string[]; features: { title: string; description: string }[]; challenges: string; learnings: string; };
export const CASE_STUDIES: CaseStudy[] = [
  ...PORTFOLIO_PROJECTS.map(p => ({
    slug: p.slug,
    title: p.title,
    tagline: p.category,
    year: p.year ?? '2024–2026',
    role: p.role,
    status: p.status,
    tint: '',
    github: p.github ?? '',
    live: p.live,
    image: p.image,
    overview: p.description,
    stack: p.stack,
    features: p.detailedFeatures ?? p.features.map(f => ({
      title: f,
      description: p.note ?? 'Documented in the verified project specification.',
    })),
    challenges: p.challenges ?? (p.note ?? 'Balancing performance, responsive layouts, and modern user experience within project scope.'),
    learnings: p.learnings ?? 'Engineered with clean architectural principles, thorough cross-device validation, and user-centric navigation.',
  })),
  ...ARCHIVED_PROJECTS.map(p => ({
    slug: p.slug,
    title: p.title,
    tagline: p.category,
    year: p.year ?? '2024–2026',
    role: p.role,
    status: p.status,
    tint: '',
    github: p.github ?? '',
    live: p.live,
    image: p.image,
    overview: p.description,
    stack: p.stack,
    features: p.detailedFeatures ?? p.features.map(f => ({
      title: f,
      description: p.note ?? 'Preserved archival project specification.',
    })),
    challenges: p.challenges ?? 'Archival entry preserved for URL continuity.',
    learnings: p.learnings ?? 'Preserved for archival reference and link stability.',
  })),
  ...PROJECTS.filter(p => !PORTFOLIO_PROJECTS.some(n => n.slug === p.slug) && !ARCHIVED_PROJECTS.some(n => n.slug === p.slug)).map(p => ({
    slug: p.slug,
    title: p.title,
    tagline: 'Archival portfolio project',
    year: '2023–2024',
    role: 'Development project',
    status: 'Archival project',
    tint: '',
    github: p.github === 'https://github.com/dhushyandh' ? '' : p.github,
    overview: 'An earlier project entry preserved from the portfolio history. Preserved for archival reference and link stability.',
    stack: p.tags,
    features: [],
    challenges: 'Archival entry preserved for URL continuity.',
    learnings: 'Demonstrates incremental foundational growth across modern JavaScript and full-stack development.',
  })),
];
export function getCaseStudy(slug: string) {
  if (slug === 'savore-restaurant-cafe') return CASE_STUDIES.find(p => p.slug === 'savore');
  return CASE_STUDIES.find(p => p.slug === slug);
}
export function getNextCaseStudy(slug: string) { const i = CASE_STUDIES.findIndex(p => p.slug === slug || (slug === 'savore-restaurant-cafe' && p.slug === 'savore')); return i < 0 ? undefined : CASE_STUDIES[(i + 1) % CASE_STUDIES.length]; }
