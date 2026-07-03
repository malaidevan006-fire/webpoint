type SectionShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function SectionShell({ eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section className="relative rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-[0_20px_80px_rgba(3,7,18,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10">
      <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {description ? <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
