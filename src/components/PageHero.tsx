type Props = {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
};

/** Cabeçalho das páginas internas, com a mesma linguagem visual da home. */
export default function PageHero({ eyebrow, title, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] text-brand-text sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {children && (
          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
