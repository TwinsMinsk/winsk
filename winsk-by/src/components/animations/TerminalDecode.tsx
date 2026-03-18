'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useScrambleText } from '@/hooks/useScrambleText';

// Phase: idle → typing → glitch → scrambling → resolved
type Phase = 'idle' | 'typing' | 'glitch' | 'scrambling' | 'resolved';

export function TerminalDecode() {
    const [mounted, setMounted] = useState(false);
    const [phase, setPhase] = useState<Phase>('idle');
    const [showGlitch, setShowGlitch] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const strings = [
        { typewriter: '> Location.ID: Minsk', scramble: 'Location.ID: Minsk' },
        { typewriter: '> Brand.ID: Winsk', scramble: 'Brand.ID: Winsk' },
    ];

    const currentPair = strings[currentIndex];

    // Скрамбл переход
    const scrambler = useScrambleText({
        speed: 30,
        onComplete: () => {
            setPhase('resolved');
            // Wait before starting the next cycle
            setTimeout(() => {
                const nextIndex = (currentIndex + 1) % strings.length;
                setCurrentIndex(nextIndex);
                setPhase('glitch');
                setShowGlitch(true);
            }, 4000); // 4 seconds pause at resolved state
        },
    });

    // Тайпрайтер первой строки (только для первого запуска)
    const typewriter = useTypewriter({
        speed: 40,
        startDelay: 500,
        onComplete: () => {
            setPhase('glitch');
            setShowGlitch(true);
        },
    });

    // Управление фазами
    useEffect(() => {
        if (phase === 'glitch' && showGlitch) {
            const timer = setTimeout(() => {
                setShowGlitch(false);
                setPhase('scrambling');
                const nextPair = strings[currentIndex];
                const prevPair = strings[(currentIndex - 1 + strings.length) % strings.length];
                scrambler.start(prevPair.scramble, nextPair.scramble);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [phase, showGlitch, currentIndex, scrambler, strings]);

    useEffect(() => {
        setMounted(true);
        setPhase('typing');
        typewriter.start(strings[0].typewriter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Итоговый текст для рендера
    const displayText =
        phase === 'scrambling' || phase === 'resolved'
            ? `> ${scrambler.displayText}`
            : typewriter.displayText;

    if (!mounted) return <div className="h-[60px] md:h-[80px]" />;

    return (
        <div className="font-mono select-none" aria-hidden="true">
            <div className="relative text-2xl md:text-4xl lg:text-5xl font-bold inline-block whitespace-nowrap">

                {/* Glitch-bars во время перехода */}
                {showGlitch && (
                    <>
                        <div className="absolute top-[30%] left-0 h-[3px] w-full bg-[var(--color-accent-glow)]/80 animate-glitch-bar-1 mix-blend-overlay" />
                        <div className="absolute top-[60%] left-0 h-[2px] w-full bg-[var(--color-accent-blue)]/80 animate-glitch-bar-2 mix-blend-overlay" />
                    </>
                )}

                {/* Основной текст */}
                <motion.span
                    className={
                        phase === 'resolved'
                            ? 'text-[var(--color-accent-glow)] glow-text'
                            : 'text-[var(--color-terminal-green)]'
                    }
                    animate={showGlitch ? { x: [0, -4, 4, 0], opacity: [1, 0.7, 1] } : {}}
                    transition={{ duration: 0.15, repeat: 2 }}
                >
                    {displayText}
                </motion.span>

                {/* Мигающий курсор */}
                <span className="cursor-blink text-current font-light">_</span>

                {/* Scanline после финального состояния */}
                {phase === 'resolved' && (
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
                        <div className="w-full h-[1px] bg-[var(--color-accent-glow)]/30 shadow-[0_0_15px_3px_var(--color-accent-glow)] animate-[scanline_3s_linear_infinite]" />
                    </div>
                )}
            </div>
        </div>
    );
}
