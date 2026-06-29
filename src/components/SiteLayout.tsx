import { Link, Outlet } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/subjects", label: "Subjects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/rules", label: "Rules" },
  { to: "/joining", label: "Joining" },
  { to: "/almanac", label: "Calendar" },
  { to: "/our-stand", label: "Our Stand" },
  { to: "/contacts", label: "Contacts" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-x-4 gap-y-1 justify-between">
          <span>Alfagems Secondary School · Morogoro, Tanzania</span>
          <span>Tel: (+255) 689 783 630</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://alfashule.ac.tz/images/logo.png"
              alt="Alfagems Secondary School logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg tracking-tight">
              Alfagems<span className="text-primary"> Academy</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                  activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-foreground text-background mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://alfashule.ac.tz/images/logo.png"
                alt=""
                className="h-10 w-10 bg-white rounded p-1"
              />
              <span className="font-bold">Alfagems Secondary School</span>
            </div>
            <p className="text-sm opacity-80">
              A Catholic, independent secondary school providing outstanding
              college-preparatory education in Morogoro, Tanzania.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="text-sm space-y-1 opacity-90">
              <li>P.O. Box 6083 — Morogoro</li>
              <li>Tel: (+255) 689 783 630</li>
              <li>Boys hostel: (+255) 689 782 670</li>
              <li>Girls hostel: (+255) 689 783 672</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="text-sm grid grid-cols-2 gap-1 opacity-90">
              {navItems.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:underline">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-center text-xs py-4 opacity-70">
          © {new Date().getFullYear()} Alfagems Secondary School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
