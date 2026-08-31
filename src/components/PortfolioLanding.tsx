import  { useState } from 'react';
import type { JSX } from 'react';
import BackgroundOverlay from './BackgroundOverlay';
import HeroSection from './HeroSection';
import ProjectModule from './ProjectModule';
import  Navbar from './Navbar';
import AboutDocket from './About/AboutDocket';
import ContactDocket from './ContactDock'; 

export default function PortfolioLanding(): JSX.Element {
  const [openModal, setOpenModal] = useState<'about' | 'contact' | null>(null);

  const isPaused = openModal !== null;

  return (
    <div className="relative w-full min-h-screen bg-[#0b0b0b] text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top Header Navbar */}
      <Navbar
        onOpenAbout={() => setOpenModal('about')}
        onOpenContact={() => setOpenModal('contact')}
      />

      {/* Background & S-Curve Overlay */}
      <BackgroundOverlay paused={isPaused} />

      {/* Hero Content & Tech Marquee */}
      <HeroSection paused={isPaused} />

      <ProjectModule paused={isPaused} />

      {/* Drawers — rendered here so they can pause siblings above */}
      <AboutDocket isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} />
      <ContactDocket isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} />

      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}