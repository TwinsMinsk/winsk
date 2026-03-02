# Init Log — Winsk.by Project Foundation

**Дата:** 2026-02-26  
**Фаза:** 1 (MVP Foundation)  
**Агент:** Gemini 2.5 Pro  
**Статус:** ✅ Завершено

---

## Что было сделано

### Шаг 1: Установка официальных скиллов
Скачаны из репозитория `sickn33/antigravity-awesome-skills`:
- `d:\Portfolio\.agent\skills\nextjs-best-practices\SKILL.md` — Next.js App Router patterns (Server Components, data fetching, routing, caching)
- `d:\Portfolio\.agent\skills\tailwind-patterns\SKILL.md` — Tailwind CSS v4 principles (CSS-first `@theme`, Oxide engine, OKLCH colors, container queries)

### Шаг 2: Инициализация проекта
- Команда: `npx create-next-app@latest winsk-by --typescript --tailwind --app --eslint`
- Директория: `d:\Portfolio\winsk-by\`
- Стек: **Next.js 15 + TypeScript + Tailwind CSS v4 + App Router**
- **Причина подпапки:** npm не позволяет имена пакетов с заглавными буквами, поэтому проект создан в `winsk-by/` внутри `Portfolio/`

### Шаг 3: Установленные зависимости
```json
{
  "dependencies": {
    "framer-motion": "latest",
    "lucide-react": "latest",
    "next-mdx-remote": "latest",
    "sharp": "latest",
    "zod": "latest",
    "react-hook-form": "latest",
    "@vercel/analytics": "latest"
  }
}
```

### Шаг 4: Настройка фундамента
- **`app/globals.css`** — Forced Dark Mode токены через `@theme {}`, CSS custom properties, CSS-анимации (`blink`, `scanline`, `glitch-bar-1/2`), утилиты (`.glass-card`, `.glow-text`, `.terminal-prefix`, `.cursor-blink`)
- **`app/layout.tsx`** — Root layout с `Inter` + `JetBrains Mono` через `next/font/google`, полная SEO metadata
- **`app/page.tsx`** — Чистая страница (boilerplate удалён), временный terminal-style placeholder

---

## Архитектурные решения

| Решение | Обоснование |
|---------|-------------|
| Проект в `winsk-by/` подпапке | npm ограничение: нет заглавных букв в имени |
| Forced Dark Mode через `color-scheme: dark` | Убирает белый flash при загрузке, нет JS для тем |
| `@theme {}` вместо `tailwind.config.js` | Tailwind v4 CSS-first подход, токены доступны как CSS vars |
| Без `next-themes` | Forced Dark Mode — переключатель не нужен |
| `JetBrains_Mono` из Google Fonts | Terminal Decode анимация требует моноширинный шрифт |

---

## Следующие шаги (Фаза 1 продолжение)

- [ ] Создать структуру папок (`components/`, `data/`, `hooks/`, `lib/`, `types/`)
- [ ] Реализовать `useScrambleText` + `useTypewriter` хуки
- [ ] Собрать компонент `TerminalDecode` (Hero анимация Minsk → Winsk)
- [ ] Создать Header, Footer, Section, Container компоненты
- [ ] Заполнить `src/data/projects.ts` метаданными кейсов
