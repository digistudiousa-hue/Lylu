import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        panel: "#11111A",
        border: "#1F1F2E",
        accent: "#8B5CF6",
        accent2: "#A78BFA",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
