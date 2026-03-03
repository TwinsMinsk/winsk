'use client';

import Image from 'next/image';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { MagneticWrapper } from '@/components/ui/MagneticWrapper';
import { ScrambleHoverText } from '@/components/animations/ScrambleHoverText';
import { useRef } from 'react';

const services = [
    {
        title: "Разработка SaaS & AI MVP",
        desc: "Ускоренный запуск стартапов от идеи до продакшена. Проектирование отказоустойчивой архитектуры, мгновенный старт разработки функционального продукта за недели благодаря AI-оркестрации и современным фреймворкам.",
        tags: ["Next.js", "Full-Stack", "Architecture"],
        image: "/services/service-mvp.jpg"
    },
    {
        title: "Умные Боты & AI Агенты",
        desc: "Интеграция автономных LLM и RAG-систем поверх данных вашего бизнеса. Создание мощных Telegram-ассистентов нового поколения, способных консультировать, парсить данные и закрывать сделки 24/7 без живых операторов.",
        tags: ["LLM", "RAG", "Telegram"],
        image: "/services/service-bots.jpg"
    },
    {
        title: "Автоматизация Процессов",
        desc: "Связка разрозненных SaaS-сервисов, CRM и БД по API в единый механизм. Создание скриптов и невидимых пайплайнов маршрутизации бизнес-данных, экономящих сотни часов монотонного ручного труда вашей команды.",
        tags: ["API", "Automations", "Python"],
        image: "/services/service-automation.jpg"
    },
    {
        title: "Премиальный Веб (Web 3.0)",
        desc: "Разработка высоконагруженных порталов и лендингов с кинематографичной анимацией интерфейса. Идеальное техническое SEO (100 Lighthouse), мгновенная загрузка страниц и 3D-графика для вау-эффекта ваших клиентов.",
        tags: ["UI/UX", "Framer Motion", "React"],
        image: "/services/service-web.jpg"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
};

export function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yOffsets = [
        useTransform(scrollYProgress, [0, 1], [50, -50]),
        useTransform(scrollYProgress, [0, 1], [100, -100]),
        useTransform(scrollYProgress, [0, 1], [30, -30]),
        useTransform(scrollYProgress, [0, 1], [80, -80])
    ];

    return (
        <section ref={containerRef} className="py-24 relative z-10 mt-12 mb-12" id="services">
            <div className="container mx-auto px-4 md:px-6 relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-terminal-green)] mr-2">{'>'}</span>
                        Услуги_
                    </h2>
                    <div className="h-px bg-gradient-to-r from-[var(--color-terminal-green)]/50 to-transparent flex-1 mt-2"></div>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            style={{ y: yOffsets[idx] }}
                            className="h-full"
                        >
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                className="group relative overflow-hidden rounded-2xl h-[400px] border border-white/5 bg-black"
                            >
                                {/* Background Image Layer */}
                                <motion.div
                                    className="absolute inset-0 z-0"
                                    variants={{
                                        hover: { scale: 1.05, transition: { duration: 0.7, ease: "easeOut" } }
                                    }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        quality={90}
                                        className="object-cover opacity-80"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-500" />

                                {/* Hover Border Highlight */}
                                <div className="absolute inset-0 z-20 border-2 border-transparent group-hover:border-emerald-500/30 rounded-2xl transition-colors duration-500 pointer-events-none" />

                                {/* Glass Panel Content Layer */}
                                <div className="absolute bottom-0 z-10 w-full p-6 backdrop-blur-md bg-black/40 border-t border-white/10 transition-transform duration-500 group-hover:bg-black/50">
                                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                        {service.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-3 py-1 text-xs font-mono rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <MagneticWrapper>
                        <a
                            href="/#contact"
                            aria-label="Начать проект"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-base font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-[var(--color-terminal-green)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                        >
                            <ScrambleHoverText text="Начать проект" />
                            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">{">"}</span>
                        </a>
                    </MagneticWrapper>
                </motion.div>
            </div>
        </section>
    );
}
