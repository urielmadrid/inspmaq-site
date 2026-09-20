"use client";

import { motion } from "framer-motion";

export default function WheelSmoke() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-1 pointer-events-none">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="w-4 h-4 rounded-full bg-white/20 blur-md"
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.5, 0], y: -40, scale: 1.3 }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        className="text-white/50"
      >
        <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="18" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="3" />
        <line x1="18" y1="26" x2="18" y2="32" stroke="currentColor" strokeWidth="3" />
        <line x1="4" y1="18" x2="10" y2="18" stroke="currentColor" strokeWidth="3" />
        <line x1="26" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="3" />
      </motion.svg>
    </div>
  );
}