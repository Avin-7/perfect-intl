import { motion } from "framer-motion";
import vdoLogo from "@/assets/vdo.jpg";
import veethreeLogo from "@/assets/veethree.jpg";
import coleHerseeLogo from "@/assets/cole-hersee.jpg";
import eurolitesLogo from "@/assets/eurolites.jpg";
import sparexLogo from "@/assets/sparex.jpg";
import datconLogo from "@/assets/datcon.jpg";
import britaxLogo from "@/assets/britax.jpg";
import pollakLogo from "@/assets/pollak.jpg";
import cat from "@/assets/cat.png";
import kubota from "@/assets/kubota.png";
import hyster from "@/assets/hyster.png";
import manitowac from "@/assets/manitowac.png";
import kenworth from "@/assets/kenworth.png";
import kirloskar from "@/assets/kirloskar.png";
import komatsu from "@/assets/komatsu.png";
import jlg from "@/assets/jlg.png";
import jcb from "@/assets/jcb.png";
import hatz from "@/assets/hatz.png";
import deutz from "@/assets/deutz.png";
import delco_remy from "@/assets/delco_remy.png";
import cummins from "@/assets/cummins.png";
import case_constr from "@/assets/case_constr.jpg";
import bobcat from "@/assets/bobcat.png";
import john_deere from "@/assets/john_deere.png";
import vision_alert from "@/assets/vision_alert.png";
import total_source from "@/assets/total_source.png";
import ing_rand from "@/assets/ing_rand.jpg";
import hitachi from "@/assets/hitachi.png";

const brands = [
  { name: "VDO", logo: vdoLogo },
  { name: "Veethree", logo: veethreeLogo },
  { name: "Cole Hersee", logo: coleHerseeLogo },
  { name: "Eurolites", logo: eurolitesLogo },
  { name: "Sparex", logo: sparexLogo },
  { name: "Datcon", logo: datconLogo },
  { name: "Britax", logo: britaxLogo },
  { name: "Pollak", logo: pollakLogo },
  { name: "Cat", logo: cat },
  { name: "kubota", logo: kubota },
  { name: "hitachi", logo: hitachi },
  { name: "bobcat", logo: bobcat },
  { name: "kirloskar", logo: kirloskar },
  { name: "john_deere", logo: john_deere },
  { name: "jcb", logo: jcb },
  { name: "cummins", logo: cummins },
  { name: "delco_remy", logo: delco_remy },
  { name: "manitowac", logo: manitowac },
  { name: "kenworth", logo: kenworth },
  { name: "hatz", logo: hatz },
  { name: "ing_rand", logo: ing_rand },
  { name: "deutz", logo: deutz },
  { name: "komatsu", logo: komatsu },
  { name: "jlg", logo: jlg },
  { name: "hyster", logo: hyster },
  { name: "total_source", logo: total_source },
  { name: "vision_alert", logo: vision_alert },
  { name: "case_constr", logo: case_constr },
];

import { useState, useEffect, useRef } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;
const AUTO_DELAY = 3000;

export default function BrandsSection() {
  const [page, setPage] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalPages = Math.ceil(brands.length / ITEMS_PER_PAGE);

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetAutoSlide();

    timeoutRef.current = setTimeout(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, AUTO_DELAY);

    return () => resetAutoSlide();
  }, [page, totalPages]);

  const nextSlide = () => {
    resetAutoSlide();
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    resetAutoSlide();
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Brands
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We supply trusted products from leading automotive and industrial
            brands.
          </p>
        </div>

        <div className="relative">
          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10"
          >
            <CircleChevronLeft className=" text-accent-foreground size-10 fill-blue-600" />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10"
          >
            <CircleChevronRight className=" text-accent-foreground size-10 fill-blue-600" />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${page * 100}%` }}
              transition={{ duration: 0.6 }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-rows-2 gap-6 justify-items-center"
                >
                  {brands
                    .slice(
                      pageIndex * ITEMS_PER_PAGE,
                      pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
                    )
                    .map((brand) => (
                      <div
                        key={brand.name}
                        className="w-[150px] h-24 flex items-center justify-center border rounded-xl"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
