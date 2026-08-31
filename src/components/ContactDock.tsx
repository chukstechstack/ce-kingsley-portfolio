import  { useEffect, useState } from 'react';
import type { JSX } from 'react';

interface ContactDocketProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactDocket({ isOpen, onClose }: ContactDocketProps): JSX.Element | null {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const email = "chuks.techstack@gmail.com"; // Replace with your actual email

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
        }

        return () => {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-0 md:p-3 bg-black/85 backdrop-blur-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Monumental Single-Page Takeover (Zero Scroll, Absolute Impact) */}
            <div className={`relative w-full h-full md:h-[98vh] md:max-w-[98vw] bg-white text-black flex flex-col justify-between overflow-hidden md:border-2 md:border-black shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform [transform:translateZ(0)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>

                {/* Top Control Bar */}
                <div className="flex items-center justify-between px-8 sm:px-16 py-6 bg-white border-b-2 border-black sticky top-0 z-30 flex-shrink-0">
                    <div className="font-mono text-xs tracking-[0.3em] text-black font-black">
                        C.E. KINGSLEY // DIRECT ACCESS
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Dismiss sheet"
                        className="bg-black text-white hover:bg-neutral-800 px-5 py-2 font-mono text-xs uppercase tracking-[0.25em] cursor-pointer transition-none font-bold"
                    >
                        CLOSE [×]
                    </button>
                </div>

                {/* Single-Screen Hero Grid with Clean, Readable Email */}
                <div className="flex-1 px-8 sm:px-16 md:px-28 py-12 flex flex-col justify-center select-none">
                    <span className="font-mono text-xs tracking-[0.4em] text-neutral-400 font-bold block mb-4 uppercase">
                        SECURE CHANNELS // NO TELEPHONE
                    </span>

                    {/* Editorial Main Title */}
                    <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] text-black mb-12">
                        LET'S <br />
                        <span className="font-serif italic font-normal tracking-normal normal-case text-neutral-500">start a</span> <br />
                        DIALOGUE.
                    </h1>

                    {/* Perfectly Sized Email Display & Quick Copy Box */}
                    <div className="border-t-4 border-black pt-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 block mb-2 font-bold">01 — DIRECT INBOX</span>
                            <a 
                                href={`mailto:${email}`}
                                className="font-mono text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black hover:text-neutral-600 transition-colors underline underline-offset-8"
                            >
                                {email}
                            </a>
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto">
                            <a 
                                href={`mailto:${email}`}
                                className="flex-1 sm:flex-none bg-black text-white text-center py-4 px-6 font-mono text-xs font-bold tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors shadow-lg"
                            >
                                MAIL ↗
                            </a>
                            <button
                                onClick={copyEmail}
                                className="flex-1 sm:flex-none bg-white text-black border-2 border-black text-center py-4 px-6 font-mono text-xs font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                            >
                                {copied ? 'COPIED ✓' : 'COPY'}
                            </button>
                        </div>
                    </div>

                    {/* Socials Grid */}
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                        <a 
                            href="www.linkedin.com/in/chukstechstack" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="border-2 border-black py-4 px-6 font-mono text-xs font-bold tracking-widest uppercase text-center hover:bg-black hover:text-white transition-colors"
                        >
                            LINKEDIN ↗
                        </a>
                        <a 
                            href="https://github.com/chukstechstack" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="border-2 border-black py-4 px-6 font-mono text-xs font-bold tracking-widest uppercase text-center hover:bg-black hover:text-white transition-colors"
                        >
                            GITHUB ↗
                        </a>
                    </div>
                </div>

                {/* Brutalist Footer Strip */}
                <div className="bg-black text-white px-8 sm:px-16 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono flex-shrink-0">
                    <span className="tracking-widest text-neutral-400">STATUS: AVAILABLE FOR GLOBAL ROLES & DESIGN ARCHITECTURE</span>
                    <button onClick={onClose} className="hover:text-neutral-300 transition-colors uppercase tracking-widest cursor-pointer font-bold">
                        RETURN TO SITE [↑]
                    </button>
                </div>

            </div>
        </div>
    );
}