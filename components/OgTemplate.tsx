// Shared Open Graph / Twitter card template, rendered via next/og (Satori).
// Every multi-child div must declare display:flex for Satori.

export const ogSize = { width: 1200, height: 630 };
export const ogAlt =
  "Lylu — Source local leads for every client, in minutes.";

export function OgTemplate() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: "#0A0A0F",
        backgroundImage:
          "radial-gradient(circle at 18% 0%, rgba(139,92,246,0.40), transparent 52%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            backgroundImage: "linear-gradient(135deg, #A78BFA, #7C3AED)",
            fontSize: "38px",
            fontWeight: 800,
            color: "#0A0A0F",
          }}
        >
          L
        </div>
        <div style={{ display: "flex", fontSize: "36px", fontWeight: 700 }}>
          Lylu
        </div>
      </div>

      {/* Headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "1000px",
          }}
        >
          Source local leads for every client,&nbsp;
          <span style={{ display: "flex", color: "#A78BFA" }}>in minutes.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#9CA3AF",
            maxWidth: "920px",
          }}
        >
          Every business on Google Maps — phone, ratings &amp; socials,
          export-ready. $0.10 a lead.
        </div>
      </div>

      {/* Chips */}
      <div style={{ display: "flex", gap: "16px" }}>
        {["$0.10 / lead", "US-wide coverage", "Built for agencies"].map((c) => (
          <div
            key={c}
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid #1F1F2E",
              backgroundColor: "rgba(17,17,26,0.6)",
              fontSize: "24px",
              color: "#E5E7EB",
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
