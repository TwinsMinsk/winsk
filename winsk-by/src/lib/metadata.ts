import { type Metadata } from 'next';
import { getProjectBySlug } from '@/data/projects';

const BASE_URL = 'https://winsk.by';

export function generateSiteMetadata(overrides: Partial<Metadata> = {}): Metadata {
    return {
        title: {
            default: overrides.title as string || 'Winsk — Full-Stack & AI Engineer',
            template: '%s | Winsk.by',
        },
        description: overrides.description || 'Независимый Tech-эксперт: Enterprise SaaS, AI-автоматизация, CRM/ERP. Разработка сложных систем.',
        metadataBase: new URL(BASE_URL),
        openGraph: {
            type: 'website',
            locale: 'ru_RU',
            siteName: 'Winsk.by',
            images: [{ url: '/images/og/home.png', width: 1200, height: 630 }],
            ...overrides.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
        },
        robots: { index: true, follow: true },
        alternates: { canonical: BASE_URL },
        ...overrides,
    };
}

export function generateCaseMetadata(slug: string): Metadata {
    const project = getProjectBySlug(slug);
    if (!project) return generateSiteMetadata();
    return generateSiteMetadata({
        title: project.title,
        description: project.subtitle,
        openGraph: {
            title: `${project.title} — Winsk.by`,
            description: project.subtitle,
            images: [`/images/projects/${slug}/hero.webp`], // Fallback to hero image as OG
            type: 'article',
        },
    });
}
