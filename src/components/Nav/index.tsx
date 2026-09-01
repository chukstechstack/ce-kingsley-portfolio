import type { JSX } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface NavbarProps {
    onOpenAbout: () => void;
    onOpenContact: () => void;
    onOpenProjects: () => void;
    paused?: boolean;
}

export default function Navbar({ onOpenAbout, onOpenContact, onOpenProjects, paused = false }: NavbarProps): JSX.Element {
    return (
        <>
            <DesktopNav onOpenAbout={onOpenAbout} onOpenContact={onOpenContact} />
            <MobileNav onOpenAbout={onOpenAbout} onOpenContact={onOpenContact} onOpenProjects={onOpenProjects} paused={paused} />
        </>
    );
}