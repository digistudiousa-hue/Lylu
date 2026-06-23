"use client";

import { useState } from "react";
import Link from "next/link";
import { SIGNUP_URL } from "@/lib/site";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/for-agencies", label: "For agencies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-panel text-white hover:border-accent"
      >
        <span className="relative block h-3.5 w-4">
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-white transition-all ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-white transition-all ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-4 bg-white transition-all ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 mx-4 mt-2 rounded-xl border border-border bg-panel p-2 shadow-2xl">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-white hover:bg-bg/60"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SIGNUP_URL}
            className="mt-1 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white hover:bg-accent2"
          >
            Start free
          </a>
        </div>
      )}
    </div>
  );
}
