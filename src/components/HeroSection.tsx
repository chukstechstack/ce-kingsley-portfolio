import type { JSX } from 'react';
import { TECH_STACK } from './data';
import StackCard from './StackCard';

interface HeroSectionProps {
  paused?: boolean;
}

export default function HeroSection({ paused = false }: HeroSectionProps): JSX.Element {
  const loopStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <main
      className="relative z-10 px-5 sm:px-8 lg:px-12 my-auto pt-24 sm:pt-28 pb-6 max-w-7xl w-full flex flex-col justify-center"
      style={{ visibility: paused ? 'hidden' : 'visible' }}
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl sm:text-8xl lg:text-[10rem] font-light tracking-tighter uppercase leading-[0.9] flex flex-col drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
          <span className="bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Product
          </span>
          <span className="font-serif italic font-normal text-white/95 pl-3 sm:pl-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            Designer
          </span>
          <span className="self-end tracking-normal text-white/70 text-2xl sm:text-5xl lg:text-7xl font-mono mt-2 sm:mt-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            /ENGINEER
          </span>
        </h1>

        {/* Metadata Card */}
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 text-xs font-mono tracking-wider text-white/80 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_12px_40px_0_rgba(52,211,153,0.1)] animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div>
            <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">DISCIPLINE</span>
            <span className="text-white font-medium tracking-wide">UI/UX // SOFTWARE</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">EXPLORATIONS</span>
            <span className="text-white font-medium tracking-wide">ECONOMICS, FINANCE & HUMAN PSYCHOLOGY</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">STATUS</span>
            <span className="text-emerald-400 font-medium tracking-wide">AVAILABLE FOR GLOBAL ROLES</span>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="mt-10 sm:mt-14 relative w-screen -ml-5 sm:-ml-8 lg:-ml-12 overflow-hidden animate-slideUp"
          style={{
            animationDelay: '0.7s',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <div className={`flex w-max ${paused ? '' : 'animate-marquee'}`}>
            {loopStack.map((item, i) => (
              <StackCard item={item} key={`${item.name}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}