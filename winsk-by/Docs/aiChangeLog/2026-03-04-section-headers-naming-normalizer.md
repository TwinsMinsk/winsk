# Sections Header Name Fixes

**Date:** 2026-03-04
**Components:** 
- `winsk-by/src/components/about/BentoSkills.tsx`
- `winsk-by/src/components/sections/ServicesSection.tsx`
- `winsk-by/src/components/sections/ProjectsGrid.tsx`
- `winsk-by/src/components/sections/LiveDemos.tsx`
- `winsk-by/src/components/sections/ContactSection.tsx`

## What changed
- Reverted the rigid `Система.*_` scheme to normal readable titles suited for each semantic block.
- Implemented and generalized the "System.Capabilities_" styling (the `>` symbol, matching `text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary,white)] whitespace-nowrap` text style, and a gradient line flexed horizontally) across the following blocks:
  - `BentoSkills.tsx` -> title adapted to `> Профиль_` (emerald green).
  - `ServicesSection.tsx` -> title adapted to `> Услуги_` (emerald green).
  - `ProjectsGrid.tsx` -> title adapted to `> Избранные Кейсы_` (emerald green).
  - `LiveDemos.tsx` -> title adapted to `> Живые Демо_` (cyan blue, per the previous instruction).
- **ContactSection**: Reverted `ContactSection.tsx` completely back to its original layout style without the horizontal line and with its native `// Связь и Сотрудничество` layout intact.

## Why
- Enhancing readability using native terminology ("Услуги", "Профиль") compared to rigid tech terminology gives a better business and sales funnel perspective, while strictly preserving the overarching Cyberpunk/System layout aesthetics for visually unified typography. Contact block requires more space on mobile without horizontal interruption right before the form grid, which justifies the rollback.

## Verification
- Syntax checked (`npx tsc --noEmit` exit 0).
- Run server and verified rendering context updates smoothly.
