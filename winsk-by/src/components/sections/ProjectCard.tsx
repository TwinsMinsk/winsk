'use client';

import { ProjectMeta } from '@/types/project';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MetricCard } from '@/components/ui/MetricCard';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Image from 'next/image';

interface ProjectCardProps {
    project: ProjectMeta;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isTier2 = project.tier === 'tier-2';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`group block h-full ${isTier2 ? 'md:col-span-2 lg:col-span-3' : ''}`}
        >
            <Link href={`/case/${project.slug}`} className="block h-full">
                <Card
                    isGlass={isTier2}
                    className={`h-full flex flex-col hover:border-[var(--color-accent-glow)]/50 relative overflow-hidden ${isTier2 ? 'shadow-[0_0_40px_rgba(124,58,237,0.15)] glow-hover' : ''}`}
                >
                    {/* Скриншот (мокап) */}
                    <div className="relative w-full h-48 md:h-56 bg-[var(--color-bg-primary)] overflow-hidden border-b border-[var(--color-border)]">
                        {project.thumbnail ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20 group-hover:scale-105 transition-transform duration-500">
                                {project.emoji}
                            </div>
                        )}
                        {/* Градиент оверлей */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-90" />

                        {/* External Link Icon (Decorative) */}
                        {project.productionUrl && (
                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <svg className="w-4 h-4 text-[var(--color-accent-glow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        )}
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                        {/* Заголовок */}
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-glow)] transition-colors flex items-center">
                                <span className="text-[var(--color-terminal-green)] mr-2 font-mono text-sm">{'>'}</span>
                                {project.title}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] mt-2 text-sm leading-relaxed">
                                {project.subtitle}
                            </p>
                        </div>

                        {/* Метрики */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.metrics.map((metric, i) => (
                                <div key={i} className="flex-1 min-w-[110px] max-w-full">
                                    <MetricCard metric={metric} />
                                </div>
                            ))}
                        </div>

                        {/* Стек (ограничение до 4 для компактности + остаток) */}
                        <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-2">
                            {project.techStack.slice(0, isTier2 ? 6 : 4).map((tech, i) => (
                                <Badge key={i} tech={tech} />
                            ))}
                            {project.techStack.length > (isTier2 ? 6 : 4) && (
                                <div className="inline-flex items-center px-2 py-1 rounded-md text-[13px] font-mono border border-[var(--color-border)] text-[var(--color-text-muted)]">
                                    +{project.techStack.length - (isTier2 ? 6 : 4)}
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
