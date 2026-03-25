# Интеграция Инфографики в кейс AI Ecosystem

**Дата:** 2026-03-18
**Изменены файлы:**
- `src/content/projects/ai-ecosystem.mdx`
- `public/images/projects/ai-ecosystem/module1-gui.jpg` (новое)
- `public/images/projects/ai-ecosystem/module1-code-structure.jpg` (новое)

## Что изменилось:
- Загруженные скриншоты переименованы в `module1-gui.jpg` и `module1-code-structure.jpg`.
- В MDX файл добавлены две инфографики (Figure 1 и Figure 2) для визуализации "Модуля 1".
- Изображения обернуты в кастомные `div` контейнеры с классами Tailwind (`border-white/10`, `backdrop-blur-md`, `bg-white/5`) для достижения премиального визуального эффекта (Glassmorphism), соответствующего общему стилю Winsk.by.

## Почему:
- Визуальное подкрепление текстового описания для улучшения UX и демонстрации реального UI и архитектуры (Separation of Concerns).

## Результат проверки (Verification):
- `npm run build` — успешно выполнена сборка, MDX синтаксис с внедренными JSX/Tailwind-компонентами распарсен без ошибок.
