"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

const sparkCount = 12;

const sparks = Array.from({ length: sparkCount }, (_, i) => {
  const angle = (Math.PI * 2 * i) / sparkCount + Math.random() * 0.3;
  const distance = 35 + Math.random() * 35;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    angleDeg: (angle * 180) / Math.PI + 90,
  };
});

export default function SparkButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.div
        aria-hidden
        className="absolute -inset-4 rounded-full bg-amber-200/30 blur-2xl pointer-events-none"
        animate={{ x: [0, 10, -8, 0], y: [0, -6, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.button
        type="button"
        onClick={onClick}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        animate={{
          boxShadow: [
            "0 0 12px rgba(255,210,120,0.5), 0 0 24px rgba(255,170,80,0.3)",
            "0 0 22px rgba(255,225,150,0.85), 0 0 44px rgba(255,190,100,0.5)",
            "0 0 12px rgba(255,210,120,0.5), 0 0 24px rgba(255,170,80,0.3)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative bg-brand-darker border-2 border-amber-200/70 text-white px-8 py-4 rounded-full font-heading font-semibold text-lg"
      >
        {children}

        {sparks.map((spark, i) => (
          <motion.span
            key={i}
            className="absolute top-1/2 left-1/2 w-[2px] h-[12px] rounded-full bg-gradient-to-b from-yellow-100 via-amber-300 to-orange-500"
            initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: spark.angleDeg }}
            animate={
              hovered
                ? {
                    opacity: [1, 0],
                    x: spark.x,
                    y: spark.y,
                    scale: [1, 0.3],
                    rotate: spark.angleDeg,
                  }
                : { opacity: 0, x: 0, y: 0, rotate: spark.angleDeg }
            }
            transition={{ duration: 0.35, delay: i * 0.015, ease: "easeOut" }}
          />
        ))}
      </motion.button>
    </div>
  );
}