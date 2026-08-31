
import type { JSX } from 'react';

interface ProjectModuleProps {
    paused?: boolean;
}

export default function ProjectModule({ paused = false }: ProjectModuleProps): JSX.Element {
    return (
        <div
            className="relative lg:fixed lg:right-16 lg:bottom-52 z-40 w-full sm:w-[320px] px-5 sm:px-0 pb-8 lg:pb-0 mt-6 lg:mt-0 animate-slideUp"
            style={{ animationDelay: '0.8s', visibility: paused ? 'hidden' : 'visible' }}
        >
            <div className="flex items-baseline justify-between mb-2 sm:mb-3 px-1">
                <span className="font-serif italic text-white/95 text-sm sm:text-base tracking-wide">
                    Selected
                </span>
                <span className="font-sans font-normal uppercase tracking-[0.2em] text-[9px] text-emerald-400/90">
                    Projects
                </span>
            </div>

            <p className="font-sans text-[11px] leading-relaxed text-white/50 mb-3 sm:mb-4 px-1 tracking-wide">
                A closer look at recent work — systems, interfaces, and platforms shipped end-to-end.
            </p>

            <a
                href="https://pneuma-frontend-oijl.onrender.com/"
                className="group block relative w-full overflow-hidden rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1.5"
            >
                <div className="relative w-full aspect-[21/10] overflow-hidden">
                    <img
                        src="https://pneuma-public-assets.s3.eu-north-1.amazonaws.com/Hero/Global+Medical+Vangud+Image+Aug+28%2C+2026%2C+07_58_28+AM.jpg"
                        alt="Pneuma Global Medical Vanguard Hero"
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/30 to-transparent" />

                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className={`w-1 h-1 rounded-full bg-emerald-400 ${paused ? '' : 'animate-pulse'}`} />
                        PNEUMA
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/90 to-transparent flex items-end justify-between">
                    <div>
                        <h3 className="text-xs sm:text-sm font-light tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                            Medical Vanguard
                        </h3>
                        <p className="text-[10px] text-white/60 font-sans mt-0.5 line-clamp-1">
                            Clinical telemetry platform architecture.
                        </p>
                    </div>
                    <div className="text-white/60 group-hover:text-emerald-400 transition-colors pl-2 text-xs font-mono transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </div>
                </div>
            </a>
        </div>
    );
}