import Nav from "./Nav";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[400px] bg-grid-fade" />
      <Nav />
      <div className="relative z-10">{children}</div>
      <Footer />
    </main>
  );
}
