import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import OfficeTimingSection_dubai from "./OfficeTimingSection-dubai";

export default function ContactSection_Dubai() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Visit our Dubai Head Office
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
                <p className="text-muted-foreground">+971 4 3332263</p>
                <p className="text-muted-foreground">+971 50 6255754</p>
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
                <p className="text-muted-foreground">perfint@hotmail.com</p>
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
                  Showroom No.3, Rashid Buset Building,
                  <br /> Ras Al Khor Industrial Second
                  <br />
                  Dubai – UAE.
                  <br />
                  P.O.Box : 122646
                </p>
              </div>
            </div>
          </motion.div>

          <section className="">
            <div className="max-w-7xl sm:w-full mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-lg border border-border w-full"
              >
                <iframe
                  className=" w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5340774697456!2d55.3550769!3d25.185205499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67a8c2171a19%3A0xcef3b8049e1723bd!2sPerfect%20Shine%20Intl%20LLC!5e0!3m2!1sen!2sin!4v1776440184530!5m2!1sen!2sin"
                  width="350"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </section>
        </div>
        <OfficeTimingSection_dubai />
      </div>
    </section>
  );
}
