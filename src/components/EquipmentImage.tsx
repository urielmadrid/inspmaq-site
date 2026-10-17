import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";

type Props = {
  /** Caminho dentro de /public, por exemplo "/tombador-industrial.webp". */
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /** Se informado, o vídeo ocupa o lugar da foto/esquema, na mesma caixa. */
  video?: { src: string; poster: string };
};

/**
 * Foto de equipamento. Se o arquivo ainda não estiver em /public, mostra um esquema técnico
 * ilustrativo (tombador inclinando a carroceria) em vez de uma imagem quebrada.
 */
export default function EquipmentImage({ src, alt, caption, className = "", video }: Props) {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));

  return (
    <figure className={className}>
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-panel sm:aspect-[16/10]">
        {video ? (
          <>
            <HeroVideo src={video.src} poster={video.poster} label={alt} className="object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101311]/45 via-transparent to-transparent" />
            <div aria-hidden="true" className="brand-rule absolute inset-x-0 bottom-0" />
          </>
        ) : hasPhoto ? (
          <>
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#101311]/55 via-transparent to-transparent" />
          </>
        ) : (
          <TombadorDiagram label={alt} />
        )}
      </div>
      {caption && <figcaption className="mt-3 font-mono text-xs uppercase tracking-[.14em] text-white/50">{caption}</figcaption>}
    </figure>
  );
}

function TombadorDiagram({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={`Esquema ilustrativo: ${label}`} className="absolute inset-0 h-full w-full">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(243,244,240,.06)" strokeWidth="1" />
        </pattern>
        <linearGradient id="rule" x1="0" x2="1">
          <stop offset="0" stopColor="#02842E" />
          <stop offset=".62" stopColor="#D8261C" />
          <stop offset="1" stopColor="#FFE000" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#grid)" />
      {/* solo e moega */}
      <path d="M0 300H420V360H220L180 320H0Z" fill="rgba(243,244,240,.05)" />
      <path d="M0 300H420M180 320H220" stroke="rgba(243,244,240,.35)" strokeWidth="2" fill="none" />
      <path d="M180 320L220 360H420" stroke="rgba(243,244,240,.35)" strokeWidth="2" fill="none" />
      {/* plataforma inclinada + caminhão */}
      <g transform="rotate(-16 420 300)">
        <rect x="150" y="288" width="270" height="12" fill="#F5B800" />
        <rect x="170" y="226" width="190" height="62" fill="rgba(2,132,46,.45)" stroke="#4CC97A" strokeWidth="2" />
        <rect x="360" y="246" width="56" height="42" fill="rgba(243,244,240,.12)" stroke="rgba(243,244,240,.5)" strokeWidth="2" />
        <circle cx="210" cy="296" r="13" fill="#101311" stroke="rgba(243,244,240,.6)" strokeWidth="3" />
        <circle cx="388" cy="296" r="13" fill="#101311" stroke="rgba(243,244,240,.6)" strokeWidth="3" />
      </g>
      {/* cilindro hidráulico */}
      <line x1="300" y1="300" x2="268" y2="226" stroke="#F3F4F0" strokeWidth="6" strokeLinecap="round" />
      {/* carga descendo */}
      <g fill="#FFD23F">
        <circle cx="168" cy="268" r="4" /><circle cx="180" cy="288" r="4" /><circle cx="196" cy="306" r="4" />
        <circle cx="172" cy="300" r="4" /><circle cx="206" cy="326" r="4" /><circle cx="190" cy="334" r="4" />
      </g>
      <rect x="40" y="48" width="64" height="3" fill="url(#rule)" />
      <text x="40" y="76" fill="rgba(243,244,240,.8)" fontFamily="ui-monospace, monospace" fontSize="14" letterSpacing="2">ESQUEMA ILUSTRATIVO</text>
      <text x="40" y="98" fill="rgba(243,244,240,.5)" fontFamily="ui-monospace, monospace" fontSize="12" letterSpacing="1.5">TOMBADOR · DESCARGA A GRANEL</text>
    </svg>
  );
}
