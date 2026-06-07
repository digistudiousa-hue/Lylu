import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/"><Logo /></Link>
      <div className="hidden gap-8 text-sm text-muted md:flex">
        <Link href="/#product" className="hover:text-white">Product</Link>
        <Link href="/for-agencies" className="hover:text-white">For agencies</Link>
        <Link href="/pricing" className="hover:text-white">Pricing</Link>
        <Link href="/security" className="hover:text-white">Security</Link>
        <Link href="/about" className="hover:text-white">About</Link>
      </div>
      <a
        href="https://app.aiworkspacelab.com/sign-in"
        className="rounded-lg border border-border bg-panel px-3.5 py-1.5 text-sm text-white hover:border-accent"
      >
        Sign in
      </a>
    </nav>
  );
}
