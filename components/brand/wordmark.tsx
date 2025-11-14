// components/brand/wordmark.tsx
"use client";

import { motion } from "framer-motion";

export default function Wordmark() {
  return (
    <div className="relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight"
      >
        <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Blank Slate
        </span>
        <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
          {" "}Dev
        </span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
      />
    </div>
  );
}