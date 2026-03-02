export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-background/70 py-6 text-xs text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-4 sm:flex-row sm:items-center sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
          © {year} Software Engineer Portfolio · Built with Next.js & Tailwind
          CSS
        </p>
        <p className="text-[11px] text-slate-500">
          Update content by editing files in <code>src/data</code>.
        </p>
      </div>
    </footer>
  );
}

