"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const projects = [
  { title: "Luxury Branding Mockup", type: "Branding", summary: "A refined identity system for a luxury fashion launch.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
  { title: "Modern Mobile Banking App UI", type: "Product Design", summary: "A premium financial product experience with calm motion and clarity.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80" },
  { title: "Interior Design Branding", type: "Visual Identity", summary: "A tactile, editorial experience for an upscale studio.", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" },
  { title: "Analytics Dashboard SaaS", type: "Product UI", summary: "A bold data platform designed to feel effortless and intelligent.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
  { title: "Organic Skincare Product", type: "Packaging", summary: "A gentle visual language for a high-end wellness brand.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80" },
  { title: "Luxury Fashion Ecommerce Website", type: "Ecommerce", summary: "A cinematic shopping experience with premium storytelling.", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" },
];

export default function Portfolio() {
  return (
    <SectionShell eyebrow="Portfolio" title="Selected work with cinematic polish." description="Each project blends visual clarity, subtle motion, and content strategy into an experience that feels memorable.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -8, scale: 1.01, rotateX: 3, rotateY: -3 }}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(2,6,23,0.34)]"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute inset-0 rounded-[1.75rem] border border-white/10 opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{project.type}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
