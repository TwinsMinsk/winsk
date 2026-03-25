'use client';

interface ModuleHeaderProps {
    number: string;       // e.g. "01"
    title: string;        // e.g. "Data Extraction Pipeline"
    tech: string;         // e.g. "Python · BeautifulSoup · ThreadPoolExecutor"
    id?: string;          // anchor id for sticky nav
}

export function ModuleHeader({ number, title, tech, id }: ModuleHeaderProps) {
    return (
        <div id={id} className="relative mt-16 mb-8 scroll-mt-28">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[var(--color-accent-primary)] to-transparent" />

            <div className="pt-5 flex flex-col gap-2">
                {/* Module number + title row */}
                <div className="flex items-baseline gap-4">
                    <span className="font-mono text-4xl font-bold text-[var(--color-accent-primary)] opacity-30 leading-none select-none tabular-nums">
                        {number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] leading-tight">
                        {title}
                    </h3>
                </div>

                {/* Tech badges row */}
                <div className="flex flex-wrap gap-2 ml-[3.75rem]">
                    {tech.split('·').map((t, i) => (
                        <span
                            key={i}
                            className="font-mono text-[11px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)]/60 tracking-wide"
                        >
                            {t.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
