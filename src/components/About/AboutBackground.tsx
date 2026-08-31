
import type { JSX } from 'react';

export default function AboutBackground(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b-2 border-black pb-24">
      <div className="lg:col-span-4 font-mono text-sm text-neutral-400 tracking-widest uppercase">
        02 — THE BACKGROUND
      </div>
      <div className="lg:col-span-8 space-y-6">
        <h2 className="text-3xl sm:text-6xl font-black tracking-tight uppercase text-black leading-none">
          FORGED IN CONTRAST.
        </h2>
        <p className="font-sans text-xl sm:text-2xl text-neutral-900 font-normal leading-relaxed">
          Every perspective comes from somewhere. My path wasn't built inside a sterile tech incubator; it was forged through real-world friction, observation, and an obsession with how humans actually behave under the surface. That raw exposure to human struggle and ambition is what separates a routine coder from an architect who builds with empathy. The full story? That’s best saved for an interview.
        </p>
      </div>
    </div>
  );
}