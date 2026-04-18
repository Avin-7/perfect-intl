import { motion } from "framer-motion";
import { Cog, ShieldCheck, Truck, Headphones, Gauge, Award } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Construction industries",
  },
  {
    icon: Award,
    title: "Commercial vehicles",
  },
  {
    icon: Award,
    title: "Fleet operations ",
  },
  {
    icon: Award,
    title: "Workshops and service centres",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 gradient-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Our Expertise
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
            Our products are trusted by dealers and fleet operators who rely on consistent
            performance and durability.
            <br /> Our strong sourcing network enables us to deliver reliable products that meet
            industry standards while maintaining competitive pricing.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-accent tracking-wider uppercase font-semibold mt-3 max-w-3xl mx-auto">
            We provide a wide range of automotive spare parts tailored for,
          </p>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-accent/5 rounded-xl p-2 shadow-sm hover:shadow-lg transition-shadow border border-border group min-w-2xl "
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground ">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
