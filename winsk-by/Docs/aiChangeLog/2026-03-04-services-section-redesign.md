# Services Section Redesign

**Date:** 2026-03-04
**Component:** `winsk-by/src/components/sections/ServicesSection.tsx`

## What changed
- Completely rewrote the `ServicesSection` component from a grid of cards to a "Vertical Tabs" pattern.
- Updated the data source in `servicesData` array to feature four primary services with short and long descriptions, feature lists, tags, and specific images.
- Implemented state for tracking active tab (`activeTab`), driving the UI rendering.
- Re-architected into a 12-column grid: 4 cols for tab selection, 8 for content.
- Restyled tabs with active vs strictly inactive UI (e.g., active tabs have bright white text, `bg-white/10`, and an emerald left border).
- Switched the content pane to use Framer Motion's `AnimatePresence` + `motion.div` for a fade-slide effect between active tabs.
- Used "Premium Cyberpunk" and "Forced Dark Mode" design with "Glassmorphism" inside the content pane.
- Responsive handling: allowed horizontal scrolling with hidden scrollbars for tabs on mobile, transitioning to a vertical flex-list with visible borders on desktop.
- Dropped the previous grid rendering approach completely.

## Why
- The old grid layout did not accommodate enough specific details per service.
- Vertical tabs let users quickly digest the summary on the left and dig into detailed features on the right upon interaction.

## Verification
- Status: SUCCESS
- Run `npx tsc --noEmit`. No TypeScript errors (exit code 0).
- Structure is visually matched and code is properly aligned with Framer Motion and Lucide standard usage.
