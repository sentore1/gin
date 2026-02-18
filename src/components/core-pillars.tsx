"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    image: "/programsimages/Creative Industries.jpg",
    title: "Creative Industries",
    description:
      "Nurturing talent in film, animation, photography, and graphic design to build the next generation of creative professionals.",
  },
  {
    image: "/programsimages/Education & Training.jpg",
    title: "Education & Training",
    description:
      "Comprehensive programs designed to equip students with practical skills and industry-relevant knowledge for career success.",
  },
  {
    image: "/programsimages/Events & Experiences.jpg",
    title: "Events & Experiences",
    description:
      "Curating impactful events that connect talent with opportunities and foster collaboration across industries.",
  },
  {
    image: "/programsimages/Investment & Growth.jpg",
    title: "Investment & Growth",
    description:
      "Strategic investments in promising ventures and talented individuals to drive sustainable economic development.",
  },
];

export default function CorePillars() {
  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            What We Do
          </h2>
          <p className="text-lg text-[#5F6B7A] max-w-2xl mx-auto font-body">
            Our four core pillars work together to create a comprehensive
            ecosystem for talent development and venture building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(27,58,95,0.08)] hover:shadow-[0_8px_24px_rgba(27,58,95,0.12)] transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image src={pillar.image} alt={pillar.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#5F6B7A] font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
