import { Badge } from '@/components/ui/Badge';
import { ProjectMeta } from '@/types/project';

export function CaseHero({ project }: { project: ProjectMeta }) {
    return (
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-28 border-b border-[var(--color-border)] overflow-hidden">
            {/* Background pseudo-screenshot overlay */}
            <div className="absolute inset-0 bg-[var(--color-bg-primary)] z-0" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_70%)] z-0" />

            <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center text-[var(--color-accent-glow)] font-mono text-sm mb-6 border border-[var(--color-border)] px-3 py-1 rounded-full bg-[var(--color-bg-elevated)]/50 backdrop-blur-sm">
                    <span className="mr-2">{project.emoji}</span>
                    {project.role}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight mb-6 leading-tight">
                    {project.title}
                </h1>

                <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light mb-10 max-w-2xl mx-auto">
                    {project.subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">
                    {project.techStack.map((tech, i) => (
                        <Badge key={i} tech={tech} />
                    ))}
                </div>
            </div>
        </header>
    );
}
