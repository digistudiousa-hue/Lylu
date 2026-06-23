import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = { title: "Not found — Lylu" };

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-grid-fade" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/"><Logo /></Link>
        <Link
          href="/"
          className="rounded-lg border border-border bg-panel px-3.5 py-1.5 text-sm text-white hover:border-accent"
        >
          ← Back to site
        </Link>
      </nav>

      <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-32 pb-24 text-center">
        <div className="mb-6 text-7xl font-bold tracking-tight text-white">
          4
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            0
          </span>
          4
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The link is broken, the page moved, or it was never here to begin with.
          Either way — let&apos;s get you back.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Go home
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-border bg-panel/60 px-5 py-3 text-sm font-semibold text-white hover:border-accent"
          >
            See pricing
          </Link>
        </div>
        <p className="mt-12 text-xs text-muted">
          Found a broken link?{" "}
          <a className="text-accent2 hover:text-white" href="mailto:hello@lylu.ai">
            Tell us
          </a>
          .
        </p>
      </section>
    </main>
  );
}
