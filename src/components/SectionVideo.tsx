"use client";

import { useEffect, useRef, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

/**
 * Vídeo de apoio (sem som). Só carrega quando a seção se aproxima da tela e alterna
 * entre os vídeos informados a cada 9 segundos.
 */
export default function SectionVideo({ sources, label }: { sources: string[]; label: string }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!inView || sources.length < 2) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % sources.length), 9000);
    return () => clearInterval(id);
  }, [inView, sources.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, inView]);

  return (
    <div ref={ref} role="img" aria-label={label} className="relative aspect-video overflow-hidden bg-brand-panel">
      {inView &&
        sources.map((src, index) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            loop
            muted
            playsInline
            preload="metadata"
            autoPlay={index === 0}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101311]/70 via-transparent to-transparent" />
    </div>
  );
}
