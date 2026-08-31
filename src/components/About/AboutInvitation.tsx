
import type { JSX } from 'react';

export default function AboutInvitation(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b-2 border-black pb-24">
      <div className="lg:col-span-4 font-mono text-sm text-neutral-400 tracking-widest uppercase">
        01 — THE INVITATION
      </div>
      <div className="lg:col-span-8 space-y-6">
        <h2 className="text-3xl sm:text-6xl font-black tracking-tight uppercase text-black leading-none">
          BRINGING NOTHINGNESS TO LIFE.
        </h2>
        <p className="font-sans text-xl sm:text-2xl text-neutral-900 font-normal leading-relaxed">
          Technology is an invitation to experience what it feels like to bring imagination, ideas, and absolute nothingness to life. It feels like an echo of wanting us to know what it means to form something real. Every app built here isn't just software—it reflects who I am and what I believe. I don't just code; every line of design is a core piece of my identity. When you look at my work, you see the person behind it, communicated completely without words.
        </p>
      </div>
    </div>
  );
}