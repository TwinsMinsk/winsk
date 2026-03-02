import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';
import { mdxComponents } from '@/components/case/mdx-components';
import { getProjectBySlug, projects } from '@/data/projects';
import { CaseHero } from '@/components/case/CaseHero';
import { CaseNavigation } from '@/components/case/CaseNavigation';

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

    // Find prev/next for navigation
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

    return (
        <article className="min-h-screen">
            <CaseHero project={project} />

            <div className="max-w-[800px] mx-auto px-6 py-12">
                <div className="prose prose-invert prose-p:text-[var(--color-text-secondary)] max-w-none">
                    <MDXRemote
                        source={source}
                        components={mdxComponents}
                        options={{ parseFrontmatter: false }}
                    />
                </div>

                <CaseNavigation prev={prevProject} next={nextProject} />
            </div>
        </article>
    );
}
