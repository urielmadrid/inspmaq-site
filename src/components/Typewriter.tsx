"use client";

import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Typewriter({
  text,
  speed = 10,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState<number | null>(null);
  const [sparkIndices, setSparkIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const resetFrame = window.requestAnimationFrame(() => {
      setCount(null);
      setSparkIndices(new Set());
    });
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => {
      window.cancelAnimationFrame(resetFrame);
      clearInterval(interval);
    };
  }, [text, speed]);

  useEffect(() => {
    if (count !== text.length) return;

    const sparkInterval = setInterval(() => {
      const nonSpaceIndices = [...Array(text.length).keys()].filter(
        (i) => text[i] !== " "
      );
      const sparkCount = 2 + Math.floor(Math.random() * 3);
      const chosen = new Set<number>();
      while (chosen.size < sparkCount && chosen.size < nonSpaceIndices.length) {
        const random =
          nonSpaceIndices[Math.floor(Math.random() * nonSpaceIndices.length)];
        chosen.add(random);
      }
      setSparkIndices(chosen);
      setTimeout(() => setSparkIndices(new Set()), 200);
    }, 3000);

    return () => clearInterval(sparkInterval);
  }, [count, text]);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <p className={className}>
      {words.map((word, wIndex) => {
        const visibleChars: { char: string; index: number }[] = [];
        for (const char of word) {
          if (count !== null && charIndex < count) visibleChars.push({ char, index: charIndex });
          charIndex++;
        }
        charIndex++;

        if (visibleChars.length === 0) return null;

        return (
          <Fragment key={wIndex}>
            <span className="inline-block whitespace-nowrap">
              {visibleChars.map(({ char, index }) => {
                const isSparking = sparkIndices.has(index);
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={
                      isSparking
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1.15,
                            color: "#FFD166",
                            textShadow:
                              "0 0 12px rgba(255,180,50,1), 0 0 24px rgba(255,120,20,0.9)",
                          }
                        : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            color: "#ffffff",
                            textShadow: "0 0 0px rgba(255,180,50,0)",
                          }
                    }
                    transition={{ duration: isSparking ? 0.15 : 0.5 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>{" "}
          </Fragment>
        );
      })}
      <span className="inline-block w-[2px] h-[1em] bg-brand-lime align-middle ml-0.5 animate-pulse" />
    </p>
  );
}