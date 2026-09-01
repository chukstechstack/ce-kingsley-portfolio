import type { JSX } from 'react';

interface DesktopNavProps {
    onOpenAbout: () => void;
    onOpenContact: () => void;
}

export default function DesktopNav({ onOpenAbout, onOpenContact }: DesktopNavProps): JSX.Element {
    return (
        <header className="fixed top-0 inset-x-0 z-50 w-full hidden lg:flex items-center justify-between px-16 py-8 bg-transparent pointer-events-none">
            {/* HIGH-END DESIGNER LOGO */}
            <a
                href="#"
                className="pointer-events-auto group flex items-center gap-3.5 bg-transparent border-none cursor-pointer text-left"
            >
                <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.06] border border-white/15 group-hover:border-emerald-400/60 group-hover:bg-emerald-500/10 transition-all duration-300">
                    <span className="font-mono text-xs font-bold tracking-wider text-white group-hover:text-emerald-300 transition-colors">
                        CE
                    </span>
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                </div>

                <div className="flex flex-col">
                    <span className="font-serif italic text-xl font-medium tracking-tight text-white group-hover:text-emerald-200 transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
                        C.E. Kingsley
                    </span>
                </div>
            </a>

            {/* DESKTOP NAV LINKS */}
            <nav className="pointer-events-auto flex items-center gap-10 text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                <button
                    onClick={onOpenAbout}
                    className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-300 bg-transparent border-none cursor-pointer uppercase tracking-[0.25em] text-[11px] font-sans font-semibold text-white/90 p-0"
                >
                    About
                </button>

                <button
                    onClick={onOpenContact}
                    className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-300 bg-transparent border-none cursor-pointer uppercase tracking-[0.25em] text-[11px] font-sans font-semibold text-white/90 p-0"
                >
                    Contact
                </button>

                <a
                    href="/cv.pdf"
                    download="Chuks_Kingsley_CV.pdf"
                    aria-label="Download CV"
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-400/50 hover:border-emerald-400/90 shadow-[0_4px_20px_rgba(16,185,129,0.2)] transition-all duration-300 backdrop-blur-xl cursor-pointer"
                >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-300 group-hover:text-white transition-colors">
                        CV
                    </span>
                    <svg
                        className="w-3.5 h-3.5 text-emerald-300 group-hover:text-white transition-colors animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </nav>
        </header>
    );
}