import Link from 'next/link';

export function CaseCTA() {
    return (
        <div className="my-20 rounded-2xl border border-[var(--color-accent-glow)]/30 bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-primary)] p-8 md:p-12 text-center shadow-[0_0_40px_rgba(124,58,237,0.1)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--color-accent-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Нужна сложная разработка или AI-автоматизация?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
                Расскажите о задаче — обсудим архитектуру и подберем оптимальное техническое решение.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/#contact"
                    className="px-8 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-glow)] transition-colors inline-block w-full sm:w-auto"
                >
                    Обсудить проект →
                </Link>
                <span className="text-[var(--color-text-muted)] font-mono text-sm hidden sm:inline-block">or</span>
                <a
                    href="https://t.me/oleg_smirniy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-terminal-prompt)] transition-colors inline-block w-full sm:w-auto font-mono"
                >
                    Telegram
                </a>
            </div>
        </div>
    );
}
