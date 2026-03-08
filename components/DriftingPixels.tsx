"use client";

import { useEffect, useRef, useState } from "react";

interface Pixel {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

function generatePixels(count: number): Pixel[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * -5,
    driftX: (Math.random() - 0.5) * 60,
    driftY: -(Math.random() * 40 + 10),
  }));
}

export default function DriftingPixels() {
  const [hovered, setHovered] = useState(false);
  const [pixels] = useState<Pixel[]>(() => generatePixels(8));
  const [hoverPixels] = useState<Pixel[]>(() => generatePixels(12));

  return (
    <a
      href="https://www.driftingpixels.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-1.5 text-xs text-white/20 transition-colors duration-500 hover:text-white/40"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pixel container */}
      <span className="relative">
        {/* Ambient pixels - always active */}
        {pixels.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute rounded-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: "white",
              opacity: hovered ? p.opacity * 2 : p.opacity,
              animation: `pixelDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
              ["--drift-x" as string]: `${p.driftX}px`,
              ["--drift-y" as string]: `${p.driftY}px`,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}

        {/* Extra pixels on hover */}
        {hoverPixels.map((p) => (
          <span
            key={`h-${p.id}`}
            className="pointer-events-none absolute rounded-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: "white",
              opacity: hovered ? p.opacity * 1.5 : 0,
              animation: `pixelDrift ${p.duration * 0.7}s ease-in-out ${p.delay}s infinite`,
              ["--drift-x" as string]: `${p.driftX * 1.5}px`,
              ["--drift-y" as string]: `${p.driftY * 1.5}px`,
              transition: "opacity 0.6s ease",
            }}
          />
        ))}

        {/* Wave symbol */}
        <span className="inline-block animate-[wavePulse_3s_ease-in-out_infinite]">
          ∿
        </span>
      </span>

      <span className="tracking-[0.2em]">drifting pixels</span>

      <style jsx>{`
        @keyframes pixelDrift {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: var(--start-opacity, 0.2);
          }
          50% {
            transform: translate(var(--drift-x), var(--drift-y));
            opacity: 0;
          }
        }

        @keyframes wavePulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </a>
  );
}
