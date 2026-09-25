"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const MotionLink = motion(Link);

export default function InspectionButton({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const letters = text.split("");

  const measure = (index: number) => {
    const button = buttonRef.current;
    const el = letterRefs.current[index];
    if (!button || !el) return;
    const buttonRect = button.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setTargetX(rect.left - buttonRect.left + rect.width / 2);
  };

  useEffect(() => {
    measure(0);
  }, []);

  useEffect(() => {
    if (!hovered) return;
    const firstFrame = window.requestAnimationFrame(() => {
      setActiveIndex(0);
      measure(0);
    });
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= letters.length) {
        clearInterval(interval);
        return;
      }
      setActiveIndex(i);
      measure(i);
    }, 80);
    return () => {
      window.cancelAnimationFrame(firstFrame);
      clearInterval(interval);
    };
  }, [hovered, letters.length]);

  return (
    <MotionLink
      ref={buttonRef}
      href="/contato"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      className="relative bg-brand-green hover:bg-brand-lime hover:text-brand-dark transition-colors text-white px-8 py-4 rounded-full font-heading font-semibold text-lg"
    >
      <span className="relative z-10 inline-flex">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            animate={{ scale: hovered && index === activeIndex ? 1.7 : 1 }}
            transition={{ type: "spring", stiffness: 900, damping: 30 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      <motion.span
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        animate={{ left: targetX, opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 900, damping: 35 }}
      >
        <Search size={30} strokeWidth={2.5} />
      </motion.span>
    </MotionLink>
  );
}