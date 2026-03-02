'use client';

import { useState, useMemo } from 'react';
import { projects, getAllTags } from '@/data/projects';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Tier } from '@/types/project';

export function ProjectsGrid() {
    const [activeFilter, setActiveFilter] = useState<string | 'all'>('all');
    const allTags = getAllTags();

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projects.sort((a, b) => a.order - b.order);
        return projects.filter(p => p.tags.includes(activeFilter)).sort((a, b) => a.order - b.order);
    }, [activeFilter]);

    // Разделяем по тирам (для сохранения структуры Bento UI, если включен фильтр 'all')
    const isAll = activeFilter === 'all';
    const tier1 = filteredProjects.filter(p => p.tier === 'tier-1');
    const tier2 = filteredProjects.filter(p => p.tier === 'tier-2');
    const tier3 = filteredProjects.filter(p => p.tier === 'tier-3');

    return (
        <section id="work" className="py-24 px-6 max-w-[1280px] mx-auto w-full">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--color-border)] pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-[var(--color-text-primary)] inline-flex items-center">
                        <span className="text-[var(--color-terminal-green)] mr-3 font-mono">{'//'}</span>
                        Featured Architecture
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mt-2 font-mono text-sm">
                        {'>'} SELECT * FROM projects WHERE status = &apos;production&apos;;
                    </p>
                </div>

                {/* Фильтры */}
                <div className="mt-6 md:mt-0 flex flex-wrap" style={{ gap: '1rem', display: 'flex' }}>
                    <FilterButton
                        label="All"
                        isActive={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    />
                    {allTags.slice(0, 5).map(tag => (
                        <FilterButton
                            key={tag}
                            label={tag}
                            isActive={activeFilter === tag}
                            onClick={() => setActiveFilter(tag)}
                        />
                    ))}
                </div>
            </div>

            {isAll ? (
                <div className="space-y-12">
                    {/* TIER 1: Enterprise */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {tier1.map(p => <ProjectCard key={p.slug} project={p} />)}
                    </div>

                    {/* TIER 2: AI Ecosystem (Bento Large) */}
                    <div className="grid grid-cols-1 gap-6">
                        {tier2.map(p => <ProjectCard key={p.slug} project={p} />)}
                    </div>

                    {/* TIER 3: Bento Small */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tier3.map(p => <ProjectCard key={p.slug} project={p} />)}
                    </div>
                </div>
            ) : (
                /* Плоская сетка при фильтрации */
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 min-h-[400px]">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(p => <ProjectCard key={p.slug} project={p} />)
                    ) : (
                        <div className="col-span-full flex items-center justify-center font-mono text-[var(--color-text-muted)] mt-12">
                            {'>'} 0 rows returned.
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

function FilterButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`
        px-3 py-1.5 rounded-md text-sm font-mono border transition-all duration-200
        ${isActive
                    ? 'bg-[var(--color-accent)]/20 border-[var(--color-accent-glow)] text-[var(--color-accent-glow)]'
                    : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)]'}
      `}
        >
            {label}
        </button>
    );
}
