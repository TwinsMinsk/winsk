'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrambleText } from '@/hooks/useScrambleText';
import { ScanlineOverlay } from './ScanlineOverlay';

type Phase = 'idle' | 'typing' | 'glitch' | 'scrambling' | 'resolved';

export function TerminalDecode() {
    const [mounted, setMounted] = useState(false);
    const [phase, setPhase] = useState<Phase>('idle');
    const [showGlitch, setShowGlitch] = useState(false);

    const scrambler = useScrambleText({
        speed: 30,
        onComplete: () => setPhase('resolved'),
    });

    const typewriter = useTypewriter({
        speed: 40,
        startDelay: 500,
        onComplete: () => {
            setPhase('glitch');
            setShowGlitch(true);
            setTimeout(() => {
                setShowGlitch(false);
                setPhase('scrambling');
                scrambler.start('Location: Minsk', 'Status: Winsk');
            }, 1200); // Wait 1-1.5 seconds before scramble
        },
    });

    useEffect(() => {
        setMounted(true);
        setPhase('typing');
        typewriter.start('> Location: Minsk');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!mounted) return <div className="h-[40px] md:h-[60px]" />;

    return (
        <div className="relative font-mono text-3xl md:text-5xl lg:text-6xl inline-block mt-4 mb-2 font-bold select-none whitespace-nowrap">
            {/* Glitch-bars (simplified CSS representation) */}
            {showGlitch && (
                <>
                    <div className="absolute top-[30%] left-0 h-[3px] w-full bg-[var(--color-accent-glow)]/80 animate-glitch-bar-1 mix-blend-overlay" />
                    <div className="absolute top-[60%] left-0 h-[2px] w-full bg-[var(--color-accent-blue)]/80 animate-glitch-bar-2 mix-blend-overlay" />
                </>
            )}

            {/* Main Text */}
            <motion.span
                className={phase === 'resolved' ? 'text-[var(--color-accent-glow)] glow-text' : 'text-[var(--color-terminal-green)]'}
                animate={showGlitch ? { x: [0, -4, 4, 0], opacity: [1, 0.7, 1] } : {}}
                transition={{ duration: 0.15, repeat: 2 }}
            >
                {phase === 'scrambling' || phase === 'resolved' ? `> ${scrambler.displayText}` : typewriter.displayText}
            </motion.span>

            {/* Blinking Cursor */}
            <span className="cursor-blink text-current font-light">_</span>

            {/* Scanline */}
            {phase === 'resolved' && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
                    <div className="w-full h-[1px] bg-[var(--color-accent-glow)]/30 shadow-[0_0_15px_3px_var(--color-accent-glow)] animate-[scanline_3s_linear_infinite]" />
                </div>
            )}
        </div>
    );
}
