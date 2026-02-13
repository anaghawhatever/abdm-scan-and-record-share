import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import nhaLogo from "@/assets/nha-logo.jpg";
import abdmLogo from "@/assets/abdm-logo.svg";
import abdmLogoText from "@/assets/abdm-logo-text.svg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "For Citizens", path: "/citizens" },
  { label: "For Solution Companies", path: "/integrators" },
  { label: "For States & UTs", path: "/policy" },
  { label: "Resources", path: "/resources" },
  { label: "A Recommendation", path: "/recommendation" },
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
        <div className="container flex items-center gap-4">
          {/* NHA Logo */}
          <img src={nhaLogo} alt="National Health Authority" className="h-12 w-auto shrink-0" />
          <div className="h-10 w-px bg-border" />
          {/* ABDM Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img src={abdmLogo} alt="ABDM" className="h-10 w-auto" />
            <img src={abdmLogoText} alt="Ayushman Bharat Digital Mission" className="h-8 w-auto hidden sm:block" />
          </div>
          <div className="flex-1" />
          {/* Scan & Record Share badge */}
          <div className="hidden md:block text-right">
            <div className="text-xs text-muted-foreground">Initiative</div>
            <div className="font-heading font-bold text-sm text-foreground">Scan & Record Share</div>
          </div>
          {/* Mobile Hamburger — right side */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
        </div>

        {/* Mobile Nav — full-width slide-down like ABDM website */}
        {mobileOpen && (
          <nav className="lg:hidden bg-primary border-t border-accent">
            <div className="flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-6 py-3.5 text-sm font-semibold transition-colors border-b border-primary-foreground/10 ${
                    location.pathname === item.path
                      ? "text-accent bg-primary-foreground/5"
                      : "text-primary-foreground hover:bg-primary-foreground/5"
                  } ${i === 0 && location.pathname === item.path ? "border-t-2 border-t-accent" : ""}`}
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
