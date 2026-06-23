import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SIGNUP_URL } from "@/lib/site";

// Same-origin endpoint for the demo widget. Captures the lead straight into
// Supabase (service role, server-only), then returns the personalized sign-up
// handoff URL. Resilient: if Supabase isn't configured yet, the visitor is
// still routed onward so the funnel never breaks.

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string; keyword?: string; location?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "website" field.
  if (body.website) {
    return NextResponse.json({ ok: true, handoff: SIGNUP_URL });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const keyword = String(body.keyword ?? "").trim().slice(0, 120);
  const location = String(body.location ?? "").trim().slice(0, 120);

  if (!EMAIL_RE.test(email) || !keyword || !location) {
    return NextResponse.json(
      { error: "Enter a business type, a location, and a valid email." },
      { status: 422 }
    );
  }

  let stored = false;
  const rawUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  // Sanitize: strip trailing slashes / accidental paths → bare https://xxx.supabase.co
  const url = rawUrl
    ?.trim()
    .replace(/\/+$/, "")
    .replace(/\/rest\/v1.*$/, "");
  if (url && key) {
    try {
      const supabase = createClient(url, key, {
        auth: { persistSession: false },
      });
      const { error } = await supabase.from("demo_leads").insert({
        email,
        keyword,
        location,
        source: "landing_demo",
        ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
        user_agent: req.headers.get("user-agent")?.slice(0, 300) || null,
      });
      if (error) console.error("demo-lead insert failed:", error.message);
      else stored = true;
    } catch (e) {
      console.error("demo-lead store error:", e);
      // swallow — still route the visitor onward
    }
  }

  const handoff =
    `${SIGNUP_URL}` +
    `?q=${encodeURIComponent(keyword)}` +
    `&loc=${encodeURIComponent(location)}` +
    `&email=${encodeURIComponent(email)}`;

  return NextResponse.json({ ok: true, stored, handoff });
}
