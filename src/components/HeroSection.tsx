import { motion } from "framer-motion";
import heroImg from "@/assets/hero-auto-parts.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center"
    >
      <img
        src={heroImg}
        alt="Premium auto parts collection"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <span className="inline-block gradient-blue text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Premium Quality Parts
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Your Trusted <span className="text-gradient-blue">Auto Parts</span> Destination
          </h1>
          <p className="text-[var(--silver)] text-lg mb-8 leading-relaxed">
            Discover premium automotive parts and accessories at unbeatable prices. Quality you can
            trust for every vehicle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="gradient-blue text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
