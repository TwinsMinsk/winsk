import { ScrambleHoverText } from '@/components/animations/ScrambleHoverText';

export function CaseCallToAction() {
    return (
        <div className="relative isolate overflow-hidden bg-[var(--color-bg-elevated)]/50 border border-[var(--color-border)] rounded-2xl px-6 py-10 sm:px-12 sm:py-16 mt-20 mb-12 text-center">
            <div className="mx-auto max-w-2xl">
                <h2 className="text-2xl font-bold font-mono tracking-tight text-white sm:text-3xl">
                    Хотите внедрить похожую систему?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
                    Свяжитесь со мной, и мы обсудим архитектуру вашего будущего проекта. От RAG-приложений до AI-автоматизаций.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-6">
                    <a
                        href="/#contact"
                        className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-[var(--color-terminal-green)] hover:scale-105"
                    >
                        <ScrambleHoverText text="Обсудить ваш кейс" />
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            {/* Background elements */}
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx="512" cy="512" r="512" fill="url(#gradient-case-cta)" fillOpacity="0.15" />
                <defs>
                    <radialGradient id="gradient-case-cta">
                        <stop stopColor="var(--color-accent-blue)" />
                        <stop offset="1" stopColor="var(--color-accent)" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
