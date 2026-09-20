"use client";

import { motion, Variants } from "framer-motion";
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const letter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    color: "#FFEA70",
    textShadow:
      "0 0 30px rgba(255,200,60,1), 0 0 60px rgba(255,120,20,1), 0 0 90px rgba(255,80,0,0.8)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    color: "#FFFFFF",
    textShadow: "0 0 0px rgba(255,180,50,0)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SparkText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}