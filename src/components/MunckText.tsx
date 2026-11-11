"use client";

import { Fragment } from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: -24, rotate: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

const puffPositions = [8, 24, 42, 58, 74, 90];

export default function MunckText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <span className={`relative inline-block ${className}`}>
      {puffPositions.map((left, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 w-6 h-6 rounded-full bg-white/25 blur-md pointer-events-none"
          style={{ left: `${left}%` }}
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          whileInView={{ opacity: [0, 0.5, 0], y: -30, scale: 1.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      <motion.span variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="relative">
        {words.map((word, wIndex) => (
          <Fragment key={wIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, cIndex) => (
                <motion.span key={cIndex} variants={letterVariant} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
            {wIndex < words.length - 1 && "\u00A0"}
          </Fragment>
        ))}
      </motion.span>
    </span>
  );
}