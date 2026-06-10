import Stripe from "stripe";
import { readFileSync } from "node:fs";

// Read STRIPE_SECRET_KEY from .env.local without printing it.
const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.trim().startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

const CODE = (process.argv[2] || "LAUNCH").toUpperCase();

const coupon = await stripe.coupons.create({
  percent_off: 100,
  duration: "forever",
  name: "Launch — Free Forever",
});

const promo = await stripe.promotionCodes.create({
  promotion: { type: "coupon", coupon: coupon.id },
  code: CODE,
  // No max_redemptions, no expires_at — per request (unlimited, no expiry).
});

console.log(
  JSON.stringify(
    {
      code: promo.code,
      active: promo.active,
      couponId: coupon.id,
      percent_off: coupon.percent_off,
      duration: coupon.duration,
      livemode: promo.livemode,
    },
    null,
    2
  )
);
