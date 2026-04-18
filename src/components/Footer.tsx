import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 bg-white rounded-xl ">
              <a href="#home" className="flex items-center gap-2 text-primary font-bold text-xl ">
                <img
                  src={logo}
                  className=" w-full h-26 p-4 object-contain overflow-hidden"
                  alt=""
                />
              </a>
            </div>
            <p className="text-[var(--steel-light)] text-sm leading-relaxed">
              Your one-stop shop for premium automotive parts and accessories since 2006.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[var(--steel-light)]">
              <li>
                <a href="#home" className="hover:text-[var(--blue-glow)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--blue-glow)] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products-list"
                  className="hover:text-[var(--blue-glow)] transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--blue-glow)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-[var(--steel-light)]">
              <li>Engine & Generator Parts</li>
              <li>Starter Motors & Alternators</li>
              <li>Mistuba Rear View Mirrors</li>
              <li>Transmission Chains & Links</li>
              <li>Exhaust Bellow Pipes</li>
              <li>Relays</li>
              <li>Switches & Controls</li>
              <li>Other Spare Parts Available</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-[var(--steel-light)]">
              <li>009714-3332263</li>
              <li>perfint@hotmail.com</li>
              <li>
                Showroom No.3, Rashid Buset Building,
                <br />
                Ras Al Khor Industrial Second Dubai – UAE.
              </li>
              <div className=" h-1 w-full bg-accent rounded-full" />
              <li>
                QDC Building, Shop # 1, Building # 63, Zone # 57, Street # 105, <br />
                Industrial Area,
                <br />
                Wakalat Street, Qatar
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--navy-light)] pt-6 text-center text-sm text-[var(--steel)]">
          © {new Date().getFullYear()} Perfect Shine International LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
