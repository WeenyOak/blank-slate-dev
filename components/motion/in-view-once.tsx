"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface InViewOnceProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export function InViewOnce({
  children,
  className,
  threshold = 0.2,
}: InViewOnceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}