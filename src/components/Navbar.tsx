import type { JSX } from 'react';

interface NavbarProps {
    onOpenAbout: () => void;
    onOpenContact: () => void;
}

export default function Navbar({ onOpenAbout, onOpenContact }: NavbarProps): JSX.Element {
    return (
        <header className="fixed top-0 inset-x-0 z-50 w-full flex items-center justify-between px-8 sm:px-16 py-8 bg-transparent pointer-events-none">
            {/* Editorial Name / Issue style marker */}
            <a
                href="#"
                className="pointer-events-auto font-serif italic text-lg sm:text-xl font-medium tracking-tight text-white hover:text-white transition-opacity duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
                C.E. Kingsley <span className="font-sans not-italic text-[10px] tracking-[0.3em] uppercase text-white/70 ml-3">// 2026</span>
            </a>

            {/* Editorial floating index links + high-signaling kinetic CV trigger */}
            <nav className="pointer-events-auto flex items-center gap-6 sm:gap-10 text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {/* Interactive About Trigger */}
                <button
                    onClick={onOpenAbout}
                    className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-300 bg-transparent border-none cursor-pointer uppercase tracking-[0.25em] text-[11px] font-sans font-medium text-white/90 p-0"
                >
                    About
                </button>

                {/* Interactive Contact Trigger */}
                <button
                    onClick={onOpenContact}
                    className="hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-300 bg-transparent border-none cursor-pointer uppercase tracking-[0.25em] text-[11px] font-sans font-medium text-white/90 p-0"
                >
                    Contact
                </button>

                {/* Enhanced Kinetic CV Download Button with Continuous Soft Micro-Movement */}
                <a
                    href="/cv.pdf"
                    download="Chuks_Kingsley_CV.pdf"
                    aria-label="Download CV"
                    className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-400/40 hover:border-emerald-400/80 shadow-[0_4px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_4px_25px_rgba(52,211,153,0.3)] transition-all duration-300 backdrop-blur-md relative overflow-hidden [transform:translateZ(0)] cursor-pointer"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[sweep_4s_ease-in-out_infinite] [transform:translateZ(0)]" />

                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                    </span>

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-300 group-hover:text-white transition-colors">
                        CV
                    </span>

                    <svg
                        className="w-3 h-3 text-emerald-300 group-hover:text-white animate-[bounceDown_2.5s_infinite_ease-in-out] group-hover:animate-none transition-all duration-300 [transform:translateZ(0)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </nav>

            <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0) translateZ(0); }
          40% { transform: translateY(3px) translateZ(0); }
          50% { transform: translateY(-1px) translateZ(0); }
          60% { transform: translateY(0) translateZ(0); }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%) translateZ(0); }
          30% { transform: translateX(100%) translateZ(0); }
          100% { transform: translateX(100%) translateZ(0); }
        }
      `}</style>
        </header>
    );
}