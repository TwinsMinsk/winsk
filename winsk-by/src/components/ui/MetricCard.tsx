import { Metric } from '@/types/project';

interface MetricCardProps {
    metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
    return (
        <div className="flex flex-col p-2.5 justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]/50 h-full">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2 leading-tight">
                <span className="opacity-70">{metric.prefix || 'output:'}</span>
                <span className="text-[var(--color-text-secondary)] ml-1">{metric.label}</span>
            </div>
            <div className="font-bold text-[var(--color-text-primary)] text-xs sm:text-sm leading-tight break-words">
                {metric.value}
            </div>
        </div>
    );
}
