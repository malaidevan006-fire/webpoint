"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const services = [
  {
    title: "Brand Systems",
    description: "Visual direction, messaging, and modular identity systems for ambitious launches.",
    icon: "✦",
  },
  {
    title: "Web Experiences",
    description: "High-converting landing pages and storytelling sites built with modern performance in mind.",
    icon: "◌",
  },
  {
    title: "Creative Strategy",
    description: "Clear positioning, content flow, and conversion-focused storytelling that feels effortless.",
    icon: "⬢",
  },
];

export default function Services() {
  return (
    <SectionShell eyebrow="Services" title="Crafted for modern brands." description="Every engagement is shaped around a calm, collaborative experience that respects your time and your vision.">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01, rotateX: 2, rotateY: -2 }}
            className="group rounded-[1.8rem] border border-white/10 bg-white/8 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)] backdrop-blur-xl"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-xl text-cyan-200 shadow-[0_0_30px_rgba(6,182,212,0.18)]">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
