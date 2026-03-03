import { NextResponse } from 'next/server';
import { contactSchema } from '@/types/contact';
import { z } from 'zod';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Маппинг из FormData в объект для валидации
        const body = {
            name: formData.get('name'),
            contact: formData.get('contact'),
            type: formData.get('type'),
            budget: formData.get('budget'),
            timeline: formData.get('timeline'),
            source: formData.get('source'),
            message: formData.get('message'),
        };

        const data = contactSchema.parse(body);
        const file = formData.get('file') as File | null;

        const typeLabels = {
            hire: '👔 Найм',
            project: '🚀 Проект',
            consult: '💡 Консультация',
        };

        const escapeHtml = (text: string) => {
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        };

        const text = `
<b>📩 Новая заявка с Winsk.by</b>
━━━━━━━━━━━━━━━━━━━━━
<b>Тип:</b> ${typeLabels[data.type]}
<b>Имя:</b> ${escapeHtml(data.name)}
<b>Контакт:</b> ${escapeHtml(data.contact)}
${data.budget ? `<b>Бюджет:</b> ${escapeHtml(data.budget)}\n` : ''}${data.timeline ? `<b>Сроки:</b> ${escapeHtml(data.timeline)}\n` : ''}${data.source ? `<b>Откуда узнали:</b> ${escapeHtml(data.source)}\n` : ''}<b>Сообщение:</b>
${escapeHtml(data.message)}
        `.trim();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.warn('Telegram credentials are not configured in .env.local');
            return NextResponse.json({ success: true, warning: 'TG not configured' });
        }

        let response;

        if (file && file.size > 0) {
            // Если есть файл, используем sendDocument
            const tgFormData = new FormData();
            tgFormData.append('chat_id', chatId);
            tgFormData.append('document', file);
            tgFormData.append('caption', text);
            tgFormData.append('parse_mode', 'HTML');

            response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendDocument`,
                {
                    method: 'POST',
                    body: tgFormData,
                }
            );
        } else {
            // Обычное текстовое сообщение
            response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text,
                        parse_mode: 'HTML',
                    }),
                }
            );
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Telegram API Error', errorText);
            return NextResponse.json({ error: 'Failed to send to Telegram' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        if (error && error.name === 'ZodError') {
            return NextResponse.json({ error: 'Validation failed', details: error.errors || error.issues }, { status: 400 });
        }
        console.error('Internal API Error:', error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
