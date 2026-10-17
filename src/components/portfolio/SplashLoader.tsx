import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logo from "@/assets/dhushyandh-mark.png";

interface SplashLoaderProps {
  onComplete?: () => void;
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleFinish = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 450);
  }, [onComplete]);

  // Handle prefers-reduced-motion
  useEffect(() => {
    if (reduce) {
      handleFinish();
    }
  }, [reduce, handleFinish]);

  // Smooth loading progress from 0 to 100%
  useEffect(() => {
    if (reduce) return;

    let current = 0;
    const interval = setInterval(() => {
      // Natural acceleration curve
      const step = current < 30 ? 2.8 : current < 75 ? 2.2 : 1.6;
      current = Math.min(100, current + step);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(handleFinish, 350);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [reduce, handleFinish]);

  // Allow clicking anywhere to skip
  const handleClick = () => {
    handleFinish();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Loading"
          onClick={handleClick}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)] text-foreground select-none cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(4px)",
            transition: { duration: 0.45, ease: "easeInOut" },
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-72 w-72 rounded-full opacity-30 blur-3xl transition-transform duration-500"
            style={{
              background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              transform: `scale(${1 + progress * 0.005})`,
            }}
          />

          {/* Centered Logo with Animated Progress Ring */}
          <div className="relative flex flex-col items-center">
            <div className="relative flex h-32 w-32 items-center justify-center">
              {/* Circular Progress Gauge */}
              <svg
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/10"
                />
                {/* Active Progress Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="276"
                  strokeDashoffset={276 - (276 * progress) / 100}
                  strokeLinecap="round"
                  className="text-primary transition-all duration-100 ease-out"
                  style={{
                    filter: "drop-shadow(0 0 6px var(--primary))",
                  }}
                />
              </svg>

              {/* Logo Emblem */}
              <motion.div
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-background/90 p-3 shadow-xl backdrop-blur-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={logo}
                  alt="Dhushyandh Logo"
                  width="60"
                  height="60"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </div>

            {/* Name & Title */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <h1 className="font-display text-xl font-bold tracking-tight text-foreground">
                Dhushyandh<span className="text-primary">.</span>
              </h1>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Portfolio
              </p>
            </motion.div>

            {/* Minimal Progress Bar & Counter */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-primary transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="font-mono text-xs font-semibold tracking-wider text-muted-foreground">
                {progress}%
              </div>
            </div>
          </div>

          {/* Discreet click to skip hint at bottom */}
          <div className="absolute bottom-8 font-mono text-[11px] text-muted-foreground/60 tracking-wider">
            Click anywhere to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
