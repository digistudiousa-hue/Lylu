import DashboardMock from "@/components/DashboardMock";
import PricingGrid from "@/components/PricingGrid";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Business Hub",
    desc: "Company directory — ratings, address, phone & social.",
    status: "Live",
  },
  {
    name: "Decision Makers",
    desc: "Key contacts with LinkedIn, email & professional bio.",
    status: "Soon",
  },
  {
    name: "AI Sales Intelligence",
    desc: "AI-generated 5-step outreach sequences per contact.",
    status: "Soon",
  },
  {
    name: "Live Execution",
    desc: "Done-for-you outreach across 1,000+ prospect campaigns.",
    status: "Soon",
  },
];

const faqs = [
  {
    q: "Where does the data come from?",
    a: "Public business listings — the same sources you'd hit by hand on Google Maps, but unified, deduped, and instantly searchable with ratings, phone, and social signals attached.",
  },
  {
    q: "How fresh is the data?",
    a: "Every search runs against live sources. You're not browsing a stale dump — when a business updates its phone number this week, you see it this week.",
  },
  {
    q: "What counts as one lead?",
    a: "One business record. Whether it has 1 signal or all 4 (rating, address, phone, social), it's 10 credits — $0.10. No hidden enrichment fees.",
  },
  {
    q: "Can I export to my CRM or sending tool?",
    a: "Yes. CSV export is included on every paid plan. Native integrations with Instantly, Smartlead, and HubSpot are on the roadmap.",
  },
  {
    q: "Do unused leads roll over?",
    a: "Top-ups never expire. Monthly plan credits reset each cycle — upgrade or grab a top-up if you need more headroom.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. One click, no email, no retention call. We earn the next month or we don't.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-grid-fade" />

      <Nav />

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
          Now in beta — 276 records across 12 cities
        </div>
        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Local business leads,{" "}
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            in seconds.
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
          Search any industry in any city. Get ratings, phone, website, and
          socials — clean enough to pitch from. Built for agencies who run outbound at scale.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://app.aiworkspacelab.com/sign-up"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Try free — 10 leads on us
          </a>
          <a
            href="#product"
            className="rounded-lg border border-border bg-panel/60 px-5 py-3 text-sm font-semibold text-white hover:border-accent"
          >
            See it in action
          </a>
        </div>
        <p className="mt-3 text-xs text-muted">No credit card. Cancel anytime.</p>

        <div className="mt-16">
          <DashboardMock />
        </div>
      </section>

      <section className="relative z-10 border-y border-border bg-panel/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {[
            ["276", "records indexed"],
            ["12+", "cities covered"],
            ["$0.10", "per lead"],
            ["90%", "margin — passed to you"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The lead-gen stack is broken.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Apollo charges enterprise prices for thin SMB data. ZoomInfo wants a sales call.
          Google Maps scrapers break every other week. You end up paying three tools
          and a VA to do what one clean search should solve.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Cheaper", d: "$0.10 per lead. 3–5× cheaper than Apollo." },
            { t: "Faster", d: "Search → results in under 2 seconds." },
            { t: "Cleaner", d: "Pre-filtered by rating, signals, and intent." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-panel/60 p-5 text-left">
              <div className="text-white font-semibold">{c.t}</div>
              <div className="mt-1 text-sm text-muted">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="product" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Product
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One search. Everything you need to pitch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Type a business type and a city. Get a clean, filterable list of
            real companies — with the signals that tell you who's worth a cold call.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Smart filters", d: "Rating, has-phone, has-social, industry, city, top prospects." },
            { t: "Signal badges", d: "Instantly see which leads have a phone, address, or social profile." },
            { t: "Export-ready", d: "CSV out, into Instantly, Smartlead, HubSpot, or your spreadsheet." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-panel/60 p-6">
              <div className="text-white font-semibold">{f.t}</div>
              <div className="mt-2 text-sm text-muted">{f.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto aspect-video max-w-4xl rounded-2xl border border-border bg-panel/60 grid place-items-center text-muted">
          <div className="text-center">
            <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-accent/20 grid place-items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div className="text-sm">Product walkthrough — coming soon</div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Roadmap
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The full outbound stack — shipping in public.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Start with leads today. Get decision makers, AI sequences, and
            done-for-you sending as we ship them — at launch pricing for early users.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`relative rounded-xl border p-5 ${
                p.status === "Live"
                  ? "border-accent/60 bg-accent/5"
                  : "border-border bg-panel/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-muted">0{i + 1}</div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                    p.status === "Live"
                      ? "bg-accent text-white"
                      : "bg-border text-muted"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="mt-3 text-white font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-muted">{p.desc}</div>
              {p.status !== "Live" && (
                <button className="mt-4 w-full rounded-md border border-border bg-bg/40 py-1.5 text-xs text-white hover:border-accent">
                  Join waitlist
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pay per lead. No seats. No surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            One credit = $0.01. One lead = 10 credits. Cancel anytime.
          </p>
        </div>
        <div className="mt-12">
          <PricingGrid />
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions, answered.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-panel/40">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-white">
                <span className="font-medium">{f.q}</span>
                <span className="text-accent2 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-panel to-bg p-10 text-center glow">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop scraping. Start pitching.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            10 free leads, no card. Find your first 50 prospects in the next 5 minutes.
          </p>
          <a
            href="https://app.aiworkspacelab.com/sign-up"
            className="mt-7 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Try Lylu free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
