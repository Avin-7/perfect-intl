import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 6.30 PM",
    open: true,
  },
  {
    day: "Tuesday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 6.30 PM",
    open: true,
  },
  {
    day: "Wednesday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 6.30 PM",
    open: true,
  },
  {
    day: "Thursday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 6.30 PM",
    open: true,
  },
  {
    day: "Friday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 5.00 PM",
    open: true,
  },
  {
    day: "Saturday",
    hours: "8.30 AM to 1.00 PM / 2.00 PM to 6.00 PM",
    open: true,
  },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function OfficeTimingSection_dubai() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Hours
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Our Dubai Head Office Timings
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border overflow-hidden shadow-sm"
        >
          <div className="gradient-navy text-primary-foreground flex items-center gap-3 px-6 py-4">
            <Clock size={22} />
            <span className="font-heading font-bold text-lg">
              Weekly Schedule
            </span>
          </div>
          <div className=" divide-y divide-border-2">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="flex items-center justify-between max-md:gap-4 px-6 py-4 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground max-md:w-[20%]">
                  {s.day}
                </span>
                <span className="text-muted-foreground max-md:w-[70%]">
                  {s.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
