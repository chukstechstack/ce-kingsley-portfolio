import React from 'react';
import type { JSX } from 'react';
import { TECH_STACK } from './data';

export default function StackCard({ item }: { item: typeof TECH_STACK[number] }): JSX.Element {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3.5 px-5 py-3.5 rounded-xl mx-3"
      style={{
        backgroundColor: `${item.color}14`,
        border: `1px solid ${item.color}30`,
      }}
    >
      {/* Flat icon badge — no glow, no shadow, no pulse */}
      <div
        className="flex items-center justify-center w-9 h-9 rounded-[8px] font-mono text-[11px] font-bold tracking-tighter text-white flex-shrink-0"
        style={{
          backgroundColor: `${item.color}25`,
        }}
      >
        <span style={{ color: item.color }}>
          {item.mono}
        </span>
      </div>

      <div className="flex flex-col leading-tight whitespace-nowrap">
        <span className="text-white/95 text-xs font-semibold tracking-tight font-sans">{item.name}</span>
        <span
          className="text-[9px] font-mono uppercase tracking-widest mt-0.5 font-bold"
          style={{ color: item.color }}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
}