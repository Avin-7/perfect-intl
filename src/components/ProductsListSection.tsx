import { motion } from "framer-motion";
import spstImg from "@/assets/spst.jpg";
import spdtImg from "@/assets/spdt.jpg";
import dpstImg from "@/assets/dpst.jpg";
import dpdtImg from "@/assets/dpdt.jpg";
import toggleImg from "@/assets/toggle.jpg";
import ind1 from "@/assets/industrial-1.jpg";
import ind2 from "@/assets/industrial-2.jpg";
import horn1 from "@/assets/horn-1.jpg";
import auto1 from "@/assets/auto-1.jpg";
import auto2 from "@/assets/auto-2.jpg";
import exhaust1 from "@/assets/exhaust-1.jpg";
import exhaust2 from "@/assets/exhaust-2.jpg";
import chains1 from "@/assets/chains-1.jpg";
import chains2 from "@/assets/chains-2.jpg";
import spare1 from "@/assets/spare-1.jpg";
import spare2 from "@/assets/spare-2.jpg";
import spare3 from "@/assets/spare-3.jpg";
import spare4 from "@/assets/spare-4.jpg";
import spare5 from "@/assets/spare-5.jpg";
import spare6 from "@/assets/spare-6.jpg";
import engine1 from "@/assets/engine-1.jpg";
import engine2 from "@/assets/engine-2.jpg";
import engine3 from "@/assets/engine-3.jpg";
import engine4 from "@/assets/engine-4.jpg";
import chalwyn1 from "@/assets/chalwyn-1.jpg";
import chalwyn2 from "@/assets/chalwyn-2.jpg";
import starter1 from "@/assets/starter-1.jpg";
import starter2 from "@/assets/starter-2.jpg";
import starter3 from "@/assets/starter-3.jpg";
import mirror1 from "@/assets/mirror-1.jpg";
import mirror2 from "@/assets/mirror-2.jpg";
import mirror3 from "@/assets/mirror-3.jpg";

type Group = {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
};

const groups: Group[] = [
  {
    title: "Engine & Generator Parts",
    description:
      "Diesel power engines, portable generators, recoil starter assemblies and complete engine internal components.",
    images: [
      { src: engine1, alt: "Diesel power engine with radiator assembly" },
      { src: engine2, alt: "Honda portable petrol generator" },
      { src: engine3, alt: "Recoil starter assembly with detail views" },
      {
        src: engine4,
        alt: "Engine overhaul kit — pistons, liners, crankshaft, camshaft and turbocharger",
      },
    ],
  },
  {
    title: "Chalwyn Valve & Spark Arrestors",
    description:
      "ATEX-certified Chalwyn air intake shutoff valves and stainless steel spark arrestors for diesel engines in hazardous environments.",
    images: [
      {
        src: chalwyn1,
        alt: "Chalwyn ATEX air intake shutoff valves with engine installation",
      },
      { src: chalwyn2, alt: "Stainless steel spark arrestors in three sizes" },
    ],
  },
  {
    title: "Switches & Controls",
    description:
      "A curated selection of reliable rocker and toggle switches for control panels, vehicles and industrial systems.",
    images: [
      { src: spstImg, alt: "SPST rocker switch" },
      { src: spdtImg, alt: "SPDT rocker switch" },
      { src: dpstImg, alt: "DPST rocker switch" },
      { src: dpdtImg, alt: "DPDT rocker switch" },
      { src: toggleImg, alt: "Heavy-duty toggle switch" },
    ],
  },
  {
    title: "Relays",
    description:
      "Featured industrial, horn and automotive relays for dependable switching across vehicle and equipment applications.",
    images: [
      { src: ind1, alt: "General purpose industrial relay" },
      { src: ind2, alt: "Miniature power relay" },
      { src: horn1, alt: "Classic horn relay" },
      { src: auto1, alt: "12V mini automotive relay" },
      { src: auto2, alt: "12V 70A starter relay" },
    ],
  },
  {
    title: "Exhaust Bellow Pipes",
    description:
      "Premium chrome exhaust stacks, elbow pipes, and flexible braided bellows for heavy-duty applications.",
    images: [
      { src: exhaust1, alt: "Chrome exhaust stacks and elbow pipes" },
      { src: exhaust2, alt: "Stainless steel braided flexible exhaust bellow" },
    ],
  },
  {
    title: "Transmission Chains & Links",
    description:
      "Industrial roller chains, conveyor chains, and connecting links engineered for power transmission.",
    images: [
      {
        src: chains1,
        alt: "Assorted transmission chains and connecting links",
      },
      { src: chains2, alt: "Heavy-duty roller chain coil" },
    ],
  },
  {
    title: "Starter Motors & Alternators",
    description:
      "Heavy-duty starter motors and high-output alternators for automotive, marine and industrial diesel engines.",
    images: [
      {
        src: starter1,
        alt: "Automotive alternators and starter motor assembly",
      },
      { src: starter2, alt: "High-output alternators with red accents" },
      { src: starter3, alt: "Range of heavy-duty starter motors" },
    ],
  },
  {
    title: "Mistuba Rear View Mirrors",
    description:
      "Heavy-duty rear view and convex safety mirrors for trucks, commercial vehicles and industrial applications.",
    images: [
      { src: mirror1, alt: "Dual-panel heavy-duty rear view mirror" },
      { src: mirror2, alt: "Orange convex traffic safety mirror" },
      { src: mirror3, alt: "Round black convex blind spot mirror" },
    ],
  },
  {
    title: "Other Spare Parts Available",
    description:
      "Tachometers, oil pressure senders, temperature sensors, fan blades, tail lights and warning beacons.",
    images: [
      { src: spare1, alt: "RPM tachometer gauge" },
      { src: spare2, alt: "Oil pressure sender units" },
      { src: spare3, alt: "Temperature sensors in 1/4, 3/8 and 1/2 NPT" },
      { src: spare4, alt: "Engine cooling fan blades" },
      { src: spare5, alt: "Tail lights and reflectors" },
      { src: spare6, alt: "LED warning light bar and strobe lights" },
    ],
  },
];

export default function ProductsListSection() {
  return (
    <section id="products-list" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Products List
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Complete Range of Industrial & Automotive Parts
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Explore our extensive catalog of switches, relays, exhaust
            components, transmission systems and essential spare parts.
          </p>
        </div>

        <div className="space-y-16">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6 flex items-end justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-1">
                    {group.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    {group.description}
                  </p>
                </div>
                <div className="h-1 flex-1 min-w-[60px] gradient-blue rounded-full ml-4 hidden md:block" />
              </div>

              <div
                className={`grid gap-4 ${
                  group.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {group.images.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="relative overflow-hidden rounded-2xl gradient-silver border border-border group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-64 md:h-80 object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm text-primary-foreground font-medium">
                        {img.alt}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
