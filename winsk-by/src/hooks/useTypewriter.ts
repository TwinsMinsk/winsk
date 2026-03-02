import { useState, useCallback, useRef } from 'react';

interface UseTypewriterOptions {
    speed?: number;        // ms между символами
    startDelay?: number;   // задержка до начала
    onComplete?: () => void;
}

export function useTypewriter(options: UseTypewriterOptions = {}) {
    const { speed = 40, startDelay = 0, onComplete } = options;
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const start = useCallback((text: string) => {
        setIsTyping(true);
        let index = 0;

        const type = () => {
            if (index < text.length) {
                setDisplayText(text.slice(0, index + 1));
                index++;
                timeoutRef.current = setTimeout(type, speed);
            } else {
                setIsTyping(false);
                onComplete?.();
            }
        };

        setTimeout(type, startDelay);
    }, [speed, startDelay, onComplete]);

    const reset = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setDisplayText('');
        setIsTyping(false);
    }, []);

    return { displayText, isTyping, start, reset };
}
