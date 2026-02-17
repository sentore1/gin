"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-8">
            Who We Are
          </h2>

          <div className="relative">
            {/* Decorative quote marks */}
            <div className="absolute -top-8 -left-4 text-gold text-8xl font-display opacity-20">
              "
            </div>
            <div className="absolute -bottom-8 -right-4 text-gold text-8xl font-display opacity-20">
              "
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-display text-[#1A1D29] leading-relaxed mb-8 px-8"
            >
              Global Investment Network is a transformative platform dedicated
              to building impactful ventures across creativity, education, and
              sustainable development.
            </motion.blockquote>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#5F6B7A] leading-relaxed max-w-3xl mx-auto font-body"
          >
            We believe in the transformative power of innovation to drive lasting
            change. By combining strategic investments and comprehensive education
            with an emphasis on digital visibility, we empower our global network
            to lead in a connected world. Together, we are redefining the landscape
            of entrepreneurship and shaping the future of global talent development.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
