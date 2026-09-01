import { useState } from 'react';
import type { JSX } from 'react';
import BackgroundOverlay from './BackgroundOverlay';
import HeroSection from './Hero';
import ProjectModule from './ProjectModule';
import Navbar from './Nav';
import AboutDocket from './About/AboutDocket';
import ContactDocket from './ContactDock';

export default function PortfolioLanding(): JSX.Element {
    const [openModal, setOpenModal] = useState<'about' | 'contact' | 'projects' | null>(null);

    const isPaused = openModal !== null;

    return (
        <div className="relative w-full min-h-[92vh] bg-[#141414] text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between selection:bg-white selection:text-black">
            {/* Top Navigation */}
            <Navbar
                onOpenAbout={() => setOpenModal('about')}
                onOpenContact={() => setOpenModal('contact')}
                onOpenProjects={() => setOpenModal('projects')}
                paused={isPaused}
            />

            {/* Background Image & Architectural Curve */}
            <BackgroundOverlay paused={isPaused} />

            {/* Main PC Workspace - pinned to the top of its flex box */}
            <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pt-16 sm:pt-20 pb-0 flex-1 flex flex-col justify-start">
                <HeroSection paused={isPaused} />
            </div>

            {/* Independent Project Module — anchored to viewport bottom (Desktop Only) */}
            <div
                className="hidden lg:block fixed z-20 w-85 bottom-50 xl:bottom-35 right-16"
                style={{ visibility: isPaused ? 'hidden' : 'visible' }}
            >
                <ProjectModule paused={isPaused} />
            </div>

            {/* Drawers / Dockets */}
            <AboutDocket isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} />
            <ContactDocket isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} />

            {/* Projects Docket / Mobile Slide-Out Modal (Obsidian Glass Theme) */}
            {openModal === 'projects' && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 backdrop-blur-xl bg-black/80 animate-slideUp">
                    <div
                        className="relative w-full max-w-sm text-white rounded-[2rem] p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, rgba(24, 24, 24, 0.95) 0%, rgba(16, 16, 16, 0.98) 100%)',
                            backdropFilter: 'blur(30px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        }}
                    >
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                            <span className="font-serif italic text-white text-lg">Selected Projects</span>
                            <button
                                onClick={() => setOpenModal(null)}
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest font-bold rounded-full cursor-pointer transition-all"
                            >
                                CLOSE [×]
                            </button>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto pr-1">
                            <ProjectModule paused={false} />
                        </div>
                    </div>
                </div>
            )}

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