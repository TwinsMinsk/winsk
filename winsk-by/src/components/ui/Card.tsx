import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    isGlass?: boolean;
}

export function Card({ children, className = '', isGlass = false }: CardProps) {
    const baseClasses = 'rounded-xl overflow-hidden border transition-all duration-300';
    const glassClasses = 'bg-[var(--color-bg-glass)] backdrop-blur-xl border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]';
    const solidClasses = 'bg-[var(--color-bg-secondary)] border-[var(--color-border)]';

    const combinedClasses = `${baseClasses} ${isGlass ? glassClasses : solidClasses} ${className}`;

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    );
}
