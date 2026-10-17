import { useRef, useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  CheckCircle2,
  Clock,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TIMELINE, type ExperienceItem } from './data';

const ICONS: Record<ExperienceItem['icon'], typeof BriefcaseBusiness> = {
  briefcase: BriefcaseBusiness,
  git: Code2,
  cap: GraduationCap,
};

const MILESTONE_HIGHLIGHTS: Record<string, string[]> = {
  'freelance-full-stack-developer': [
    'Client Deliverables',
    'Full-Stack Scope',
    'Production Ready',
  ],
  'unified-mentor-full-stack-internship': [
    '3-Month Internship',
    'Frontend & Backend',
    'API Workflows',
  ],
  'codec-technologies-mern-internship': [
    'MERN Stack',
    'React & Node.js',
    'MongoDB & APIs',
  ],
  'project-based-software-development': [
    'Architecture',
    'Databases & Auth',
    'AI Workflows',
  ],
  'be-computer-science-engineering': [
    'B.E. Computer Science',
    'Anna University',
    '2023 — 2027',
  ],
};

interface MilestoneRowProps {
  item: ExperienceItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
  desktopNodeRef?: React.RefObject<HTMLDivElement | null> | undefined;
  mobileNodeRef?: React.RefObject<HTMLDivElement | null> | undefined;
}

