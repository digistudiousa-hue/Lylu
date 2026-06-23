import DashboardMock from "@/components/DashboardMock";
import PricingGrid from "@/components/PricingGrid";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Stories from "@/components/Stories";
import BuiltOn from "@/components/BuiltOn";
import Verticals from "@/components/Verticals";
import Comparison from "@/components/Comparison";
import LogoReel from "@/components/LogoReel";
import DemoSearch from "@/components/DemoSearch";
import AgencyMath from "@/components/AgencyMath";
import { SIGNUP_URL } from "@/lib/site";

const packages = [
  {
    name: "Business Hub",
    desc: "Company directory — ratings, address, phone & social.",
    status: "Live",
    eta: "",
  },
  {
    name: "Decision Makers",
    desc: "Key contacts with LinkedIn, email & professional bio.",
    status: "Soon",
    eta: "Q4 2026",
  },
  {
    name: "AI Sales Intelligence",
    desc: "AI-generated 5-step outreach sequences per contact.",
    status: "Soon",
    eta: "Q4 2026",
  },
  {
    name: "Live Execution",
    desc: "Done-for-you outreach across 1,000+ prospect campaigns.",
    status: "Soon",
    eta: "Q4 2026",
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

const steps = [
  { n: "01", t: "Search", d: "Type a vertical and a city. Plumbers in Dallas. Dentists in Miami." },
  { n: "02", t: "Filter", d: "Has phone, 4.5★+, top prospects. Drop the dead weight in one click." },
  { n: "03", t: "Export", d: "CSV straight into Instantly, Smartlead, or HubSpot. Pitch today." },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-grid-fade" />

      <Nav />

      {/* HERO — agency-targeted */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-14 text-center sm:pt-16 sm:pb-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
          Built for agencies &amp; outbound operators
        </div>
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Source local leads for every client,{" "}
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            in minutes.
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted">
          Lylu turns any business on Google Maps into an export-ready lead —
          phone, ratings, and socials included. Fill client pipelines without
          Apollo prices or a scraping VA.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={SIGNUP_URL}
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Start free — 50 leads on us
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-semibold text-muted hover:text-white"
          >
            See how it works →
          </a>
        </div>
        <p className="mt-3 text-xs text-muted">No credit card. Cancel anytime.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[10px] uppercase tracking-widest text-muted">
            Built on
          </span>
          {["Stripe", "Clerk", "Supabase", "Vercel"].map((n) => (
            <span key={n} className="text-sm font-semibold text-white/60">
              {n}
            </span>
          ))}
        </div>

        <div className="mt-10 sm:mt-16">
          <DashboardMock />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-10 border-y border-border bg-panel/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {[
            ["4 signals", "per lead, all included"],
            ["$0.10", "per lead, all-in"],
            ["3–5×", "cheaper than Apollo"],
            ["US-wide", "any city, any vertical"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-bold text-white">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRY IT — demo / lead capture */}
      <section className="reveal relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="mb-8 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Try it
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What&apos;s your market?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Tell us the businesses you pitch and where. We&apos;ll have your first
            50 leads ready the moment you sign up — free, no card.
          </p>
        </div>
        <DemoSearch />
      </section>

      {/* PROBLEM */}
      <section className="reveal relative z-10 mx-auto max-w-4xl px-6 py-14 sm:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The lead-gen stack is broken.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Apollo charges enterprise prices for thin SMB data. ZoomInfo wants a sales call.
          Google Maps scrapers break every other week. You end up paying three tools
          and a VA to do what one clean search should solve.
        </p>
      </section>

      {/* SOLUTION / PRODUCT */}
      <section id="product" className="reveal relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Product
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One search. Everything you need to pitch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Type a business type and a city. Get a clean, filterable list of
            real companies — with the signals that tell you who&apos;s worth a cold call.
          </p>
        </div>

        {/* How it works — 3-step flow */}
        <div id="how-it-works" className="mt-10 rounded-2xl border border-border bg-panel/40 p-6 sm:mt-12 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-sm font-bold text-accent2">
                    {s.n}
                  </span>
                  <span className="text-white font-semibold">{s.t}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{s.d}</p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-4 hidden text-muted md:block">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS — logo reel */}
      <LogoReel />

      {/* DIFFERENTIATION */}
      <Comparison />

      {/* PROOF — Stories */}
      <Stories />

      {/* BREADTH — Verticals */}
      <Verticals />

      {/* ROADMAP */}
      <section id="roadmap" className="reveal relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-24">
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

        {/* Business Hub — primary, shipping now */}
        {(() => {
          const live = packages[0];
          return (
            <div className="mt-10 sm:mt-12 rounded-2xl border border-accent/60 bg-accent/5 p-6 sm:p-8 glow">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Live now
                </span>
                <span className="text-xs font-mono text-muted">01</span>
              </div>
              <div className="mt-4 text-xl font-bold text-white sm:text-2xl">{live.name}</div>
              <div className="mt-1 text-muted">{live.desc}</div>
              <a
                href={SIGNUP_URL}
                className="mt-5 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
              >
                Start free — 50 leads on us
              </a>
            </div>
          );
        })()}

        {/* Coming soon — secondary row */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {packages.slice(1).map((p, i) => (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-panel/40 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted">0{i + 2}</span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                  {p.eta}
                </span>
              </div>
              <div className="mt-2 text-sm font-semibold text-white">{p.name}</div>
              <div className="mt-1 text-xs text-muted">{p.desc}</div>
              <a
                href={`mailto:hello@lylu.ai?subject=${encodeURIComponent(
                  `Waitlist — ${p.name}`
                )}&body=${encodeURIComponent(
                  `I'd like early access to ${p.name} when it ships.`
                )}`}
                className="mt-3 block w-full rounded-md border border-border bg-bg/40 py-1.5 text-center text-xs text-white hover:border-accent"
              >
                Join waitlist
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SAVINGS — agency math, right before the ask */}
      <AgencyMath />

      {/* TRUST — Built on, priming the price */}
      <BuiltOn />

      {/* PRICING */}
      <section id="pricing" className="reveal relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-24">
        <div className="text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pay per lead. No seats. No surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            One credit = $0.01. One lead = 10 credits. No seats, no contracts.
          </p>
        </div>
        <div className="mt-12">
          <PricingGrid />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="reveal relative z-10 mx-auto max-w-3xl px-6 py-14 sm:py-24">
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

      {/* FINAL CTA */}
      <section className="reveal relative z-10 mx-auto max-w-4xl px-6 py-14 sm:py-24">
        <div className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-panel to-bg p-10 text-center glow">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop scraping. Start pitching.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            50 free leads, no card. Pull your first client list in the next 5 minutes.
          </p>
          <a
            href={SIGNUP_URL}
            className="mt-7 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
          >
            Start free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
