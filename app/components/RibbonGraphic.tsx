"use client";

import { motion } from "framer-motion";

export default function RibbonGraphic() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.26)_0%,_rgba(255,255,255,0)_70%)]"
        animate={{ scale: [0.95, 1.04, 0.96, 0.95], opacity: [0.7, 1, 0.8, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 320 320"
        className="relative h-72 w-72 drop-shadow-[0_30px_100px_rgba(59,130,246,0.25)]"
        animate={{ y: [0, -8, 0], rotate: [0, 0.4, -0.2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="52" y="56" width="216" height="208" rx="36" fill="#07111f" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <path d="M98 112h124" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
        <path d="M98 147h92" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
        <path d="M98 182h108" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
        <path d="M108 212c18-28 44-44 70-44 21 0 40 11 54 32" stroke="#06b6d4" strokeWidth="10" strokeLinecap="round" />
        <circle cx="112" cy="218" r="12" fill="#06b6d4" />
        <circle cx="208" cy="218" r="12" fill="#8b5cf6" />
      </motion.svg>
    </div>
  );
}
