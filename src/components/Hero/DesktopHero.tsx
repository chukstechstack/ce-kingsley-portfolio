import type { JSX } from 'react';
import { TECH_STACK } from './../data'; // Adjust relative path to your data file if needed
import StackCard from './../StackCard';

interface DesktopHeroProps {
  paused?: boolean;
}

export default function DesktopHero({ paused = false }: DesktopHeroProps): JSX.Element {
  const loopStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      className="hidden lg:flex w-full flex-col pt-8"
      style={{ visibility: paused ? 'hidden' : 'visible' }}
    >
      {/* PC / DESKTOP TITLE — pinned toward the top, staircase */}
      <div className="grid grid-cols-12 gap-8 items-start w-full">
        <div className="col-span-8 flex flex-col items-start pt-10 xl:pt-14">
          <h1 className="w-fit text-6xl xl:text-[9.5rem] font-light tracking-tighter uppercase leading-[1.05] flex flex-col drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] text-left">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Product
            </span>

            <div className="flex flex-col items-end mt-1">
              <span className="font-serif italic font-normal text-white/95 pl-10 xl:pl-20 animate-slideUp" style={{ animationDelay: '0.3s' }}>
                Designer
              </span>

              {/* Pulled tight up against Designer with a negative margin-top */}
              <span className="flex items-baseline gap-2 xl:gap-3 -mt-2 xl:-mt-5 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <span className="font-serif italic text-4xl xl:text-6xl bg-gradient-to-b from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  /
                </span>
                <span className="font-mono font-semibold text-2xl xl:text-4xl tracking-[0.15em] xl:tracking-[0.2em] bg-gradient-to-r from-emerald-300 to-emerald-400/80 bg-clip-text text-transparent">
                  ENGINEER
                </span>
              </span>
            </div>
          </h1>
        </div>

        <div className="col-span-4" />
      </div>

      {/* DISCIPLINE CARD + TECH STACK MARQUEE — desktop only */}
      <div className="fixed bottom-6 xl:bottom-10 inset-x-0 z-20 pointer-events-none" style={{ visibility: paused ? 'hidden' : 'visible' }}>
        <div className="px-6 sm:px-12 lg:px-16">
          <div
            className="pointer-events-auto w-full max-w-3xl flex flex-row flex-nowrap items-center justify-between gap-6 text-xs font-mono tracking-wider text-white/80 px-8 py-5 rounded-2xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden transition-all duration-500 hover:border-emerald-500/30 animate-slideUp whitespace-nowrap mb-6"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div>
              <span className="text-white/40 block mb-0.5 uppercase tracking-widest text-[9px]">DISCIPLINE</span>
              <span className="text-white font-medium tracking-wide">UI/UX // SOFTWARE</span>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-white/40 block mb-0.5 uppercase tracking-widest text-[9px]">EXPLORATIONS</span>
              <span className="text-white font-medium tracking-wide">ECONOMICS & PSYCHOLOGY</span>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-white/40 block mb-0.5 uppercase tracking-widest text-[9px]">STATUS</span>
              <span className="text-emerald-400 font-medium tracking-wide">AVAILABLE</span>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-auto relative w-screen overflow-hidden animate-slideUp"
          style={{
            animationDelay: '0.7s',
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
          }}
        >
          <div className={`flex w-max ${paused ? '' : 'animate-marquee'}`}>
            {loopStack.map((item, i) => (
              <StackCard item={item} key={`desktop-${item.name}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}