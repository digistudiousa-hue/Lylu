"use client";

import { useState } from "react";

export default function DemoSearch() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, location, email, website }),
      });
      const data = await res.json();
      if (!res.ok || !data.handoff) {
        throw new Error(data.error || "Something went wrong. Try again.");
      }
      window.location.href = data.handoff;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-3xl rounded-2xl border border-border bg-panel/70 p-5 backdrop-blur sm:p-6"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
          placeholder="Business type (e.g. plumbers)"
          className="rounded-lg border border-border bg-bg/60 px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="Location (e.g. Dallas, TX)"
          className="rounded-lg border border-border bg-bg/60 px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Work email — we'll have your leads ready inside"
          className="flex-1 rounded-lg border border-border bg-bg/60 px-3 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:bg-accent2 disabled:opacity-60"
        >
          {loading ? "Setting up…" : "Show me my leads"}
        </button>
      </div>

      {/* Honeypot — visually hidden, off-screen, not focusable */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {error && <p className="mt-3 text-center text-xs text-red-400">{error}</p>}
      <p className="mt-3 text-center text-[11px] text-muted">
        Free — 50 leads, no card. We&apos;ll run your search the moment you&apos;re in.
      </p>
    </form>
  );
}
