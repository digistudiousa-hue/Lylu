// "Works with your stack" logo reel — an honest integration/export marquee.
// These are CSV/import destinations Lylu plugs into, not customer logos.

const tools = [
  "Instantly",
  "Smartlead",
  "HubSpot",
  "Salesforce",
  "Google Sheets",
  "Lemlist",
  "Pipedrive",
  "Close",
  "Zapier",
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-12 pr-12"
    >
      {tools.map((t) => (
        <li
          key={t}
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-white/55 transition hover:text-white"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function LogoReel() {
  return (
    <section className="relative z-10 border-y border-border bg-panel/20 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted">
          CSV export — ready for the tools you already run
        </div>
      </div>

      <div
        className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* Duplicated track for a seamless infinite loop */}
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
