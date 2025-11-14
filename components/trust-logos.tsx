// components/trust-logos.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustLogos() {
  const logos = [
    { name: "Stripe", icon: "💳" },
    { name: "Vercel", icon: "▲" },
    { name: "Linear", icon: "◆" },
    { name: "Framer", icon: "◈" },
    { name: "Notion", icon: "📝" },
    { name: "Figma", icon: "◇" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Trusted by innovative companies
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-16"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex h-20 w-48 flex-shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">
                {logo.icon}
              </span>
              <span className="text-xl font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}