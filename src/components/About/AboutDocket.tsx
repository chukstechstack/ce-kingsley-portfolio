import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';
import AboutHero from './AboutHero';
import AboutInvitation from './AboutInvitation';
import AboutBackground from './AboutBackground';
import AboutCapabilities from './AboutCapabilities';
import AboutFooter from './AboutFooter';

interface AboutDocketProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutDocket({ isOpen, onClose }: AboutDocketProps): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-0 md:p-3 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Cinematic Zipper Takeover Drawer */}
      <div className={`relative w-full h-full md:h-[98vh] md:max-w-[98vw] bg-white text-black flex flex-col overflow-hidden md:border-2 md:border-black shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [transform:translateZ(0)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>

        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-8 sm:px-16 py-6 bg-white border-b-2 border-black sticky top-0 z-30">
          <div className="font-mono text-xs tracking-[0.3em] text-black font-black">
            C.E. KINGSLEY // MANIFESTO
          </div>

          <button
            onClick={onClose}
            aria-label="Dismiss sheet"
            className="bg-black text-white hover:bg-neutral-800 px-5 py-2 font-mono text-xs uppercase tracking-[0.25em] cursor-pointer transition-none font-bold"
          >
            CLOSE [×]
          </button>
        </div>

        {/* Native Scroll Area Assembling All Components */}
        <div
          className="flex-1 overflow-y-auto px-6 sm:px-16 md:px-28 py-16 sm:py-24 space-y-36 select-text [-webkit-overflow-scrolling:touch] [transform:translateZ(0)]"
          style={{ contain: 'content' }}
        >
          <AboutHero />
          <AboutInvitation />
          <AboutBackground />
          <AboutCapabilities />
          <AboutFooter onClose={onClose} />
        </div>
      </div>
    </div>
  );
}