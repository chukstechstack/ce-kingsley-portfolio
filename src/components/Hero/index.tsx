import type { JSX } from 'react';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

interface HeroSectionProps {
  paused?: boolean;
}

export default function HeroSection({ paused = false }: HeroSectionProps): JSX.Element {
  return (
    <>
      <DesktopHero paused={paused} />
      <MobileHero paused={paused} />
    </>
  );
}