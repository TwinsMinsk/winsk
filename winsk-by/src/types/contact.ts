import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }).max(100),
    contact: z.string().min(3, { message: 'Укажите email или Telegram' }).max(200),
    type: z.enum(['hire', 'project', 'consult'], { message: 'Выберите тип запроса' }),
    message: z.string().min(10, { message: 'Опишите задачу подробнее (минимум 10 символов)' }).max(2000),
    file: z.any().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
