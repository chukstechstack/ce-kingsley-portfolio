import { useState, useEffect } from 'react';
import type { JSX } from 'react';

interface MobileNavProps {
    onOpenAbout: () => void;
    onOpenContact: () => void;
    onOpenProjects: () => void;
    paused?: boolean;
}

export default function MobileNav({ onOpenAbout, onOpenContact, onOpenProjects }: MobileNavProps): JSX.Element {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const itemStyle = (index: number): React.CSSProperties => ({
        transitionDelay: mobileMenuOpen ? `${80 + index * 60}ms` : '0ms',
    });

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 w-full flex lg:hidden items-center justify-between px-6 py-6 bg-transparent pointer-events-none">
                {/* LOGO */}
                <a
                    href="#"
                    className="pointer-events-auto group flex items-center gap-3 bg-transparent border-none cursor-pointer text-left"
                >
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] border border-white/15">
                        <span className="font-mono text-xs font-bold text-white">CE</span>
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                    </div>
                    <span className="font-serif italic text-lg font-medium text-white">
                        C.E. Kingsley
                    </span>
                </a>

                {/* PURE CLEAR TEXT BURGER TRIGGER (NO BACKGROUND) */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="pointer-events-auto group flex items-center gap-3.5 bg-transparent border-none cursor-pointer p-1"
                    aria-label="Open Menu"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/90 group-hover:text-emerald-300 transition-colors duration-300 font-semibold">
                        Menu
                    </span>
                    <span className="flex flex-col gap-[5px] w-7">
                        <span className="h-[2px] w-full bg-white group-hover:bg-emerald-400 transition-colors duration-300 rounded-full" />
                        <span className="h-[2px] w-4.5 bg-white group-hover:bg-emerald-400 transition-colors duration-300 rounded-full ml-auto" />
                    </span>
                </button>
            </header>

            {/* 2026 BUTTER & BLUR FLOATING ISLAND OVERLAY */}
            <div
                className={`fixed inset-0 z-[60] flex items-center justify-center p-5 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto backdrop-blur-2xl bg-black/60' : 'opacity-0 pointer-events-none backdrop-blur-none bg-black/0'
                }`}
            >
                <div
                    className={`relative w-full max-w-xs text-[#141414] flex flex-col justify-between rounded-[2.5rem] p-7 shadow-[0_30px_70px_-15px_rgba(254,250,224,0.3)] border border-[#fefae0]/50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        mobileMenuOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'
                    }`}
                    style={{
                        background: 'linear-gradient(145deg, rgba(254, 250, 224, 0.96) 0%, rgba(242, 235, 198, 0.92) 100%)',
                        backdropFilter: 'blur(35px) saturate(190%)',
                        WebkitBackdropFilter: 'blur(35px) saturate(190%)',
                    }}
                >
                    {/* Header: Title + Close Button */}
                    <div
                        className="flex items-center justify-between pb-5 border-b border-black/10 transition-all duration-500"
                        style={{
                            opacity: mobileMenuOpen ? 1 : 0,
                            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                            ...itemStyle(0),
                        }}
                    >
                        <div className="flex flex-col">
                            <span className="font-serif italic text-base text-black font-semibold tracking-tight">
                                C.E. Kingsley
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-800 font-bold">
                                // Navigation
                            </span>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-black/5 hover:bg-black/10 text-black border border-black/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest font-bold cursor-pointer rounded-full transition-all duration-300"
                        >
                            CLOSE [×]
                        </button>
                    </div>

                    {/* Pure Text Navigation List with Modals */}
                    <div className="py-7 flex flex-col gap-5">
                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }}
                            className="text-left group flex items-center justify-between bg-transparent border-none p-0 cursor-pointer"
                            style={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                                ...itemStyle(1),
                            }}
                        >
                            <span className="font-serif italic text-2xl text-black/80 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all duration-300">
                                01 // About
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-black/30 group-hover:text-emerald-800 transition-colors">OPEN</span>
                        </button>

                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenProjects(); }}
                            className="text-left group flex items-center justify-between bg-transparent border-none p-0 cursor-pointer"
                            style={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                                ...itemStyle(2),
                            }}
                        >
                            <span className="font-serif italic text-2xl text-black/80 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all duration-300">
                                02 // Projects
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-black/30 group-hover:text-emerald-800 transition-colors">MODAL</span>
                        </button>

                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                            className="text-left group flex items-center justify-between bg-transparent border-none p-0 cursor-pointer"
                            style={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                                ...itemStyle(3),
                            }}
                        >
                            <span className="font-serif italic text-2xl text-black/80 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all duration-300">
                                03 // Contact
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-black/30 group-hover:text-emerald-800 transition-colors">CONNECT</span>
                        </button>

                        <a
                            href="/cv.pdf"
                            download="Chuks_Kingsley_CV.pdf"
                            className="flex items-center justify-between text-left group bg-transparent border-none p-0 cursor-pointer no-underline"
                            style={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                                ...itemStyle(4),
                            }}
                        >
                            <span className="font-serif italic text-2xl text-emerald-900 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                                04 // Download CV
                            </span>
                            <svg
                                className="w-4 h-4 text-emerald-900 animate-bounce"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>

                    {/* Footer Tag */}
                    <div
                        className="pt-4 border-t border-black/10 font-mono text-[9px] text-black/50 tracking-[0.25em] uppercase text-center"
                        style={{
                            opacity: mobileMenuOpen ? 1 : 0,
                            ...itemStyle(5),
                        }}
                    >
                        Engineering & Design // 2026
                    </div>
                </div>
            </div>
        </>
    );
}