"use client";

import { motion } from "framer-motion";

export default function TrustLogos() {
  const logos = [
    "TechCorp",
    "StartupCo",
    "InnovateLabs",
    "GrowthVentures",
    "ScaleUp",
    "FutureBase",
  ];

  return (
    <div className="overflow-hidden">
      <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
        Trusted by founders and teams
      </p>

      <div className="relative">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-12"
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex h-16 w-48 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 transition-colors hover:border-mint hover:bg-mint/5"
            >
              <span className="text-lg font-semibold text-slate-400 transition-colors hover:text-teal">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}