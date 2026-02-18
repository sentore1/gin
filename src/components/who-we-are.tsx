"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative curved lines - Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} d="M 0,100 Q 100,120 100,200" stroke="#1B3A5F" strokeWidth="2" fill="none" opacity="0.3" />
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.2 }} viewport={{ once: true }} d="M 0,150 Q 120,170 120,250" stroke="#1B3A5F" strokeWidth="2" fill="none" opacity="0.2" />
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.4 }} viewport={{ once: true }} d="M 0,200 Q 140,220 140,300" stroke="#C5A572" strokeWidth="3" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* Decorative curved lines - Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} d="M 200,100 Q 100,120 100,200" stroke="#1B3A5F" strokeWidth="2" fill="none" opacity="0.3" />
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.2 }} viewport={{ once: true }} d="M 200,150 Q 80,170 80,250" stroke="#1B3A5F" strokeWidth="2" fill="none" opacity="0.2" />
          <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.4 }} viewport={{ once: true }} d="M 200,200 Q 60,220 60,300" stroke="#C5A572" strokeWidth="3" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
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
