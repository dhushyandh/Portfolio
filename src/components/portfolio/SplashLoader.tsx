import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface SplashLoaderProps {
  onComplete?: () => void;
}

const TARGET_NAME = "Dhushyandh";

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleFinish = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 450);
  }, [onComplete]);

  // Immediately finish if reduced motion is requested
  useEffect(() => {
    if (reduce) {
      handleFinish();
    }
  }, [reduce, handleFinish]);

  // Typewriter effect for the brand logo name
  useEffect(() => {
    if (reduce) return;

    let idx = 0;
    let typingTimer: NodeJS.Timeout | null = null;
    let finishTimer: NodeJS.Timeout | null = null;

    // Small delay before typing begins
    const startDelay = setTimeout(() => {
      typingTimer = setInterval(() => {
        idx++;
        setTypedText(TARGET_NAME.slice(0, idx));

        if (idx >= TARGET_NAME.length) {
          if (typingTimer) clearInterval(typingTimer);
          setIsTypingDone(true);

          // Hold completed logo for a clean brief pause before sliding out
          finishTimer = setTimeout(() => {
            handleFinish();
          }, 650);
        }
      }, 85);
    }, 180);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(startDelay);
      if (typingTimer) clearInterval(typingTimer);
      if (finishTimer) clearInterval(finishTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reduce, handleFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Welcome"
          onClick={handleFinish}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white text-[#171811] select-none cursor-pointer overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            filter: "blur(6px)",
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Centered Brand Logo Typewriter */}
          <div className="relative flex items-center justify-center px-6">
            <h1
              className="text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#171811] select-none"
              style={{
                fontFamily:
                  'var(--font-serif, "Newsreader", "Instrument Serif", "Playfair Display", Georgia, serif)',
                fontStyle: "italic",
                fontWeight: 500,
                letterSpacing: "-0.04em",
              }}
            >
              <span>{typedText}</span>
              {/* Logo Accent Dot when finished */}
              {isTypingDone && (
                <span className="text-[#489a14]">.</span>
              )}
              {/* Typewriter Cursor */}
              <span
                className={`inline-block ml-1 font-light text-[#489a14] ${
                  isTypingDone ? "animate-pulse opacity-70" : "opacity-100"
                }`}
                aria-hidden="true"
              >
                |
              </span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
