export type Tier = 'tier-1' | 'tier-2' | 'tier-3';

export type TechCategory =
    | 'backend'
    | 'frontend'
    | 'db'
    | 'ai'
    | 'devops'
    | 'integrations'
    | 'bot'
    | 'desktop';

export interface TechItem {
    name: string;
    version?: string;
    category: TechCategory;
}

export interface Metric {
    label: string;
    value: string;
    prefix?: string; // e.g. "output:"
}

export interface ProjectMeta {
    slug: string;
    title: string;
    subtitle: string;
    tier: Tier;
    role: string;
    emoji: string;
    tags: string[];
    techStack: TechItem[];
    metrics: Metric[];
    productionUrl?: string;
    githubUrl?: string;
    thumbnail: string;
    order: number;
}
