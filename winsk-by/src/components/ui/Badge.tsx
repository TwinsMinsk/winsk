import { TechItem } from '@/types/project';

interface BadgeProps {
    tech: TechItem;
}

export function Badge({ tech }: BadgeProps) {
    // Styles based on category for subtle differentiation
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case 'frontend':
                return 'border-blue-500/30 bg-blue-500/10 text-blue-300';
            case 'backend':
                return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
            case 'ai':
                return 'border-violet-500/30 bg-violet-500/10 text-violet-300';
            case 'db':
                return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
            default:
                return 'border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-glow)]';
        }
    };

    return (
        <div
            className={`
        inline-flex items-center px-2 py-1 
        rounded-md text-[13px] font-mono leading-none
        border transition-colors duration-200
        ${getCategoryStyles(tech.category)}
      `}
        >
            <span>&quot;{tech.name}&quot;</span>
            {tech.version && (
                <>
                    <span className="mx-1 opacity-50">:</span>
                    <span className="text-[var(--color-success)]">&quot;{tech.version}&quot;</span>
                </>
            )}
        </div>
    );
}
