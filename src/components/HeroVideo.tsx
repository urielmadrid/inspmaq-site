"use client";

import { useEffect, useRef } from "react";

/**
 * Vídeo decorativo (Hero e seções) (sem áudio, em loop, decorativo).
 * Tenta iniciar assim que o componente monta e de novo quando o navegador libera a reprodução,
 * porque alguns navegadores ignoram o autoPlay na primeira tentativa.
 */
export default function HeroVideo({
  src,
  poster,
  label,
  className = "object-[60%_50%]",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const start = () => {
      video.play().catch(() => {});
    };
    start();
    video.addEventListener("canplay", start);
    const onVisible = () => {
      if (document.visibilityState === "visible") start();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      video.removeEventListener("canplay", start);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="auto"
      poster={poster}
      aria-label={label}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
