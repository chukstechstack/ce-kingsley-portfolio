import type { JSX } from 'react';
import { TECH_STACK } from './../data'; // Adjust relative path to your data file if needed
import StackCard from './../StackCard';

interface MobileHeroProps {
  paused?: boolean;
}

export default function MobileHero({ paused = false }: MobileHeroProps): JSX.Element {
  const loopStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      className="flex lg:hidden w-full flex-col pt-8"
      style={{ visibility: paused ? 'hidden' : 'visible' }}
    >
      {/* MOBILE & TABLET TITLE — Anchored to the left so it doesn't drift right on wider screens */}
      <div className="fixed bottom-28 sm:bottom-36 left-6 z-20 pointer-events-none w-[85vw] max-w-[400px]">
        <h1 className="w-full text-5xl sm:text-7xl font-light tracking-tighter uppercase leading-[0.92] flex flex-col drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] text-left">
          <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Product
          </span>

          <div className="flex flex-col items-end mt-2 w-full pr-2">
            <span className="font-serif italic font-normal text-white/95 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              Designer
            </span>

            <span className="flex items-baseline gap-2 sm:gap-3 mt-1 w-full justify-end animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <span className="font-serif italic text-2xl sm:text-4xl bg-gradient-to-b from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                /
              </span>
              <span className="font-mono font-semibold text-2xl sm:text-3xl tracking-[0.1em] sm:tracking-[0.15em] bg-gradient-to-r from-emerald-300 to-emerald-400/80 bg-clip-text text-transparent">
                ENGINEER
              </span>
            </span>
          </div>
        </h1>
      </div>

      {/* MOBILE & TABLET TECH STACK MARQUEE */}
      <div
        className="fixed bottom-0 inset-x-0 z-10 overflow-hidden pt-2 pb-3 pointer-events-none"
        style={{
          visibility: paused ? 'hidden' : 'visible',
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <div className="scale-[0.72] sm:scale-[0.85] origin-left">
          <div className={`pointer-events-auto flex w-max ${paused ? '' : 'animate-marquee'}`}>
            {loopStack.map((item, i) => (
              <StackCard item={item} key={`mobile-${item.name}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}