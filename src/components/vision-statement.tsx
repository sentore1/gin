"use client";

import { motion } from "framer-motion";

export default function VisionStatement() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-gold mx-auto mb-8"
          />

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-8">
            Our Vision
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-display text-[#1A1D29] leading-relaxed"
          >
            To be the leading catalyst for{" "}
            <span className="text-gold">transformative growth</span>, connecting
            talent with opportunity and building a global ecosystem where{" "}
            <span className="text-gold">creativity</span>,{" "}
            <span className="text-gold">education</span>, and{" "}
            <span className="text-gold">sustainable development</span> converge
            to create lasting impact.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-gold mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
