import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import ind1 from "@/assets/relays/industrial-1.jpg";
import ind2 from "@/assets/relays/industrial-2.jpg";
import ind3 from "@/assets/relays/industrial-3.jpg";
import ind4 from "@/assets/relays/industrial-4.jpg";
import horn1 from "@/assets/relays/horn-1.jpg";
import horn2 from "@/assets/relays/horn-2.jpg";
import horn3 from "@/assets/relays/horn-3.jpg";
import horn4 from "@/assets/relays/horn-4.jpg";
import auto1 from "@/assets/relays/auto-1.jpg";
import auto2 from "@/assets/relays/auto-2.jpg";
import auto3 from "@/assets/relays/auto-3.jpg";
import auto4 from "@/assets/relays/auto-4.jpg";

type Relay = { name: string; price: string; oldPrice: string; rating: number; badge: string; image: string };

const groups: { title: string; items: Relay[] }[] = [
  {
    title: "Industrial Relays",
    items: [
      { name: "General Purpose Relay", price: "$18.99", oldPrice: "$24.99", rating: 4.8, badge: "-24%", image: ind1 },
      { name: "Miniature Power Relay", price: "$15.49", oldPrice: "$19.99", rating: 4.7, badge: "-23%", image: ind2 },
      { name: "Heavy Duty Power Relay", price: "$32.99", oldPrice: "$42.99", rating: 4.9, badge: "-23%", image: ind3 },
      { name: "Octal Base Relay", price: "$22.49", oldPrice: "$28.99", rating: 4.6, badge: "-22%", image: ind4 },
    ],
  },
  {
    title: "Horn Relays",
    items: [
      { name: "Classic Horn Relay", price: "$9.99", oldPrice: "$13.49", rating: 4.7, badge: "-26%", image: horn1 },
      { name: "Modern Horn Relay", price: "$11.49", oldPrice: "$14.99", rating: 4.8, badge: "-23%", image: horn2 },
      { name: "Brass Horn Relay", price: "$14.99", oldPrice: "$19.49", rating: 4.6, badge: "-23%", image: horn3 },
      { name: "Compact Horn Relay", price: "$8.49", oldPrice: "$10.99", rating: 4.5, badge: "-23%", image: horn4 },
    ],
  },
  {
    title: "Automotive Relays",
    items: [
      { name: "12V Mini Relay", price: "$6.99", oldPrice: "$8.99", rating: 4.7, badge: "-22%", image: auto1 },
      { name: "12V 70A Starter Relay", price: "$19.99", oldPrice: "$26.99", rating: 4.9, badge: "-26%", image: auto2 },
      { name: "Standard Cube Relay", price: "$5.49", oldPrice: "$7.49", rating: 4.6, badge: "-27%", image: auto3 },
      { name: "Micro Clear Relay", price: "$7.99", oldPrice: "$10.49", rating: 4.7, badge: "-24%", image: auto4 },
    ],
  },
];

export default function RelaysSection() {
  return (
    <section id="relays" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Available Relays</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Industrial, Horn & Automotive Relays
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            High-quality relays engineered for reliable switching across industrial, automotive and specialty applications.
          </p>
        </div>

        {groups.map((group, gi) => (
          <div key={group.title} className={gi > 0 ? "mt-14" : ""}>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{group.title}</h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.items.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 gradient-silver flex items-center justify-center overflow-hidden">
                    <span className="absolute top-3 left-3 z-10 gradient-blue text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                      {p.badge}
                    </span>
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{group.title.replace(" Relays", "")}</span>
                    <h4 className="font-heading font-semibold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                      {p.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          size={14}
                          className={si < Math.floor(p.rating) ? "text-[var(--chart-4)] fill-[var(--chart-4)]" : "text-border"}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">{p.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-accent">{p.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">{p.oldPrice}</span>
                      </div>
                      <button className="gradient-blue text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity" aria-label="Add to cart">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
