'use client';

import { ExternalLink, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveDemoProps {
    url: string;
    label?: string;
}

export function LiveDemo({ url, label = 'Открыть платформу →' }: LiveDemoProps) {
    const mainText = label.split('→')[0] || label;
    const secondaryText = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    return (
        <div className="my-10 flex">
            <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-4 rounded-xl
                           bg-[var(--color-bg-cards)] border border-[var(--color-accent)]/30
                           overflow-hidden transition-all duration-300
                           hover:border-[var(--color-accent-glow)] hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]
                           w-full sm:min-w-[340px] sm:w-auto"
            >
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 relative z-10 w-full">
                    {/* Icon Circle */}
                    <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full 
                                  bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 
                                  text-[var(--color-accent-glow)] group-hover:bg-[var(--color-accent)]/20 
                                  transition-colors duration-300">
                        <Globe size={20} className="group-hover:animate-pulse" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col pr-8 w-full">
                        <span className="text-[var(--color-text-primary)] font-semibold tracking-wide text-base">
                            {mainText.trim()}
                        </span>
                        <span className="text-[var(--color-terminal-green)] font-mono text-sm opacity-80 mt-0.5 flex items-center gap-2">
                            <span>&gt;</span>
                            <span className="group-hover:underline underline-offset-4 decoration-[var(--color-terminal-green)]/40 break-all">
                                {secondaryText}
                            </span>
                        </span>
                    </div>

                    {/* External Icon */}
                    <div className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 text-[var(--color-terminal-green)] transition-all duration-300 hidden sm:block">
                        <ExternalLink size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                </div>
            </motion.a>
        </div>
    );
}
