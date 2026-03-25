import { Card } from '@/components/ui/Card';
import Image from 'next/image';

interface ArchDiagramProps {
    src: string;
    alt?: string;
    placeholder?: string;
}

export function ArchDiagram({ src, alt = 'Architecture Diagram', placeholder }: ArchDiagramProps) {
    const isPlaceholder = !src || src.includes('placeholder');

    return (
        <Card className="my-10 p-6 flex flex-col items-center justify-center border-[var(--color-accent)]/20 shadow-[0_0_30px_rgba(124,58,237,0.1)] relative">
            <div className="absolute top-4 left-4 text-[var(--color-terminal-green)] font-mono text-xs opacity-70">
                {'>'} architecture_map.svg
            </div>

            {isPlaceholder ? (
                <div className="w-full min-h-[260px] flex flex-col items-center justify-center gap-3 font-mono text-[var(--color-text-secondary)] border border-dashed border-[var(--color-border)] rounded-lg mt-6 px-6 text-center">
                    <span className="text-2xl opacity-40">⬡</span>
                    <span className="text-sm">
                        {placeholder ?? '[ Architecture Infographic — coming soon ]'}
                    </span>
                    <span className="text-[var(--color-terminal-green)] text-xs opacity-50 animate-pulse">
                        [ infographic placeholder ]
                    </span>
                </div>
            ) : (
                <div className="relative w-full mt-6 rounded-lg overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        width={900}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>
            )}
        </Card>
    );
}
