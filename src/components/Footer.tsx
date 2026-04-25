import logo from "../assets/logo.png";
import Disclaimer from "./Disclaimer";

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer className="gradient-navy text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid place-content-center sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 bg-white rounded-xl ">
                <a
                  href="#home"
                  className="flex items-center gap-2 text-primary font-bold text-xl "
                >
                  <img
                    src={logo}
                    className=" w-full h-26 p-4 object-contain overflow-hidden"
                    alt=""
                  />
                </a>
              </div>
              <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                Your one-stop shop for premium automotive parts and accessories
                since 2006.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[var(--steel-light)]">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[var(--blue-glow)] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[var(--blue-glow)] transition-colors"
                  >
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
                  <a
                    href="#contact"
                    className="hover:text-[var(--blue-glow)] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-heading font-bold mb-3">Products list</h4>
              <div className=" flex gap-7">
                <ul className="space-y-2 text-sm text-[var(--steel-light)]">
                  <li>Automotive Switches</li>
                  <li>Solenoids</li>
                  <li>Relays</li>
                  <li>Battery Selector Switches</li>
                  <li>Electrical Dashboard Gauges</li>
                  <li>Tachometers</li>
                  <li>Hourmeters</li>
                  <li>Magnetic Pick-up</li>
                  <li>Control Modules</li>
                  <li>Self Starters</li>
                  <li>Roller Chains</li>
                  <li>Leaf Chains</li>
                </ul>
                <ul className="space-y-2 text-sm text-[var(--steel-light)]">
                  <li>Revolving Lamps</li>
                  <li>Sprockets</li>
                  <li>Chain Couplings</li>
                  <li>Valves</li>
                  <li>Pressure Gauges</li>
                  <li>Transmitters</li>
                  <li>AVR</li>
                  <li>Speed Controllers</li>
                  <li>Temperature, Pressure Control</li>
                  <li>Battery Chargers</li>
                  <li>Diaphragm Pressure Switches</li>
                  <li>Couplings, Mountings</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-[var(--steel-light)]">
                <li>009714-3332263</li>
                <li>perfectshineinternational.com</li>
                <li>perfint@hotmail.com</li>
                <li>
                  P.O.Box 122646 <br />
                  Showroom No.3, Rashid Buset Building,
                  <br /> Ras Al Khor Industrial Second, Al Aweer
                  <br /> Dubai – UAE.
                </li>
                <div className=" h-1 w-full bg-accent rounded-full" />
                <li>+974 33433281</li>
                <li>perfectshineint@gmail.com</li>
                <li>
                  P. Box 90931 <br />
                  Showroom No 1, QDC Building, <br />
                  Building # 63, Zone # 57, Street # 105, <br />
                  Industrial Area, Wakalat Street, <br />
                  Doha - Qatar
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--navy-light)] pt-6 text-center text-sm text-[var(--steel)]">
            © {new Date().getFullYear()} Perfect Shine International LLC. All
            rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
