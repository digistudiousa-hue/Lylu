import PageShell from "@/components/PageShell";

export const metadata = { title: "Security — Lylu" };

const items = [
  {
    t: "Encryption everywhere",
    d: "All traffic to and from Lylu is encrypted with TLS 1.3. Data at rest in our database is encrypted using AES-256.",
  },
  {
    t: "We never store card numbers",
    d: "Payments are processed by Stripe — a Level 1 PCI-DSS certified processor. Card details never touch our servers.",
  },
  {
    t: "Authentication by Clerk",
    d: "Sign-in is handled by Clerk, a SOC 2 Type II certified identity provider. Passwords are hashed with industry-standard algorithms and never readable by us.",
  },
  {
    t: "Database isolation",
    d: "Customer data is isolated per workspace at the database layer using Supabase row-level security. One workspace cannot read another's records.",
  },
  {
    t: "Least-privilege access",
    d: "Only a small number of engineers have production access, secured by hardware-key MFA. Every production action is logged.",
  },
  {
    t: "Backups & uptime",
    d: "Database is backed up continuously with point-in-time recovery. Application runs on Vercel's edge network for low-latency global access.",
  },
  {
    t: "Vulnerability handling",
    d: "Found a security issue? Email security@lylu.ai and we'll respond within 48 hours. We do not retaliate against good-faith reporters.",
  },
  {
    t: "Compliance posture",
    d: "We follow industry best practices for SOC 2 readiness. We don't currently hold a SOC 2 report; if you need one for procurement, contact us and we'll share our gap roadmap.",
  },
];

export default function SecurityPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          Security
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Built on the same stack we&apos;d trust with our own data.
        </h1>
        <p className="mt-6 text-lg text-muted">
          Lylu runs on Vercel, Supabase, Clerk, and Stripe — providers
          chosen specifically for their security posture and certifications.
          Here&apos;s what that means for you.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl border border-border bg-panel/60 p-6">
              <div className="text-white font-semibold">{i.t}</div>
              <p className="mt-2 text-sm text-muted">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-panel to-bg p-8">
          <h2 className="text-2xl font-semibold text-white">
            Security questionnaire?
          </h2>
          <p className="mt-2 text-muted">
            We answer them. Send yours to{" "}
            <a className="text-accent2 hover:text-white" href="mailto:security@lylu.ai">
              security@lylu.ai
            </a>{" "}
            and we&apos;ll turn it around within 3 business days.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