function MilestoneRow({
  item,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
  desktopNodeRef,
  mobileNodeRef,
}: MilestoneRowProps) {
  const Icon = ICONS[item.icon];
  const highlights = MILESTONE_HIGHLIGHTS[item.slug] ?? [];
  // Even index = left side, Odd index = right side
  const isReverse = index % 2 === 1;

  // Exact threshold along [0.05, 0.95] scroll range for this milestone
  const ratio = index / (total - 1);
  const targetThreshold = 0.05 + ratio * 0.9;
  const startThreshold = Math.max(0, targetThreshold - 0.06);

  // Feeder wire animation (branches from center spine into card)
  const feederProgress = useTransform(
    scrollYProgress,
    [startThreshold, targetThreshold],
    [0, 1]
  );

  // Node scale & glow transform
  const nodeGlow = useTransform(
    scrollYProgress,
    [startThreshold, targetThreshold],
    [0.3, 1]
  );

  return (
    <div className="relative">
      {/* ================= DESKTOP CENTER NODE & FEEDER WIRE ================= */}
      <div
        ref={desktopNodeRef}
        className="pointer-events-none absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center"
      >
        {/* Glowing circular node */}
        <motion.div
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-colors duration-300"
          style={{
            borderColor: shouldReduceMotion
              ? 'var(--primary)'
              : useTransform(
                  nodeGlow,
                  [0.3, 1],
                  ['oklch(1 0 0 / 12%)', 'var(--primary)']
                ),
            boxShadow: shouldReduceMotion
              ? '0 0 12px rgba(210, 248, 56, 0.35)'
              : useTransform(
                  nodeGlow,
                  [0.3, 1],
                  ['0 0 0px transparent', '0 0 16px rgba(210, 248, 56, 0.4)']
                ),
          }}
        >
          <Icon
            size={17}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />

          {/* Pulse beacon ring when active */}
          {!shouldReduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-full border border-primary/50"
              style={{
                opacity: useTransform(nodeGlow, [0.3, 0.9, 1], [0, 0.5, 0.8]),
                scale: useTransform(nodeGlow, [0.3, 1], [0.8, 1.3]),
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Horizontal Feeder Wire (Desktop) connecting center spine to card */}
      <div
        className={`pointer-events-none absolute top-8 z-10 hidden h-[2px] md:block ${
          isReverse
            ? 'left-1/2 w-8 sm:w-10'
            : 'right-1/2 w-8 sm:w-10'
        }`}
        aria-hidden="true"
      >
        {/* Base track */}
        <div className="h-full w-full bg-border/40" />
        {/* Active glowing wire */}
        <motion.div
          className="absolute inset-0 bg-primary shadow-[0_0_8px_var(--primary)]"
          style={{
            scaleX: shouldReduceMotion ? 1 : feederProgress,
            transformOrigin: isReverse ? 'left' : 'right',
          }}
        />
      </div>

      {/* ================= MOBILE LEFT NODE ================= */}
      <div
        ref={mobileNodeRef}
        className="absolute left-4 top-6 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_10px_rgba(210,248,56,0.25)] md:hidden"
      >
        <Icon size={14} />
      </div>

      {/* ================= MILESTONE CARD ================= */}
      <div
        className={`w-full pl-12 md:pl-0 ${
          isReverse
            ? 'md:ml-auto md:w-[calc(50%-2.5rem)]'
            : 'md:mr-auto md:w-[calc(50%-2.5rem)]'
        }`}
      >
        <motion.article
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 24, x: isReverse ? 16 : -16 }
          }
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-xl border border-border/80 bg-card/45 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/75 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.8)] sm:p-6"
        >
          {/* Subtle Ambient Circuit Glow */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/10"
            aria-hidden="true"
          />

          {/* Header Bar: Milestone Index + Period + Type Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-primary">
                /0{index + 1}
              </span>
              <span className="h-3 w-px bg-border/70" />
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                <Clock size={11} className="text-primary/80" />
                {item.period}
              </span>
            </div>

            <span className="rounded-full border border-border bg-background/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {item.type}
            </span>
          </div>

          {/* Title & Organization */}
          <div className="mt-3.5">
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-[13px]">
              <Building2 size={12} className="text-primary/70 shrink-0" />
              <span className="truncate">{item.org}</span>
            </p>
          </div>

          {/* Description */}
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-[13px] sm:leading-6">
            {item.description}
          </p>

          {/* Highlights Chips */}
          {highlights.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1 rounded border border-border/70 bg-background/50 px-2 py-0.5 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-primary/30"
                >
                  <span className="text-primary text-[10px]">↗</span>
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Card Footer: Verified Badge + View Journey Link */}
          <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <CheckCircle2 size={12} className="text-primary" />
              <span className="hidden sm:inline">Verified milestone</span>
              <span className="sm:hidden">Verified</span>
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-7 rounded-full px-3 text-[11px] font-semibold gap-1.5 border-border/80 hover:border-primary hover:bg-primary/10 group/btn"
            >
              <Link to="/journey/$slug" params={{ slug: item.slug }}>
                <span>Journey details</span>
                <ArrowUpRight
                  size={12}
                  className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-primary"
                />
              </Link>
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function TimelineJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // References to the 1st and 5th milestone nodes to establish exact start and termination points
  const firstDesktopNodeRef = useRef<HTMLDivElement | null>(null);
  const lastDesktopNodeRef = useRef<HTMLDivElement | null>(null);
  const firstMobileNodeRef = useRef<HTMLDivElement | null>(null);
  const lastMobileNodeRef = useRef<HTMLDivElement | null>(null);

  // Exact coordinates: wire begins at Milestone 1 and terminates at Milestone 5
  const [wireMetrics, setWireMetrics] = useState<{
    desktopTop: number;
    desktopHeight: number;
    mobileTop: number;
    mobileHeight: number;
  }>({
    desktopTop: 32,
    desktopHeight: 0,
    mobileTop: 24,
    mobileHeight: 0,
  });

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();

      let dTop = 32;
      let dHeight = 0;
      if (firstDesktopNodeRef.current && lastDesktopNodeRef.current) {
        const fRect = firstDesktopNodeRef.current.getBoundingClientRect();
        const lRect = lastDesktopNodeRef.current.getBoundingClientRect();
        dTop = fRect.top - cRect.top + fRect.height / 2;
        dHeight = Math.max(0, lRect.top - cRect.top + lRect.height / 2 - dTop);
      }

      let mTop = 24;
      let mHeight = 0;
      if (firstMobileNodeRef.current && lastMobileNodeRef.current) {
        const mfRect = firstMobileNodeRef.current.getBoundingClientRect();
        const mlRect = lastMobileNodeRef.current.getBoundingClientRect();
        mTop = mfRect.top - cRect.top + mfRect.height / 2;
        mHeight = Math.max(0, mlRect.top - cRect.top + mlRect.height / 2 - mTop);
      }

      setWireMetrics({
        desktopTop: dTop,
        desktopHeight: dHeight,
        mobileTop: mTop,
        mobileHeight: mHeight,
      });
    };

    measure();
    window.addEventListener('resize', measure);
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', measure);
      ro.disconnect();
    };
  }, []);

  // Direct 1:1 scroll tracking through the container (no jitter or underdamped spring bounce)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  // Wire progress strictly draws from 0% at Milestone 1 down to 100% at Milestone 5
  // When scrolling down, it moves strictly down. When scrolling up, it retracts up.
  const wireHeightProgress = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ['0%', '100%']
  );

  return (
    <div
      ref={containerRef}
      className="relative mx-auto my-8 max-w-[860px] select-none px-4 sm:px-6"
      role="region"
      aria-label="Experience journey timeline"
    >
      {/* ================= DESKTOP CENTER WIRE SPINDLE ================= */}
      {/* Anchored strictly from Node 1 center down to Node 5 center */}
      <div
        className="pointer-events-none absolute left-1/2 z-0 hidden w-[2px] -translate-x-1/2 md:block"
        style={{
          top: `${wireMetrics.desktopTop}px`,
          height: wireMetrics.desktopHeight > 0 ? `${wireMetrics.desktopHeight}px` : 'calc(100% - 4rem)',
        }}
        aria-hidden="true"
      >
        {/* Base guide wire track */}
        <div className="h-full w-full bg-border/40" />

        {/* Dynamic active wire growing strictly downwards */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/80 shadow-[0_0_10px_var(--primary)]"
          style={{
            height: shouldReduceMotion ? '100%' : wireHeightProgress,
          }}
        />
      </div>

      {/* ================= MOBILE LEFT WIRE RAIL ================= */}
      {/* Anchored strictly from Node 1 center down to Node 5 center */}
      <div
        className="pointer-events-none absolute left-4 z-0 w-[2px] md:hidden"
        style={{
          top: `${wireMetrics.mobileTop}px`,
          height: wireMetrics.mobileHeight > 0 ? `${wireMetrics.mobileHeight}px` : 'calc(100% - 3rem)',
        }}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-border/40" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_8px_var(--primary)]"
          style={{
            height: shouldReduceMotion ? '100%' : wireHeightProgress,
          }}
        />
      </div>

      {/* ================= TIMELINE ROWS ================= */}
      <div className="relative z-10 space-y-10 sm:space-y-14 md:space-y-16">
        {TIMELINE.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === TIMELINE.length - 1;

          return (
            <MilestoneRow
              key={item.slug}
              item={item}
              index={index}
              total={TIMELINE.length}
              scrollYProgress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
              desktopNodeRef={
                isFirst
                  ? firstDesktopNodeRef
                  : isLast
                    ? lastDesktopNodeRef
                    : undefined
              }
              mobileNodeRef={
                isFirst
                  ? firstMobileNodeRef
                  : isLast
                    ? lastMobileNodeRef
                    : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}
