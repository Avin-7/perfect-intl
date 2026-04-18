import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import OfficeTimingSection_qatar from "./OfficeTimingSection-qatar";

export default function ContactSection_Qatar() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Visit our Qatar Branch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Get in touch with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 mt-4">
              <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">
                  Phone
                </h4>
                <p className="text-muted-foreground">+974 33433281</p>
                <p className="text-muted-foreground">+974 77083091</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">
                  Email
                </h4>
                <p className="text-muted-foreground">
                  perfectshineint@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">
                  Address
                </h4>
                <p className="text-muted-foreground">
                  QDC Building, Shop # 1, Building # 63, Zone # 57, Street #
                  105,
                  <br />
                  Industrial Area,
                  <br />
                  Wakalat Street, Qatar
                  <br />
                  P.O.Box : 90931
                </p>
              </div>
            </div>
          </motion.div>

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
                  className=" w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.731169856369!2d51.43541437516402!3d25.212286877701153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d116462a5b77%3A0xf4d630a82de293e8!2sPERFECT%20SHINE%20INTERNATIONAL%20W.L.L!5e0!3m2!1sen!2sin!4v1776442115309!5m2!1sen!2sin"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </section>
        </div>
        <OfficeTimingSection_qatar />
      </div>
    </section>
  );
}
