import { ContactSection } from '@/components/sections/ContactSection';
import fs from 'fs/promises';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/case/mdx-components';
import { generateSiteMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = generateSiteMetadata({ title: 'About Winsk', description: 'Tech Expert & AI Engineer — My Bio & Services' });

export default async function AboutPage() {
    const filePath = path.join(process.cwd(), 'src/content/about.mdx');
    const content = await fs.readFile(filePath, 'utf-8');

    return (
        <main className="flex flex-col min-h-screen pt-24 pb-12">
            <div className="max-w-[1000px] mx-auto w-full px-6">
                {/* Hero Header */}
                <header className="mb-16 border-b border-[var(--color-border)] pb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
                        <span className="text-[var(--color-terminal-green)] mr-4 font-mono">{'>'}</span>
                        Обо мне
                    </h1>
                    <p className="text-xl text-[var(--color-text-secondary)] font-light">
                        Превращаю сложность в успешные продукты. Full-Stack разработка, архитектура и AI-автоматизация.
                    </p>
                </header>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Left: MDX Content */}
                    <div className="md:col-span-2 prose prose-invert prose-emerald max-w-none 
                         prose-h2:text-2xl prose-h2:text-[var(--color-text-primary)] prose-h2:border-b prose-h2:border-[var(--color-border)] prose-h2:pb-2 prose-h2:mb-6
                         prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed prose-p:mb-6
                         prose-li:text-[var(--color-text-secondary)] prose-ul:mb-6"
                    >
                        <MDXRemote source={content} components={mdxComponents} />
                    </div>

                    {/* Right: Sidebar / Sticky Info */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 font-mono tracking-tight">Факты</h3>
                            <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                                <li className="flex flex-col">
                                    <span className="text-[var(--color-text-primary)] mb-1">— Стек</span>
                                    Next.js, Python, PostgreSQL, AI APIs
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-[var(--color-text-primary)] mb-1">— Услуги</span>
                                    SaaS, CRM/ERP, Telegram Bots, AI Apps
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-[var(--color-text-primary)] mb-1">— Локация</span>
                                    Минск / GMT+3 / Удаленно
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                                <a href="/cv.pdf" target="_blank" className="flex items-center justify-center w-full py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold rounded-lg hover:bg-[var(--color-accent-glow)] transition-colors text-sm">
                                    📄 Скачать CV
                                </a>
                                <div className="flex gap-4 justify-center mt-6">
                                    <a href="https://t.me/oleg_smirniy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-xs font-mono">[ Telegram ]</a>
                                    <a href="https://wa.me/375333231447" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-xs font-mono">[ WhatsApp ]</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <ContactSection />
        </main>
    );
}
