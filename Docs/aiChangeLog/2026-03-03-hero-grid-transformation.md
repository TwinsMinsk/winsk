# 2026-03-03 — Hero Section Grid Transformation

## Что изменено

### Новые файлы
- `winsk-by/src/components/home/ContactButtons.tsx` — клиентский компонент кнопок Telegram / WhatsApp
- `winsk-by/public/images/neural-overlay.png` — AI-сеть нейронов (cyan/magenta), overlay для фото

### Изменённые файлы
- `winsk-by/src/components/home/Hero.tsx` — полная трансформация структуры
- `winsk-by/src/components/animations/TerminalDecode.tsx` — новые строки и вторая фаза анимации

---

## Детали изменений

### Hero.tsx — Асимметричный Grid
**До:** центрированная однострочная раскладка (`flex items-center justify-center`).  
**После:** CSS Grid 5 колонок (3:2) с `md:grid-cols-5`:
- Левая колонка (col-span-3 ≈ 60%) — TerminalDecode, описание, кнопки контактов
- Правая колонка (col-span-2 ≈ 40%) — стеклянная карточка с фото + neural overlay

`GooeyGradientBackground` сохранён как корневой контейнер. z-index слои:
- Gooey blobs: z-0 (absolute)
- Content layer (из компонента): z-10
- Grid контейнер: z-20

### TerminalDecode.tsx — Новая двуфазная анимация
**До:** одна строка `> Location: Minsk` → скрамбл → `Status: Winsk`  
**После:** двухфазная последовательность:
1. `> Brand.ID: Minsk` → глитч-бары (1.2s) → скрамбл → **`> Brand.ID: Winsk`** (glow + scanline)
2. После 600ms задержки — печать второй строки **`> Status: orchestrating AI_`**

Хуки, тайминги и шрифт JetBrains Mono — без изменений.

### ContactButtons.tsx — Новый компонент
```
'use client' — framer-motion whileHover требует клиента
Telegram → lucide-react <Send /> иконка, emerald-border
WhatsApp → кастомный SVG path (отсутствует в lucide-react, v0.575.0)
whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 180, 0.4)" }}
pointer-events-auto — явно, кнопки кликабельны
```

---

## Математика Grid

```
Контейнер: max-w-7xl (1280px) | px-6 (24px отступы)
Рабочая ширина: 1280 - 48 = 1232px
gap-12 = 48px
col-span-3: (1232 - 48) / 5 * 3 = ~710px
col-span-2: (1232 - 48) / 5 * 2 = ~474px
```

---

## Верификация

| Проверка | Результат |
|---|---|
| `npx tsc --noEmit` | ✅ 0 ошибок |
| Visual: Grid 3:2 | ✅ Верифицировано скриншотом |
| GooeyGradient сохранён | ✅ Работает |
| Глитч Minsk → Winsk | ✅ Работает |
| Кнопки кликабельны | ✅ pointer-events-auto |
| neural-overlay на фото | ✅ mix-blend-screen opacity 0.4 |
| TypeScript strict | ✅ Чисто |
| Мобайл | ⚠️ Карточка hidden md:hidden на мобиле (сознательно — не хватает viewport) |

---

## Отклонения от PRD

**WhatsApp иконка:** lucide-react v0.575.0 не содержит `WhatsApp`. Использован кастомный SVG-путь по официальному брендбуку WhatsApp. Поведение — идентично ожидаемому.

**rotate-3 на карточке:** реализован через inline `style={{ transform: 'rotate(3deg)' }}` вместо Tailwind-класса `rotate-3`, чтобы избежать конфликта с Tailwind v4 token-системой.
