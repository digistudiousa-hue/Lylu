const stories = [
  {
    tag: "Lead-gen agency",
    headline: "One search per client, every Monday morning.",
    steps: [
      "Open Lylu and run one search per client — plumbers in Dallas, roofers in Phoenix, gyms in Chicago.",
      "Filter to has-phone + 4.5★+ to drop the long tail before exporting.",
      "Drop each CSV into its own Instantly workspace. Campaigns are live before 10am.",
    ],
    why: "Replaces Apollo + Clay + a VA doing manual Google Maps research — three line items down to one.",
  },
  {
    tag: "Local SEO shop",
    headline: "Find the businesses worth pitching — before you dial.",
    steps: [
      "Search a vertical and city: dentists in Brooklyn, law firms in Queens.",
      "Filter on has-phone + minimum star rating — surfaces businesses that actively manage their presence.",
      "Export to a calling list. Research that used to take days happens in one sitting.",
    ],
    why: "The bottleneck in local SEO outreach is qualification. Lylu's filters do that work before you touch the phone.",
  },
  {
    tag: "Fractional SDR",
    headline: "Three clients. One plan. No seat math.",
    steps: [
      "Run a separate search per client — medical in Tampa, HVAC in Denver, agencies in LA.",
      "Export each to its own sending workspace (Instantly, Smartlead, or a spreadsheet).",
      "One Launch plan covers all three. No per-seat licenses, no per-client accounts.",
    ],
    why: "Running outbound for multiple SMB clients used to mean multiple Apollo seats. Lylu doesn't charge per seat or per client.",
  },
];

export default function Stories() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-24">
      <div className="text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          How operators use Lylu
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Three workflows. One tool.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Whether you run outbound for clients, pitch businesses for SEO, or manage
          campaigns as a fractional SDR — the workflow is the same. Search, filter, export, pitch.
        </p>
      </div>

      <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
        {stories.map((s) => (
          <article
            key={s.headline}
            className="flex min-w-[82%] snap-start flex-col rounded-2xl border border-border bg-panel/60 p-6 sm:min-w-0"
          >
            <div className="text-[11px] uppercase tracking-wider text-accent2">
              {s.tag}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {s.headline}
            </h3>
            <ol className="mt-4 space-y-2.5">
              {s.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[10px] font-bold text-accent2">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-border pt-4 text-xs text-muted italic">
              {s.why}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
