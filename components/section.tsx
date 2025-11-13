import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("px-6 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}