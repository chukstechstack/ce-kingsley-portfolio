import type { JSX } from 'react';

interface ProjectModuleProps {
    paused?: boolean;
}

export default function ProjectModule({ paused = false }: ProjectModuleProps): JSX.Element {
    return (
        <div
            className="relative z-40 w-full sm:w-[320px] animate-slideUp"
            style={{ animationDelay: '0.8s', visibility: paused ? 'hidden' : 'visible' }}
        >
            {/* Swapped order: PROJECTS first, Selected second */}
            <div className="flex items-baseline justify-between mb-2 sm:mb-3 px-1">
                <span className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-emerald-300" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                    Projects
                </span>
                <span className="font-serif italic text-white text-base sm:text-lg tracking-wide font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                    Selected
                </span>
            </div>

            <p className="font-sans text-[11px] leading-relaxed text-white/95 mb-3 sm:mb-4 px-1 tracking-wide font-normal" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}>
                A closer look at recent work — systems, interfaces, and platforms shipped end-to-end.
            </p>

            <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-emerald-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(16,185,129,0.12)]">
                <a
                    href="https://pneuma-frontend-oijl.onrender.com/"
                    className="group block relative w-full overflow-hidden rounded-[11px] bg-white/[0.04] backdrop-blur-2xl border border-white/10"
                >
                    <style>{`
                        @keyframes glossyWave {
                            0% { transform: translateX(-100%); }
                            20% { transform: translateX(100%); }
                            100% { transform: translateX(100%); }
                        }
                        .animate-glossy-wave {
                            animation: glossyWave 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                        }
                    `}</style>

                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-30" />
                    <div className="absolute inset-0 rounded-[11px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] pointer-events-none z-30" />

                    <div className="relative w-full aspect-[21/10] overflow-hidden">
                        <img
                            src="https://pneuma-public-assets.s3.eu-north-1.amazonaws.com/Hero/Global+Medical+Vangud+Image+Aug+28%2C+2026%2C+07_58_28+AM.jpg"
                            alt="Pneuma Global Medical Vanguard Hero"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter brightness-105 contrast-110"
                        />

                        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10 ${paused ? '' : 'animate-glossy-wave'}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-[9px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-md z-20">
                            <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] ${paused ? '' : 'animate-pulse'}`} />
                            PNEUMA
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-between z-20">
                        <div>
                            <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                                Medical Vanguard
                            </h3>
                            <p className="text-[10px] text-white/90 font-sans mt-0.5 line-clamp-1 font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                                Clinical telemetry platform architecture.
                            </p>
                        </div>
                        <div className="text-white/90 group-hover:text-emerald-400 transition-colors pl-2 text-xs font-mono transform transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}