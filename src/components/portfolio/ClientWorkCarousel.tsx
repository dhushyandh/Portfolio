import { useState, useEffect, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export type ClientWorkItem = {
  slug: string;
  label: string;
  title: string;
  description: string;
  externalLink?: string;
};

export const CLIENT_WORKS: ClientWorkItem[] = [
  {
    slug: 'sri-guru-coaching-centre',
    label: 'Real client work',
    title: 'Sri Guru Coaching Centre',
    description:
      'A paid education website and student portal. Designed with clear scope, structured course information, and direct student inquiries.',
    externalLink: 'https://srigurucoaching.in/',
  },
  {
    slug: 'renewx-crew',
    label: 'Real client work',
    title: 'RenewX Crew',
    description:
      'A certified pre-owned electronics marketplace & trade-in layout. Built with transparent gadget valuation, instant buyback quotes, and WhatsApp checkout.',
    externalLink: 'https://renewx.expo.app/',
  },
  {
    slug: 'savore',
    label: 'Website project',
    title: 'Savoré Restaurant & Café',
    description:
      'A premium restaurant and café website designed with an elegant visual identity, menu discovery, table reservations, and ambience gallery.',
  },
  {
    slug: 'forge-fitness',
    label: 'Website project',
    title: 'Forge Fitness',
    description:
      'A bold fitness website built around strength, workout programs, trainer profiles, membership options, and trial booking interfaces.',
  },
];

export function ClientWorkCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const total = CLIENT_WORKS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Autoplay rotation every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, shouldReduceMotion]);

  const item = CLIENT_WORKS[current];
  if (!item) return null;

  return (
    <div
      className="relative my-10 border-t border-border pt-8 pb-4 transition-colors select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Real client work showcase"
    >
      {/* Clickable Project Layout */}
      <div className="relative min-w-0 overflow-hidden py-1">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={item.slug}
            custom={direction}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? 30 : -30 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? -30 : 30 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/projects/$slug"
              params={{ slug: item.slug }}
              aria-label={`View ${item.title} project case study`}
              className="group relative block overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card/65 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:bg-primary/15"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.2fr_1.5fr_auto] md:gap-8">
                {/* Left Column: Label + Title */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <p className="font-mono text-xs font-semibold tracking-wide text-primary uppercase sm:text-[13px]">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[28px] md:text-[30px]">
                    {item.title}
                  </h3>
                </div>

                {/* Middle Column: Description */}
                <div className="min-w-0">
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90 sm:text-[15px] sm:leading-7">
                    {item.description}
                  </p>
                </div>

                {/* Right Column: Clean Action Pill */}
                <div className="flex items-center gap-2.5 self-center justify-self-start md:justify-self-end">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <span>View project</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle Slide Indicators */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {CLIENT_WORKS.map((w, idx) => (
          <button
            key={w.slug}
            type="button"
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}: ${w.title}`}
            aria-current={current === idx ? 'true' : 'false'}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === idx
                ? 'w-7 bg-primary shadow-[0_0_8px_var(--primary)]'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
