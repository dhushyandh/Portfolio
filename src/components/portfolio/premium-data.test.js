import { describe, expect, test } from 'bun:test';
import { PORTFOLIO_PROJECTS, ARCHIVED_PROJECTS } from './premium-data';
import { getCaseStudy } from './case-studies';

describe('truthful project presentation', () => {
  test('Sri Guru remains a paid client education project', () => {
    const project = PORTFOLIO_PROJECTS.find(p => p.slug === 'sri-guru-coaching-centre');
    expect(project?.live).toBe('https://srigurucoaching.in/');
  });
  test('Savoré and Forge Fitness are active projects with verified specs', () => {
    const savore = PORTFOLIO_PROJECTS.find(p => p.slug === 'savore');
    expect(savore?.title).toBe('Savoré Restaurant & Café');
    expect(savore?.category).toBe('Restaurant Website · UI/UX');

    const forge = PORTFOLIO_PROJECTS.find(p => p.slug === 'forge-fitness');
    expect(forge?.title).toBe('Forge Fitness');
    expect(forge?.category).toBe('Fitness Website · UI/UX');
  });
  test('Seyon and CVPilot are preserved in archival records for URL continuity', () => {
    const seyon = ARCHIVED_PROJECTS.find(p => p.slug === 'seyon-crackers');
    expect(seyon).toBeDefined();
    const cvpilot = ARCHIVED_PROJECTS.find(p => p.slug === 'cvpilot');
    expect(cvpilot).toBeDefined();
  });
  test('active and archived project case studies read back the same verified details', () => {
    for (const p of [...PORTFOLIO_PROJECTS, ...ARCHIVED_PROJECTS]) {
      const study = getCaseStudy(p.slug);
      expect(study?.status).toBe(p.status);
      expect(study?.overview).toBe(p.description);
    }
  });
});