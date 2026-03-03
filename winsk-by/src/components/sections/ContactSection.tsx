import { ContactForm } from '@/components/ui/ContactForm';

export function ContactSection() {
    return (
        <section id="contact" className="py-24 px-6 max-w-[1280px] mx-auto w-full border-t border-[var(--color-border)]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-[var(--color-text-primary)] inline-flex items-center mb-6">
                        <span className="text-[var(--color-terminal-green)] mr-3 font-mono">{'//'}</span>
                        Связь и Сотрудничество
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                        Готовы запустить масштабный проект, внедрить AI-агентов или автоматизировать бизнес-процессы? Опишите вашу задачу, и я предложу архитектурное решение, которое сэкономит ваше время и ресурсы.
                    </p>
                    <div className="flex flex-col gap-4 font-mono text-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--color-accent-glow)] w-6 text-center">@</span>
                            <a href="https://t.me/oleg_smirniy" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">
                                t.me/oleg_smirniy
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[var(--color-accent-glow)] w-6 text-center">✉</span>
                            <a href="mailto:twinsminsk@yandex.ru" className="hover:text-[var(--color-text-primary)] transition-colors">
                                twinsminsk@yandex.ru
                            </a>
                        </div>
                        <div className="flex items-center gap-3 mt-4 text-[var(--color-text-secondary)] opacity-50">
                            <span className="text-[var(--color-terminal-green)] w-6 text-center">●</span>
                            Available for new challenges
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
