import PageShell from "@/components/PageShell";
import PricingGrid from "@/components/PricingGrid";
import DashboardMock from "@/components/DashboardMock";
import AgencyMath from "@/components/AgencyMath";
import { SIGNUP_URL } from "@/lib/site";

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
          — for 10 cents apiece.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          1,000 fresh, filtered local business leads for $97. Per client, per month.
          No seat licenses. No procurement calls. No vendor lock-in.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SIGNUP_URL}
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Start free — 50 leads on us
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

      <AgencyMath />

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
            Pull your first 50 leads in the next 5 minutes. No card.
          </p>
          <a
            href={SIGNUP_URL}
            className="mt-7 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Try Lylu free
          </a>
        </div>
      </section>
    </PageShell>
  );
}
