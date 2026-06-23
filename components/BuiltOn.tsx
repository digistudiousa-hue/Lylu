// "Built on" trust strip — establishes credibility via infrastructure choices.

import Link from "next/link";

const stack = [
  { n: "Stripe", d: "Payments" },
  { n: "Clerk", d: "Auth" },
  { n: "Supabase", d: "Database" },
  { n: "Vercel", d: "Hosting" },
];

export default function BuiltOn() {
  return (
    <section className="relative z-10 border-y border-border bg-panel/20">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <div className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted">
          Built on infrastructure you already trust
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stack.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-border bg-panel/40 px-4 py-3 text-center"
            >
              <div className="text-base font-semibold text-white">{s.n}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted">
                {s.d}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link
            href="/security"
            className="text-xs font-medium text-accent2 hover:text-white"
          >
            See how we secure your data →
          </Link>
        </div>
      </div>
    </section>
  );
}
