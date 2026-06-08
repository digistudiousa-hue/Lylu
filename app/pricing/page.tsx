import PageShell from "@/components/PageShell";
import PricingGrid from "@/components/PricingGrid";
import Comparison from "@/components/Comparison";

export const metadata = {
  title: "Pricing — Lylu",
  description: "Pay per lead. $0.10 each. No seats, no contracts, cancel anytime.",
};

const faqs = [
  { q: "What counts as one lead?", a: "One business record. Whether it has 1 signal or all 4, it's 10 credits — $0.10." },
  { q: "Do credits roll over?", a: "Monthly plan credits reset each cycle. Top-up credits never expire." },
  { q: "Can I cancel anytime?", a: "Yes. One click in your dashboard. No retention call." },
  { q: "Is there a free trial?", a: "Yes — 50 free leads, no credit card." },
  { q: "Do you have an annual plan?", a: "Not yet. Monthly only while we&apos;re in beta." },
  { q: "What about team seats?", a: "All paid plans include unlimited seats inside one workspace. Multi-workspace coming soon." },
];

export default function PricingPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          Pricing
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Pay per lead.{" "}
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            No seats. No contracts.
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          One credit = $0.01. One lead = 10 credits. Start with 50 free,
          upgrade when you&apos;re ready.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <PricingGrid />
      </section>

      <Comparison />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-white">
          Pricing FAQ
        </h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-panel/40">
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
    </PageShell>
  );
}
