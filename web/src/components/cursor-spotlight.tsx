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
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{
        background: `radial-gradient(
          circle clamp(28rem, 55vw, 45rem) at ${position.x}px ${position.y}px,
          rgba(17, 30, 64, 0.9) 0%,
          rgba(17, 30, 64, 0.3) 35%,
          transparent 70%
        )`,
      }}
    />
  );
}
