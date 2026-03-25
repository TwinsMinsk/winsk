# 2026-03-24 — AI Ecosystem Page Audit Improvements

## Что изменено

### Новые компоненты
- **`src/components/case/ModuleHeader.tsx`** — визуальный заголовок модуля с крупным моноширинным номером, title и tech-бейджами. Принимает `id` для якоря.
- **`src/components/case/ModuleNav.tsx`** — sticky-навигатор по модулям. Client island. IntersectionObserver отслеживает активный модуль, scroll-to-anchor по клику. Рендерится только при `scrollY > 400px`.

### Изменены файлы
- **`src/components/case/mdx-components.tsx`** — зарегистрирован `ModuleHeader`.
- **`app/case/[slug]/page.tsx`** — добавлен `MODULE_NAV_CONFIG` (конфиг навигаторов по slug) и рендер `<ModuleNav>` как client island для `ai-ecosystem`.
- **`src/data/projects.ts`** — удалён `Anthropic Claude` (не упоминался в кейсе); `Supabase` → `PostgreSQL`; метрика `services: 6` → `modules: 5`.
- **`src/content/projects/ai-ecosystem.mdx`** — полный рефакторинг:
  - `### Модуль N: ...` заменены на `<ModuleHeader id="module-N" number="0N" ...>`
  - Единый стиль caption для всех 5 изображений: `fig.N` + emerald prefix + uppercase mono
  - Починен broken `group-hover` на изображении Модуля 4 (добавлена обёртка `group`)
  - Раздел «Структура продукта» Модуля 5 (wall of text) → `<SolutionsTable>` с 4 строками

## Отклонений от PRD/TechSpec нет

## Верификация
- `npx tsc --noEmit` → exit code 0, ошибок нет
- Браузерная проверка: sticky nav работает (5 кнопок, active state), ModuleHeader карточки отрисованы, fig.N captions унифицированы, Module 5 SolutionsTable отображается корректно
