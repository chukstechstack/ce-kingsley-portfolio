export interface TechItem {
  name: string;
  tag: string;
  color: string;
  glow: string;
  mono: string;
}

export const TECH_STACK: TechItem[] = [
  { 
    name: "Node.js", 
    tag: "runtime", 
    color: "#6CC24A", 
    glow: "rgba(108,194,74,0.25)", 
    mono: "N" 
  },
  { 
    name: "React", 
    tag: "library", 
    color: "#61DBFB", 
    glow: "rgba(97,219,251,0.25)", 
    mono: "R" 
  },
  { 
    name: "React Native", 
    tag: "mobile", 
    color: "#10B981", // Fresh emerald green to break up the blues
    glow: "rgba(16,185,129,0.25)", 
    mono: "RN" 
  },
  { 
    name: "TypeScript", 
    tag: "language", 
    color: "#3178C6", 
    glow: "rgba(49,120,198,0.25)", 
    mono: "TS" 
  },
  { 
    name: "Figma", 
    tag: "design", 
    color: "#F24E1E", 
    glow: "rgba(242,78,30,0.25)", 
    mono: "F" 
  },
  { 
    name: "Framer", 
    tag: "motion", 
    color: "#8B5CF6", // Rich vibrant purple for creative motion design
    glow: "rgba(139,92,246,0.25)", 
    mono: "Fr" 
  },
  { 
    name: "Tailwind", 
    tag: "styling", 
    color: "#38BDF8", 
    glow: "rgba(56,189,248,0.25)", 
    mono: "Tw" 
  },
];