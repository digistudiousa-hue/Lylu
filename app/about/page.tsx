import PageShell from "@/components/PageShell";
import { SIGNUP_URL } from "@/lib/site";

export const metadata = { title: "About — Lylu" };

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          About
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Outbound, without the stack tax.
        </h1>
        <p className="mt-6 text-lg text-muted">
          Lylu exists because the lead-gen stack got bloated and expensive.
          We&apos;re rebuilding it the way it should have been from day one —
          one tool, fair pricing, no procurement calls.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-panel/60 p-6">
            <div className="text-white font-semibold">What we believe</div>
            <p className="mt-2 text-sm text-muted">
              Outbound is a craft. The tools shouldn&apos;t fight you. Data
              should be clean, fast, and cheap enough to experiment with.
              Pricing should be obvious. A 5-minute trial should be possible.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-panel/60 p-6">
            <div className="text-white font-semibold">Who we build for</div>
            <p className="mt-2 text-sm text-muted">
              Lead-gen agencies, local SEO shops, fractional SDRs, and
              operators who pitch SMBs every day. People who need
              answers in seconds, not seat licenses.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-panel/60 p-6">
            <div className="text-white font-semibold">What we&apos;re shipping</div>
            <p className="mt-2 text-sm text-muted">
              Business Hub today. Decision Makers, AI sequences, and
              done-for-you sending on a public roadmap. We ship in weeks,
              not quarters.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-panel/60 p-6">
            <div className="text-white font-semibold">How to reach us</div>
            <p className="mt-2 text-sm text-muted">
              Real humans read every email.{" "}
              <a className="text-accent2 hover:text-white" href="mailto:hello@lylu.ai">
                hello@lylu.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <a
          href={SIGNUP_URL}
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2"
        >
          Try Lylu free
        </a>
      </section>
    </PageShell>
  );
}
