import { motion } from "framer-motion";
import vdoLogo from "@/assets/vdo.jpg";
import veethreeLogo from "@/assets/veethree.jpg";
import coleHerseeLogo from "@/assets/cole-hersee.jpg";
import eurolitesLogo from "@/assets/eurolites.jpg";
import chicagoPneumaticLogo from "@/assets/chicago-pneumatic.jpg";
import waiLogo from "@/assets/wai.jpg";
import sparexLogo from "@/assets/sparex.jpg";
import datconLogo from "@/assets/datcon.jpg";
import britaxLogo from "@/assets/britax.jpg";
import pollakLogo from "@/assets/pollak.jpg";

const brands = [
  { name: "VDO", logo: vdoLogo },
  { name: "Veethree", logo: veethreeLogo },
  { name: "Cole Hersee", logo: coleHerseeLogo },
  { name: "Eurolites", logo: eurolitesLogo },
  { name: "Chicago Pneumatic", logo: chicagoPneumaticLogo },
  { name: "WAI", logo: waiLogo },
  { name: "Sparex", logo: sparexLogo },
  { name: "Datcon", logo: datconLogo },
  { name: "Britax", logo: britaxLogo },
  { name: "Pollak", logo: pollakLogo },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Brands We Stock In Our Shops
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We supply trusted products from leading automotive and industrial brands.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="w-[150px] sm:w-[170px] md:w-[190px] h-24 md:h-28 rounded-2xl border border-border bg-background px-4 py-3 flex items-center justify-center overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                width={1280}
                height={640}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
