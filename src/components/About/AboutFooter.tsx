import React from 'react';
import type { JSX } from 'react';

interface AboutFooterProps {
  onClose: () => void;
}

export default function AboutFooter({ onClose }: AboutFooterProps): JSX.Element {
  return (
    <div className="bg-black text-white p-12 sm:p-24 -mx-6 sm:-mx-16 md:-mx-28 mb-12 flex flex-col justify-between space-y-20">
      
      {/* Massive Call to Action Header */}
      <div className="max-w-5xl space-y-6">
        <div className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-neutral-400">
          INITIATE CONTACT // DIALOGUE OPEN
        </div>
        <a 
          href="mailto:your.email@domain.com" 
          className="block font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white hover:text-neutral-300 transition-colors uppercase leading-none"
        >
          LET'S BUILD <br />
          <span className="font-serif italic font-normal tracking-normal normal-case text-neutral-400">something real.</span>
        </a>
      </div>

      {/* Footer Navigation & Exit Controls */}
      <div className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-mono text-neutral-400">
        <div>
          <span className="text-white block font-bold tracking-widest mb-1">C.E. KINGSLEY</span>
          <span>FULL-STACK ARCHITECT & PRODUCT DESIGNER // 2026</span>
        </div>
        <div className="flex items-center gap-8">
          <a 
            href="chuks.techstack@gmail.com" 
            onClick={onClose} 
            className="text-white hover:text-neutral-300 transition-colors uppercase tracking-widest font-bold underline underline-offset-8"
          >
            REQUEST DIRECT CONTACT [EMAIL]
          </a>
          <button 
            onClick={onClose} 
            className="hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
          >
            CLOSE MANIFESTO [↑]
          </button>
        </div>
      </div>
    </div>
  );
}