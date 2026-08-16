import { useEffect, useRef, useState } from "react";

/**
 * Pointer-following ambient glow + trailing dot.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement | null;
      const interactive = Boolean(target?.closest("a, button, input, textarea, [role='button']"));
      if (dotRef.current) dotRef.current.dataset["hot"] = interactive ? "true" : "false";
    };

    const loop = () => {
      dotX += (mouseX - dotX) * 0.18;
      dotY += (mouseY - dotY) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX - 200}px, ${mouseY - 200}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 16}px, ${dotY - 16}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div
        ref={glowRef}
        className="absolute h-[400px] w-[400px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 32%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="cursor-ring absolute h-8 w-8 rounded-full border border-primary/60"
      />
    </div>
  );
}