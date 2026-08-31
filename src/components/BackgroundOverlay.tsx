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
        className="absolute inset-0 w-full h-full object-cover object-[center_10%] opacity-85 mix-blend-normal filter contrast-110"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/70 to-transparent"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 88% 40%, 65% 45%, 35% 52%, 12% 60%, 0% 68%)'
        }}
      />

      <div
        className="absolute inset-0 bg-[#0b0b0b]/85 backdrop-blur-[1px]"
        style={{
          maskImage: 'linear-gradient(to top, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 55%, transparent 100%)'
        }}
      />
    </div>
  );
}