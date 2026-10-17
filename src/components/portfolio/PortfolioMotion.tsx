import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SplashLoader } from "./SplashLoader";

export function PortfolioMotion() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on client mount once per browser tab if reduced motion is disabled
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasShownThisTab = false;
    try {
      hasShownThisTab = sessionStorage.getItem("portfolio_splash_shown") === "true";
    } catch {
      hasShownThisTab = false;
    }

    if (!prefersReduced && !hasShownThisTab) {
      setLoading(true);
      try {
        sessionStorage.setItem("portfolio_splash_shown", "true");
      } catch {
        // ignore
      }
    }

    const handleReplay = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setLoading(true);
      }
    };

    window.addEventListener("replay-splash", handleReplay);

    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("replay-splash", handleReplay);
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    if (reduce) return;
    let dispose: (() => void) | undefined;
    let cancelled = false;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-enter]").forEach((el) => {
            const direction = el.dataset["enter"];
            gsap.from(el, {
              x: direction === "left" ? -35 : direction === "right" ? 35 : 0,
              y: direction === "up" ? 35 : 0,
              opacity: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 93%", once: true },
            });
          });

          const media = gsap.matchMedia();
          media.add("(min-width: 1024px)", () => {
            gsap.utils.toArray<HTMLElement>("[data-project-preview]").forEach((el) => {
              gsap.fromTo(
                el,
                { y: 12 },
                {
                  y: -12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });
          });
        });

        dispose = () => context.revert();
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [reduce]);

  return (
    <>
      <div ref={progress} className="scroll-progress" aria-hidden="true" />
      {loading && !reduce && <SplashLoader onComplete={() => setLoading(false)} />}
    </>
  );
}