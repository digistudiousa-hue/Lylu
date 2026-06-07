import PageShell from "@/components/PageShell";
import PricingGrid from "@/components/PricingGrid";
import DashboardMock from "@/components/DashboardMock";

export const metadata = {
  title: "Lylu for Agencies — Local leads at agency scale",
  description: "The cheapest, fastest way to source local business leads for your clients. Built for lead-gen agencies, local SEO shops, and fractional SDRs.",
};

export default function ForAgenciesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
          Built for agencies
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white">
          Source leads for{" "}
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            every client
          </span>{" "}
          — for less than a coffee.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          1,000 fresh, filtered local business leads for $97. Per client, per month.
          No seat licenses. No procurement calls. No vendor lock-in.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://app.aiworkspacelab.com/sign-up"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Try free — 10 leads on us
          </a>
          <a
            href="#how"
            className="rounded-lg border border-border bg-panel/60 px-5 py-3 text-sm font-semibold text-white hover:border-accent"
          >
            How it works
          </a>
        </div>
        <div className="mt-16">
          <DashboardMock />
        </div>
      </section>

      <section className="border-y border-border bg-panel/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {[
            ["1,000", "leads/mo on Launch"],
            ["~10 sec", "per client search"],
            ["$0.10", "all-in per lead"],
            ["Unlimited", "verticals + cities"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A clean source of truth — for every client you run.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { n: "01", t: "Search by vertical + city", d: "Plumbers in Dallas. Dentists in Miami. HVAC in Phoenix. One query, one client at a time." },
            { n: "02", t: "Filter on signals", d: "Rating, has-phone, has-social, top prospects. Drop the dead weight before exporting." },
            { n: "03", t: "Export and pitch", d: "CSV out, straight into Instantly, Smartlead, or HubSpot. Hand off to your VA or your campaign." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-panel/60 p-6">
              <div className="text-xs font-mono text-muted">{s.n}</div>
              <div className="mt-2 text-white font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-3 text-center text-muted">
          Most agencies run on Launch. Pro for shops with 5+ clients.
        </p>
        <div className="mt-12">
          <PricingGrid />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-panel to-bg p-10 text-center glow">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for the agencies. Priced for the operators.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Pull your first 100 leads in the next 5 minutes. No card.
          </p>
          <a
            href="https://app.aiworkspacelab.com/sign-up"
            className="mt-7 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Try Lylu free
          </a>
        </div>
      </section>
    </PageShell>
  );
}
