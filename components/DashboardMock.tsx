// Card-grid mock matching the Business Hub dashboard look.

const cards = [
  {
    name: "TechGropse New York",
    domain: "techgropse.com",
    city: "Brooklyn",
    rating: "5.0",
    reviews: "1",
    phone: "(267) 327-4760",
    address: "53 Pearl St, Brooklyn, NY 11201",
    socials: ["in", "ig", "fb", "yt"],
    logo: "G",
  },
  {
    name: "Clínicas Dr. GoodPrice",
    domain: "drgoodprice.com",
    city: "Miami",
    rating: "4.9",
    reviews: "961",
    phone: "(305) 456-5846",
    address: "441 NW 12th Ave, Miami, FL 33128",
    socials: ["in", "ig", "fb", "yt"],
    logo: "D",
  },
  {
    name: "JetRockets",
    domain: "jetrockets.com",
    city: "Brooklyn",
    rating: "5.0",
    reviews: "32",
    phone: "(646) 598-6452",
    address: "227 Ocean Pkwy, Brooklyn, NY 11218",
    socials: ["in", "fb", "yt"],
    logo: "JR",
  },
];

const SocialPill = ({ k }: { k: string }) => {
  const map: Record<string, { bg: string; fg: string; label: string }> = {
    in: { bg: "bg-blue-500/15", fg: "text-blue-300", label: "in" },
    ig: { bg: "bg-pink-500/15", fg: "text-pink-300", label: "ig" },
    fb: { bg: "bg-blue-600/15", fg: "text-blue-300", label: "fb" },
    yt: { bg: "bg-red-500/15", fg: "text-red-300", label: "yt" },
  };
  const s = map[k];
  return (
    <span className={`grid h-6 w-6 place-items-center rounded-md ${s.bg} ${s.fg} text-[10px] font-semibold`}>
      {s.label}
    </span>
  );
};

export default function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="absolute inset-x-10 -top-10 h-40 bg-accent/30 blur-3xl rounded-full" />
      <div className="relative rounded-2xl border border-border bg-panel/90 backdrop-blur shadow-2xl overflow-hidden glow">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="mx-auto text-xs text-muted">app.aiworkspacelab.com/dashboard/leads</div>
        </div>

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <div className="text-xl font-semibold text-white">Leads</div>
            <div className="text-xs text-muted">Select a package to view your data.</div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent2">
              Beta
            </span>
            <span className="text-xs text-muted">3,489 cr left</span>
            <button className="rounded-md bg-accent/10 px-2 py-1 text-xs text-accent2">+ Add</button>
          </div>
        </div>

        {/* Package tabs */}
        <div className="grid grid-cols-4 gap-3 border-b border-border bg-bg/40 px-5 py-4">
          {[
            { n: "Business Hub", d: "Company directory — ratings, phone & social", active: true },
            { n: "Decision Makers", d: "Key contacts with LinkedIn & email", soon: true },
            { n: "AI Sales Intelligence", d: "AI-generated outreach sequences", soon: true },
            { n: "Live Execution", d: "Done-for-you outreach campaigns", soon: true },
          ].map((p) => (
            <div
              key={p.n}
              className={`rounded-lg border p-3 text-left ${
                p.active ? "border-accent/60 bg-accent/5" : "border-border bg-panel/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white">{p.n}</span>
                {p.soon && (
                  <span className="text-[8px] uppercase tracking-wider text-muted">Soon</span>
                )}
              </div>
              <div className="mt-1 text-[10px] text-muted">{p.d}</div>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="grid grid-cols-12 gap-3 border-b border-border bg-bg/30 px-5 py-4">
          <div className="col-span-5 rounded-lg border border-border bg-panel px-3 py-2 text-xs text-muted">
            Business type (e.g. plumbers, dentists)
          </div>
          <div className="col-span-5 rounded-lg border border-border bg-panel px-3 py-2 text-xs text-muted">
            Location (e.g. New York, NY)
          </div>
          <button className="col-span-2 rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-3 text-[10px] text-muted">
          {["Any rating", "Has Phone", "Has Social", "All industries", "All cities", "Top prospects"].map((f) => (
            <span key={f} className="rounded-full border border-border bg-panel px-2.5 py-1">
              {f}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-bg/40 p-3">
              <div className="flex items-start gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-accent to-accent2/70 text-xs font-bold text-white">
                  {c.logo}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-white">{c.name}</div>
                  <div className="text-[11px] text-muted">📍 {c.city}</div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[11px]">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-white">{c.rating}</span>
                <span className="text-muted">({c.reviews})</span>
              </div>
              <div className="mt-1.5 text-[11px] text-muted">📞 {c.phone}</div>
              <div className="mt-2 flex gap-1.5">
                {c.socials.map((s) => (
                  <SocialPill key={s} k={s} />
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-300">
                  🌐 Website
                </span>
                <span className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] text-red-300">
                  📍 Maps
                </span>
              </div>
              <div className="mt-2 truncate text-[10px] text-muted">{c.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
