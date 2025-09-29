export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-purple-200">
            Almost ready
          </span>
          <h1 className="text-5xl font-semibold uppercase tracking-[0.35em] text-slate-100">
            Coming Soon
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-slate-400">
          Phalia.pk is getting a fresh launch. While we refine the experience,
          jump straight into what inspired it and get a head start with
          everything already live.
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 text-4xl">
            <span aria-hidden="true" className="animate-bounce text-purple-200">👉</span>
            <a
              href="https://mbdin.cc?utm_source=phalia.pk"
              className="rounded-full bg-purple-500 px-10 py-4 text-2xl font-semibold tracking-tight text-slate-950 shadow-[0_15px_40px_-15px_rgba(168,85,247,0.8)] transition-transform duration-150 hover:scale-110 hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore MBDin.cc ↗
            </a>
            <span aria-hidden="true" className="animate-bounce text-purple-200">👈</span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-200">
            Live now — new drops weekly
          </p>
        </div>
      </div>
    </main>
  );
}
