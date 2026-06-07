import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lylu — Local business leads in seconds",
  description:
    "The cleanest way to find local businesses worth pitching. Search any industry in any city. Get ratings, phone, website, and socials. Built for agencies.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lylu — Local business leads in seconds",
    description:
      "Search any industry in any city. Ratings, phone, website, socials. $0.10 per lead. Built for agencies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
