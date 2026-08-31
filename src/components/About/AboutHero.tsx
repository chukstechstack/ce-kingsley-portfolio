
import type { JSX } from 'react';

export default function AboutHero(): JSX.Element {
  return (
    <div className="border-b-8 border-black pb-20">
      <span className="font-mono text-xs tracking-[0.4em] text-neutral-400 font-bold block mb-6">THE CORE REALITY</span>
      <h1 className="text-6xl sm:text-9xl md:text-[13rem] font-black tracking-tighter uppercase leading-[0.8] text-black">
        DESIGN <br />
        <span className="font-serif italic font-normal tracking-normal normal-case text-neutral-500">that leaves</span> <br />
        A MARK.
      </h1>
    </div>
  );
}