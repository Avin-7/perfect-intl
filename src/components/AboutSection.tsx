import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-us.jpg";

const points = [
  "Over 15+ years of experience in the industry ",
  "Reliable Supply Chain",
  "Competitive pricing",
  "Strong global sourcing network",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="Our auto parts warehouse"
              className="rounded-xl shadow-lg w-full object-cover h-[350px] md:h-[420px]"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Driving Quality Since 2006
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Perfect Shine International LLC was established in 2006 in Dubai, United Arab
              Emirates, with a clear vision to serve clients in the automotive spare parts industry.
              Since its inception, the company has been committed to delivering high-quality
              products and building long-term relationships as a trusted partner to its clients.
            </p>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
