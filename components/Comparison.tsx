// Differentiation table — Lylu vs Apollo vs ZoomInfo.
// The "time to first export" row is highlighted as the knockout punch.

const rows: {
  label: string;
  lylu: string;
  apollo: string;
  zoom: string;
  highlight?: boolean;
}[] = [
  { label: "Per-lead cost", lylu: "$0.10", apollo: "$0.30–0.50", zoom: "$1.00+" },
  { label: "Entry plan", lylu: "$0 · 50 leads free", apollo: "$99/mo", zoom: "Book a sales call" },
  { label: "Local / SMB data", lylu: "Built for it", apollo: "Thin", zoom: "Enterprise-only" },
  { label: "Time to first export", lylu: "~2 min", apollo: "Hours", zoom: "Days", highlight: true },
  { label: "Commitment", lylu: "Cancel anytime", apollo: "Annual upsell", zoom: "Annual + seats" },
];

export default function Comparison() {
  return (
    <section className="reveal relative z-10 mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          Why operators switch
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Same leads. A fraction of the time and cost.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We don&apos;t out-data the enterprise giants. We get you from
          &quot;who do I pitch&quot; to an exported list before their demo call
          is even scheduled.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-panel/60">
        <div className="grid grid-cols-4 border-b border-border px-4 py-3 text-xs uppercase tracking-wider text-muted">
          <div />
          <div className="text-center font-semibold text-white">Lylu</div>
          <div className="text-center">Apollo</div>
          <div className="text-center">ZoomInfo</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.label}
            className={`grid grid-cols-4 border-t border-border px-4 py-4 text-sm ${
              r.highlight ? "bg-accent/10" : ""
            }`}
          >
            <div className="text-muted">{r.label}</div>
            <div
              className={`text-center font-semibold ${
                r.highlight ? "text-accent2" : "text-white"
              }`}
            >
              {r.lylu}
            </div>
            <div className="text-center text-muted">{r.apollo}</div>
            <div className="text-center text-muted">{r.zoom}</div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-muted">
        Competitor pricing reflects publicly listed plans as of mid-2026; subject to change.
      </p>
    </section>
  );
}
