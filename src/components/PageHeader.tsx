export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-lg opacity-90 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
