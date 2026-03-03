'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TerminalDecode } from '@/components/animations/TerminalDecode';
import { GooeyGradientBackground } from '@/components/ui/GooeyGradientBackground';
import { ContactButtons } from '@/components/home/ContactButtons';

// ─── Entrance animation variants ─────────────────────────────────────────────
const containerVariants: import('framer-motion').Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.25,
        },
    },
};

const itemFromLeft: import('framer-motion').Variants = {
    hidden: { opacity: 0, x: -32, filter: 'blur(6px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
};


// ─── Photo Card (reused on mobile + desktop) ─────────────────────────────────
function PhotoCardInner({ sizes }: { sizes: string }) {
    return (
        <div
            className="glass-card rounded-2xl p-1.5 md:p-2 relative overflow-hidden w-full"
            style={{
                boxShadow: '0 0 40px rgba(0, 255, 180, 0.1), 0 0 80px rgba(120, 0, 255, 0.07)',
            }}
        >
            <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                {/* Layer 0: Neural overlay — декоративный фон */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/images/neural-overlay.png"
                        alt=""
                        fill
                        className="object-cover"
                        style={{ opacity: 0.5 }}
                        sizes={sizes}
                    />
                </div>

                {/* Layer 1: Тёмная подложка (закрывает прозрачный PNG-фон) */}
                <div
                    className="absolute inset-0 z-[5]"
                    style={{ background: 'linear-gradient(160deg, #0d1117 0%, #111827 100%)' }}
                />

                {/* Layer 2: Фото — чёткое, передний план */}
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/user-photo.png"
                        alt="Winsk.by — AI Engineer"
                        fill
                        priority
                        className="object-cover object-top"
                        sizes={sizes}
                    />
                </div>

                {/* Layer 3: Виньетка снизу */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>

            {/* Метка */}
            <div className="px-3 py-2 flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--color-terminal-green)] opacity-70">
                    // winsk.by
                </span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    AI_ENGINEER
                </span>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <GooeyGradientBackground>
                {/* ══════════════════════════════════════════════════════════
                    MAIN GRID — Unified layout for mobile and desktop
                    ══════════════════════════════════════════════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center min-h-screen max-w-7xl mx-auto px-6 relative z-10 pt-[52px] md:pt-0">

                    {/* ── ЛЕВАЯ КОЛОНКА: текст + кнопки ── */}
                    <motion.div
                        className="md:col-span-3 flex flex-col justify-center pt-[195px] md:pt-0 pb-10 md:pb-0 z-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* SEO H1 Header - Invisible visually but crucial for screen-readers and Google */}
                        <h1 className="sr-only">Winsk AI Engineer & Full-Stack Orchestrator. AI-First Инжиниринг полного цикла.</h1>

                        {/* TerminalDecode */}
                        <motion.div className="pointer-events-none" variants={itemFromLeft}>
                            <TerminalDecode />
                        </motion.div>

                        {/* Описание */}
                        <motion.h2
                            className="text-[var(--color-text-secondary)] font-sans text-lg lg:text-xl mt-6 max-w-lg leading-relaxed"
                            variants={itemFromLeft}
                        >
                            AI-First инжиниринг полного цикла. Я не просто пишу код —
                            я дирижирую искусственным интеллектом, собирая
                            высокопроизводительные системы, умных агентов и автоматизации,
                            решающие задачи бизнеса.
                        </motion.h2>

                        {/* Кнопки */}
                        <motion.div className="mt-8" variants={itemFromLeft}>
                            <ContactButtons
                                telegramUsername="oleg_smirniy"
                                whatsappNumber="375333231447"
                            />
                        </motion.div>
                    </motion.div>

                    {/* ── ПРАВАЯ КОЛОНКА: Универсальная PhotoCard (Mobile + Desktop) ── */}
                    <div className="absolute top-[52px] inset-x-0 w-full flex justify-center z-[8] pointer-events-none md:pointer-events-auto md:static md:col-span-2 md:items-center md:flex md:z-10">
                        {/* Entrance */}
                        <motion.div
                            className="w-[240px] md:w-full md:max-w-[380px]"
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
                        >
                            {/* Float */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                                style={{ rotate: 2 }}
                                className="relative"
                            >
                                {/* Hover-tilt */}
                                <motion.div
                                    whileHover={{ scale: 1.03, rotate: 1.5 }}
                                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                >
                                    <PhotoCardInner sizes="(max-width: 768px) 240px, 380px" />
                                </motion.div>

                                {/* Fade overlay: только для мобилки */}
                                <div
                                    className="absolute inset-x-0 bottom-0 pointer-events-none z-20 md:hidden"
                                    style={{
                                        height: '58%',
                                        background: 'linear-gradient(to bottom, transparent 0%, #0A0E1A 85%)',
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </GooeyGradientBackground>
        </section>
    );
}
