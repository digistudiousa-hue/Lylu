import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lylu.ai"),
  title: "Lylu — Source local leads for every client, in minutes",
  description:
    "Turn any business on Google Maps into an export-ready lead — phone, ratings, and socials included. $0.10 a lead. Built for agencies and outbound operators.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Lylu — Source local leads for every client, in minutes",
    description:
      "Every business on Google Maps, export-ready. Phone, ratings, socials. $0.10 a lead. Built for agencies.",
    url: "https://www.lylu.ai",
    siteName: "Lylu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lylu — Source local leads for every client, in minutes",
    description:
      "Every business on Google Maps, export-ready. $0.10 a lead. Built for agencies.",
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
