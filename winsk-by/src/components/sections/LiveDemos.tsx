'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const demos = [
    {
        title: 'E-Commerce Platform',
        description: 'Концепт премиального онлайн-магазина с киберпанк-эстетикой и адаптивной сеткой товаров.',
        href: '/demo/ecommerce',
        tags: ['Next.js', 'Stitch UI', 'AI-Generated'],
        tagColors: 'text-cyan-400 bg-cyan-400/10',
        hoverBorder: 'hover:border-cyan-400/50',
        arrowColor: 'text-cyan-400',
    },
    {
        title: 'SaaS Analytics Dashboard',
        description: 'B2B аналитика в dark mode с модульными дашбордами и боковой навигацией.',
        href: '/demo/saas',
        tags: ['Data Viz', 'Dashboard', 'B2B'],
        tagColors: 'text-purple-400 bg-purple-400/10',
        hoverBorder: 'hover:border-purple-400/50',
        arrowColor: 'text-purple-400',
    },
];

export function LiveDemos() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6 w-full overflow-hidden">
                        <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap flex items-center">
                            <span className="text-cyan-400 mr-2">{'>'}</span>
                            Демо_
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                                className="inline-block w-3 h-8 md:h-10 bg-cyan-400 ml-2"
                            />
                        </h2>
                        <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 mt-2"></div>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/50 before:to-transparent">
                        Демонстрация возможностей. Сгенерировано и развернуто ИИ-агентами.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {demos.map((demo, index) => (
                        <Link key={demo.href} href={demo.href} className="block group w-full h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`flex flex-col h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-colors duration-300 ${demo.hoverBorder}`}
                            >
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                        {demo.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        {demo.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {demo.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-3 py-1 rounded-full font-medium ${demo.tagColors} border border-white/5`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex items-center gap-2 font-jb-mono text-sm font-bold ${demo.arrowColor} transition-transform duration-300 group-hover:translate-x-2`}>
                                        <span>View Demo</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
