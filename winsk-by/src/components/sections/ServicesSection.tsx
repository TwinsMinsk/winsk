'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const servicesData = [
    {
        id: 'mvp',
        title: 'AI-Powered MVPs & SaaS',
        shortDesc: 'Быстрый запуск стартапов',
        fullDesc: 'Я проектирую масштабируемую архитектуру и разрабатываю полнофункциональные продукты за недели, а не месяцы, используя мощь Multi-Agent систем для ускорения написания кода.',
        features: ['Архитектура базы данных', 'Next.js & React Frontend', 'Интеграция AI-моделей', 'Авторизация и биллинг (Stripe)'],
        tags: ['Next.js', 'PostgreSQL', 'AI Orchestration']
    },
    {
        id: 'bots',
        title: 'Smart Bots & AI Agents',
        shortDesc: 'Telegram-боты и RAG',
        fullDesc: 'Разработка интеллектуальных систем, которые знают всё о вашем бизнесе. Ваши данные превращаются в умного ассистента, который консультирует клиентов, продает и автоматизирует саппорт 24/7.',
        features: ['RAG (Поиск по базе знаний)', 'Telegram API & WebApps', 'Интеграция с вашей CRM', 'Fine-tuning LLM'],
        tags: ['Python', 'OpenAI API', 'Vector DBs']
    },
    {
        id: 'automation',
        title: 'Workflow Automation',
        shortDesc: 'Оптимизация процессов',
        fullDesc: 'Связывание разрозненных сервисов в единый бесшовный механизм. Я создаю невидимые пайплайны, которые экономят сотни часов рутинной работы вашей команды.',
        features: ['Интеграции по API (CRM, ERP)', 'Webhooks & WebSockets', 'Парсинг и обработка данных', 'Автоматизированная отчетность'],
        tags: ['Node.js', 'API Design', 'Data Flow']
    },
    {
        id: 'web',
        title: 'High-Performance Web',
        shortDesc: 'Премиальные платформы',
        fullDesc: 'Создание корпоративных порталов, дашбордов и промо-сайтов. Плавные анимации, идеальное SEO и эстетика Forced Dark Mode, которая продает вашу технологичность.',
        features: ['Next.js App Router', 'Framer Motion Animations', 'Адаптивный Glassmorphism', '100/100 Lighthouse Score'],
        tags: ['TypeScript', 'Tailwind v4', 'UI/UX']
    }
];

export function ServicesSection() {
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

    return (
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-6" id="services">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12 w-full overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap">
                    <span className="text-emerald-400 mr-2">{'>'}</span>
                    Услуги_
                </h2>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent flex-1 mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
                {/* Left Column (Tabs) */}
                <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {servicesData.map((service) => {
                        const isActive = activeTab === service.id;
                        return (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`text-left whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink p-4 rounded-xl lg:rounded-r-none lg:rounded-l-xl transition-all border-l-0 lg:border-l-2 ${isActive
                                    ? "text-white bg-white/10 lg:border-emerald-400"
                                    : "text-slate-400 hover:text-white hover:bg-white/5 border-transparent lg:border-transparent"
                                    }`}
                            >
                                <div className="text-xs uppercase tracking-wider mb-1 opacity-70">
                                    {service.shortDesc}
                                </div>
                                <div className="text-lg font-bold">
                                    {service.title}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right Column (Content) */}
                <div className="lg:col-span-8 relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col p-8 lg:p-12"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                            {/* Body */}
                            <div className="relative z-10 flex-1 flex flex-col">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{activeService.title}</h3>
                                <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
                                    {activeService.fullDesc}
                                </p>

                                {/* Features section */}
                                <div className="mt-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeService.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
                                                <Terminal className="text-emerald-400 w-5 h-5 shrink-0 mt-0.5" />
                                                <span className="text-slate-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {activeService.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="hidden lg:block absolute -top-40 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
        </section>
    );
}
