"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function InspectionTitle({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  const totalLetters = text.replace(/ /g, "").length;
  const duration = 0.4 + totalLetters * 0.05;

  let globalIndex = 0;

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
        {words.map((word, wIndex) => (
          <Fragment key={wIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, cIndex) => {
                const delay = (globalIndex / totalLetters) * duration;
                globalIndex++;
                return (
                  <motion.span
                    key={cIndex}
                    initial={{ scale: 1, color: "#ffffff" }}
                    whileInView={{ scale: [1, 1.35, 1], color: ["#ffffff", "#8BD146", "#ffffff"] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {wIndex < words.length - 1 && "\u00A0"}
          </Fragment>
        ))}
      </span>
    </span>
  );
}