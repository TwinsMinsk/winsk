# Portfolio Renaming and Hero Label Update

**Date:** 2026-03-04
**Components:**
- `winsk-by/src/components/sections/ProjectsGrid.tsx`
- `winsk-by/src/components/home/Hero.tsx`

## What changed
- **ProjectsGrid**: Renamed the section header from `Избранные Кейсы_` to `Портфолио_` and updated the supporting text from "Избранные кейсы" to "Избранные работы" for better stylistic flow.
- **Hero**: Changed the text label on the photo card from `// winsk.by` to `// Oleg Smirnov` to personalize the landing experience.

## Why
- "Портфолио" is a more conventional and recognizable term for the work gallery section.
- Replacing the domain name with the user's real name on the hero photo card adds a personal touch and strengthens the personal brand identity of the landing page.

## Verification
- Run `npx tsc --noEmit`: Exit code 0, no TypeScript errors.
- Visual check: Local dev server confirms the text updates in both blocks.
