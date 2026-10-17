import { describe, expect, test } from 'bun:test';
import { PORTFOLIO_PROJECTS } from './premium-data';
import { getCaseStudy } from './case-studies';

describe('truthful project presentation', () => {
  test('Sri Guru remains a paid client education project', () => {
    const project = PORTFOLIO_PROJECTS.find(p => p.slug === 'sri-guru-coaching-centre');
    expect(project?.category).toBe('Paid client · Education');
    expect(project?.live).toBe('https://srigurucoaching.in/');
  });
  test('unknown Seyon features and links are not invented', () => {
    const project = PORTFOLIO_PROJECTS.find(p => p.slug === 'seyon-crackers');
    expect(project?.status).toBe('Details pending');
    expect(project?.features).toEqual([]);
    expect(project?.live).toBeUndefined();
    expect(project?.github).toBeUndefined();
  });
  test('RenewX mobile delivery is not presented as complete', () => {
    expect(PORTFOLIO_PROJECTS.find(p => p.slug === 'renewx-crew')?.status).toBe('Web live · Mobile in progress');
  });
  test('active project case studies read back the same verified details', () => {
    for (const p of PORTFOLIO_PROJECTS) {
      const study = getCaseStudy(p.slug);
      expect(study?.status).toBe(p.status);
      expect(study?.overview).toBe(p.description);
    }
  });
});