# Section Headers: Typography Standardization

**Date:** 2026-03-04
**Components:** 
- `winsk-by/src/components/sections/ServicesSection.tsx`
- `winsk-by/src/components/sections/ProjectsGrid.tsx`
- `winsk-by/src/components/sections/LiveDemos.tsx`
- `winsk-by/src/components/sections/ContactSection.tsx`

## What changed
- Standardized the component headers layout across the entire landing page to follow a single design system element.
- The new format wraps the title in `<div className="flex items-center gap-4 mb-12 w-full overflow-hidden">`.
- It displays an inline horizontal line stretching to the container bounds using `bg-gradient-to-r`.
- All titles use typography: `text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap`.
- **Translations applied:**
  - `System.Capabilities_` -> `Система.Возможности_` (Emerald green).
  - `Архитектурные Решения` -> `Система.Решения_` (Emerald green).
  - `Связь и Сотрудничество` -> `Система.Связь_` (Emerald green).
  - `System.Live_Demos_` -> `Система.Демо_` (Cyan blue retained per requirements).

## Why
- Enhances design consistency. The premium cyberpunk aesthetic demands unified visual tokens (horizontal glows, `>` prefixes, and mono font headers). Moving to Russian text while preserving the system code stylistic (`Система.*_`) fits the technical premium position perfectly.

## Verification
- Syntax checked (`next dev` / `npx tsc --noEmit` exit 0).
- Visibly preserves the responsive grid behaviors and color modes (dark mode forced / explicit).
