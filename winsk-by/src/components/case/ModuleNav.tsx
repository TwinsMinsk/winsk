'use client';

import { useEffect, useState, useCallback } from 'react';

interface ModuleItem {
    id: string;
    label: string;
}

interface ModuleNavProps {
    modules: ModuleItem[];
}

export function ModuleNav({ modules }: ModuleNavProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [visible, setVisible] = useState(false);

    const handleScroll = useCallback(() => {
        setVisible(window.scrollY > 400);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        modules.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveId(id);
                    }
                },
                { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [modules]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (!visible) return null;

    return (
        <nav
            aria-label="Module navigation"
            className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl shadow-xl">
                {modules.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className={[
                                'px-3 py-1 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer',
                                isActive
                                    ? 'bg-[var(--color-accent-primary)] text-white shadow-[0_0_10px_var(--color-accent-primary)/40]'
                                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]',
                            ].join(' ')}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
