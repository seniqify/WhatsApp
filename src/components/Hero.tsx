"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MaskReveal from "./MaskReveal";
import HeroChat from "./HeroChat";
import Particles from "./Particles";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_55%,transparent)]"
      />
      <motion.div
        style={{ y: yGlow }}
        aria-hidden
        className="float-slow pointer-events-none absolute -top-32 left-0 h-[520px] w-[520px] rounded-full bg-wa/15 blur-[130px]"
      />
      <motion.div
        style={{ y: yGlow }}
        aria-hidden
        className="float-slow pointer-events-none absolute top-10 right-0 h-[480px] w-[480px] rounded-full bg-teal/15 blur-[130px] [animation-delay:-6s]"
      />
      <Particles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-8">
        {/* left — copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="glass mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm text-muted lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa" />
            </span>
            WhatsApp Business Platform · Built for India 🇮🇳
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            <MaskReveal
              mount
              delay={0.2}
              lines={[
                <>Your business,</>,
                <>
                  powered by <span className="text-gradient">WhatsApp</span>.
                </>,
              ]}
            />
          </h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0"
          >
            Seniqify gives Indian businesses the WhatsApp API, storefronts, and
            automation to sell, support, and scale — right where their customers
            already chat.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-wa to-emerald px-6 py-3.5 text-base font-semibold text-base glow-accent transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Started Free
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://wa.me/918625060631"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-text transition-colors hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-wa">
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />
              </svg>
              Talk to Sales
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-faint lg:justify-start"
          >
            <span>500+ businesses</span>
            <span className="hidden sm:inline">•</span>
            <span>₹2Cr+ GMV enabled</span>
            <span className="hidden sm:inline">•</span>
            <span>99.9% uptime</span>
          </motion.div>
        </motion.div>

        {/* right — chat mock */}
        <motion.div style={{ y: yVisual }} className="relative">
          <HeroChat />
        </motion.div>
      </div>
    </section>
  );
}
