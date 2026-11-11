type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
};

/** Cabeçalho editorial de seção: rótulo numerado à esquerda, título e texto à direita. */
export default function SectionHead({ index, label, title, children }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-10">
      <p className="eyebrow md:col-span-4">
        {index} / {label}
      </p>
      <div className="md:col-span-8">
        <h2 className="font-heading text-3xl font-bold leading-[1.1] text-brand-text md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {children && (
          <div className="mt-6 max-w-2xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
