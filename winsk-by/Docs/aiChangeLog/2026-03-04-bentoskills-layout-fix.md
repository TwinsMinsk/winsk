# BentoSkills Layout Fix and Text Update

**Date:** 2026-03-04
**Components:** 
- `winsk-by/src/components/about/BentoSkills.tsx`
- `winsk-by/src/components/sections/LiveDemos.tsx`

## What changed
- **BentoSkills Layout Fix:** Replaced `px-6 md:px-12 max-w-[var(--container-max)]` with `px-6 max-w-7xl` in the main `<section>` wrapper of `BentoSkills.tsx`. 
- **Text Updates:** 
  - Changed `> Живые Демо_` to `> Демо_` in the `LiveDemos.tsx` header.

## Why
- `BentoSkills` was using a distinct max-width CSS variable and inner offset arrays (`md:px-12`) that constrained the grid horizontally, causing a visual mismatch (narrower) against other generic sections like `ServicesSection` or `ProjectsGrid`, which use a standard flat `max-w-7xl px-6`. Aligning them ensures a mathematically perfect vertical flow line for the UI across scroll breakpoints.
- Updating to "Демо" enhances scanability. The simplicity pairs well with "Профиль", "Услуги" and "Кейсы".

## Verification
- Run `npm run dev` and `npx tsc --noEmit`. Build passes without errors.
- Visual validation: Block borders now perfectly map to `ServicesSection`.
