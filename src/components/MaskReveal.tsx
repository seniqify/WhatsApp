"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Line-mask reveal: each line sits in an overflow-hidden box and slides up
 * from behind the mask. Use `mount` for above-the-fold (hero), otherwise it
 * triggers on scroll-into-view.
 */
export default function MaskReveal({
  lines,
  delay = 0,
  mount = false,
  className,
}: {
  lines: ReactNode[];
  delay?: number;
  mount?: boolean;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "block" }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            overflow: "hidden",
            paddingBottom: "0.14em",
            marginBottom: "-0.08em",
          }}
        >
          <motion.span
            style={{ display: "block", willChange: "transform" }}
            initial={{ y: "115%" }}
            {...(mount
              ? { animate: { y: 0 } }
              : {
                  whileInView: { y: 0 },
                  viewport: { once: true, margin: "-50px" },
                })}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
