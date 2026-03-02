import Link from 'next/link';
import { ProjectMeta } from '@/types/project';

interface CaseNavigationProps {
    prev?: ProjectMeta;
    next?: ProjectMeta;
}

export function CaseNavigation({ prev, next }: CaseNavigationProps) {
    return (
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-6 pb-20">
            <div className="w-full md:w-1/2">
                {prev ? (
                    <Link href={`/case/${prev.slug}`} className="block group">
                        <span className="text-sm font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-glow)] block mb-2 transition-colors">
                            {'<'} Previous Case
                        </span>
                        <span className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors">
                            {prev.title}
                        </span>
                    </Link>
                ) : (
                    <div className="opacity-50 cursor-default">
                        <span className="text-sm font-mono text-[var(--color-text-muted)] block mb-2">{'<'} Prev</span>
                        <span className="text-lg text-[var(--color-text-secondary)]">Start of List</span>
                    </div>
                )}
            </div>

            <div className="hidden md:block w-px h-12 bg-[var(--color-border)]" />

            <div className="w-full md:w-1/2 text-left md:text-right flex flex-col items-start md:items-end">
                {next ? (
                    <Link href={`/case/${next.slug}`} className="block group text-left md:text-right">
                        <span className="text-sm font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-glow)] block mb-2 transition-colors">
                            Next Case {'>'}
                        </span>
                        <span className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors">
                            {next.title}
                        </span>
                    </Link>
                ) : (
                    <div className="opacity-50 cursor-default text-left md:text-right">
                        <span className="text-sm font-mono text-[var(--color-text-muted)] block mb-2">Next {'>'}</span>
                        <span className="text-lg text-[var(--color-text-secondary)]">End of List</span>
                    </div>
                )}
            </div>
        </div>
    );
}
