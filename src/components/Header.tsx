import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "For Citizens", path: "/citizens" },
  { label: "For Solution Companies", path: "/integrators" },
  { label: "For States & UTs", path: "/policy" },
  { label: "Resources", path: "/resources" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-muted text-foreground text-xs py-1.5 border-b border-border">
        <div className="container flex justify-between items-center">
          <span className="flex items-center gap-1.5 font-medium">
            <Phone className="w-3 h-3 text-accent" />
            Toll Free Number : <strong>14477</strong>
          </span>
          <div className="hidden md:flex items-center gap-3 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Skip to Content</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-foreground transition-colors">Screen Reader</a>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <button className="hover:text-foreground">+A</button>
              <button className="font-medium">A</button>
              <button className="hover:text-foreground">-A</button>
            </span>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-card border-b border-border py-3">
        <div className="container flex items-center gap-6">
          {/* NHA Emblem */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">NHA</span>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          {/* ABDM Branding */}
          <div className="shrink-0">
            <div className="font-heading font-bold text-base text-primary leading-tight">
              Ayushman Bharat Digital Mission
            </div>
            <div className="text-xs text-accent font-semibold">
              Building Digital Health Ecosystem
            </div>
          </div>
          <div className="flex-1" />
          {/* Scan & Record Share badge */}
          <div className="hidden md:block text-right">
            <div className="text-xs text-muted-foreground">Initiative</div>
            <div className="font-heading font-bold text-sm text-foreground">Scan & Record Share</div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-primary shadow-sm">
        <div className="container flex items-center justify-between h-11">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 h-full flex items-center text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-card text-primary"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded text-primary-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-primary-foreground/20 bg-primary pb-3">
            <div className="container flex flex-col gap-0.5 pt-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-card text-primary"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
