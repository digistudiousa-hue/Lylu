// Visual approximation of the Lylu dashboard, rendered in pure markup
// so the hero looks crisp on every screen size without a screenshot.

const rows = [
  { name: "TechGropse New York", domain: "techgropse.com", city: "Brooklyn", rating: "5.0" },
  { name: "Clínicas Dr. GoodPrice", domain: "drgoodprice.com", city: "Miami", rating: "4.9" },
  { name: "JetRockets", domain: "jetrockets.com", city: "Brooklyn", rating: "5.0" },
  { name: "BlueLabel", domain: "bluelabellabs.com", city: "Brooklyn", rating: "5.0" },
  { name: "Family Medical Group", domain: "thefamilymedgroup.com", city: "Miami", rating: "4.9" },
  { name: "Lupa Technology", domain: "lupa.technology", city: "Brooklyn", rating: "4.9" },
];

export default function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute inset-x-10 -top-10 h-40 bg-accent/30 blur-3xl rounded-full" />
      <div className="relative rounded-2xl border border-border bg-panel/90 backdrop-blur shadow-2xl overflow-hidden glow">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="mx-auto text-xs text-muted">app.lylu.io/dashboard/leads</div>
        </div>

        {/* Search bar */}
        <div className="grid grid-cols-12 gap-3 p-4 border-b border-border bg-bg/50">
          <div className="col-span-5 rounded-lg border border-border bg-panel px-3 py-2 text-sm text-muted">
            plumbers
          </div>
          <div className="col-span-5 rounded-lg border border-border bg-panel px-3 py-2 text-sm text-muted">
            Dallas, TX
          </div>
          <button className="col-span-2 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-white">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="divide-y divide-border">
          <div className="grid grid-cols-12 px-4 py-2 text-[10px] uppercase tracking-wider text-muted">
            <div className="col-span-5">Company</div>
            <div className="col-span-3">City</div>
            <div className="col-span-4 text-right">Signals</div>
          </div>
          {rows.map((r) => (
            <div key={r.name} className="grid grid-cols-12 items-center px-4 py-3 hover:bg-bg/40">
              <div className="col-span-5 flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-accent to-accent2/60" />
                <div>
                  <div className="text-sm text-white">{r.name}</div>
                  <div className="text-xs text-accent2/80">{r.domain}</div>
                </div>
              </div>
              <div className="col-span-3 text-sm text-muted">📍 {r.city}</div>
              <div className="col-span-4 flex justify-end gap-1.5">
                <span className="rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-[10px] text-yellow-300">
                  {r.rating}★
                </span>
                <span className="rounded-md border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] text-green-300">
                  Address
                </span>
                <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-300">
                  Phone
                </span>
                <span className="rounded-md border border-pink-500/30 bg-pink-500/10 px-2 py-0.5 text-[10px] text-pink-300">
                  Social
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
