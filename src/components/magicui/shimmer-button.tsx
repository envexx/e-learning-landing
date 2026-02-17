"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255,255,255,0.15)",
  shimmerSize = "0.1em",
  borderRadius = "0.75rem",
  shimmerDuration = "2.5s",
  background = "#25D366",
  href,
  target,
  rel,
}: ShimmerButtonProps) {
  const Tag = href ? "a" : "button";
  const linkProps = href ? { href, target, rel } : {};

  return (
    <Tag
      {...linkProps}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden font-semibold transition-all",
        className
      )}
      style={{ borderRadius, background }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 animate-shimmer-slide"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            backgroundSize: "200% 100%",
            animationDuration: shimmerDuration,
          }}
        />
      </div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  );
}
