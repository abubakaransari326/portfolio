"use client";

import { useEffect, useState } from "react";

export function CursorSpotlight() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (position === null) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden
      style={{
        background: `radial-gradient(
          circle clamp(34rem, 64vw, 55rem) at ${position.x}px ${position.y}px,
          rgba(50, 80, 140, 0.35) 0%,
          rgba(40, 70, 130, 0.15) 40%,
          transparent 70%
        )`,
      }}
    />
  );
}
