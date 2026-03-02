'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/types/contact';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            type: 'project',
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setStatus('idle');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('API Error');
            setStatus('success');
            reset();
        } catch (e) {
            console.error('Error submitting form:', e);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-12"
                    >
                        <div className="text-4xl mb-4 font-mono text-[var(--color-terminal-green)]">{'>'} 200 OK</div>
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Заявка отправлена</h3>
                        <p className="text-[var(--color-text-secondary)]">Я свяжусь с вами в ближайшее время.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-8 px-6 py-2 border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] transition-colors rounded-lg font-mono text-sm"
                        >
                            Отправить еще
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 relative z-10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm text-[var(--color-text-secondary)] font-mono">1. Ваше имя</label>
                                <input
                                    {...register('name')}
                                    disabled={isSubmitting}
                                    placeholder="Иван Иванов"
                                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                />
                                {errors.name && <p className="text-red-400 text-xs font-mono mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm text-[var(--color-text-secondary)] font-mono">2. Контакт (Telegram / Email)</label>
                                <input
                                    {...register('contact')}
                                    disabled={isSubmitting}
                                    placeholder="@username или me@example.com"
                                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                />
                                {errors.contact && <p className="text-red-400 text-xs font-mono mt-1">{errors.contact.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm text-[var(--color-text-secondary)] font-mono">3. Тип запроса</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['project', 'consult', 'hire'].map((type) => (
                                    <label key={type} className="flex-1">
                                        <input
                                            type="radio"
                                            value={type}
                                            {...register('type')}
                                            className="sr-only peer"
                                            disabled={isSubmitting}
                                        />
                                        <div className="text-center px-2 py-3 border border-[var(--color-border)] rounded-lg cursor-pointer peer-checked:border-[var(--color-accent)] peer-checked:bg-[var(--color-accent)]/10 peer-checked:text-[var(--color-accent-glow)] transition-all font-mono text-xs md:text-sm text-[var(--color-text-secondary)]">
                                            {type === 'project' ? 'Разработка' : type === 'consult' ? 'Консалтинг' : 'К работе'}
                                        </div>
                                    </label>
                                ))}
                            </div>
                            {errors.type && <p className="text-red-400 text-xs font-mono mt-1">{errors.type.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm text-[var(--color-text-secondary)] font-mono">4. Опишите задачу</label>
                            <textarea
                                {...register('message')}
                                disabled={isSubmitting}
                                rows={4}
                                placeholder="Чем я могу помочь?"
                                className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                            />
                            {errors.message && <p className="text-red-400 text-xs font-mono mt-1">{errors.message.message}</p>}
                        </div>

                        {status === 'error' && (
                            <div className="p-3 border border-red-500/50 bg-red-500/10 text-red-400 rounded-lg text-sm font-mono text-center">
                                Ошибка при отправке. Пожалуйста, напишите мне напрямую в Telegram.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-bold py-4 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center font-mono">
                                {isSubmitting ? 'Sending...' : 'Инициировать рукопожатие →'}
                            </span>
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
