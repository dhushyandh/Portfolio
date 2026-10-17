import { useState, useEffect, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    slug: 'seyon-crackers',
    label: 'Real client work',
    title: 'Seyon Crackers',
    description:
      'A seasonal direct-from-factory fireworks ordering mobile layout engineered for festive demand, custom family package combos, and volume wholesale tiers.',
    externalLink: 'https://seyonfirecrackers.expo.app',
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

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay rotation every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, shouldReduceMotion]);

  const item = CLIENT_WORKS[current];

  return (
    <div
      className="relative my-10 border-t border-border pt-8 pb-4 transition-colors select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Real client work carousel"
      aria-roledescription="carousel"
    >
      <div className="flex items-center justify-between gap-4 sm:gap-8">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous client project"
          className="group -ml-2 sm:-ml-4 flex h-14 w-12 shrink-0 items-center justify-center text-muted-foreground/70 transition-all hover:text-foreground hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronLeft
            size={38}
            strokeWidth={1.35}
            className="transition-transform group-hover:-translate-x-1"
          />
        </button>

        {/* Center Content with Animated Slide */}
        <div className="relative min-w-0 flex-1 overflow-hidden py-2">
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
              className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.1fr_1.4fr_auto] md:gap-8"
            >
              {/* Left Column: Label + Title */}
              <div className="min-w-0">
                <p className="font-mono text-xs font-semibold tracking-wide text-primary uppercase sm:text-[13px]">
                  {item.label}
                </p>
                <h3 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-foreground sm:text-[28px] md:text-[30px]">
                  {item.title}
                </h3>
              </div>

              {/* Middle Column: Description */}
              <div className="min-w-0">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Square Action Button */}
              <div className="flex items-center gap-3 self-center justify-self-start md:justify-self-end">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-lg border-border/80 bg-background/50 hover:bg-accent hover:border-primary/50 transition-all group/btn"
                >
                  <Link
                    to="/projects/$slug"
                    params={{ slug: item.slug }}
                    aria-label={`View ${item.title} project details`}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-foreground transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-primary"
                    />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next client project"
          className="group -mr-2 sm:-mr-4 flex h-14 w-12 shrink-0 items-center justify-center text-muted-foreground/70 transition-all hover:text-foreground hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronRight
            size={38}
            strokeWidth={1.35}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Subtle Slide Indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
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
            className={`h-1.5 rounded-full transition-all duration-300 ${current === idx
                ? 'w-6 bg-primary'
                : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
