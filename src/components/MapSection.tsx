import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden shadow-lg border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5340774697456!2d55.3550769!3d25.185205499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67a8c2171a19%3A0xcef3b8049e1723bd!2sPerfect%20Shine%20Intl%20LLC!5e0!3m2!1sen!2sin!4v1776440184530!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
