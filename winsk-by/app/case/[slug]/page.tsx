import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import { mdxComponents } from '@/components/case/mdx-components';
import { getProjectBySlug, projects } from '@/data/projects';
import { CaseHero } from '@/components/case/CaseHero';
import { CaseNavigation } from '@/components/case/CaseNavigation';
import { CaseCTA } from '@/components/case/CaseCTA';
import { ModuleNav } from '@/components/case/ModuleNav';

// Per-project sticky nav configs
const MODULE_NAV_CONFIG: Record<string, { id: string; label: string }[]> = {
    'ai-ecosystem': [
        { id: 'module-1', label: '01 · Scraper' },
        { id: 'module-2', label: '02 · Generator' },
        { id: 'module-3', label: '03 · Tagger' },
        { id: 'module-4', label: '04 · SaaS' },
        { id: 'module-5', label: '05 · Automation' },
    ],
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

import { generateCaseMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    return generateCaseMetadata(slug);
}

export default async function CasePage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) notFound();

    let source = '';
    try {
        const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.mdx`);
        source = await readFile(filePath, 'utf-8');
    } catch (e) {
        return notFound();
    }

    // Find prev/next for navigation (sorted by display order)
    const orderedProjects = [...projects].sort((a, b) => a.order - b.order);
    const currentIndex = orderedProjects.findIndex(p => p.slug === slug);
    const prevProject = currentIndex > 0 ? orderedProjects[currentIndex - 1] : undefined;
    const nextProject = currentIndex < orderedProjects.length - 1 ? orderedProjects[currentIndex + 1] : undefined;

    return (
        <article className="min-h-screen">
            <CaseHero project={project} />

            {/* Sticky per-module navigator (client island) */}
            {MODULE_NAV_CONFIG[slug] && (
                <ModuleNav modules={MODULE_NAV_CONFIG[slug]} />
            )}

            <div className="max-w-[800px] mx-auto px-6 py-12">
                <div className="prose prose-invert prose-p:text-[var(--color-text-secondary)] max-w-none">
                    <MDXRemote
                        source={source}
                        components={mdxComponents}
                        options={{ parseFrontmatter: false }}
                    />
                </div>

                <CaseCTA />

                <CaseNavigation prev={prevProject} next={nextProject} />
            </div>
        </article>
    );
}
