import PricingButton from "./PricingButton";

type PlanKey = "free" | "starter" | "launch" | "pro";

const plans: {
  key: PlanKey;
  name: string;
  price: string;
  leads: string;
  perLead: string;
  cta: string;
  featured: boolean;
}[] = [
  { key: "free", name: "Free trial", price: "$0", leads: "50 leads", perLead: "On us", cta: "Start free", featured: false },
  { key: "starter", name: "Starter", price: "$35", leads: "350 leads / mo", perLead: "$0.10 / lead", cta: "Get Starter", featured: false },
  { key: "launch", name: "Launch", price: "$97", leads: "1,000 leads / mo", perLead: "$0.097 / lead", cta: "Get Launch", featured: true },
  { key: "pro", name: "Pro", price: "$247", leads: "2,500 leads / mo", perLead: "$0.099 / lead", cta: "Get Pro", featured: false },
];

export default function PricingGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`relative rounded-2xl border p-6 ${
            p.featured
              ? "border-accent bg-gradient-to-b from-accent/10 to-transparent glow"
              : "border-border bg-panel/60"
          }`}
        >
          {p.featured && (
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Most popular
            </div>
          )}
          <div className="text-sm text-muted">{p.name}</div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{p.price}</span>
            {p.price !== "$0" && <span className="text-sm text-muted">/mo</span>}
          </div>
          <div className="mt-1 text-sm text-accent2">{p.leads}</div>
          <div className="text-xs text-muted">{p.perLead}</div>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li>✓ Full Business Hub access</li>
            <li>✓ All filters & signals</li>
            <li>✓ CSV export</li>
            <li>✓ Cancel anytime</li>
          </ul>
          <PricingButton plan={p.key} label={p.cta} featured={p.featured} />
        </div>
      ))}
    </div>
  );
}
