import { ProjectMeta, Tier } from '@/types/project';

export const projects: ProjectMeta[] = [
    // --- TIER 1 ---
    {
        slug: 'lms-lucy-nails',
        title: 'LMS «Lucy Nails»',
        subtitle: 'Платформа онлайн-обучения с DRM-защитой видео',
        tier: 'tier-1',
        role: 'Full-Stack разработчик',
        emoji: '🎓',
        tags: ['SaaS', 'LMS', 'Python', 'React'],
        techStack: [
            { name: 'Python', category: 'backend' },
            { name: 'FastAPI', category: 'backend' },
            { name: 'Next.js', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'PostgreSQL', category: 'db' },
            { name: 'Kinescope API', category: 'integrations' },
            { name: 'Telegram Bot', category: 'bot' },
            { name: 'Docker', category: 'devops' },
        ],
        metrics: [
            { label: 'интеграций', value: '5', prefix: 'count:' },
            { label: 'уровней контента', value: '3', prefix: 'depth:' },
            { label: '', value: 'Продакшен', prefix: 'status:' },
        ],
        productionUrl: 'https://lucysmirnova.ru/',
        thumbnail: '/images/projects/lms-lucy-nails/hero.webp',
        order: 1,
    },
    {
        slug: 'erp-lomuebles',
        title: 'ERP «LOMuebles»',
        subtitle: 'Система управления мебельным производством',
        tier: 'tier-1',
        role: 'Full-Stack & BaaS разработчик',
        emoji: '🏭',
        tags: ['ERP', 'React', 'Supabase'],
        techStack: [
            { name: 'React', category: 'frontend' },
            { name: 'TypeScript', category: 'frontend' },
            { name: 'Supabase', category: 'db' },
            { name: 'PostgreSQL', category: 'db' },
            { name: 'Tailwind CSS', category: 'frontend' },
            { name: 'Tilda Webhooks', category: 'integrations' },
        ],
        metrics: [
            { label: 'модулей системы', value: '5', prefix: 'modules:' },
            { label: '', value: 'RLS Security', prefix: 'security:' },
            { label: 'таблиц в БД', value: '45+', prefix: 'tables:' },
        ],
        thumbnail: '/images/projects/erp-lomuebles/hero.webp',
        order: 2,
    },
    {
        slug: 'crm-ya-i-ty',
        title: 'CRM «Я и Ты»',
        subtitle: 'Система управления сервисным бизнесом с онлайн-записью',
        tier: 'tier-1',
        role: 'Full-Stack разработчик',
        emoji: '💇',
        tags: ['CRM', 'Python', 'Vue.js'],
        techStack: [
            { name: 'Python', category: 'backend' },
            { name: 'Django', category: 'backend' },
            { name: 'Vue.js 3', category: 'frontend' },
            { name: 'PostgreSQL', category: 'db' },
            { name: 'aiogram 3', category: 'bot' },
            { name: 'Docker', category: 'devops' },
        ],
        metrics: [
            { label: 'уведомления', value: 'Real-time', prefix: 'tg:' },
            { label: 'расходников', value: 'Автосписание', prefix: 'stock:' },
            { label: 'бэкапы', value: 'Автоматические', prefix: 'backup:' },
        ],
        thumbnail: '/images/projects/crm-ya-i-ty/hero.webp',
        order: 3,
    },

    // --- TIER 2 ---
    {
        slug: 'ai-ecosystem',
        title: 'IQStocker AI Ecosystem',
        subtitle: 'Экосистема AI-автоматизации контента из 6 микросервисов',
        tier: 'tier-2',
        role: 'AI Engineer & Backend Developer',
        emoji: '🤖',
        tags: ['AI/ML', 'Automation', 'Python', 'Desktop'],
        techStack: [
            { name: 'OpenAI GPT-4 Vision', category: 'ai' },
            { name: 'Anthropic Claude', category: 'ai' },
            { name: 'Python', category: 'backend' },
            { name: 'FastAPI', category: 'backend' },
            { name: 'PySide6', category: 'desktop' },
            { name: 'Chrome Ext', category: 'integrations' },
            { name: 'Supabase', category: 'db' },
        ],
        metrics: [
            { label: 'LLM моделей', value: '3', prefix: 'models:' },
            { label: 'стоимость API', value: '-50%', prefix: 'batch:' },
            { label: 'продуктов', value: '6', prefix: 'services:' },
        ],
        productionUrl: 'https://gen.iqstocker.com',
        thumbnail: '/images/projects/ai-ecosystem/hero.webp',
        order: 4,
    },

    // --- TIER 3 ---
    {
        slug: 'site-lomuebles',
        title: 'LOMuebles.es',
        subtitle: 'Мультиязычный коммерческий сайт с конверсионным квизом',
        tier: 'tier-3',
        role: 'Веб-разработчик',
        emoji: '🛋',
        tags: ['Website', 'Convertion', 'Tilda'],
        techStack: [
            { name: 'Tilda', category: 'frontend' },
            { name: 'JS/HTML/CSS', category: 'frontend' },
            { name: 'Webhooks', category: 'integrations' },
        ],
        metrics: [
            { label: 'языков', value: '3 (RU,ES,EN)', prefix: 'i18n:' },
            { label: '', value: 'Квиз → заявка', prefix: 'flow:' },
            { label: 'заявок', value: '+45%', prefix: 'growth:' },
        ],
        productionUrl: 'https://lomuebles.es/',
        thumbnail: '/images/projects/site-lomuebles/hero.webp',
        order: 5,
    },
    {
        slug: 'prozub-by',
        title: 'Prozub.by',
        subtitle: 'Сайт премиум-стоматологии с SEO-оптимизацией',
        tier: 'tier-3',
        role: 'Веб-разработчик',
        emoji: '🦷',
        tags: ['Website', 'SEO', 'Mobile-first'],
        techStack: [
            { name: 'HTML5/CSS3', category: 'frontend' },
            { name: 'JavaScript', category: 'frontend' },
            { name: 'Schema.org', category: 'integrations' },
        ],
        metrics: [
            { label: 'история клиники', value: '30+ лет', prefix: 'trust:' },
            { label: 'в Google', value: 'Mobile-first', prefix: 'seo:' },
            { label: 'Score', value: '95+', prefix: 'lighthouse:' },
        ],
        productionUrl: 'https://prozub.by/',
        thumbnail: '/images/projects/prozub-by/hero.webp',
        order: 6,
    }
];

export const getProjectsByTier = (tier: Tier) =>
    projects.filter(p => p.tier === tier).sort((a, b) => a.order - b.order);

export const getProjectBySlug = (slug: string) =>
    projects.find(p => p.slug === slug);

export const getAllTags = () =>
    Array.from(new Set(projects.flatMap(p => p.tags)));

export const getAllTechNames = () =>
    Array.from(new Set(projects.flatMap(p => p.techStack.map(t => t.name))));
