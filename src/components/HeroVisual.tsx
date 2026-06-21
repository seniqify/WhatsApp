"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function Badge({
  icon,
  title,
  sub,
  gradient,
  className,
  delay,
  floatDelay,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  gradient: string;
  className: string;
  delay: number;
  floatDelay: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="badge-float glass flex items-center gap-3 rounded-2xl p-2.5 pr-4 shadow-[var(--shadow-card)]"
        style={{ animationDelay: floatDelay }}
      >
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${gradient} text-white`}
        >
          {icon}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-text">{title}</span>
          <span className="block text-xs text-muted">{sub}</span>
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease, delay: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(124,108,255,0.45),rgba(34,211,238,0.12)_45%,transparent_70%)] blur-2xl"
      />

      {/* tilted orbit rings */}
      <div
        aria-hidden
        className="absolute inset-0 grid place-items-center [perspective:900px]"
      >
        <div className="relative h-[78%] w-[78%] [transform:rotateX(72deg)]">
          <div className="spin-slow absolute inset-0 rounded-full border border-blue/30">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="spin-rev absolute inset-[14%] rounded-full border border-violet/30">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet shadow-[0_0_12px_2px_rgba(139,92,246,0.8)]" />
          </div>
        </div>
      </div>

      {/* neural core sphere */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="pulse-core relative h-[58%] w-[58%]">
          {/* scanning conic shimmer */}
          <div
            aria-hidden
            className="spin-slow absolute inset-0 rounded-full opacity-60 [mask-image:radial-gradient(circle,#000_60%,transparent_72%)]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.55) 60deg, transparent 160deg)",
            }}
          />
          <svg
            viewBox="0 0 200 200"
            className="relative h-full w-full drop-shadow-[0_0_30px_rgba(124,108,255,0.55)]"
          >
            <defs>
              <radialGradient id="core" cx="46%" cy="38%" r="70%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="50%" stopColor="#4f7cff" />
                <stop offset="100%" stopColor="#0b1124" />
              </radialGradient>
              <linearGradient id="wire" x1="0" y1="0" x2="200" y2="200">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="78" fill="url(#core)" />
            <g stroke="url(#wire)" strokeWidth="0.8" fill="none" opacity="0.65">
              <circle cx="100" cy="100" r="78" strokeWidth="1.1" />
              <ellipse cx="100" cy="100" rx="30" ry="78" />
              <ellipse cx="100" cy="100" rx="57" ry="78" />
              <ellipse cx="100" cy="100" rx="78" ry="30" />
              <ellipse cx="100" cy="100" rx="78" ry="57" />
            </g>
            <g fill="#22d3ee">
              {[
                [100, 22],
                [157, 78],
                [70, 138],
                [134, 150],
                [44, 64],
                [100, 100],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i === 5 ? 3.5 : 2.4}
                  className="drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* floating feature badges */}
      <Badge
        className="right-0 top-[12%] md:-right-4"
        delay={0.9}
        floatDelay="0s"
        gradient="from-amber-400 to-orange-500"
        title="Lightning Fast"
        sub="Ships in 7 days"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" />
          </svg>
        }
      />
      <Badge
        className="bottom-[14%] left-0 md:-left-6"
        delay={1.05}
        floatDelay="1.6s"
        gradient="from-violet to-indigo"
        title="Pixel Perfect"
        sub="Designed in-house"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="m12 2 2.6 6.3L21 9l-5 4.3L17.5 20 12 16.4 6.5 20 8 13.3 3 9l6.4-.7z" />
          </svg>
        }
      />
      <Badge
        className="bottom-[28%] right-0 md:-right-8"
        delay={1.2}
        floatDelay="3.1s"
        gradient="from-pink-500 to-rose-500"
        title="Loved by Founders"
        sub="5★ rated work"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 5 5.3 5c2 0 3.4 1.2 4.2 2.5C10.3 6.2 11.7 5 13.7 5 17 5 18.6 8.4 17 11.7 14.5 16.4 12 21 12 21z" />
          </svg>
        }
      />
    </motion.div>
  );
}
