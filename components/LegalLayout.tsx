import Logo from "./Logo";
import Link from "next/link";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-grid-fade" />

      <nav className="relative z-10 mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/"><Logo /></Link>
        <Link
          href="/"
          className="rounded-lg border border-border bg-panel px-3.5 py-1.5 text-sm text-white hover:border-accent"
        >
          ← Back to site
        </Link>
      </nav>

      <article className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        </header>

        <div className="legal-prose space-y-6 text-[15px] leading-relaxed text-muted">
          {children}
        </div>

        <footer className="mt-16 border-t border-border pt-8 text-xs text-muted">
          Questions?{" "}
          <a className="text-accent2 hover:text-white" href="mailto:hello@aiworkspacelab.com">
            hello@aiworkspacelab.com
          </a>
        </footer>
      </article>
    </main>
  );
}
