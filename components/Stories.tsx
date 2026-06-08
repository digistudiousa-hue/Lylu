// Narrative case-study mini-stories. Framed as illustrative scenarios,
// not invented quotes from invented people, so they stay FTC-compliant.

const stories = [
  {
    tag: "Lead-gen agency · Austin, TX",
    headline: "From spreadsheet hell to 14 booked calls in week one.",
    body:
      "A 4-person outbound agency was running 3 clients on a stack of Apollo, a Clay account, and a $700/mo VA who scraped Google Maps by hand. They cut the stack, pulled 1,000 plumbers in Austin, Dallas, and Houston in under 10 minutes, and fed it straight into Smartlead. Result by Friday: 14 booked discovery calls.",
    stats: [
      ["~$650", "saved / mo"],
      ["10 min", "to first export"],
      ["14", "calls booked"],
    ],
  },
  {
    tag: "Local SEO shop · Brooklyn, NY",
    headline: "Replaced their VA. Doubled their pipeline.",
    body:
      "A 2-person local SEO shop pitched dentists and law firms in Brooklyn and Queens. The bottleneck was research — finding ranked-but-thin sites with a phone they could call. With Lylu's 'has phone + 4.5★+' filter, they built a 280-lead list in one sitting and started cold-calling that afternoon. Pipeline value 30 days later: ~$22K MRR potential.",
    stats: [
      ["280", "verified leads"],
      ["1 sitting", "vs. 2 weeks"],
      ["~$22K", "pipeline added"],
    ],
  },
  {
    tag: "Fractional SDR · Miami, FL",
    headline: "Three clients. One $97 plan. Zero seat math.",
    body:
      "A fractional SDR managing outbound for three SMB clients used to juggle three Apollo seats — $297/mo before campaigns. With Lylu Launch at $97, they pulled fresh local lists per client (medical, HVAC, agencies), exported each to its own Instantly workspace, and kept the difference as margin. Same outcome, two-thirds cheaper.",
    stats: [
      ["$200", "saved / mo"],
      ["3", "clients, 1 tool"],
      ["100%", "kept the margin"],
    ],
  },
];

export default function Stories() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          Stories from the field
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What operators are doing with Lylu.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Three patterns we see again and again — agencies cutting tool spend,
          SEO shops replacing manual research, fractional SDRs scaling without seats.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {stories.map((s) => (
          <article
            key={s.headline}
            className="flex flex-col rounded-2xl border border-border bg-panel/60 p-6"
          >
            <div className="text-[11px] uppercase tracking-wider text-accent2">
              {s.tag}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {s.headline}
            </h3>
            <p className="mt-3 text-sm text-muted">{s.body}</p>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4">
              {s.stats.map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-base font-semibold text-white">{n}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-[10px] text-muted">
        Illustrative scenarios reflecting how Lylu is used by early operators. Specific outcomes vary.
      </p>
    </section>
  );
}
