import type { JSX } from 'react';
import { TECH_STACK } from './data';

export default function StackCard({ item }: { item: typeof TECH_STACK[number] }): JSX.Element {
    return (
        <div
            className="relative flex-shrink-0 flex items-center gap-3.5 px-5 py-3.5 rounded-xl mx-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            style={{
                backgroundColor: `${item.color}40`,
                border: `1px solid ${item.color}70`,
            }}
        >
            {/* Dark scrim underneath everything — guarantees contrast no matter how light item.color is */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />

            {/* Icon badge with solid brand depth */}
            <div
                className="relative flex items-center justify-center w-9 h-9 rounded-[8px] font-mono text-[11px] font-bold tracking-tighter text-white flex-shrink-0 shadow-inner z-10"
                style={{
                    backgroundColor: `${item.color}60`,
                }}
            >
                <span style={{ color: item.color === '#ffffff' ? '#000000' : '#ffffff' }}>
                    {item.mono}
                </span>
            </div>

            <div className="relative flex flex-col leading-tight whitespace-nowrap z-10">
                <span
                    className="text-white text-xs font-semibold tracking-tight font-sans"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                >
                    {item.name}
                </span>
                <span
                    className="text-[10px] font-mono uppercase tracking-widest mt-0.5 font-bold"
                    style={{ color: item.color, textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                >
                    {item.tag}
                </span>
            </div>
        </div>
    );
}