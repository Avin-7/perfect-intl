import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import spstImg from "@/assets/products/spst.jpg";
import spdtImg from "@/assets/products/spdt.jpg";
import dpstImg from "@/assets/products/dpst.jpg";
import dpdtImg from "@/assets/products/dpdt.jpg";
import toggleImg from "@/assets/products/toggle.jpg";
import tactileImg from "@/assets/products/tactile.jpg";
import pushButtonImg from "@/assets/products/push-button.jpg";
import rotaryImg from "@/assets/products/rotary.jpg";
import timerImg from "@/assets/products/timer.jpg";
import joystickImg from "@/assets/products/joystick.jpg";
import slideImg from "@/assets/products/slide.jpg";
import floatImg from "@/assets/products/float.jpg";
import limitImg from "@/assets/products/limit.jpg";
import flowImg from "@/assets/products/flow.jpg";
import thermalImg from "@/assets/products/thermal.jpg";

const products = [
  { name: "SPST Switch", category: "Rocker", price: "$4.99", oldPrice: "$6.49", rating: 4.8, badge: "-23%", image: spstImg },
  { name: "SPDT Switch", category: "Rocker", price: "$5.49", oldPrice: "$7.99", rating: 4.7, badge: "-32%", image: spdtImg },
  { name: "DPST Switch", category: "Rocker", price: "$6.99", oldPrice: "$9.49", rating: 4.7, badge: "-26%", image: dpstImg },
  { name: "DPDT Switch", category: "Rocker", price: "$7.99", oldPrice: "$10.49", rating: 4.8, badge: "-24%", image: dpdtImg },
  { name: "Toggle Switch", category: "Toggle", price: "$8.99", oldPrice: "$11.99", rating: 4.9, badge: "-25%", image: toggleImg },
  { name: "Tactile - 2P", category: "PCB Mount", price: "$1.49", oldPrice: "$1.99", rating: 4.6, badge: "-25%", image: tactileImg },
  { name: "Push Button", category: "Industrial", price: "$12.99", oldPrice: "$16.99", rating: 4.7, badge: "-24%", image: pushButtonImg },
  { name: "Rotary Switch", category: "Industrial", price: "$24.99", oldPrice: "$32.99", rating: 4.8, badge: "-24%", image: rotaryImg },
  { name: "Timer Switch", category: "Control", price: "$34.99", oldPrice: "$44.99", rating: 4.7, badge: "-22%", image: timerImg },
  { name: "Joystick", category: "Control", price: "$29.99", oldPrice: "$39.99", rating: 4.8, badge: "-25%", image: joystickImg },
  { name: "Slide Switch", category: "Slide", price: "$3.49", oldPrice: "$4.99", rating: 4.5, badge: "-30%", image: slideImg },
  { name: "Float Switch", category: "Sensor", price: "$14.99", oldPrice: "$19.99", rating: 4.6, badge: "-25%", image: floatImg },
  { name: "Limit Switch", category: "Micro", price: "$6.49", oldPrice: "$8.49", rating: 4.7, badge: "-23%", image: limitImg },
  { name: "Flow Switch", category: "Sensor", price: "$22.99", oldPrice: "$29.99", rating: 4.7, badge: "-23%", image: flowImg },
  { name: "Thermal Switch", category: "Sensor", price: "$9.99", oldPrice: "$13.49", rating: 4.6, badge: "-26%", image: thermalImg },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Products</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Available Switches & Controls
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Browse our complete range of high-quality switches with competitive pricing and guaranteed reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="bg-background rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
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
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{p.category}</span>
                <h3 className="font-heading font-semibold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
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
    </section>
  );
}
