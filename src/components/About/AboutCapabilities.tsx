
import type { JSX } from 'react';

export default function AboutCapabilities(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b-2 border-black pb-24">
      <div className="lg:col-span-4 font-mono text-sm text-neutral-400 tracking-widest uppercase">
        03 — CAPABILITIES & EXPANSION
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="border-t-4 border-black pt-8">
          <div className="font-mono text-sm font-black text-black tracking-[0.2em] uppercase mb-4">CURRENT STACK</div>
          <p className="font-sans text-2xl sm:text-3xl text-neutral-900 font-medium leading-snug">Product Generalist, Full-Stack Software Engineer, UI/UX Designer, and Product Designer.</p>
        </div>
        <div className="border-t-4 border-black pt-8">
          <div className="font-mono text-sm font-black text-black tracking-[0.2em] uppercase mb-4">ACTIVE LEARNING</div>
          <p className="font-sans text-2xl sm:text-3xl text-neutral-900 font-medium leading-snug">Inbound Marketing, Economics, Business, and advanced Product Design strategies.</p>
        </div>
      </div>
    </div>
  );
}