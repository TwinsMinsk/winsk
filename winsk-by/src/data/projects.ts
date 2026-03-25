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
            { label: 'защита видео Kinescope DRM', value: 'DRM-Protected', prefix: 'video:' },
            { label: '3-уровневая ACL Role-based', value: 'Role-based', prefix: 'access:' },
            { label: 'модулей + 25+ уроков курса', value: '10 блоков', prefix: 'content:' },
        ],
        productionUrl: 'https://lucysmirnova.ru/',
        thumbnail: '/images/projects/lms-lucy-nails/hero.jpg',
        order: 2,
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
            { label: 'PostgreSQL инфраструктура', value: 'Supabase BaaS', prefix: 'infra:' },
            { label: 'строгая изоляция доступов', value: 'RLS Security', prefix: 'security:' },
            { label: 'автоматический учет склада', value: 'PgSQL Triggers', prefix: 'logic:' },
        ],
        thumbnail: '/images/projects/erp-lomuebles/hero.jpg',
        order: 3,
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
            { name: 'Django REST Framework', category: 'backend' },
            { name: 'Vue.js 3', category: 'frontend' },
            { name: 'PrimeVue', category: 'frontend' },
            { name: 'Pinia', category: 'frontend' },
            { name: 'PostgreSQL', category: 'db' },
            { name: 'Supabase Storage', category: 'integrations' },
            { name: 'aiogram 3', category: 'bot' },
            { name: 'APScheduler', category: 'bot' },
            { name: 'Docker', category: 'devops' },
        ],
        metrics: [
            { label: 'Django-приложений в архитектуре', value: '8 модулей', prefix: 'arch:' },
            { label: 'автосписание + контроль остатков', value: 'Atomic Ops', prefix: 'warehouse:' },
            { label: 'ролевая модель + Audit Log', value: 'RBAC', prefix: 'security:' },
        ],
        githubUrl: 'https://github.com/TwinsMinsk/CRM-ya-i-ty',
        thumbnail: '/images/projects/crm-ya-i-ty/hero.png',
        order: 4,
    },

    // --- TIER 2 ---
    {
        slug: 'ai-ecosystem',
        title: 'IQStocker AI Ecosystem',
        subtitle: 'Экосистема AI-автоматизации контента из 5 микросервисов',
        tier: 'tier-2',
        role: 'AI Engineer & Backend Developer',
        emoji: '🤖',
        tags: ['AI/ML', 'Automation', 'Python', 'Desktop'],
        techStack: [
            { name: 'OpenAI GPT-4 Vision', category: 'ai' },
            { name: 'OpenAI Batch API', category: 'ai' },
            { name: 'Python', category: 'backend' },
            { name: 'FastAPI', category: 'backend' },
            { name: 'PySide6', category: 'desktop' },
            { name: 'Chrome Ext', category: 'integrations' },
            { name: 'PostgreSQL', category: 'db' },
        ],
        metrics: [
            { label: '5 этапов автопайплайна', value: 'End-to-End', prefix: 'pipeline:' },
            { label: 'стоимость API (Batch Mode)', value: '-50%', prefix: 'batch:' },
            { label: 'изображений за запуск', value: '10k+', prefix: 'output:' },
        ],
        productionUrl: 'https://gen.iqstocker.com',
        thumbnail: '/images/projects/ai-ecosystem/hero.jpg',
        order: 1,
    },

    // --- TIER 3 ---
    {
        slug: 'site-lomuebles',
        title: 'LOMuebles.es',
        subtitle: 'Мультиязычный коммерческий сайт с авто-передачей лидов в CRM',
        tier: 'tier-3',
        role: 'Веб-разработчик & Интегратор',
        emoji: '🛋',
        tags: ['Website', 'Convertion', 'Tilda', 'Webhooks'],
        techStack: [
            { name: 'Tilda', category: 'frontend' },
            { name: 'JS/HTML/CSS', category: 'frontend' },
            { name: 'N8N', category: 'integrations' },
            { name: 'Webhooks', category: 'integrations' },
            { name: 'Supabase Edge Fn', category: 'integrations' },
        ],
        metrics: [
            { label: 'RU / ES / EN версии сайта', value: 'Multilingual', prefix: 'i18n:' },
            { label: 'лид → CRM за < 3 сек', value: 'Auto-Lead', prefix: 'webhook:' },
            { label: 'рост горячих заявок через квиз', value: '+45% Conv.', prefix: 'leads:' },
        ],
        productionUrl: 'https://lomuebles.es/',
        thumbnail: '/images/projects/site-lomuebles/hero.jpg',
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
            { name: 'Telegram Bot', category: 'bot' },
        ],
        metrics: [
            { label: 'каталог медицинских услуг', value: 'Semantic Core', prefix: 'traffic:' },
            { label: 'клиентов по услуге Гнатология', value: '+300%', prefix: 'growth:' },
            { label: 'по запросу «Гнатология Минск»', value: 'TOP-3 Google', prefix: 'ranking:' },
        ],
        productionUrl: 'https://prozub.by/',
        thumbnail: '/images/projects/prozub-by/hero.jpg',
        order: 6,
    }
];

export const getProjectsByTier = (tier: Tier) =>
    projects.filter(p => p.tier === tier).sort((a, b) => a.order - b.order);

export const getProjectBySlug = (slug: string) =>
    projects.find(p => p.slug === slug);

export const getAllTags = () =>
    Array.from(new Set(projects.flatMap(p => p.tags))).sort();

export const getAllTechNames = () =>
    Array.from(new Set(projects.flatMap(p => p.techStack.map(t => t.name)))).sort();
