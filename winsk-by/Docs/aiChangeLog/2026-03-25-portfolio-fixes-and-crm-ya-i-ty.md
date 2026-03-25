# Changelog: 2026-03-25 - Portfolio UI Fixes and CRM Y&T Case Updates

## What Changed
1. **Hydration Error Fix**: Resolved an SSR vs CSR hydration mismatch in `ProjectsGrid.tsx` by eliminating in-place array sorting (`projects.sort()`) and applying sorting to a copy of the array. Also stabilized tag sorting in `src/data/projects.ts`.
2. **Removed Portfolio Filter**: Simplified the portfolio layout on the home page by removing the filtering system. The grid now exclusively uses the Bento UI tier-based layout (Tier 2, Tier 1, Tier 3).
3. **Sequential Case Navigation**: Updated the "Next / Previous Project" links at the bottom of `app/case/[slug]/page.tsx` to match the exact visual display order from the home page.
4. **CRM Я и Ты Content Updates**: Added the architecture infographic (`system-i-and-ty.jpeg`) and system interface screenshot (`CRM-screen.jpg`) to `crm-ya-i-ty.mdx` using the standard HTML layout for consistency with other high-tier projects.
5. **Screenshots Component Fix**: Updated `Screenshots.tsx` to correctly render images using `next/image` rather than showing hardcoded placeholders.

## Why
- The hydration error caused the React tree to re-render entirely on the client, degrading performance.
- The filtering system was deemed unnecessary, streamlining the UI and keeping focus on the prioritized tier layout.
- The next/prev project sequence was incorrectly following the raw data structure instead of the visual layout order, causing a disjointed UX.
- The CRM project page lacked visual proof of work (architecture diagram and interface screenshot), which are critical for demonstrating technical depth.

## Deviations from PRD/TechSpec
None. All changes adhere to the established UI patterns and architecture constraints.

## Verification
- `npx tsc --noEmit` passed.
- Visual inspection confirmed elements are rendering correctly without hydration warnings.
