---
name: mdx-portfolio-integration
description: Строгий алгоритм по созданию и парсингу MDX-файлов для кейсов портфолио.
---

# Работа с MDX Контентом

## Use this skill when
- Нужно добавить новый проект из документации (Tier-1, Tier-2, Tier-3) на сайт.
- Разрабатывается система фильтрации или маршрутизации для страниц кейсов `/case/[slug]`.

## Do not use this skill when
- Задача касается статичных страниц (About, Contact).

## Instructions
1. Все данные кейсов должны храниться в папке `/content/cases/` в формате `.mdx`.
2. В начале каждого файла ОБЯЗАТЕЛЬНО используй YAML Frontmatter с полями: `title`, `tier`, `techStack` (массив), `priority`.
3. Для парсинга на стороне сервера (Next.js 15) используй библиотеку `next-mdx-remote/rsc`.
4. Встраивай стилизацию Tailwind Typography (`prose prose-invert`) для красивого отображения таблиц и схем архитектуры внутри контента.