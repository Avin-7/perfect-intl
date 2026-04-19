import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel_1 from "@/assets/carousel-1.png";
import carousel_2 from "@/assets/carousel-2.png";
import carousel_3 from "@/assets/carousel-3.png";
import carousel_4 from "@/assets/carousel-4.png";
import carousel_5 from "@/assets/carousel-5.png";

const AUTO_DELAY = 4000;

// 👉 Add your images later here
const slides = [
  {
    image: carousel_1,
  },
  {
    image: carousel_5,
  },
  {
    image: carousel_4,
  },
  {
    image: carousel_3,
  },
  {
    image: carousel_2,
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimer();

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);

    return () => resetTimer();
  }, [index]);

  const nextSlide = () => {
    resetTimer();
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    resetTimer();
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] mt-5 flex justify-center items-center">
      {/* SLIDES */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt="hero"
            className="absolute inset-0 w-3/4 h-full object-cover flex justify-self-center rounded-3xl drop-shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-400/20 backdrop-blur-xl px-2 py-3 sm:px-4 sm:py-5 rounded-lg"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-400/20 backdrop-blur-xl px-2 py-3 sm:px-4 sm:py-5 rounded-lg"
      >
        {" "}
        <ChevronRight />
      </button>
    </section>
  );
}
