import { type MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const casePages = projects.map((p) => ({
        url: `https://winsk.by/case/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: 'https://winsk.by',
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1
        },
        {
            url: 'https://winsk.by/about',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7
        },
        ...casePages,
    ];
}
