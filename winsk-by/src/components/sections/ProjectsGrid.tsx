import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/sections/ProjectCard';

export function ProjectsGrid() {
    const allProjects = [...projects].sort((a, b) => a.order - b.order);

    // Разделяем по тирам (для структуры Bento UI)
    const tier1 = allProjects.filter(p => p.tier === 'tier-1');
    const tier2 = allProjects.filter(p => p.tier === 'tier-2');
    const tier3 = allProjects.filter(p => p.tier === 'tier-3');

    return (
        <section id="work" className="py-24 px-6 max-w-[1280px] mx-auto w-full">
            <div className="flex items-center gap-4 mb-12 w-full overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap">
                    <span className="text-emerald-400 mr-2">{'>'}</span>
                    Портфолио_
                </h2>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent flex-1 mt-2"></div>
            </div>

            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--color-border)] pb-6">
                <div>
                    <p className="text-[var(--color-text-secondary)] font-mono text-sm max-w-xl">
                        Избранные работы: от комплексных ERP до экосистем с ИИ-агентами.
                    </p>
                </div>
            </div>

            <div className="space-y-12">
                {/* TIER 2: AI Ecosystem (Bento Large) */}
                <div className="grid grid-cols-1 gap-6">
                    {tier2.map(p => <ProjectCard key={p.slug} project={p} />)}
                </div>

                {/* TIER 1: Enterprise */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {tier1.map(p => <ProjectCard key={p.slug} project={p} />)}
                </div>

                {/* TIER 3: Bento Small */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tier3.map(p => <ProjectCard key={p.slug} project={p} />)}
                </div>
            </div>
        </section>
    );
}

