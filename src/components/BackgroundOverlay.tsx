import type { JSX } from 'react';
// @ts-ignore
import OfficeRoomImg from "../assets/ChatGPT Image Aug 22, 2026, 01_30_28 AM.png";

interface BackgroundOverlayProps {
  paused?: boolean;
}

export default function BackgroundOverlay({ paused = false }: BackgroundOverlayProps): JSX.Element {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ visibility: paused ? 'hidden' : 'visible' }}
    >
      <img
        src={OfficeRoomImg}
        alt="C.E Kingsley"
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] opacity-80 mix-blend-normal filter brightness-105 contrast-115"
      />

      {/* S-Curve Overlay with a much lighter, subtle bottom shadow */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="lightBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b0b0b" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#0b0b0b" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#0b0b0b" stopOpacity="0.40" />
          </linearGradient>
        </defs>
        {/* Smooth S-curve wave */}
        <path
          d="M 0,100 L 100,100 L 100,65 C 80,55 70,42 50,42 C 30,42 15,32 0,22 Z"
          fill="url(#lightBottomGrad)"
        />
      </svg>

      {/* Minimal global veil just to keep text legible */}
      <div
        className="absolute inset-0 bg-[#0b0b0b]/25"
      />
    </div>
  );
}