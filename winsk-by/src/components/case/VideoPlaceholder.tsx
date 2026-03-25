import { Video } from 'lucide-react';

interface VideoPlaceholderProps {
    label?: string;
    note?: string;
}

export function VideoPlaceholder({
    label = 'Видео-демо проекта',
    note,
}: VideoPlaceholderProps) {
    return (
        <div className="my-10 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-cards)]/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-cards)]">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 font-mono text-xs text-[var(--color-text-secondary)]">
                    {'> '}video_demo.mp4
                </span>
            </div>

            {/* Placeholder body */}
            <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center">
                <div className="w-16 h-16 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center bg-[var(--color-accent)]/10">
                    <Video size={28} className="text-[var(--color-accent-glow)]" />
                </div>
                <p className="font-mono text-base text-[var(--color-text-primary)] font-semibold">
                    {label}
                </p>
                {note && (
                    <p className="text-sm text-[var(--color-text-secondary)] max-w-md leading-relaxed">
                        {note}
                    </p>
                )}
                <span className="font-mono text-xs text-[var(--color-terminal-green)] opacity-60 animate-pulse">
                    [ coming soon ]
                </span>
            </div>
        </div>
    );
}
