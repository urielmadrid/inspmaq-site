"use client";

import { Fragment } from "react";
import { motion, Variants } from "framer-motion";

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.02, delayChildren: delay },
    },
  };

  const words = text.split(" ");

  return (
    <motion.span variants={container} initial="hidden" animate="visible" className={className}>
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
  );
}