import { useEffect, useRef, useState } from "react";

/**
 * Subtle pointer-following ambient glow and trailing cursor ring.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reducedMotion) return;

    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let dotX = mouseX;
    let dotY = mouseY;

    let frame = 0;

    const handlePointerMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const target = event.target as HTMLElement | null;

      const interactive = Boolean(
        target?.closest(
          "a, button, input, textarea, select, [role='button']",
        ),
      );

      if (dotRef.current) {
        dotRef.current.dataset.hot = interactive ? "true" : "false";
      }
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.16;
      dotY += (mouseY - dotY) * 0.16;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(
          ${mouseX - 180}px,
          ${mouseY - 180}px,
          0
        )`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(
          ${dotX - 14}px,
          ${dotY - 14}px,
          0
        )`;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handlePointerMove, {
      passive: true,
    });

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute h-[360px] w-[360px] rounded-full opacity-45 blur-[100px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 24%, transparent) 0%, transparent 68%)",
        }}
      />

      {/* Cursor ring */}
      <div
        ref={dotRef}
        className="cursor-ring absolute h-7 w-7 rounded-full border border-primary/45 transition-[width,height,border-color,background-color] duration-200 will-change-transform"
      />
    </div>
  );
}