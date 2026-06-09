// Shows breadth — every vertical, every city.

const verticals = [
  "Plumbers", "Dentists", "Roofers", "HVAC", "Electricians", "Chiropractors",
  "Law firms", "Medical clinics", "Gyms", "Real estate", "Insurance", "Auto shops",
  "Agencies", "Restaurants", "Salons", "Contractors", "Accountants", "Vets",
];

export default function Verticals() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-24">
      <div className="text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent2">
          Coverage
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Every business on Google Maps.{" "}
          <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
            Every city in the US.
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          If they have a Maps listing, you can pitch them. Search any vertical
          in any zip code, anytime.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12">
        {verticals.map((v, i) => (
          <span
            key={v}
            className={`rounded-full border border-border bg-panel/60 px-3 py-1.5 text-sm text-white ${
              i >= 10 ? "hidden sm:inline-block" : ""
            }`}
          >
            {v}
          </span>
        ))}
        <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm text-accent2">
          + every other vertical
        </span>
      </div>
    </section>
  );
}
