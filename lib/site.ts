// Single source of truth for the outbound app entry points.
//
// Sign-up is NOT yet live at app.lylu.ai, so every sign-up CTA points at the
// existing host until the migration completes. When sign-up goes live on
// lylu.ai, flip SIGNUP_URL here — one line, every CTA follows.
//
// Kept separate from NEXT_PUBLIC_APP_URL on purpose: that env var controls
// generic app/dashboard links and may already be set to app.lylu.ai, which
// must not drag the (not-yet-live) sign-up flow along with it.

export const SIGNUP_URL = "https://app.aiworkspacelab.com/sign-up";
export const SIGNIN_URL = "https://app.lylu.ai/sign-in";
