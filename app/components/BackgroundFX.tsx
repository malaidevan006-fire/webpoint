"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.24),_transparent_30%),radial-gradient(circle_at_20%_80%,_rgba(6,182,212,0.18),_transparent_36%)]" />

      <motion.div
        className="absolute left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[160px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -24, 28, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10rem] top-[10%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/20 blur-[180px]"
        animate={{ x: [0, -30, 24, 0], y: [0, 38, -18, 0], scale: [1, 0.96, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[18%] h-[22rem] w-[22rem] rounded-full bg-cyan-400/20 blur-[170px]"
        animate={{ x: [0, 20, -18, 0], y: [0, -24, 28, 0], scale: [1, 1.04, 0.96, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04)_0%,transparent_24%,rgba(255,255,255,0.035)_55%,transparent_80%)] mix-blend-screen opacity-80" />
      <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.2)_45%,rgba(5,8,22,0.75)_100%)]" />

      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-[-15%] top-[8%] h-[70%] w-[40%] rotate-12 rounded-full border border-white/10" />
        <div className="absolute right-[-10%] top-[12%] h-[60%] w-[35%] -rotate-12 rounded-full border border-cyan-300/10" />
      </motion.div>

      <div className="absolute inset-0 opacity-25 mix-blend-screen [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:220px_220px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_80%)]" />
    </div>
  );
}
