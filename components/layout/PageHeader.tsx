type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-moss">{eyebrow}</p> : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-normal text-ink md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">{description}</p>
    </div>
  );
}
