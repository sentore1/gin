"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Film, Clock, Award, Users } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: Film,
    title: "Professional Training",
    description: "Learn from industry professionals with real-world experience",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "Choose between 3 or 6 month intensive programs",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive industry-recognized certification upon completion",
  },
  {
    icon: Users,
    title: "Network Access",
    description: "Connect with industry leaders and fellow creatives",
  },
];

export default function FlagshipProgram() {
  return (
    <section id="afa" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-gold/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-sm font-medium text-navy">
                Flagship Program
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Acting for Film Academy Program
            </h2>

            <p className="text-lg text-[#5F6B7A] mb-8 leading-relaxed font-body">
              Our premier program designed to transform passionate individuals
              into professional film actors. Through intensive training,
              practical workshops, and industry exposure, we prepare students
              for successful careers in the entertainment industry.
            </p>

            <Link href="/apply">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white px-8 py-6 text-lg font-medium active:scale-[0.98] transition-all group"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(27,58,95,0.08)] border border-[#E4E7EB]"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5F6B7A] font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
