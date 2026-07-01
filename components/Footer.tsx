import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted md:flex-row">
        <Logo />
        <div>© {new Date().getFullYear()} Digital Studio USA LLC. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/security" className="hover:text-white">Security</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <a href="mailto:support@lylu.ai" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
