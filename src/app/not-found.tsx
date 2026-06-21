import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000,transparent)]"
      />
      <div
        aria-hidden
        className="float-slow pointer-events-none absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]"
      />

      <div className="relative">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 font-display text-7xl font-semibold tracking-tight md:text-9xl">
          <span className="text-gradient">404</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          This page drifted off the grid. Let&apos;s get you back to something
          that ships.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-indigo px-6 py-3.5 text-base font-medium text-white glow-accent transition-transform duration-300 hover:-translate-y-0.5"
          >
            Back home
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-text transition-colors hover:bg-white/10"
          >
            Start a project
          </Link>
        </div>
      </div>
    </main>
  );
}
