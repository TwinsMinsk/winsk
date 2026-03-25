'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SitePreviewCardProps {
    url: string;
    title: string;
    description: string;
    thumbnail: string;
    flags?: string[];
}

export function SitePreviewCard({ url, title, description, thumbnail, flags = [] }: SitePreviewCardProps) {
    const [hovered, setHovered] = useState(false);
    const domain = new URL(url).hostname;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group block my-10 no-underline"
            style={{ textDecoration: 'none' }}
        >
            <div
                className="relative overflow-hidden rounded-2xl border transition-all duration-500"
                style={{
                    border: hovered
                        ? '1px solid rgba(124,58,237,0.8)'
                        : '1px solid rgba(124,58,237,0.25)',
                    background: 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(10,14,26,0.98) 100%)',
                    boxShadow: hovered
                        ? '0 0 40px rgba(124,58,237,0.3), 0 0 80px rgba(124,58,237,0.1), inset 0 1px 0 rgba(124,58,237,0.2)'
                        : '0 0 0px rgba(124,58,237,0), inset 0 1px 0 rgba(255,255,255,0.04)',
                    transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                }}
            >
                {/* Header bar */}
                <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ borderColor: 'rgba(124,58,237,0.15)' }}>
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div
                        className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs"
                        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(148,163,184,0.8)' }}
                    >
                        <span className="text-[#10B981]">🔒</span>
                        <span>{domain}</span>
                    </div>
                    <div
                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full transition-all duration-300"
                        style={{
                            background: hovered ? 'rgba(124,58,237,0.2)' : 'rgba(124,58,237,0.08)',
                            color: hovered ? '#A78BFA' : '#7C3AED',
                            border: '1px solid rgba(124,58,237,0.3)',
                        }}
                    >
                        <span>↗</span>
                        <span>Visit</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row">
                    {/* Text block */}
                    <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                        {/* Language flags */}
                        {flags.length > 0 && (
                            <div className="flex gap-2">
                                {flags.map((flag) => (
                                    <span
                                        key={flag}
                                        className="px-2 py-0.5 rounded text-xs font-mono"
                                        style={{
                                            background: 'rgba(124,58,237,0.12)',
                                            color: '#A78BFA',
                                            border: '1px solid rgba(124,58,237,0.25)',
                                        }}
                                    >
                                        {flag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div>
                            <h3
                                className="text-xl font-bold mb-2 transition-colors duration-300"
                                style={{ color: hovered ? '#F8FAFC' : '#E2E8F0', margin: 0 }}
                            >
                                {title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: 'rgba(148,163,184,0.85)', margin: '0.5rem 0 0' }}
                            >
                                {description}
                            </p>
                        </div>

                        {/* Domain pill */}
                        <div className="flex items-center gap-2 text-xs font-mono" style={{ color: '#10B981' }}>
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                            {url}
                        </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="md:w-72 lg:w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: '200px' }}>
                        <div className="relative w-full h-full" style={{ minHeight: '200px' }}>
                            <Image
                                src={thumbnail}
                                alt={`${title} preview`}
                                fill
                                className="object-cover transition-transform duration-700"
                                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
                            />
                            {/* Overlay gradient */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(to right, rgba(10,14,26,0.6) 0%, transparent 40%)',
                                    opacity: hovered ? 0.3 : 0.7,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom glow line */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
                    style={{
                        background: 'linear-gradient(to right, transparent, #7C3AED, #A78BFA, #7C3AED, transparent)',
                        opacity: hovered ? 1 : 0,
                    }}
                />
            </div>
        </a>
    );
}
