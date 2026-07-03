"use client";

import { motion } from "framer-motion";
import RibbonGraphic from "./RibbonGraphic";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 text-slate-100 shadow-[0_25px_80px_rgba(3,7,18,0.45)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.16),_transparent_35%),radial-gradient(circle_at_20%_80%,_rgba(6,182,212,0.16),_transparent_34%)]" />

      <div className="relative flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
        >
          Webpoint • Design • Develop • Deliver
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
        >
          Create Digital Products That People Remember.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
        >
          I build elegant portfolios, product stories, and launch-ready websites for founders who want clarity, warmth, and momentum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#portfolio"
            className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(59,130,246,0.3)] transition hover:scale-[1.02]"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:bg-slate-800/70"
          >
            Book a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400"
        >
          <div>
            <p className="text-2xl font-semibold text-white">12+</p>
            <p>Launches shipped</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">4x</p>
            <p>Faster storytelling</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">100%</p>
            <p>Custom detail</p>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <RibbonGraphic />
      </div>
    </section>
  );
}
