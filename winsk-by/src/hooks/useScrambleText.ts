import { useState, useCallback, useRef } from 'react';

const GLITCH_CHARS = '#@%!$&*█▓░0123456789';

interface UseScrambleOptions {
    speed?: number;          // ms между итерациями
    maxIterations?: number;  // макс. итераций на символ
    onComplete?: () => void;
}

export function useScrambleText(options: UseScrambleOptions = {}) {
    const { speed = 30, maxIterations = 6, onComplete } = options;
    const [displayText, setDisplayText] = useState('');
    const [isScrambling, setIsScrambling] = useState(false);
    const frameRef = useRef<number>(null);

    const getRandomChar = () =>
        GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

    const start = useCallback((from: string, to: string) => {
        setIsScrambling(true);
        const maxLen = Math.max(from.length, to.length);
        const resolvedAt = new Array(maxLen).fill(0);
        let iteration = 0;

        const scramble = () => {
            const result: string[] = [];

            for (let i = 0; i < maxLen; i++) {
                const targetChar = to[i] ?? ' ';

                // Буквы слева «решаются» быстрее
                if (iteration > i * 0.8 + 2) {
                    result.push(targetChar);
                    resolvedAt[i] = 1;
                } else if (targetChar === ' ') {
                    result.push(' ');
                } else {
                    result.push(getRandomChar());
                }
            }

            setDisplayText(result.join(''));
            iteration++;

            const allResolved = resolvedAt.every(v => v === 1);
            if (!allResolved && iteration < maxLen * maxIterations) {
                // Мы используем setTimeout внутри requestAnimationFrame для стабильности
                frameRef.current = requestAnimationFrame(() =>
                    setTimeout(scramble, speed)
                );
            } else {
                setDisplayText(to);
                setIsScrambling(false);
                onComplete?.();
            }
        };

        scramble();
    }, [speed, maxIterations, onComplete]);

    return { displayText, isScrambling, start };
}
