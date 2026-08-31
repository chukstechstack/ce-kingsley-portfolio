
import type { JSX } from 'react';
import PortfolioLanding from './components/PortfolioLanding';

export default function App(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-[#0b0b0b]">
      <PortfolioLanding />
    </div>
  );
}