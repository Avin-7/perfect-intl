import { motion } from "framer-motion";
import { Shield, Truck, History, BadgeDollarSign, RotateCcw, ThumbsUp, Link } from "lucide-react";

const reasons = [
  {
    icon: History,
    title: "15+ Years of Experience",
    desc: "Proven expertise delivering consistent industry results.",
  },
  {
    icon: Link,
    title: "Reliable Supply Chain",
    desc: "Ensuring uninterrupted and dependable product availability.",
  },

  {
    icon: BadgeDollarSign,
    title: "Competitive pricing",
    desc: "High-quality products at cost-effective pricing",
  },
  {
    icon: Shield,
    title: "Strong global sourcing network",
    desc: "Strong partnerships across international markets.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick turnaround with on-time dispatch assurance.",
  },

  {
    icon: ThumbsUp,
    title: "Trusted by industry experts",
    desc: "Preferred choice among industry professionals.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 gradient-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Why Choose Us</h2>
          <p className="text-[var(--steel-light)] mt-3 max-w-2xl mx-auto">
            We go above and beyond to ensure every customer gets the best parts and service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--blue-accent)]/20 flex items-center justify-center">
                <r.icon size={28} className="text-[var(--blue-glow)]" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-[var(--steel-light)] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
