import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

const PRICE_MAP: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_STARTER,
  launch: process.env.STRIPE_PRICE_LAUNCH,
  pro: process.env.STRIPE_PRICE_PRO,
};

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();
    const priceId = PRICE_MAP[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: `Unknown plan: ${plan}` },
        { status: 400 }
      );
    }

    const site = process.env.NEXT_PUBLIC_SITE_URL || "https://lylu.ai";
    const app = process.env.NEXT_PUBLIC_APP_URL || "https://saas-1-0.vercel.app";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      // After successful payment, route the user to the app's sign-up
      // so Clerk creates their account; Stripe customer is attached via
      // the session_id query param (the app's webhook will reconcile).
      success_url: `${app}/sign-up?checkout_session={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/#pricing`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      automatic_tax: { enabled: false },
      metadata: { plan, source: "lylu-landing" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
