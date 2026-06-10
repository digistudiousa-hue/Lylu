import Stripe from "stripe";
import { readFileSync } from "node:fs";

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

const KEEP = "kRUmPeq5"; // the coupon backing the active LAUNCH code

// Collect coupon ids that have an active promotion code → never delete those.
const promos = await stripe.promotionCodes.list({ limit: 100 });
const usedCouponIds = new Set(
  promos.data.map((p) => p.coupon?.id).filter(Boolean)
);

const coupons = await stripe.coupons.list({ limit: 100 });
const deleted = [];
for (const c of coupons.data) {
  const isOurOrphan =
    c.name === "Launch — Free Forever" &&
    c.id !== KEEP &&
    !usedCouponIds.has(c.id);
  if (isOurOrphan) {
    await stripe.coupons.del(c.id);
    deleted.push(c.id);
  }
}
console.log(JSON.stringify({ deleted, keptActiveCoupon: KEEP }, null, 2));
