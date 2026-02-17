"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PulseBadgeProps {
  children: ReactNode;
  className?: string;
}

export function PulseBadge({ children, className }: PulseBadgeProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium overflow-hidden",
        className
      )}
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring border border-white/30" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </div>
  );
}
