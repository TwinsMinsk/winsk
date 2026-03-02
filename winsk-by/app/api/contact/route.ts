import { NextResponse } from 'next/server';
import { contactSchema } from '@/types/contact';
import { z } from 'zod';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = contactSchema.parse(body);

        const typeLabels = {
            hire: '👔 Найм',
            project: '🚀 Проект',
            consult: '💡 Консультация',
        };

        const text = `
📩 *Новая заявка с Winsk.by*
━━━━━━━━━━━━━━━━━━━━━
*Тип:* ${typeLabels[data.type]}
*Имя:* ${data.name}
*Контакт:* ${data.contact}
*Сообщение:*
${data.message}
    `.trim();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.warn('Telegram credentials are not configured in .env.local');
            // Возвращаем успешный ответ даже если TG не настроен, чтобы не блокировать UI на этапе MVP
            return NextResponse.json({ success: true, warning: 'TG not configured' });
        }

        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                    parse_mode: 'Markdown',
                }),
            }
        );

        if (!response.ok) {
            console.error('Telegram API Error', await response.text());
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
