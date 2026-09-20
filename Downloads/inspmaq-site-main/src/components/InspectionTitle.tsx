"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function InspectionTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const letters = text.split("");
  const duration = 0.4 + letters.length * 0.05;

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ x: "-10%", opacity: 0 }}
        whileInView={{ x: "100%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration, ease: "easeInOut" }}
        className="absolute -top-3 left-0 text-brand-lime pointer-events-none"
      >
        <Search size={28} strokeWidth={2.5} />
      </motion.span>

      <span className="relative inline-block">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ scale: 1, color: "#ffffff" }}
            whileInView={{
              scale: [1, 1.35, 1],
              color: ["#ffffff", "#8BD146", "#ffffff"],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: (index / letters.length) * duration,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}