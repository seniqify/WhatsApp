"use client";

import { useEffect, useRef } from "react";

/** Subtle radial glow that follows the cursor across the whole page. */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    const leave = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden opacity-0 transition-opacity duration-700 md:block"
      style={{
        background:
          "radial-gradient(560px circle at var(--x) var(--y), rgba(124,108,255,0.09), transparent 42%)",
      }}
    />
  );
}
