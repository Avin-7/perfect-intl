import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  // { label: "About Us", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Products", href: "#products-list" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="gradient-navy text-primary-foreground text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6" suppressHydrationWarning>
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> 009714-3332263
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Mail size={14} /> perfint@hotmail.com
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2 text-primary font-bold text-xl"
          >
            <img
              src={logo}
              className=" w-full h-26 p-4 object-cover overflow-hidden"
              alt=""
            />
          </a>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-accent hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
