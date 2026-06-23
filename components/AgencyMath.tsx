// Side-by-side cost comparison: the stack Lylu replaces vs. one Lylu plan.
// The single most persuasive block on the site — used on the homepage (right
// before pricing) and on /for-agencies. Keep both in sync via this component.

export default function AgencyMath() {
  return (
    <section className="reveal relative z-10 mx-auto max-w-5xl px-6 py-14 sm:py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        The agency math.
      </h2>
      <p className="mt-3 text-center text-muted">
        You run cold outbound for 3 SMB clients at $1,500/mo each.
        Here&apos;s what Lylu costs vs. what it replaces.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-panel/60 p-6">
          <div className="text-sm uppercase tracking-wider text-muted">Before</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Apollo seat — <span className="text-white">$99/mo</span></li>
            <li>Clay credits — <span className="text-white">$149/mo</span></li>
            <li>VA scraping Google Maps — <span className="text-white">$300/mo</span></li>
            <li className="border-t border-border pt-2">Total — <span className="text-white font-semibold">$548/mo</span></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-accent bg-gradient-to-b from-accent/10 to-transparent p-6 glow">
          <div className="text-sm uppercase tracking-wider text-accent2">With Lylu</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Lylu Launch plan — <span className="text-white">$97/mo</span></li>
            <li>1,000 fresh leads/mo</li>
            <li>~333 leads per client/mo</li>
            <li className="border-t border-border pt-2">Total — <span className="text-white font-semibold">$97/mo</span></li>
            <li className="text-accent2">Save $451/mo. Per agency, not per client.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
