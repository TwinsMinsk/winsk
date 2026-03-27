# 📟 Winsk.by: Terminal Decode Portfolio

> **Cyberpunk-aesthetic portfolio for a Full-Stack & AI Engineer.**
>
> `> Location: Minsk` → *glitch* → `> Status: Winsk_`

---

## ⚡ Overview

**Winsk.by** — это высокотехнологичное портфолио, вдохновленное эстетикой терминала и киберпанка. Проект разработан для демонстрации компетенций в Full-Stack разработке и внедрении AI-решений, с акцентом на производительность, уникальные анимации и современный стек технологий.

### Core Pillars
- 🌑 **Forced Dark Mode**: Глубокий синий `#0A0E1A` как стандарт.
- ⚡ **Terminal Decode**: Кастомные хуки для эффекта "разгадки" текста и глитч-анимаций.
- 🎯 **Performance Focus**: Целевые показатели Lighthouse ≥ 90 по всем фронтам.
- 🤖 **AI Integration**: Кейсы с фокусом на интеграцию больших языковых моделей и автоматизацию.

---

## 🛠 Tech Stack

Проект построен на **Strict Tech Stack**, исключающем компромиссы в производительности и типизации.

| Layer | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | `^16` |
| **Runtime** | [React](https://react.dev/) (RSC) | `^19` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `^4` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | `^12` |
| **Content** | MDX (next-mdx-remote) | `^6` |

---

## 📂 Architecture

Проект следует модульной архитектуре с четким разделением ответственности.

```bash
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/
│   ├── layout/       # Глобальные обертки, Header, Footer
│   ├── ui/           # Атомарные компоненты (Buttons, Cards)
│   ├── sections/     # Секции страниц (Hero, ProjectsGrid)
│   └── animations/   # TerminalDecode, GlitchText, ScrollReveal
├── content/          # *.mdx файлы с контентом кейсов
├── data/             # Статические данные и метаданные (typed)
├── hooks/            # Кастомные анимационные хуки (useScrambleText)
└── lib/              # Утилиты, Fonts, API-клиенты
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Installation
1.  Склонируйте репозиторий:
    ```bash
    git clone https://github.com/your-username/winsk-by.git
    cd winsk-by
    ```
2.  Установите зависимости:
    ```bash
    npm install
    ```
3.  Запустите сервер для разработки:
    ```bash
    npm run dev
    ```

### Env Variables
Создайте `.env.local` для интеграций (например, Telegram Bot API):
```env
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_id
```

---

## 📊 Performance & SEO

- **Next/Image**: Автоматическая оптимизация (avif/webp).
- **SEO**: Уникальные метаданные для каждой страницы + JSON-LD (Person/CreativeWork).
- **Weights**: Общий объем страницы (без видео) ≤ 2 MB.

---

## 📜 License

Этот проект является интеллектуальной собственностью. Использование кода для референсов приветствуется, но полное копирование дизайна не рекомендуется.

---

`> [System]: All systems nominal. Happy hacking._`
