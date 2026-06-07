"use client";

import { useState } from "react";

type Props = {
  plan: "starter" | "launch" | "pro" | "free";
  label: string;
  featured?: boolean;
};

export default function PricingButton({ plan, label, featured }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function go() {
    setError(null);

    if (plan === "free") {
      window.location.href =
        process.env.NEXT_PUBLIC_APP_URL
          ? `${process.env.NEXT_PUBLIC_APP_URL}/sign-up`
          : "https://app.aiworkspacelab.com/sign-up";
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={go}
        disabled={loading}
        className={`mt-6 w-full rounded-lg py-2.5 text-sm font-semibold transition disabled:opacity-60 ${
          featured
            ? "bg-accent text-white hover:bg-accent2"
            : "border border-border bg-panel text-white hover:border-accent"
        }`}
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error && (
        <p className="mt-2 text-center text-xs text-red-400">{error}</p>
      )}
    </>
  );
}
