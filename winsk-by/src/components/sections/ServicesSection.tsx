'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const servicesData = [
    {
        id: 'mvp',
        title: 'AI-Powered MVPs & SaaS',
        shortDesc: 'Быстрый запуск стартапов',
        fullDesc: 'Разрабатываю готовые веб-продукты за недели, а не месяцы. От базы данных и интерфейса до подключения оплаты — получаете рабочий MVP, который можно сразу запускать и масштабировать.',
        features: ['Архитектура базы данных', 'Next.js & React Frontend', 'Интеграция AI-моделей', 'Авторизация и биллинг'],
        tags: ['React / Next.js', 'Python / Node.js', 'SQL / NoSQL', 'AI Integration']
    },
    {
        id: 'bots',
        title: 'Smart Bots & AI Agents',
        shortDesc: 'Умные боты и ассистенты',
        fullDesc: 'Разработка интеллектуальных систем, которые знают всё о вашем бизнесе. Ваши данные превращаются в умного ассистента, который консультирует клиентов, продает и автоматизирует саппорт 24/7.',
        features: ['Поиск по базе знаний (RAG)', 'Telegram API & WebApps', 'Интеграция с вашей CRM', 'Обучение моделей под ваши задачи'],
        tags: ['Python', 'Any LLM API', 'Vector DBs', 'Telegram / WhatsApp']
    },
    {
        id: 'automation',
        title: 'Workflow Automation',
        shortDesc: 'Оптимизация процессов',
        fullDesc: 'Соединяю ваши сервисы между собой: CRM, мессенджеры, базы данных, таблицы. Автоматизирую рутину, которая забирает сотни часов у вашей команды каждый месяц.',
        features: ['Интеграции по API (CRM, ERP)', 'Webhooks & WebSockets', 'Парсинг и обработка данных', 'Автоматизированная отчетность'],
        tags: ['REST / GraphQL', 'Webhooks', 'Python / Node.js', 'Data Pipelines']
    },
    {
        id: 'web',
        title: 'High-Performance Web',
        shortDesc: 'Премиальные платформы',
        fullDesc: 'Создаю корпоративные сайты, дашборды и промо-страницы. Быстрая загрузка, плавные анимации, адаптив под все устройства и идеальное SEO из коробки.',
        features: ['Next.js App Router', 'Framer Motion Animations', 'Адаптивный дизайн', 'Максимальная скорость загрузки'],
        tags: ['TypeScript', 'React / Next.js', 'Responsive Design', 'SEO & Performance']
    }
];

export function ServicesSection() {
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

    return (
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 md:px-6" id="services">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12 w-full overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap">
                    <span className="text-emerald-400 mr-2">{'>'}</span>
                    Услуги_
                </h2>
                <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent flex-1 mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mt-6 md:mt-12">
                {/* Left Column (Tabs) */}
                <div className="lg:col-span-4 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory w-full gap-3 pb-6 pt-2 lg:flex-col lg:overflow-visible lg:snap-none lg:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {servicesData.map((service) => {
                        const isActive = activeTab === service.id;
                        return (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`shrink-0 snap-start whitespace-nowrap lg:whitespace-normal p-4 md:p-5 rounded-2xl lg:rounded-r-none lg:rounded-l-xl border lg:border-0 lg:border-l-2 text-left transition-all ${isActive
                                    ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10 lg:text-white lg:bg-white/10 lg:border-emerald-400"
                                    : "text-slate-400 border-white/10 bg-transparent lg:border-transparent hover:text-white lg:hover:bg-white/5"
                                    }`}
                            >
                                <div className="text-xs uppercase tracking-wider mb-1 opacity-70 hidden lg:block">
                                    {service.shortDesc}
                                </div>
                                <div className="text-sm md:text-base lg:text-lg font-bold">
                                    {service.title}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Right Column (Content) */}
                <div className="lg:col-span-8 relative min-h-[480px] min-w-0 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col p-5 md:p-8 lg:p-12 w-full max-w-full"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                            {/* Body */}
                            <div className="relative z-10 flex-1 flex flex-col h-full">
                                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 pr-12 md:pr-0 leading-tight">
                                    {activeService.title}
                                </h3>
                                <div className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3 lg:hidden">
                                    {activeService.shortDesc}
                                </div>
                                <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed max-w-3xl mb-6 md:mb-8 font-light">
                                    {activeService.fullDesc}
                                </p>

                                {/* Features section */}
                                <div className="mt-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-4">
                                        {activeService.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-black/20 p-3 md:p-4 rounded-xl border border-white/5">
                                                <Terminal className="text-emerald-400 w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                                                <span className="text-slate-200 text-xs sm:text-sm md:text-base leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
                                    {activeService.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] md:text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20"
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
