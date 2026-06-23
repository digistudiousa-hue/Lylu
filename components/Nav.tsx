import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { SIGNIN_URL } from "@/lib/site";

export default function Nav() {
  return (
    <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/"><Logo /></Link>
      <div className="hidden gap-8 text-sm text-muted md:flex">
        <Link href="/#product" className="hover:text-white">Product</Link>
        <Link href="/for-agencies" className="hover:text-white">For agencies</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/security" className="hover:text-white">Security</Link>
        <Link href="/about" className="hover:text-white">About</Link>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={SIGNIN_URL}
          className="rounded-lg border border-border bg-panel px-3.5 py-1.5 text-sm text-white hover:border-accent"
        >
          Sign in
        </a>
        <MobileMenu />
      </div>
    </nav>
  );
}
