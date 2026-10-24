import SectionVideo from "@/components/SectionVideo";
import EquipmentImage from "@/components/EquipmentImage";

export type ServiceBlock = { heading: string; text?: string; items: string[] };

export type ServiceData = {
  id: string;
  n: string;
  title: string;
  purpose: string;
  intro: string;
  blocks: ServiceBlock[];
  videos?: string[];
  videoLabel?: string;
  image?: { src: string; alt: string; caption?: string; video?: { src: string; poster: string } };
  note?: string;
  extra?: React.ReactNode;
};

/** Seção editorial de um serviço: título fixo à esquerda, conteúdo à direita. */
export default function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <section id={service.id} className="hairline-t scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-14">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{service.n} / Serviço</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] text-brand-text md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-5 text-sm leading-6 text-brand-muted">
              <span className="font-mono text-xs uppercase tracking-[.16em] text-brand-lime">Finalidade </span>
              <br />
              {service.purpose}
            </p>
          </div>
        </header>

        <div className="lg:col-span-8">
          {service.videos && service.videos.length > 0 && (
            <div className="mb-10">
              <SectionVideo sources={service.videos} label={service.videoLabel ?? service.title} />
            </div>
          )}

          {service.image && (
            <EquipmentImage src={service.image.src} alt={service.image.alt} caption={service.image.caption} video={service.image.video} className="mb-10" />
          )}

          <p className="max-w-2xl text-lg leading-8 text-brand-text">{service.intro}</p>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {service.blocks.map((block) => (
              <div key={block.heading} className="hairline-t pt-5">
                <h3 className="font-heading text-lg font-bold text-white">{block.heading}</h3>
                {block.text && <p className="mt-2 text-sm leading-6 text-brand-muted">{block.text}</p>}
                <ul className="mt-4 space-y-2 text-sm text-brand-text">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-[11px] h-px w-4 shrink-0 bg-brand-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {service.extra}

          {service.note && <p className="mt-10 max-w-2xl text-xs leading-5 text-white/50">{service.note}</p>}
        </div>
      </div>
    </section>
  );
}
