"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  "/slideimages/image1 (1).JPG",
  "/slideimages/image1 (2).JPG",
  "/slideimages/image1 (3).JPG",
  "/slideimages/image1 (4).JPG",
  "/slideimages/Creative Industries.jpg",
  "/slideimages/Education & Training.jpg",
  "/slideimages/Events & Experiences.jpg",
  "/slideimages/Investment & Growth.jpg",
];

export default function GinHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative">
              <Image src={src} alt={`Slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button onClick={scrollPrev} className="absolute left-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={scrollNext} className="absolute right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 drop-shadow-lg">
            Building Impactful Across <span className="text-gold drop-shadow-lg">Creativity</span>, <span className="text-gold drop-shadow-lg">Education</span> & <span className="text-gold drop-shadow-lg">Sustainable Development</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-sm sm:text-base text-white/95 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Global Investment Network is dedicated to fostering innovation and talent development. Join us in creating opportunities that transform lives and communities across the globe.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-5 text-sm font-medium group shadow-lg">
                Apply Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#programs">
              <Button className="bg-white/90 hover:bg-white text-navy px-6 py-5 text-sm font-medium shadow-lg">
                Explore Programs
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
