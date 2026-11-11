"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

export default function MunckButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="w-[2px] bg-white/40 origin-top"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ height: 22 }}
      />
      <motion.div
        className="w-3 h-3 -mt-0.5 mb-1 rounded-full border-2 border-white/60"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
        animate={
          hovered
            ? { y: -6, rotate: [0, -3, 3, -2, 2, 0] }
            : { y: 0, rotate: 0 }
        }
        transition={
          hovered
            ? {
                rotate: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 0.3 },
              }
            : { duration: 0.3 }
        }
      >
        <Link
          href={href}
          className="bg-brand-green hover:bg-brand-lime hover:text-brand-dark transition-colors text-white px-8 py-4 rounded-full font-heading font-semibold text-lg inline-block"
        >
          {children}
        </Link>
      </motion.div>
    </div>
  );
}