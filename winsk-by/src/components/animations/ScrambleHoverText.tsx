'use client';

import { useScrambleText } from '@/hooks/useScrambleText';

interface ScrambleHoverTextProps {
    text: string;
    className?: string;
}

export function ScrambleHoverText({ text, className }: ScrambleHoverTextProps) {
    const scrambler = useScrambleText({ speed: 30, maxIterations: 5 });

    const handleMouseEnter = () => {
        if (!scrambler.isScrambling) {
            scrambler.start(text, text);
        }
    };

    return (
        <span
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ display: 'inline-block', minWidth: `${text.length}ch` }}
        >
            {scrambler.isScrambling ? scrambler.displayText : text}
        </span>
    );
}
